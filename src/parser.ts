import { marked, TokenizerObject, Tokens, type Token } from 'marked';
import { arrayBufferToBase64, TFile, Vault } from 'obsidian';

const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'bmp'];

const tokenizer: TokenizerObject = {
  link (src: string): Tokens.Link | Tokens.Image | undefined {
    const match = src.match(/!\[\[([^[]*)\]\]/);

    if (match) {
      return {
        type: 'image',
        raw: match[0],
        text: '',
        href: match[1].trim(),
        title: ''
      };
    }

    // @ts-expect-error
    return false;
  }
};

async function walkTokens (token: Token) {
  if (token.type === 'image') {
    // @ts-expect-error src does not exist on token
    token.src = await imageTokenToBase64Src(token);
  }
}

const renderer = {
  image (token: Tokens.Image & { src?: string }): string {
    return `<img src="${token.src ?? token.href}" alt="${token.text}" />`;
  }
};

marked.use({
  walkTokens,
  renderer,
  tokenizer,
  async: true
});

function findImageFromPath (imagePath: string): TFile | undefined {
  const vault: Vault = this.app.vault;
  const images = vault.getFiles().filter(file => IMAGE_EXTENSIONS.includes(file.extension));

  for (const image of images) {
    if (image.path === imagePath || image.name === imagePath) {
      return image;
    }
  }
}

/**
 * Converts a Marked image token to the corresponding image binary formatted as base 64.
 * @param imageToken A Marked image token.
 * @returns The image binary as base 64.
 */
async function imageTokenToBase64Src (imageToken: Tokens.Image): Promise<string | undefined> {
  const vault: Vault = this.app.vault;
  const decodedHref = decodeURIComponent(imageToken.href);

  // console.log(`Parsing image with href [${imageToken.href}].`);

  const file = findImageFromPath(decodedHref);

  if (file === undefined) {
    console.error(`Could not find image [${decodedHref}]. Skipping.`);
    return;
  }

  const buffer = await vault.adapter.readBinary(decodeURIComponent(file.path));
  return `data:image/png;base64,${arrayBufferToBase64(buffer)}`;
}

/**
 * Transforms a markdown string to an HTML string.
 *
 * Images are transformed in base 64 strings.
 * @param markdownData Markdown string.
 * @returns HTML string
 */
export async function parse (markdownData: string): Promise<string> {
  return await marked.parse(markdownData);
}
