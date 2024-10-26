/* eslint-disable no-new */
import { Editor, MarkdownView, Notice, Plugin } from 'obsidian';
import { parse } from './parser';
import css from './css';

const customCss = `
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}`;

export default class ExportToHtmlPlugin extends Plugin {
  async onload () {
    const { vault } = this.app;

    this.addCommand({
      id: 'copy-to-clipboard-as-html',
      name: 'Copy to clipboard as HTML',
      editorCallback: async (editor: Editor, view: MarkdownView) => {
        const markdownData = await parse(view.data, vault);

        const textBlob = new Blob([markdownData], { type: 'text/plain' });
        const htmlBlob = new Blob([markdownData], { type: 'text/html' });

        const clipboardItem = new ClipboardItem({
          [textBlob.type]: textBlob,
          [htmlBlob.type]: htmlBlob,
        });

        await navigator.clipboard.write([clipboardItem]);
        new Notice('HTML content copied to clipboard!');
      }
    });

    this.addCommand({
      id: 'download-as-html',
      name: 'Download as an HTML file',
      editorCallback: async (editor: Editor, view: MarkdownView) => {
        const markdownData = await parse(view.data, vault);

        const wrappedHtml = `<!doctype html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${view.file?.name} | Exported</title>
    <style>
      ${css}
      ${customCss}
    </style>
  </head>
  <body class="markdown-body">
    ${markdownData}
  </body>
</html>`;

        const blob = new Blob(
          [wrappedHtml],
          { type: 'text/html' }
        );

        downloadBlob(blob, `${view.file?.basename ?? 'markdown'}.html`);
      }
    });
  }
}

function downloadBlob (blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');

  a.href = url;
  a.download = filename || 'download';

  const clickHandler = () => {
    setTimeout(() => {
      URL.revokeObjectURL(url);
      this.removeEventListener('click', clickHandler);
    }, 150);
  };

  a.addEventListener('click', clickHandler, false);

  a.click();
}
