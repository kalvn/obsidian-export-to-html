export default `.markdown-body {
  --base-size-4: 0.25rem;
  --base-size-8: 0.5rem;
  --base-size-16: 1rem;
  --base-text-weight-normal: 400;
  --base-text-weight-medium: 500;
  --base-text-weight-semibold: 600;
  --fontStack-monospace: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
}

@media (prefers-color-scheme: dark) {
  .markdown-body,
  [data-theme="dark"] {
    /*dark*/
    color-scheme: dark;
    --focus-outlineColor: #1f6feb;
    --fgColor-default: #e6edf3;
    --fgColor-muted: #8d96a0;
    --fgColor-accent: #4493f8;
    --fgColor-success: #3fb950;
    --fgColor-attention: #d29922;
    --fgColor-danger: #f85149;
    --fgColor-done: #ab7df8;
    --bgColor-default: #0d1117;
    --bgColor-muted: #161b22;
    --bgColor-neutral-muted: #6e768166;
    --bgColor-attention-muted: #bb800926;
    --borderColor-default: #30363d;
    --borderColor-muted: #30363db3;
    --borderColor-neutral-muted: #6e768166;
    --borderColor-accent-emphasis: #1f6feb;
    --borderColor-success-emphasis: #238636;
    --borderColor-attention-emphasis: #9e6a03;
    --borderColor-danger-emphasis: #da3633;
    --borderColor-done-emphasis: #8957e5;
    --color-prettylights-syntax-comment: #8b949e;
    --color-prettylights-syntax-constant: #79c0ff;
    --color-prettylights-syntax-constant-other-reference-link: #a5d6ff;
    --color-prettylights-syntax-entity: #d2a8ff;
    --color-prettylights-syntax-storage-modifier-import: #c9d1d9;
    --color-prettylights-syntax-entity-tag: #7ee787;
    --color-prettylights-syntax-keyword: #ff7b72;
    --color-prettylights-syntax-string: #a5d6ff;
    --color-prettylights-syntax-variable: #ffa657;
    --color-prettylights-syntax-brackethighlighter-unmatched: #f85149;
    --color-prettylights-syntax-brackethighlighter-angle: #8b949e;
    --color-prettylights-syntax-invalid-illegal-text: #f0f6fc;
    --color-prettylights-syntax-invalid-illegal-bg: #8e1519;
    --color-prettylights-syntax-carriage-return-text: #f0f6fc;
    --color-prettylights-syntax-carriage-return-bg: #b62324;
    --color-prettylights-syntax-string-regexp: #7ee787;
    --color-prettylights-syntax-markup-list: #f2cc60;
    --color-prettylights-syntax-markup-heading: #1f6feb;
    --color-prettylights-syntax-markup-italic: #c9d1d9;
    --color-prettylights-syntax-markup-bold: #c9d1d9;
    --color-prettylights-syntax-markup-deleted-text: #ffdcd7;
    --color-prettylights-syntax-markup-deleted-bg: #67060c;
    --color-prettylights-syntax-markup-inserted-text: #aff5b4;
    --color-prettylights-syntax-markup-inserted-bg: #033a16;
    --color-prettylights-syntax-markup-changed-text: #ffdfb6;
    --color-prettylights-syntax-markup-changed-bg: #5a1e02;
    --color-prettylights-syntax-markup-ignored-text: #c9d1d9;
    --color-prettylights-syntax-markup-ignored-bg: #1158c7;
    --color-prettylights-syntax-meta-diff-range: #d2a8ff;
    --color-prettylights-syntax-sublimelinter-gutter-mark: #484f58;
  }
}

@media (prefers-color-scheme: light) {
  .markdown-body,
  [data-theme="light"] {
    /*light*/
    color-scheme: light;
    --focus-outlineColor: #0969da;
    --fgColor-default: #1f2328;
    --fgColor-muted: #636c76;
    --fgColor-accent: #0969da;
    --fgColor-success: #1a7f37;
    --fgColor-attention: #9a6700;
    --fgColor-danger: #d1242f;
    --fgColor-done: #8250df;
    --bgColor-default: #ffffff;
    --bgColor-muted: #f6f8fa;
    --bgColor-neutral-muted: #afb8c133;
    --bgColor-attention-muted: #fff8c5;
    --borderColor-default: #d0d7de;
    --borderColor-muted: #d0d7deb3;
    --borderColor-neutral-muted: #afb8c133;
    --borderColor-accent-emphasis: #0969da;
    --borderColor-success-emphasis: #1a7f37;
    --borderColor-attention-emphasis: #bf8700;
    --borderColor-danger-emphasis: #cf222e;
    --borderColor-done-emphasis: #8250df;
    --color-prettylights-syntax-comment: #57606a;
    --color-prettylights-syntax-constant: #0550ae;
    --color-prettylights-syntax-constant-other-reference-link: #0a3069;
    --color-prettylights-syntax-entity: #6639ba;
    --color-prettylights-syntax-storage-modifier-import: #24292f;
    --color-prettylights-syntax-entity-tag: #0550ae;
    --color-prettylights-syntax-keyword: #cf222e;
    --color-prettylights-syntax-string: #0a3069;
    --color-prettylights-syntax-variable: #953800;
    --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
    --color-prettylights-syntax-brackethighlighter-angle: #57606a;
    --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
    --color-prettylights-syntax-invalid-illegal-bg: #82071e;
    --color-prettylights-syntax-carriage-return-text: #f6f8fa;
    --color-prettylights-syntax-carriage-return-bg: #cf222e;
    --color-prettylights-syntax-string-regexp: #116329;
    --color-prettylights-syntax-markup-list: #3b2300;
    --color-prettylights-syntax-markup-heading: #0550ae;
    --color-prettylights-syntax-markup-italic: #24292f;
    --color-prettylights-syntax-markup-bold: #24292f;
    --color-prettylights-syntax-markup-deleted-text: #82071e;
    --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
    --color-prettylights-syntax-markup-inserted-text: #116329;
    --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
    --color-prettylights-syntax-markup-changed-text: #953800;
    --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
    --color-prettylights-syntax-markup-ignored-text: #eaeef2;
    --color-prettylights-syntax-markup-ignored-bg: #0550ae;
    --color-prettylights-syntax-meta-diff-range: #8250df;
    --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
  }
}

.markdown-body {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: var(--fgColor-default);
  background-color: var(--bgColor-default);
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  scroll-behavior: auto;
}

.markdown-body .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

.markdown-body h1:hover .anchor .octicon-link:before,
.markdown-body h2:hover .anchor .octicon-link:before,
.markdown-body h3:hover .anchor .octicon-link:before,
.markdown-body h4:hover .anchor .octicon-link:before,
.markdown-body h5:hover .anchor .octicon-link:before,
.markdown-body h6:hover .anchor .octicon-link:before {
  width: 16px;
  height: 16px;
  content: ' ';
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
}

.markdown-body details,
.markdown-body figcaption,
.markdown-body figure {
  display: block;
}

.markdown-body summary {
  display: list-item;
}

.markdown-body [hidden] {
  display: none !important;
}

.markdown-body a {
  background-color: transparent;
  color: var(--fgColor-accent);
  text-decoration: none;
}

.markdown-body abbr[title] {
  border-bottom: none;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

.markdown-body b,
.markdown-body strong {
  font-weight: var(--base-text-weight-semibold, 600);
}

.markdown-body dfn {
  font-style: italic;
}

.markdown-body h1 {
  margin: .67em 0;
  font-weight: var(--base-text-weight-semibold, 600);
  padding-bottom: .3em;
  font-size: 2em;
  border-bottom: 1px solid var(--borderColor-muted);
}

.markdown-body mark {
  background-color: var(--bgColor-attention-muted);
  color: var(--fgColor-default);
}

.markdown-body small {
  font-size: 90%;
}

.markdown-body sub,
.markdown-body sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

.markdown-body sub {
  bottom: -0.25em;
}

.markdown-body sup {
  top: -0.5em;
}

.markdown-body img {
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
  background-color: var(--bgColor-default);
}

.markdown-body code,
.markdown-body kbd,
.markdown-body pre,
.markdown-body samp {
  font-family: monospace;
  font-size: 1em;
}

.markdown-body figure {
  margin: 1em 40px;
}

.markdown-body hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid var(--borderColor-muted);
  height: .25em;
  padding: 0;
  margin: 24px 0;
  background-color: var(--borderColor-default);
  border: 0;
}

.markdown-body input {
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.markdown-body [type=button],
.markdown-body [type=reset],
.markdown-body [type=submit] {
  -webkit-appearance: button;
  appearance: button;
}

.markdown-body [type=checkbox],
.markdown-body [type=radio] {
  box-sizing: border-box;
  padding: 0;
}

.markdown-body [type=number]::-webkit-inner-spin-button,
.markdown-body [type=number]::-webkit-outer-spin-button {
  height: auto;
}

.markdown-body [type=search]::-webkit-search-cancel-button,
.markdown-body [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body ::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}

.markdown-body ::-webkit-file-upload-button {
  -webkit-appearance: button;
  appearance: button;
  font: inherit;
}

.markdown-body a:hover {
  text-decoration: underline;
}

.markdown-body ::placeholder {
  color: var(--fgColor-muted);
  opacity: 1;
}

.markdown-body hr::before {
  display: table;
  content: "";
}

.markdown-body hr::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: max-content;
  max-width: 100%;
  overflow: auto;
}

.markdown-body td,
.markdown-body th {
  padding: 0;
}

.markdown-body details summary {
  cursor: pointer;
}

.markdown-body details:not([open])>*:not(summary) {
  display: none;
}

.markdown-body a:focus,
.markdown-body [role=button]:focus,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=checkbox]:focus {
  outline: 2px solid var(--focus-outlineColor);
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:focus:not(:focus-visible),
.markdown-body [role=button]:focus:not(:focus-visible),
.markdown-body input[type=radio]:focus:not(:focus-visible),
.markdown-body input[type=checkbox]:focus:not(:focus-visible) {
  outline: solid 1px transparent;
}

.markdown-body a:focus-visible,
.markdown-body [role=button]:focus-visible,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus-visible {
  outline: 2px solid var(--focus-outlineColor);
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:not([class]):focus,
.markdown-body a:not([class]):focus-visible,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus,
.markdown-body input[type=checkbox]:focus-visible {
  outline-offset: 0;
}

.markdown-body kbd {
  display: inline-block;
  padding: 3px 5px;
  font: 11px var(--fontStack-monospace, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace);
  line-height: 10px;
  color: var(--fgColor-default);
  vertical-align: middle;
  background-color: var(--bgColor-muted);
  border: solid 1px var(--borderColor-neutral-muted);
  border-bottom-color: var(--borderColor-neutral-muted);
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 var(--borderColor-neutral-muted);
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: var(--base-text-weight-semibold, 600);
  line-height: 1.25;
}

.markdown-body h2 {
  font-weight: var(--base-text-weight-semibold, 600);
  padding-bottom: .3em;
  font-size: 1.5em;
  border-bottom: 1px solid var(--borderColor-muted);
}

.markdown-body h3 {
  font-weight: var(--base-text-weight-semibold, 600);
  font-size: 1.25em;
}

.markdown-body h4 {
  font-weight: var(--base-text-weight-semibold, 600);
  font-size: 1em;
}

.markdown-body h5 {
  font-weight: var(--base-text-weight-semibold, 600);
  font-size: .875em;
}

.markdown-body h6 {
  font-weight: var(--base-text-weight-semibold, 600);
  font-size: .85em;
  color: var(--fgColor-muted);
}

.markdown-body p {
  margin-top: 0;
  margin-bottom: 10px;
}

.markdown-body blockquote {
  margin: 0;
  padding: 0 1em;
  color: var(--fgColor-muted);
  border-left: .25em solid var(--borderColor-default);
}

.markdown-body ul,
.markdown-body ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 2em;
}

.markdown-body ol ol,
.markdown-body ul ol {
  list-style-type: lower-roman;
}

.markdown-body ul ul ol,
.markdown-body ul ol ol,
.markdown-body ol ul ol,
.markdown-body ol ol ol {
  list-style-type: lower-alpha;
}

.markdown-body dd {
  margin-left: 0;
}

.markdown-body tt,
.markdown-body code,
.markdown-body samp {
  font-family: var(--fontStack-monospace, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace);
  font-size: 12px;
}

.markdown-body pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: var(--fontStack-monospace, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace);
  font-size: 12px;
  word-wrap: normal;
}

.markdown-body .octicon {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}

.markdown-body input::-webkit-outer-spin-button,
.markdown-body input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body .mr-2 {
  margin-right: var(--base-size-8, 8px) !important;
}

.markdown-body::before {
  display: table;
  content: "";
}

.markdown-body::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body>*:first-child {
  margin-top: 0 !important;
}

.markdown-body>*:last-child {
  margin-bottom: 0 !important;
}

.markdown-body a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.markdown-body .absent {
  color: var(--fgColor-danger);
}

.markdown-body .anchor {
  float: left;
  padding-right: 4px;
  margin-left: -20px;
  line-height: 1;
}

.markdown-body .anchor:focus {
  outline: none;
}

.markdown-body p,
.markdown-body blockquote,
.markdown-body ul,
.markdown-body ol,
.markdown-body dl,
.markdown-body table,
.markdown-body pre,
.markdown-body details {
  margin-top: 0;
  margin-bottom: 16px;
}

.markdown-body blockquote>:first-child {
  margin-top: 0;
}

.markdown-body blockquote>:last-child {
  margin-bottom: 0;
}

.markdown-body h1 .octicon-link,
.markdown-body h2 .octicon-link,
.markdown-body h3 .octicon-link,
.markdown-body h4 .octicon-link,
.markdown-body h5 .octicon-link,
.markdown-body h6 .octicon-link {
  color: var(--fgColor-default);
  vertical-align: middle;
  visibility: hidden;
}

.markdown-body h1:hover .anchor,
.markdown-body h2:hover .anchor,
.markdown-body h3:hover .anchor,
.markdown-body h4:hover .anchor,
.markdown-body h5:hover .anchor,
.markdown-body h6:hover .anchor {
  text-decoration: none;
}

.markdown-body h1:hover .anchor .octicon-link,
.markdown-body h2:hover .anchor .octicon-link,
.markdown-body h3:hover .anchor .octicon-link,
.markdown-body h4:hover .anchor .octicon-link,
.markdown-body h5:hover .anchor .octicon-link,
.markdown-body h6:hover .anchor .octicon-link {
  visibility: visible;
}

.markdown-body h1 tt,
.markdown-body h1 code,
.markdown-body h2 tt,
.markdown-body h2 code,
.markdown-body h3 tt,
.markdown-body h3 code,
.markdown-body h4 tt,
.markdown-body h4 code,
.markdown-body h5 tt,
.markdown-body h5 code,
.markdown-body h6 tt,
.markdown-body h6 code {
  padding: 0 .2em;
  font-size: inherit;
}

.markdown-body summary h1,
.markdown-body summary h2,
.markdown-body summary h3,
.markdown-body summary h4,
.markdown-body summary h5,
.markdown-body summary h6 {
  display: inline-block;
}

.markdown-body summary h1 .anchor,
.markdown-body summary h2 .anchor,
.markdown-body summary h3 .anchor,
.markdown-body summary h4 .anchor,
.markdown-body summary h5 .anchor,
.markdown-body summary h6 .anchor {
  margin-left: -40px;
}

.markdown-body summary h1,
.markdown-body summary h2 {
  padding-bottom: 0;
  border-bottom: 0;
}

.markdown-body ul.no-list,
.markdown-body ol.no-list {
  padding: 0;
  list-style-type: none;
}

.markdown-body ol[type="a s"] {
  list-style-type: lower-alpha;
}

.markdown-body ol[type="A s"] {
  list-style-type: upper-alpha;
}

.markdown-body ol[type="i s"] {
  list-style-type: lower-roman;
}

.markdown-body ol[type="I s"] {
  list-style-type: upper-roman;
}

.markdown-body ol[type="1"] {
  list-style-type: decimal;
}

.markdown-body div>ol:not([type]) {
  list-style-type: decimal;
}

.markdown-body ul ul,
.markdown-body ul ol,
.markdown-body ol ol,
.markdown-body ol ul {
  margin-top: 0;
  margin-bottom: 0;
}

.markdown-body li>p {
  margin-top: 16px;
}

.markdown-body li+li {
  margin-top: .25em;
}

.markdown-body dl {
  padding: 0;
}

.markdown-body dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: var(--base-text-weight-semibold, 600);
}

.markdown-body dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}

.markdown-body table th {
  font-weight: var(--base-text-weight-semibold, 600);
}

.markdown-body table th,
.markdown-body table td {
  padding: 6px 13px;
  border: 1px solid var(--borderColor-default);
}

.markdown-body table td>:last-child {
  margin-bottom: 0;
}

.markdown-body table tr {
  background-color: var(--bgColor-default);
  border-top: 1px solid var(--borderColor-muted);
}

.markdown-body table tr:nth-child(2n) {
  background-color: var(--bgColor-muted);
}

.markdown-body table img {
  background-color: transparent;
}

.markdown-body img[align=right] {
  padding-left: 20px;
}

.markdown-body img[align=left] {
  padding-right: 20px;
}

.markdown-body .emoji {
  max-width: none;
  vertical-align: text-top;
  background-color: transparent;
}

.markdown-body span.frame {
  display: block;
  overflow: hidden;
}

.markdown-body span.frame>span {
  display: block;
  float: left;
  width: auto;
  padding: 7px;
  margin: 13px 0 0;
  overflow: hidden;
  border: 1px solid var(--borderColor-default);
}

.markdown-body span.frame span img {
  display: block;
  float: left;
}

.markdown-body span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: var(--fgColor-default);
}

.markdown-body span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-center>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: center;
}

.markdown-body span.align-center span img {
  margin: 0 auto;
  text-align: center;
}

.markdown-body span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-right>span {
  display: block;
  margin: 13px 0 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body span.align-right span img {
  margin: 0;
  text-align: right;
}

.markdown-body span.float-left {
  display: block;
  float: left;
  margin-right: 13px;
  overflow: hidden;
}

.markdown-body span.float-left span {
  margin: 13px 0 0;
}

.markdown-body span.float-right {
  display: block;
  float: right;
  margin-left: 13px;
  overflow: hidden;
}

.markdown-body span.float-right>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body code,
.markdown-body tt {
  padding: .2em .4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: var(--bgColor-neutral-muted);
  border-radius: 6px;
}

.markdown-body code br,
.markdown-body tt br {
  display: none;
}

.markdown-body del code {
  text-decoration: inherit;
}

.markdown-body samp {
  font-size: 85%;
}

.markdown-body pre code {
  font-size: 100%;
}

.markdown-body pre>code {
  padding: 0;
  margin: 0;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

.markdown-body .highlight {
  margin-bottom: 16px;
}

.markdown-body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.markdown-body .highlight pre,
.markdown-body pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  color: var(--fgColor-default);
  background-color: var(--bgColor-muted);
  border-radius: 6px;
}

.markdown-body pre code,
.markdown-body pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

.markdown-body .csv-data td,
.markdown-body .csv-data th {
  padding: 5px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
}

.markdown-body .csv-data .blob-num {
  padding: 10px 8px 9px;
  text-align: right;
  background: var(--bgColor-default);
  border: 0;
}

.markdown-body .csv-data tr {
  border-top: 0;
}

.markdown-body .csv-data th {
  font-weight: var(--base-text-weight-semibold, 600);
  background: var(--bgColor-muted);
  border-top: 0;
}

.markdown-body [data-footnote-ref]::before {
  content: "[";
}

.markdown-body [data-footnote-ref]::after {
  content: "]";
}

.markdown-body .footnotes {
  font-size: 12px;
  color: var(--fgColor-muted);
  border-top: 1px solid var(--borderColor-default);
}

.markdown-body .footnotes ol {
  padding-left: 16px;
}

.markdown-body .footnotes ol ul {
  display: inline-block;
  padding-left: 16px;
  margin-top: 16px;
}

.markdown-body .footnotes li {
  position: relative;
}

.markdown-body .footnotes li:target::before {
  position: absolute;
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -24px;
  pointer-events: none;
  content: "";
  border: 2px solid var(--borderColor-accent-emphasis);
  border-radius: 6px;
}

.markdown-body .footnotes li:target {
  color: var(--fgColor-default);
}

.markdown-body .footnotes .data-footnote-backref g-emoji {
  font-family: monospace;
}

.markdown-body .pl-c {
  color: var(--color-prettylights-syntax-comment);
}

.markdown-body .pl-c1,
.markdown-body .pl-s .pl-v {
  color: var(--color-prettylights-syntax-constant);
}

.markdown-body .pl-e,
.markdown-body .pl-en {
  color: var(--color-prettylights-syntax-entity);
}

.markdown-body .pl-smi,
.markdown-body .pl-s .pl-s1 {
  color: var(--color-prettylights-syntax-storage-modifier-import);
}

.markdown-body .pl-ent {
  color: var(--color-prettylights-syntax-entity-tag);
}

.markdown-body .pl-k {
  color: var(--color-prettylights-syntax-keyword);
}

.markdown-body .pl-s,
.markdown-body .pl-pds,
.markdown-body .pl-s .pl-pse .pl-s1,
.markdown-body .pl-sr,
.markdown-body .pl-sr .pl-cce,
.markdown-body .pl-sr .pl-sre,
.markdown-body .pl-sr .pl-sra {
  color: var(--color-prettylights-syntax-string);
}

.markdown-body .pl-v,
.markdown-body .pl-smw {
  color: var(--color-prettylights-syntax-variable);
}

.markdown-body .pl-bu {
  color: var(--color-prettylights-syntax-brackethighlighter-unmatched);
}

.markdown-body .pl-ii {
  color: var(--color-prettylights-syntax-invalid-illegal-text);
  background-color: var(--color-prettylights-syntax-invalid-illegal-bg);
}

.markdown-body .pl-c2 {
  color: var(--color-prettylights-syntax-carriage-return-text);
  background-color: var(--color-prettylights-syntax-carriage-return-bg);
}

.markdown-body .pl-sr .pl-cce {
  font-weight: bold;
  color: var(--color-prettylights-syntax-string-regexp);
}

.markdown-body .pl-ml {
  color: var(--color-prettylights-syntax-markup-list);
}

.markdown-body .pl-mh,
.markdown-body .pl-mh .pl-en,
.markdown-body .pl-ms {
  font-weight: bold;
  color: var(--color-prettylights-syntax-markup-heading);
}

.markdown-body .pl-mi {
  font-style: italic;
  color: var(--color-prettylights-syntax-markup-italic);
}

.markdown-body .pl-mb {
  font-weight: bold;
  color: var(--color-prettylights-syntax-markup-bold);
}

.markdown-body .pl-md {
  color: var(--color-prettylights-syntax-markup-deleted-text);
  background-color: var(--color-prettylights-syntax-markup-deleted-bg);
}

.markdown-body .pl-mi1 {
  color: var(--color-prettylights-syntax-markup-inserted-text);
  background-color: var(--color-prettylights-syntax-markup-inserted-bg);
}

.markdown-body .pl-mc {
  color: var(--color-prettylights-syntax-markup-changed-text);
  background-color: var(--color-prettylights-syntax-markup-changed-bg);
}

.markdown-body .pl-mi2 {
  color: var(--color-prettylights-syntax-markup-ignored-text);
  background-color: var(--color-prettylights-syntax-markup-ignored-bg);
}

.markdown-body .pl-mdr {
  font-weight: bold;
  color: var(--color-prettylights-syntax-meta-diff-range);
}

.markdown-body .pl-ba {
  color: var(--color-prettylights-syntax-brackethighlighter-angle);
}

.markdown-body .pl-sg {
  color: var(--color-prettylights-syntax-sublimelinter-gutter-mark);
}

.markdown-body .pl-corl {
  text-decoration: underline;
  color: var(--color-prettylights-syntax-constant-other-reference-link);
}

.markdown-body [role=button]:focus:not(:focus-visible),
.markdown-body [role=tabpanel][tabindex="0"]:focus:not(:focus-visible),
.markdown-body button:focus:not(:focus-visible),
.markdown-body summary:focus:not(:focus-visible),
.markdown-body a:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}

.markdown-body [tabindex="0"]:focus:not(:focus-visible),
.markdown-body details-dialog:focus:not(:focus-visible) {
  outline: none;
}

.markdown-body g-emoji {
  display: inline-block;
  min-width: 1ch;
  font-family: "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1em;
  font-style: normal !important;
  font-weight: var(--base-text-weight-normal, 400);
  line-height: 1;
  vertical-align: -0.075em;
}

.markdown-body g-emoji img {
  width: 1em;
  height: 1em;
}

.markdown-body .task-list-item {
  list-style-type: none;
}

.markdown-body .task-list-item label {
  font-weight: var(--base-text-weight-normal, 400);
}

.markdown-body .task-list-item.enabled label {
  cursor: pointer;
}

.markdown-body .task-list-item+.task-list-item {
  margin-top: var(--base-size-4);
}

.markdown-body .task-list-item .handle {
  display: none;
}

.markdown-body .task-list-item-checkbox {
  margin: 0 .2em .25em -1.4em;
  vertical-align: middle;
}

.markdown-body .contains-task-list:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body .contains-task-list {
  position: relative;
}

.markdown-body .contains-task-list:hover .task-list-item-convert-container,
.markdown-body .contains-task-list:focus-within .task-list-item-convert-container {
  display: block;
  width: auto;
  height: 24px;
  overflow: visible;
  clip: auto;
}

.markdown-body ::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}

.markdown-body .markdown-alert {
  padding: var(--base-size-8) var(--base-size-16);
  margin-bottom: var(--base-size-16);
  color: inherit;
  border-left: .25em solid var(--borderColor-default);
}

.markdown-body .markdown-alert>:first-child {
  margin-top: 0;
}

.markdown-body .markdown-alert>:last-child {
  margin-bottom: 0;
}

.markdown-body .markdown-alert .markdown-alert-title {
  display: flex;
  font-weight: var(--base-text-weight-medium, 500);
  align-items: center;
  line-height: 1;
}

.markdown-body .markdown-alert.markdown-alert-note {
  border-left-color: var(--borderColor-accent-emphasis);
}

.markdown-body .markdown-alert.markdown-alert-note .markdown-alert-title {
  color: var(--fgColor-accent);
}

.markdown-body .markdown-alert.markdown-alert-important {
  border-left-color: var(--borderColor-done-emphasis);
}

.markdown-body .markdown-alert.markdown-alert-important .markdown-alert-title {
  color: var(--fgColor-done);
}

.markdown-body .markdown-alert.markdown-alert-warning {
  border-left-color: var(--borderColor-attention-emphasis);
}

.markdown-body .markdown-alert.markdown-alert-warning .markdown-alert-title {
  color: var(--fgColor-attention);
}

.markdown-body .markdown-alert.markdown-alert-tip {
  border-left-color: var(--borderColor-success-emphasis);
}

.markdown-body .markdown-alert.markdown-alert-tip .markdown-alert-title {
  color: var(--fgColor-success);
}

.markdown-body .markdown-alert.markdown-alert-caution {
  border-left-color: var(--borderColor-danger-emphasis);
}

.markdown-body .markdown-alert.markdown-alert-caution .markdown-alert-title {
  color: var(--fgColor-danger);
}

.markdown-body>*:first-child>.heading-element:first-child {
  margin-top: 0 !important;
}

/* --- CUSTOM --- */
:root {
  --font-weight: 400;
  --font-thin: 100;
  --font-extralight: 200;
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
  --font-black: 900;
  --size-2-1: 2px;
  --size-2-2: 4px;
  --size-2-3: 6px;
  --size-4-1: 4px;
  --size-4-2: 8px;
  --size-4-3: 12px;
  --size-4-4: 16px;
  --size-4-5: 20px;
  --size-4-6: 24px;
  --size-4-8: 32px;
  --size-4-9: 36px;
  --size-4-10: 40px;
  --size-4-12: 48px;
  --size-4-16: 64px;
  --size-4-18: 72px;
  --radius-s: 4px;
  --radius-m: 8px;
  --radius-l: 12px;
  --radius-xl: 16px;
  --p-spacing: 1rem;
  --p-spacing-empty: 0rem;
  --callout-border-width: 0px;
  --callout-border-opacity: 0.25;
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6);
  --callout-radius: var(--radius-s);
  --callout-blend-mode: var(--highlight-mix-blend-mode);
  --callout-title-color: inherit;
  --callout-title-padding: 0;
  --callout-title-size: inherit;
  --callout-title-weight: calc(var(--font-weight) + var(--bold-modifier));
  --callout-content-padding: 0;
  --callout-content-background: transparent;
  --callout-bug: var(--color-red-rgb);
  --callout-default: var(--color-blue-rgb);
  --callout-error: var(--color-red-rgb);
  --callout-example: var(--color-purple-rgb);
  --callout-fail: var(--color-red-rgb);
  --callout-important: var(--color-cyan-rgb);
  --callout-info: var(--color-blue-rgb);
  --callout-question: var(--color-orange-rgb);
  --callout-success: var(--color-green-rgb);
  --callout-summary: var(--color-cyan-rgb);
  --callout-tip: var(--color-cyan-rgb);
  --callout-todo: var(--color-blue-rgb);
  --callout-warning: var(--color-orange-rgb);
  --callout-quote: 158, 158, 158;
}

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: light;
    --highlight-mix-blend-mode: darken;
    --mono-rgb-0: 255, 255, 255;
    --mono-rgb-100: 0, 0, 0;
    --color-red-rgb: 233, 49, 71;
    --color-red: #e93147;
    --color-orange-rgb: 236, 117, 0;
    --color-orange: #ec7500;
    --color-yellow-rgb: 224, 172, 0;
    --color-yellow: #e0ac00;
    --color-green-rgb: 8, 185, 78;
    --color-green: #08b94e;
    --color-cyan-rgb: 0, 191, 188;
    --color-cyan: #00bfbc;
    --color-blue-rgb: 8, 109, 221;
    --color-blue: #086ddd;
    --color-purple-rgb: 120, 82, 238;
    --color-purple: #7852ee;
    --color-pink-rgb: 213, 57, 132;
    --color-pink: #d53984;
    --color-base-00: #ffffff;
    --color-base-05: #fcfcfc;
    --color-base-10: #fafafa;
    --color-base-20: #f6f6f6;
    --color-base-25: #e3e3e3;
    --color-base-30: #e0e0e0;
    --color-base-35: #d4d4d4;
    --color-base-40: #bdbdbd;
    --color-base-50: #ababab;
    --color-base-60: #707070;
    --color-base-70: #5c5c5c;
    --color-base-100: #222222;
    --color-accent-hsl: var(--accent-h),
      var(--accent-s),
      var(--accent-l);
    --color-accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
    --color-accent-1: hsl(calc(var(--accent-h) - 1), calc(var(--accent-s) * 1.01), calc(var(--accent-l) * 1.075));
    --color-accent-2: hsl(calc(var(--accent-h) - 3), calc(var(--accent-s) * 1.02), calc(var(--accent-l) * 1.15));
    --background-secondary-alt: var(--color-base-05);
    --background-modifier-box-shadow: rgba(0, 0, 0, 0.1);
    --background-modifier-cover: rgba(220, 220, 220, 0.4);
    --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12),
      0 2px 3px 0 rgba(0, 0, 0, .05),
      0 1px 1.5px 0 rgba(0, 0, 0, .03),
      0 1px 2px 0 rgba(0, 0, 0, .04),
      0 0 0 0 transparent;
    --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17),
      0 2px 3px 0 rgba(0, 0, 0, .1),
      0 1px 1.5px 0 rgba(0, 0, 0, .03),
      0 1px 2px 0 rgba(0, 0, 0, .04),
      0 0 0 0 transparent;
    --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
      0px 3.4px 6.7px rgba(0, 0, 0, .042),
      0px 15px 30px rgba(0, 0, 0, .07);
    --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
      0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
      0px 30px 90px rgba(0, 0, 0, 0.2);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --highlight-mix-blend-mode: lighten;
    --mono-rgb-0: 0, 0, 0;
    --mono-rgb-100: 255, 255, 255;
    --color-red-rgb: 251, 70, 76;
    --color-red: #fb464c;
    --color-orange-rgb: 233, 151, 63;
    --color-orange: #e9973f;
    --color-yellow-rgb: 224, 222, 113;
    --color-yellow: #e0de71;
    --color-green-rgb: 68, 207, 110;
    --color-green: #44cf6e;
    --color-cyan-rgb: 83, 223, 221;
    --color-cyan: #53dfdd;
    --color-blue-rgb: 2, 122, 255;
    --color-blue: #027aff;
    --color-purple-rgb: 168, 130, 255;
    --color-purple: #a882ff;
    --color-pink-rgb: 250, 153, 205;
    --color-pink: #fa99cd;
    --color-base-00: #1e1e1e;
    --color-base-05: #212121;
    --color-base-10: #242424;
    --color-base-20: #262626;
    --color-base-25: #2a2a2a;
    --color-base-30: #363636;
    --color-base-35: #3f3f3f;
    --color-base-40: #555555;
    --color-base-50: #666666;
    --color-base-60: #999999;
    --color-base-70: #b3b3b3;
    --color-base-100: #dadada;
    --color-accent-hsl: var(--accent-h),
      var(--accent-s),
      var(--accent-l);
    --color-accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
    --color-accent-1: hsl(calc(var(--accent-h) - 3), calc(var(--accent-s) * 1.02), calc(var(--accent-l) * 1.15));
    --color-accent-2: hsl(calc(var(--accent-h) - 5), calc(var(--accent-s) * 1.05), calc(var(--accent-l) * 1.29));
    --background-modifier-form-field: var(--color-base-25);
    --background-secondary-alt: var(--color-base-30);
    --interactive-normal: var(--color-base-30);
    --interactive-hover: var(--color-base-35);
    --text-accent: var(--color-accent-1);
    --interactive-accent: var(--color-accent);
    --interactive-accent-hover: var(--color-accent-1);
    --background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
    --background-modifier-cover: rgba(10, 10, 10, 0.4);
    --text-selection: hsla(var(--interactive-accent-hsl), 0.25);
    --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),
      0 2px 4px 0 rgba(0, 0, 0, .15),
      0 1px 1.5px 0 rgba(0, 0, 0, .1),
      0 1px 2px 0 rgba(0, 0, 0, .2),
      0 0 0 0 transparent;
    --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
      0 2px 3px 0 rgba(0, 0, 0, .3),
      0 1px 1.5px 0 rgba(0, 0, 0, .2),
      0 1px 2px 0 rgba(0, 0, 0, .4),
      0 0 0 0 transparent;
    --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
      0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
      0px 15px 30px rgba(0, 0, 0, 0.3);
    --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
      0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
      0px 30px 90px rgba(0, 0, 0, 0.2);
    --pdf-shadow: 0 0 0 1px var(--background-modifier-border);
    --pdf-thumbnail-shadow: 0 0 0 1px var(--background-modifier-border);
  }
}

.callout {
  --callout-color: var(--callout-default);
}

.callout[data-callout="abstract"],
.callout[data-callout="summary"],
.callout[data-callout="tldr"] {
  --callout-color: var(--callout-summary);
}

.callout[data-callout="info"] {
  --callout-color: var(--callout-info);
}

.callout[data-callout="todo"] {
  --callout-color: var(--callout-todo);
}

.callout[data-callout="important"] {
  --callout-color: var(--callout-important);
}

.callout[data-callout="tip"],
.callout[data-callout="hint"] {
  --callout-color: var(--callout-tip);
}

.callout[data-callout="success"],
.callout[data-callout="check"],
.callout[data-callout="done"] {
  --callout-color: var(--callout-success);
}

.callout[data-callout="question"],
.callout[data-callout="help"],
.callout[data-callout="faq"] {
  --callout-color: var(--callout-question);
}

.callout[data-callout="warning"],
.callout[data-callout="caution"],
.callout[data-callout="attention"] {
  --callout-color: var(--callout-warning);
}

.callout[data-callout="failure"],
.callout[data-callout="fail"],
.callout[data-callout="missing"] {
  --callout-color: var(--callout-fail);
}

.callout[data-callout="danger"],
.callout[data-callout="error"] {
  --callout-color: var(--callout-error);
}

.callout[data-callout="bug"] {
  --callout-color: var(--callout-bug);
}

.callout[data-callout="example"] {
  --callout-color: var(--callout-example);
}

.callout[data-callout="quote"],
.callout[data-callout="cite"] {
  --callout-color: var(--callout-quote);
}

.callout {
  overflow: hidden;
  border-style: solid;
  border-color: rgba(var(--callout-color), var(--callout-border-opacity));
  border-width: var(--callout-border-width);
  border-radius: var(--callout-radius);
  margin: 1em 0;
  mix-blend-mode: var(--callout-blend-mode);
  background-color: rgba(var(--callout-color), 0.1);
  padding: var(--callout-padding);
}

.callout.is-collapsible .callout-title {
  cursor: var(--cursor);
}

.callout-title {
  padding: var(--callout-title-padding);
  display: flex;
  gap: var(--size-4-1);
  font-size: var(--callout-title-size);
  color: rgb(var(--callout-color));
  line-height: var(--line-height-tight);
  align-items: flex-start;
}

.callout-content {
  overflow-x: auto;
  padding: var(--callout-content-padding);
  background-color: var(--callout-content-background);
}

.callout-content .callout {
  margin-top: 20px;
}

.callout-icon {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.callout-icon .svg-icon {
  color: rgb(var(--callout-color));
}

.callout-icon::after {
  content: "\x80";
}

.callout-title-inner {
  --font-weight: var(--callout-title-weight);
  font-weight: var(--font-weight);
  color: var(--callout-title-color);
}

.callout p {
  margin-block-start: var(--p-spacing);
  margin-block-end: var(--p-spacing);
}
`;
