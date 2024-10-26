# Obsidian Export to HTML
This [Obsidian](https://obsidian.md) plugin allows you to export the content of a note as HTML, either to the clipboard or to a new HTML file.

During the export, images will be copied over in base 64 format.

This plugin is a work in progress but it already works great in most cases. Some edge cases with inline image exports will be improved.

## Installation
Follow the steps below to install **Obsidian Export to HTML**.

1. Search for *Export to HTML* in Obsidian's community plugins browser
2. Enable the plugin in your Obsidian settings (find *Export to HTML* under *Community plugins*).
3. (Optional) If you plan to use it often, in the *Hotkeys* settings, search for *Export to HTML* and bind actions to keyboard shortcuts.

## How to use
Open the command palette (press <key>CTRL+P</key> if you use a keyboard) and type *Export to HTML*.

- Select *Export to HTML: Copy to clipboard as HTML* to copy your note as HTML in your clipboard. You can then paste it in an email or in a Word document and the style will be kept.
- Select *Export to HTML: Download as HTML* to download your note as an HTML file.

## Manual installation
- Download [the latest release](https://github.com/kalvn/obsidian-export-to-html/releases) and unzip it.
- Copy over `main.js`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/export-to-html/`.

## How to contribute
- Clone this repo.
- Make sure your NodeJS is at least v16 (`node --version`).
- `npm i` or `yarn` to install dependencies.
- `npm run dev` to start compilation in watch mode.

## External packages used
- Starter template: [Obsidian sample plugin](https://github.com/obsidianmd/obsidian-sample-plugin)
- Markdown to HTML: [Marked](https://github.com/markedjs/marked)
- CSS: [Github Markdown CSS](https://github.com/sindresorhus/github-markdown-css)
