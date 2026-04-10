// ── comment (dim italic) ───────────────────────────────────────────────────

/** doc comment (green italic) — shown on hover in editors */

// ── attribute / decorator (berry) ─────────────────────────────────────────

function sealed(target: Function) { return target; }
function log(_t: any, _k: string, desc: PropertyDescriptor) { return desc; }

// ── enum (lavender) ───────────────────────────────────────────────────────

enum Direction {
  North = "north",   // string (sage/rose)
  South = "south",
  East  = 0,         // number (earth)
  West  = 1,
}

// ── type / interface (lavender) ───────────────────────────────────────────

interface Shape {
  readonly id: number;       // property (teal), type (lavender), number
  label: string;             // property, type
  visible: boolean;          // property, type
}

type Result<T> = { ok: true; value: T } | { ok: false; error: string };

// ── class with decorator (berry) + constructor ────────────────────────────

@sealed
class Vector implements Shape {
  readonly id: number;
  label: string;
  visible: boolean;

  x: number;
  y: number;

  constructor(x: number, y: number) {   // keyword (sky blue), function (green)
    this.id      = Math.random();        // property, function
    this.label   = `vec(${x}, ${y})`;   // string/embedded
    this.visible = true;                 // boolean/constant
    this.x = x;
    this.y = y;
  }

  @log
  length(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);   // operator, number
  }

  add(other: Vector): Vector {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  toString(): string {
    return `Vector(${this.x}, ${this.y})`;   // string (template), embedded
  }
}

// ── constants & boolean (earth/cream) ─────────────────────────────────────

const MAX_SIZE  = 9999;       // number
const PI        = 3.14159;    // number
const APP_NAME  = "Verdant";  // string
const ENABLED   = true;       // boolean
const DISABLED  = false;      // boolean
const NOTHING   = null;       // constant
const EMPTY     = undefined;  // constant

// ── string varieties ──────────────────────────────────────────────────────

const plain     = "hello world";
const escaped   = "line\nbreak\ttab\"quote";   // string.escape (berry)
const template  = `prefix ${APP_NAME} suffix`; // embedded (same as string)
const regex     = /^\d{3}-\w+$/gi;             // string.regex (cream)

// ── function (green) ──────────────────────────────────────────────────────

function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;      // keyword
  if (value > max) return max;
  return value;
}

async function fetchData(url: string): Promise<Result<string>> {
  try {
    const res  = await fetch(url);  // keyword, variable, function
    const text = await res.text();
    return { ok: true, value: text };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

const double = (n: number): number => n * 2;  // variable.special / label
const greet  = (name: string) => `Hello, ${name}!`;

// ── variable / property access ────────────────────────────────────────────

const v1 = new Vector(3, 4);
const v2 = new Vector(1, 2);
const v3 = v1.add(v2);       // property (teal)

console.log(v3.length());    // function (green)
console.log(v3.label);       // property (teal)
console.log(Direction.North); // enum member

// ── operators ─────────────────────────────────────────────────────────────

const sum   = 1 + 2;         // operator (grey)
const diff  = MAX_SIZE - 1;
const ratio = PI / 2;
const check = ENABLED && !DISABLED;
const tern  = check ? "yes" : "no";
const coale = NOTHING ?? "default";

// ── generics / complex types ──────────────────────────────────────────────

function identity<T>(value: T): T { return value; }

type Nullable<T> = T | null;
type Dict<K extends string, V> = Record<K, V>;

const map = new Map<string, number>([
  ["a", 1],
  ["b", 2],
]);
