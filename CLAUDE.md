# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A Zed editor theme extension. No build step, no tests, no package manager — the theme is two JSON files consumed directly by Zed.

## Installing / reloading the theme in Zed

```
Cmd+Shift+P → "zed: install dev extension" → select this folder
```

After editing a theme JSON, Zed picks up changes automatically when the file is saved. If it doesn't, reinstall via the command above.

## File structure

```
extension.toml          — extension metadata (id, name, version)
themes/
  verdant-dark.json     — Verdant Garden Dark
  verdant-light.json    — Verdant Garden Light
verdant-garden-colors.md — canonical color palette reference
THEME-SPEC.md           — design principles and semantic token mapping
theme-preview.ts        — TypeScript file to preview code syntax tokens in Zed
theme-preview.md        — Markdown file to preview prose/markup tokens in Zed
```

## Schema

Both theme files use `https://zed.dev/schema/themes/v0.2.0.json` — the latest available version. There is no v0.3.0.

Supported properties per syntax token: `color`, `background_color`, `font_weight` (100–900), `font_style` ("normal"/"italic"/"oblique"). No underline or strikethrough.

## Color palette

All colors come from named ramps defined in `verdant-garden-colors.md`:

```
green, teal, earth, berry, stone, sky, amber, red, lavender
```

Each ramp has 7 stops (lightest → darkest). When changing colors, stay on-ramp and reference the doc to maintain consistency across both themes.

Dark theme uses brighter ramp stops; light theme uses darker/more saturated stops of the same families.

## Key design constraints

- **All semantic token keys must be preserved** — removing a key breaks LSP-driven highlighting for the Noted extension
- **Heading hierarchy** (`heading.h1`–`heading.h6`) must maintain brightness ordering: h1 brightest, h6 dimmest. Font size is not available in Zed themes — hierarchy is color + weight only.
- **Muted MD punctuation** (`punctuation.markup_punctuation`, `punctuation.special`) should stay near-invisible — these are intentionally dim by design
- `scrollbar.git.*` keys do not exist in Zed's schema and have no effect

## Panel/chrome colors (dark theme)

Title bar, status bar, and panel all share the same green-tinted background (`#1C261C`). Tab bar and inactive tabs use a value between that and the active tab color.

## Semantic tokens (Noted LSP)

The theme styles custom LSP tokens via the `syntax` section. Key custom keys:
`heading`, `heading.h1`–`heading.h6`, `markup.*`, `string.link`, `comment.frontmatter`, `punctuation.markup_punctuation`

These only activate when the Noted LSP is running with `"semantic_tokens": "combined"` in Zed settings.
