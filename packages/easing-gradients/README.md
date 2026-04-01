# easing-gradients

<!-- cover: coming soon -->

Tailwind CSS plugin that eases gradient stop distribution to reduce hard edges in fades and overlays.

[easing-gradients.ibelick.com](https://easing-gradients.ibelick.com)

| Class                               | Effect                        |
| ----------------------------------- | ----------------------------- |
| `gradient-ease-linear`              | Default linear distribution.  |
| `gradient-ease-in`                  | More change toward the end.   |
| `gradient-ease-out`                 | More change near the start.   |
| `gradient-ease-in-out`              | Smooth ends, stronger middle. |
| `gradient-ease-[cubic-bezier(...)]` | Custom easing curve.          |

## Install

```bash
pnpm add easing-gradients
```

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

## Notes

- Inspired by https://larsenwork.com/easing-gradients.
- CSSWG proposal https://github.com/w3c/csswg-drafts/issues/1332
- Works with Tailwind CSS v4+.
- License: [MIT](LICENSE)
