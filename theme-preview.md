---
title: Theme Preview
tags: [preview, verdant]
date: 2026-04-10
---

# Heading H1 — brightest green, weight 800
## Heading H2 — weight 700
### Heading H3 — weight 600
#### Heading H4 — weight 500
##### Heading H5 — weight 500
###### Heading H6 — dimmest green, weight 400

---

## Inline Formatting

Body text looks like this — plain, readable, neutral tone.

**Bold text** uses body color with weight 700.
*Italic text* uses body color with italic style.
~~Strikethrough~~ is muted.
**_Bold and italic combined_** stacks both.

`inline code` has string color on subtle background.

$math expression$ renders in bright green italic.

---

## Links

[[existing-link]] renders in teal.
[[broken-link]] renders in red.

[link text](https://example.com) — text part is teal, URI is italic teal.

---

## Tags & Callouts

#tag-name renders with earth background tint.
#another-tag and #one-more-tag for comparison.

> [!note] This is a note callout — marker is berry italic.

> [!warning] This is a warning callout.

> [!tip] This is a tip callout.

---

## Checkboxes

- [x] Done task — muted color, struck through
- [ ] Open task — body color
- [x] Another done item
- [ ] Another open item

---

## Code — Rust (keyword, function, type, string, number, comment, attribute)

```rust
/// Doc comment — green italic
/// Explains what the function does.
// Regular comment — dim italic
#[derive(Debug, Clone)]  // attribute — berry
pub struct Config {       // keyword, type
    name: String,         // property, type
    value: u32,           // property, type
    enabled: bool,        // property, type
}

impl Config {
    pub fn new(name: &str, value: u32) -> Self {  // keyword, function, type
        Config {
            name: name.to_string(),   // function, string
            value,                    // variable
            enabled: true,            // boolean/constant
        }
    }

    pub fn describe(&self) -> String {
        format!("name={} value={}", self.name, self.value)  // string, embedded
    }
}

const MAX_VALUE: u32 = 9999;   // constant, number
let x: f64 = 3.14;            // keyword, variable, number
let msg = "hello world";       // string
let pattern = r"\d+";          // string.regex
let escaped = "line\nbreak";   // string with escape
```

---

## Code — TypeScript (type, interface, enum, decorator)

```typescript
// Regular comment
/** Doc comment for the interface */
@Injectable()                    // attribute/decorator
export class UserService {       // keyword, type

  private readonly users: Map<string, User> = new Map();  // keyword, type

  constructor(private config: Config) {}  // keyword, variable, type

  async getUser(id: string): Promise<User | null> {  // keyword, function, type
    const user = this.users.get(id);   // keyword, variable, function
    return user ?? null;               // operator, constant
  }
}

enum Status {        // keyword, type
  Active = "active", // string
  Inactive = 0,      // number
  Pending = true,    // boolean
}

type ID = string | number;  // keyword, type
const MAX = 100 as const;   // constant, number
```

---

## Code — Python (function, decorator, number, regex)

```python
import re                    # keyword

# Regular comment
MAX_RETRIES: int = 3         # constant, type, number

class DataProcessor:         # keyword, type
    """Doc comment string."""

    @staticmethod            # decorator/attribute
    def process(data: list[str]) -> dict:  # keyword, function, type
        result = {}
        pattern = re.compile(r"\w+")  # string.regex

        for item in data:             # keyword, variable
            if not item:              # keyword
                continue
            matches = pattern.findall(item)  # variable, function
            result[item] = len(matches)      # number implicit

        return result                 # keyword

x = 3.14                # number
label = "hello"         # string
flag = True             # boolean/constant
escaped = "tab\there"  # string with escape
```

---

## Code — HTML (tag, attribute, string)

```html
<!DOCTYPE html>
<html lang="en">         <!-- tag, attribute, string -->
  <head>
    <meta charset="UTF-8" />
    <title>Preview</title>
  </head>
  <body class="container" id="main">
    <h1>Hello</h1>
    <p style="color: red;">Paragraph</p>
    <a href="https://example.com">Link</a>
  </body>
</html>
```

---

## Code — JSON (string keys, string values, number, boolean, null)

```json
{
  "name": "verdant-garden",
  "version": "0.1.0",
  "enabled": true,
  "count": 42,
  "ratio": 3.14,
  "alias": null,
  "tags": ["dark", "light", "prose"],
  "config": {
    "indent": 2,
    "wrap": 100
  }
}
```

---

## Diagnostics (UI colors, not syntax)

These are rendered by Zed's UI, not syntax tokens:
- Error squiggle color: `error`
- Warning squiggle color: `warning`
- Info indicator: `info`
- Hint indicator: `hint`
