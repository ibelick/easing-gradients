export const DEFAULT_STEPS = 12

function clamp01(value: number): number {
  if (value < 0) return 0
  if (value > 1) return 1
  return value
}

function cubicBezier(t: number, p1: number, p2: number): number {
  const u = 1 - t
  return 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t
}

export type CubicBezier = {
  x1: number
  y1: number
  x2: number
  y2: number
}

export function parseCubicBezier(input: string): CubicBezier | null {
  const match = input
    .trim()
    .match(
      /^cubic-bezier\(([-+]?\d*\.?\d+)\s*,\s*([-+]?\d*\.?\d+)\s*,\s*([-+]?\d*\.?\d+)\s*,\s*([-+]?\d*\.?\d+)\)$/i
    )

  if (!match) return null

  const [, x1, y1, x2, y2] = match
  const parsed = [Number(x1), Number(y1), Number(x2), Number(y2)]
  if (parsed.some((value) => Number.isNaN(value))) return null

  return {
    x1: parsed[0],
    y1: parsed[1],
    x2: parsed[2],
    y2: parsed[3],
  }
}

function formatPercent(value: number): string {
  return value.toFixed(2).replace(/\.00$/, "")
}

export function buildGradientStops(
  { x1, y1, x2, y2 }: CubicBezier,
  steps = DEFAULT_STEPS
): string {
  const entries: string[] = []

  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps
    const x = clamp01(cubicBezier(t, x1, x2))
    const y = clamp01(cubicBezier(t, y1, y2))
    const position = formatPercent(x * 100)
    const mix = formatPercent(y * 100)

    if (mix === "0") {
      entries.push(`var(--tw-gradient-from) ${position}%`)
      continue
    }

    if (mix === "100") {
      entries.push(
        `oklch(from var(--tw-gradient-to, oklch(from var(--tw-gradient-from) l c h / 0)) l c h / alpha) ${position}%`
      )
      continue
    }

    entries.push(
      `oklch(from color-mix(in oklch, var(--tw-gradient-to, oklch(from var(--tw-gradient-from) l c h / 0)) ${mix}%, var(--tw-gradient-from)) l c h / alpha) ${position}%`
    )
  }

  return entries.join(", ")
}
