# Verdant Garden Theme — Specification

## 1. Overview

**Name:** Verdant Garden
**Extension ID:** `noted-theme`
**Purpose:** Prose-optimized dark/light theme for Markdown editing in Zed.
Companion theme for the [Noted](https://github.com/sergeevav/noted) extension.

Standard Zed themes are optimized for code, not for prose. This theme:
- Maximizes visual differentiation for Markdown elements
- Mutes MD syntax characters, letting content dominate
- Provides heading hierarchy through color + weight (since Zed cannot vary font size)
- Ships as a separate extension (Zed registry requirement)

---

## 2. Design Principles

### Muted syntax
Characters `#`, `**`, `>`, `[[`, `]]`, `---` render in nearly invisible color
(~30% opacity relative to body text). The user sees them when focusing on the line,
but they do not interfere when reading.

### Heading hierarchy through color + weight
Since `font_size` is not available in Zed themes, the only way to create visual
hierarchy H1-H6 is a combination of `color` and `font_weight`.
H1 = brightest + boldest, H6 = most muted + thinnest.

### Prose-first
Background and body text are optimized for extended reading, not for code contrast.
Soft tones, sufficient contrast, no bright accent colors in body text.

### Code-friendly
Code blocks retain full syntax highlighting using a standard code palette.
The theme does not sacrifice the code experience for prose.

---

## 3. Theme Variants

| Variant | Appearance | Background | Foreground | Heading Ramp |
|---|---|---|---|---|
| **Verdant Garden Dark** | dark | `#0A0A08` (near-black warm) | `#C8CAC0` | bright green down |
| **Verdant Garden Light** | light | `#FCFCFA` (near-white warm, paper) | `#2A2E22` | dark green down |

Both variants use the same color families at different lightness stops.
See [verdant-garden-colors.md](./verdant-garden-colors.md) for the full palette.

---

## 4. Semantic Token Styling

The Noted LSP returns custom semantic token types. The theme styles them via
the `syntax` section (Zed maps `type.modifier` keys to syntax entries).

### 4.1. Available style properties (Zed theme schema v0.2.0)

| Property | Type | Available |
|---|---|---|
| `color` | hex string | Yes |
| `background_color` | hex string | Yes |
| `font_weight` | 100-900 | Yes |
| `font_style` | "normal", "italic", "oblique" | Yes |
| `underline` | — | **No** (not in schema) |
| `strikethrough` | — | **No** (not in schema) |

**Known limitation:** Links cannot be underlined and strikethrough text cannot
have a visible line through it via theme alone. Only color differentiation is possible.

### 4.2. Semantic token type → syntax key mapping

When the LSP returns a token with type `heading` and modifier `h1`, Zed looks up
the key `heading.h1` in the theme's `syntax` section.

#### Dark variant

| Syntax Key | Color | Weight | Style | Purpose |
|---|---|---|---|---|
| `heading.h1` | `#8FBF6A` | 800 | — | Heading H1 |
| `heading.h2` | `#7AAD58` | 700 | — | Heading H2 |
| `heading.h3` | `#669B48` | 600 | — | Heading H3 |
| `heading.h4` | `#548938` | 500 | — | Heading H4 |
| `heading.h5` | `#447830` | 500 | — | Heading H5 |
| `heading.h6` | `#3A6828` | 400 | — | Heading H6 |
| `markup.bold` | `#C8CAC0` | 700 | — | Bold text |
| `markup.italic` | `#C8CAC0` | — | italic | Italic text |
| `markup.strikethrough` | `#7A7C72` | — | — | Strikethrough (muted color) |
| `markup.code` | `#E0B460` | — | — | Inline code (+ bg `#181816`) |
| `markup.wikilink` | `#7CB5C4` | — | — | Wikilinks |
| `markup.wikilink.broken` | `#CC4444` | — | — | Broken wikilinks |
| `markup.tag` | `#D4A56A` | — | — | Tags (+ bg `#1E1A10`) |
| `markup.callout` | `#C47D8A` | — | italic | Callout markers |
| `markup.checkbox_done` | `#7A7C72` | — | — | Done checkboxes |
| `markup.checkbox_todo` | `#C8CAC0` | — | — | Open checkboxes |
| `markup.math` | `#B8DC94` | — | italic | Math expressions |
| `string.link` | `#A0D8D8` | — | — | URL links |
| `comment.frontmatter` | `#545648` | — | italic | YAML frontmatter |
| `punctuation.markup_punctuation` | `#4A4A40` | — | — | Muted MD syntax |

#### Light variant

| Syntax Key | Color | Weight | Style | Purpose |
|---|---|---|---|---|
| `heading.h1` | `#3D7A1A` | 800 | — | Heading H1 |
| `heading.h2` | `#4D8A28` | 700 | — | Heading H2 |
| `heading.h3` | `#5D9A36` | 600 | — | Heading H3 |
| `heading.h4` | `#6DAA44` | 500 | — | Heading H4 |
| `heading.h5` | `#7DBA54` | 500 | — | Heading H5 |
| `heading.h6` | `#8DCA64` | 400 | — | Heading H6 |
| `markup.bold` | `#2A2E22` | 700 | — | Bold text |
| `markup.italic` | `#2A2E22` | — | italic | Italic text |
| `markup.strikethrough` | `#A8AAA0` | — | — | Strikethrough (muted color) |
| `markup.code` | `#9A7018` | — | — | Inline code (+ bg `#EEEFE8`) |
| `markup.wikilink` | `#2E7E8C` | — | — | Wikilinks |
| `markup.wikilink.broken` | `#A03030` | — | — | Broken wikilinks |
| `markup.tag` | `#8E6420` | — | — | Tags (+ bg `#F4EDE2`) |
| `markup.callout` | `#8A3850` | — | italic | Callout markers |
| `markup.checkbox_done` | `#A8AAA0` | — | — | Done checkboxes |
| `markup.checkbox_todo` | `#2A2E22` | — | — | Open checkboxes |
| `markup.math` | `#4D8A28` | — | italic | Math expressions |
| `string.link` | `#1E6472` | — | — | URL links |
| `comment.frontmatter` | `#A8AAA0` | — | italic | YAML frontmatter |
| `punctuation.markup_punctuation` | `#C4C6BC` | — | — | Muted MD syntax |

---

## 5. Tree-sitter Fallback Styles

The `syntax` section also includes styles for standard Tree-sitter captures.
These work even when the LSP is not running — providing baseline Markdown highlighting.

| Capture | Dark Color | Light Color | Style |
|---|---|---|---|
| `emphasis` | — | — | italic |
| `emphasis.strong` | — | — | weight 700 |
| `title` | `#8FBF6A` | `#3D7A1A` | weight 800 |
| `link_text` | `#A0D8D8` | `#1E6472` | — |
| `link_uri` | `#7CB5C4` | `#2E7E8C` | italic |
| `punctuation.special` | `#4A4A40` | `#C4C6BC` | — |
| `punctuation.bracket` | `#7A7C72` | `#7A7C72` | — |
| `punctuation.delimiter` | `#7A7C72` | `#7A7C72` | — |

---

## 6. Code Syntax Palette

Both variants include a full code syntax palette for programming languages
inside fenced code blocks.

### Dark

| Capture | Color | Style |
|---|---|---|
| `keyword` | `#72AAD0` | weight 600 |
| `function` | `#B8DC94` | — |
| `type` | `#A898C4` | — |
| `string` | `#E0B460` | — |
| `number` | `#D4A56A` | — |
| `constant` | `#E4CCA6` | — |
| `variable` | `#C8CAC0` | — |
| `property` | `#A0D8D8` | — |
| `operator` | `#8A8C82` | — |
| `comment` | `#545648` | italic |
| `comment.doc` | `#669B48` | italic |
| `attribute` | `#C47D8A` | — |
| `tag` | `#8FBF6A` | — |

### Light

| Capture | Color | Style |
|---|---|---|
| `keyword` | `#306A96` | weight 600 |
| `function` | `#3D7A1A` | — |
| `type` | `#645088` | — |
| `string` | `#9A7018` | — |
| `number` | `#8E6420` | — |
| `constant` | `#6A4A14` | — |
| `variable` | `#2A2E22` | — |
| `property` | `#1E6472` | — |
| `operator` | `#6A6E62` | — |
| `comment` | `#A8AAA0` | italic |
| `comment.doc` | `#5D9A36` | italic |
| `attribute` | `#8A3850` | — |
| `tag` | `#3D7A1A` | — |

---

## 7. Recommended Fonts

The theme does not control the font (that's a user setting), but we recommend
monospace fonts with good italic and variable weight support:

| Font | Why |
|---|---|
| **JetBrains Mono** | Excellent italic, good weight variations, ligatures |
| **Cascadia Code** | Cursive italic variant, good for prose |
| **Fira Code** | Wide range of weights, good readability |
| **Iosevka** | Most configurable, has quasi-proportional variants |
| **Victor Mono** | Especially beautiful cursive italic — ideal for emphasis |

---

## 8. Project Structure

```
noted-theme/
├── extension.toml              # id = "noted-theme"
├── LICENSE                     # MIT
├── THEME-SPEC.md               # This file
├── verdant-garden-colors.md    # Full color palette reference
└── themes/
    ├── verdant-dark.json       # Verdant Garden Dark
    └── verdant-light.json      # Verdant Garden Light
```

---

## 9. Implementation Plan

All theme JSON files are complete. What remains is testing and potential iteration.

### 9.1. Install and basic verification `[HUMAN]`

1. Copy `noted-theme/` to a separate directory (or use it in-place).
2. In Zed: Command Palette → `zed: install dev extension` → select the `noted-theme/` folder.
3. Open Settings → Themes → verify both "Verdant Garden Dark" and "Verdant Garden Light" appear.
4. Switch to each variant. Verify:
   - [ ] Editor background color matches spec (dark: `#0A0A08`, light: `#FCFCFA`)
   - [ ] Body text is readable
   - [ ] Sidebar/panel/tab bar backgrounds are distinct from editor
   - [ ] Status bar, title bar, toolbar have correct tones
   - [ ] Cursor is green (dark: `#6DA044`, light: `#4D8A28`)
   - [ ] Selection has green tint

### 9.2. Code syntax verification `[HUMAN]`

Open a Rust/TypeScript/Python file. Verify:
- [ ] Keywords are blue (dark: `#72AAD0`, light: `#306A96`)
- [ ] Functions are green (dark: `#B8DC94`, light: `#3D7A1A`)
- [ ] Strings are amber (dark: `#E0B460`, light: `#9A7018`)
- [ ] Types are lavender (dark: `#A898C4`, light: `#645088`)
- [ ] Comments are dimmed italic

### 9.3. Tree-sitter Markdown fallback `[HUMAN]`

Open a `.md` file **without** the Noted LSP running (before installing the main extension).
Verify standard tree-sitter-markdown captures:
- [ ] Headings (`title`) get green color + bold weight
- [ ] `*italic*` renders in italic (`emphasis`)
- [ ] `**bold**` renders with weight 700 (`emphasis.strong`)
- [ ] Link text gets teal color
- [ ] Punctuation (`#`, `**`, `>`) is dimmed

### 9.4. Semantic token mapping — critical test `[HUMAN]`

This is the most important test. It determines whether the entire semantic token
strategy works.

**Prerequisite:** Install both `noted-theme` and the main `noted` extension as
dev extensions. The LSP must be running (check Zed log for "noted-lsp started").

Open a `.md` file containing test content:

```markdown
# Heading 1
## Heading 2
### Heading 3

**bold text** and *italic text* and ~~strikethrough~~

`inline code` and $math$

[[some-link]] and #tag-name

> [!note] A callout

- [x] Done task
- [ ] Open task

---
title: Test
tags: [test]
---
```

Verify each element gets the expected styling. Record results:

| Element | Expected (dark) | Works? | Notes |
|---|---|---|---|
| H1 text | bright green `#8FBF6A` + bold 800 | | |
| H2 text | `#7AAD58` + bold 700 | | |
| H3 text | `#669B48` + bold 600 | | |
| `#` prefix | dimmed `#4A4A40` | | |
| Bold content | weight 700 | | |
| `**` markers | dimmed `#4A4A40` | | |
| Italic content | italic style | | |
| Strikethrough | muted `#7A7C72` | | |
| Inline code | amber `#E0B460` on dark bg | | |
| Wikilink content | teal `#7CB5C4` | | |
| `[[` `]]` brackets | dimmed `#4A4A40` | | |
| Tag `#name` | earth `#D4A56A` on dark bg | | |
| Callout marker | berry `#C47D8A` italic | | |
| Checkbox `[x]` | muted `#7A7C72` | | |
| Checkbox `[ ]` | body color `#C8CAC0` | | |
| Math content | green `#B8DC94` italic | | |
| Frontmatter | muted `#545648` italic | | |

**If semantic tokens do NOT apply styles** (elements look unstyled), then Zed
does not map custom LSP semantic token types to theme `syntax` keys. In that case:

1. Check Zed's LSP logs to confirm tokens are being sent.
2. Try standard LSP token type names (e.g., `namespace`, `type`, `class`) instead
   of custom ones — this tests whether the mapping works at all.
3. Research whether Zed requires a specific registration or naming convention.
4. File a discussion on `zed-industries/zed` if no mapping mechanism exists.

**Fallback plan:** If custom types cannot be styled, remap the LSP to use
standard semantic token types (`type` for headings, `decorator` for tags, etc.)
and adjust theme entries accordingly.

### 9.5. Compound modifier test `[HUMAN]`

Test that broken wikilinks (`markup` + `wikilink` + `broken`) get a different
style than resolved wikilinks (`markup` + `wikilink`).

Write `[[nonexistent-note]]` (a link that won't resolve). Verify it appears
in red (`#CC4444`) rather than teal.

If compound modifiers don't resolve to `markup.wikilink.broken`, try adding
alternative keys to the theme: `markup.broken`, `markup.wikilink_broken`.

### 9.6. Background color test `[HUMAN]`

Verify that `background_color` in syntax entries renders:
- Inline code should have a subtle background (dark: `#181816`)
- Tags should have a subtle background (dark: `#1E1A10`)

If `background_color` is not rendered, remove it from the theme (harmless if
ignored, but worth confirming).

### 9.7. Terminal colors `[HUMAN]`

Open a terminal in Zed. Run a colorful command (e.g., `ls --color`, `git diff`,
or `echo -e '\033[31mred \033[32mgreen \033[34mblue\033[0m'`).
Verify ANSI colors match the Verdant Garden palette.

### 9.8. Light theme contrast audit `[HUMAN]`

Switch to "Verdant Garden Light". Verify:
- [ ] All text meets WCAG AA contrast ratio (4.5:1) against background
- [ ] Headings are distinguishable from each other (dark→light green ramp)
- [ ] Dimmed punctuation is still *findable* when you look for it
- [ ] Code blocks are readable against the slightly darker background

### 9.9. Iterate and commit

After testing, fix any issues found. When all checks pass:
1. Initialize as git repo: `git init && git add . && git commit -m "feat: initial Verdant Garden theme"`
2. Tag: `v0.1.0`

---

## 10. Publishing

The theme is published as a **separate extension** (Zed registry requirement —
themes cannot be part of an extension with language support).

1. Fork `zed-industries/extensions`
2. Add `noted-theme` as a git submodule
3. Add entry to `extensions.toml`
4. Run `pnpm sort-extensions`
5. Open PR

---

## 11. References

- [Verdant Garden Color Palette](./verdant-garden-colors.md)
- [Zed Theme Schema v0.2.0](https://zed.dev/schema/themes/v0.2.0.json)
- [Zed Theme Documentation](https://zed.dev/docs/extensions/themes)
- [Noted Extension](https://github.com/sergeevav/noted) (companion LSP)
- [Noted Project Specification](https://github.com/sergeevav/noted/blob/main/zed-md-wysiwyg-spec.md) (sections 6.1-6.6)
