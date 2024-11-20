import { App, arrayBufferToBase64, Component, MarkdownRenderer, TFile } from 'obsidian';

const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'bmp'];

export default class HtmlRenderer {
  private app: App;
  private component: Component;

  constructor (app: App, component: Component) {
    this.app = app;
    this.component = component;
  }

  /**
   * Converts an image path to the image in base 64.
   *
   * Example of image path: app://80af27eb9c79555ea45e4c97f31cb3fa7726/C:/Users/kalvn/workspace/notes/dev/leon.png?1727120544660
   * @param imagePath The image path as returned by the MarkdownRenderer.
   * @returns The base 64 representation of the image.
   */
  private async convertImageToBase64String (imagePath: string): Promise<string> {
    const vault = this.app.vault;
    const images = vault.getFiles().filter(file => IMAGE_EXTENSIONS.includes(file.extension));

    const fileNameWithTimestamp = imagePath.split('/').at(-1);
    const fileName = fileNameWithTimestamp?.split('?').at(0);
    const timestamp = fileNameWithTimestamp?.split('?').at(1);

    let file: TFile | undefined;

    for (const image of images) {
      if (fileName !== undefined && timestamp !== undefined && image.name === decodeURIComponent(fileName) && image.stat.mtime === parseInt(timestamp)) {
        file = image;
        break;
      }
    }

    if (file === undefined) {
      console.error(`Could not find image [${imagePath}]. Skipping.`);
      return '';
    }

    const buffer = await vault.adapter.readBinary(decodeURIComponent(file.path));
    return `data:image/png;base64,${arrayBufferToBase64(buffer)}`;
  }

  async render (markdownContent: string): Promise<string> {
    const el = document.body.createDiv();
    await MarkdownRenderer.render(this.app, markdownContent, el, '.', this.component);

    el.querySelectorAll('img').forEach(async (img) => {
      const src = img.src;
      if (src !== null && src !== undefined) {
        img.src = await this.convertImageToBase64String(src);
      }
    });

    /**
     * Wait some time to let the browser finish the painting flow.
     * Explanation: https://macarthur.me/posts/when-dom-updates-appear-to-be-asynchronous/
     */
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      }, 100);
    });

    return el.innerHTML;
  }
}
