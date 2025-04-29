/* eslint-disable no-new */
import { Editor, MarkdownView, Notice, Plugin } from 'obsidian';
import css from './css';
import { downloadBlob } from './utils';
import HtmlRenderer from './HtmlRenderer';

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
    this.addCommand({
      id: 'copy-to-clipboard-as-html',
      name: 'Copy to clipboard as HTML',
      editorCallback: async (editor: Editor, view: MarkdownView) => {
        const htmlRenderer = new HtmlRenderer(this.app, this);
        const contentAsHtml = await htmlRenderer.render(view.data);

        const textBlob = new Blob([contentAsHtml], { type: 'text/plain' });
        const htmlBlob = new Blob([contentAsHtml], { type: 'text/html' });

        const clipboardItem = new ClipboardItem({
          [textBlob.type]: textBlob,
          [htmlBlob.type]: htmlBlob,
        });

        try {
          await window.navigator.clipboard.write([clipboardItem]);
        } catch (err) {
          new Notice(`Content could not be copied to clipboard. [${err.message}].`);
          return;
        }

        new Notice('HTML content copied to clipboard!');
      }
    });

    this.addCommand({
      id: 'download-as-html',
      name: 'Download as an HTML file',
      editorCallback: async (editor: Editor, view: MarkdownView) => {
        const htmlRenderer = new HtmlRenderer(this.app, this);
        const contentAsHtml = await htmlRenderer.render(view.data);

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
    ${contentAsHtml}
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
