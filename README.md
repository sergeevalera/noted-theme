# Verdant Garden — Noted Theme

A prose-optimized dark/light theme for Zed, designed as the companion theme for the [Noted](https://github.com/sergeevalera/noted) Markdown extension.

## Variants

- **Verdant Garden Dark** — deep charcoal background with green accents
- **Verdant Garden Light** — warm off-white background with green accents

## Design

Verdant Garden uses a nature-inspired palette with muted earth tones for comfortable long-form reading and writing. Key colors:

| Element | Dark | Light |
|---|---|---|
| Background | `#0A0A08` | `#FCFCFA` |
| Text | `#C8CAC0` | `#2A2E22` |
| Accent (green) | `#6DA044` | `#4D8A28` |
| Keywords/headings | `#72AAD0` | `#306A96` |
| Strings | `#E0B460` | `#9A7018` |
| Functions | `#B8DC94` | `#3D7A1A` |
| Comments | `#545648` | `#A8AAA0` |
| Errors | `#CC4444` | `#A03030` |

## Installation

### From Zed Extensions (when published)

Open Zed → Extensions → search "Verdant Garden" → Install

### Dev Mode

1. Clone this repository
2. In Zed: `Cmd+Shift+P` → `zed: install dev extension` → select this folder
3. Switch theme: `Cmd+Shift+P` → "theme" → select "Verdant Garden Dark" or "Verdant Garden Light"

## Recommended settings

For use with the Noted extension, enable semantic tokens:

```json
"languages": {
  "Noted Markdown": {
    "semantic_tokens": "combined"
  }
}
```

## License

MIT
