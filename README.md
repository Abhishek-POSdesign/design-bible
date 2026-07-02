# design-bible

A structured repository for storing design knowledge in two stages: raw Markdown source files and Claude-converted design outputs.

## Purpose

This repository helps organize content from draft form to designed form.

- `raw-markdown/` contains original Markdown files
- `claude-designs/` contains Claude-converted outputs such as designed components, layouts, HTML, styling files, prompts, and related assets

## Folder Structure

```text
design-bible/
├── raw-markdown/
│   ├── README.md
│   └── *.md
├── claude-designs/
│   ├── README.md
│   ├── components/
│   ├── styles.css
│   ├── SKILL.md
│   └── other generated design files
└── README.md
```

## Workflow

1. Create or collect the original content in Markdown format.
2. Save those files inside `raw-markdown/`.
3. Use Claude to convert, design, or expand the content.
4. Save the generated design output inside `claude-designs/`.
5. Keep similar file names wherever possible for easy matching.

## Example

- Source file: `raw-markdown/button-guidelines.md`
- Designed output: `claude-designs/button-guidelines.html`

Or, if the output is a multi-file design system:

- Source file: `raw-markdown/design-system-notes.md`
- Output folder/files: `claude-designs/components/`, `claude-designs/styles.css`, and related assets

## Naming Rule

Use clear names so the source and output can be connected easily.

- Raw files should stay in Markdown format
- Designed outputs should keep related names where possible
- Group reusable UI files inside folders like `components/`

## Notes

This repository acts as a design reference library and working archive for future reuse, editing, and publishing.

## Author

Abhishek Sikka
