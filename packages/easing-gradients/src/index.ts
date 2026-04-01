import plugin from "tailwindcss/plugin"
import { buildGradientStops, parseCubicBezier } from "./easingStops"

type TailwindPlugin = ReturnType<typeof plugin>

const presets = {
  linear: "cubic-bezier(0,0,1,1)",
  in: "cubic-bezier(0.42,0,1,1)",
  out: "cubic-bezier(0,0,0.58,1)",
  "in-out": "cubic-bezier(0.42,0,0.58,1)",
} as const

function makeGradientUtility(bezier: string): Record<string, string> {
  const parsed = parseCubicBezier(bezier)
  if (!parsed) return {}

  const stops = buildGradientStops(parsed)
  const easeStops = `var(--tw-gradient-position), ${stops}`

  return {
    "--tw-ease-gradient-stops": easeStops,
    "--tw-gradient-via-stops": "var(--tw-ease-gradient-stops)",
  }
}

const easingGradients: TailwindPlugin = plugin(
  ({ addUtilities, matchUtilities }) => {
    addUtilities({
      ".gradient-ease-linear": makeGradientUtility(presets.linear),
      ".gradient-ease-out": makeGradientUtility(presets.out),
      ".gradient-ease-in": makeGradientUtility(presets.in),
      ".gradient-ease-in-out": makeGradientUtility(presets["in-out"]),
    })

    matchUtilities(
      {
        "gradient-ease": (value) => makeGradientUtility(value),
      },
      {
        values: {},
        type: "any",
      }
    )
  }
)

export default easingGradients
