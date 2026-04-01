# easing-gradients

Tailwind CSS v4 plugin for eased gradient stops.
Inspired by https://larsenwork.com/easing-gradients/.

It keeps Tailwind's standard gradient API (`bg-linear-*`, `from-*`, `to-*`) and adds a modifier utility:

- `gradient-ease-linear`
- `gradient-ease-in`
- `gradient-ease-out`
- `gradient-ease-in-out`
- `gradient-ease-[cubic-bezier(...)]`

## Install

```bash
pnpm add easing-gradients
```

## Tailwind v4 setup

```css
@import "tailwindcss";
@plugin "easing-gradients";
```

## Usage

```html
<div
  class="bg-linear-to-b from-black to-transparent gradient-ease-in-out"
></div>

<div
  class="bg-linear-to-r from-blue-500 to-pink-500 gradient-ease-[cubic-bezier(0.3,0,0.2,1)]"
></div>
```

Inspired by https://larsenwork.com/easing-gradients/.
Works with Tailwind CSS v4+.
