import {
  type CSSProperties,
  type PointerEvent,
  useMemo,
  useState,
} from "react";
import { buildGradientStops } from "../../../packages/easing-gradients/src/easingStops";

type Preset =
  | "none"
  | "linear"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "custom";

const PRESETS: Record<
  Exclude<Preset, "none" | "custom">,
  [number, number, number, number]
> = {
  linear: [0, 0, 1, 1],
  "ease-in": [0.42, 0, 1, 1],
  "ease-out": [0, 0, 0.58, 1],
  "ease-in-out": [0.42, 0, 0.58, 1],
};

const PRESET_CLASSES: Record<Exclude<Preset, "none" | "custom">, string> = {
  linear: "gradient-ease-linear",
  "ease-in": "gradient-ease-in",
  "ease-out": "gradient-ease-out",
  "ease-in-out": "gradient-ease-in-out",
};

const PLOT_MIN = 0;
const PLOT_MAX = 220;
const PLOT_SIZE = PLOT_MAX - PLOT_MIN;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function cubicPoint(t: number, p0: number, p1: number, p2: number, p3: number) {
  const u = 1 - t;
  return (
    u * u * u * p0 + 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t * p3
  );
}

function formatBezier(bezier: [number, number, number, number]) {
  return `cubic-bezier(${bezier.map((value) => value.toFixed(2)).join(",")})`;
}

export default function Playground() {
  const [preset, setPreset] = useState<Preset>("ease-out");
  const [custom, setCustom] = useState<[number, number, number, number]>([
    0.35, 0.0, 0.2, 1.0,
  ]);
  const [maskHeight, setMaskHeight] = useState(66);
  const [activeHandle, setActiveHandle] = useState<1 | 2 | null>(null);

  const curve =
    preset === "custom" ? custom : preset === "none" ? null : PRESETS[preset];

  const easingClass =
    preset === "none"
      ? ""
      : preset === "custom"
        ? "gradient-ease-linear"
        : PRESET_CLASSES[preset];

  const classNamePreview =
    preset === "none"
      ? "none"
      : preset === "custom"
        ? `gradient-ease-[${formatBezier(custom)}]`
        : PRESET_CLASSES[preset];

  const fullClassNamePreview =
    preset === "none"
      ? "bg-linear-to-b from-transparent to-black/80"
      : `bg-linear-to-b from-transparent to-black/80 ${classNamePreview}`;

  const customStyle = useMemo(() => {
    if (preset !== "custom") return undefined;

    const stops = buildGradientStops({
      x1: custom[0],
      y1: custom[1],
      x2: custom[2],
      y2: custom[3],
    });

    return {
      "--tw-ease-gradient-stops": `var(--tw-gradient-position), ${stops}`,
      "--tw-gradient-via-stops": "var(--tw-ease-gradient-stops)",
      "--tw-gradient-stops": "var(--tw-ease-gradient-stops)",
    } as CSSProperties;
  }, [custom, preset]);

  const curvePath = useMemo(() => {
    const activeCurve = curve ?? PRESETS.linear;
    const points: string[] = [];

    for (let i = 0; i <= 44; i += 1) {
      const t = i / 44;
      const x = cubicPoint(t, 0, activeCurve[0], activeCurve[2], 1);
      const y = cubicPoint(t, 0, activeCurve[1], activeCurve[3], 1);
      const px = PLOT_MIN + x * PLOT_SIZE;
      const py = PLOT_MAX - y * PLOT_SIZE;
      points.push(`${px},${py}`);
    }

    return `M ${points.join(" L ")}`;
  }, [curve]);

  const graphCurve = curve ?? PRESETS.linear;

  const setPoint = (index: 0 | 1 | 2 | 3, value: number) => {
    setCustom((current) => {
      const next = [...current] as [number, number, number, number];
      next[index] = Number(value.toFixed(2));
      return next;
    });
  };

  const updateHandle = (event: PointerEvent<SVGSVGElement>, handle: 1 | 2) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 220;
    const y = ((event.clientY - rect.top) / rect.height) * 220;
    const normalizedX = clamp((x - PLOT_MIN) / PLOT_SIZE, 0, 1);
    const normalizedY = clamp((PLOT_MAX - y) / PLOT_SIZE, 0, 1);

    if (handle === 1) {
      setPoint(0, normalizedX);
      setPoint(1, normalizedY);
      return;
    }

    setPoint(2, normalizedX);
    setPoint(3, normalizedY);
  };

  return (
    <section className="flex flex-col gap-4">
      <p className="font-[450] text-strong">Playground</p>
      <div className="grid gap-6 sm:grid-cols-5 sm:items-start">
        <div className="flex flex-col gap-2 sm:col-span-3">
          <p className="text-muted">Preview</p>
          <div className="relative aspect-square w-full border border-border bg-white">
            <div
              className={`pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-b from-transparent to-black/80 ${easingClass}`}
              style={{ ...customStyle, height: `${maskHeight}%` }}
            />
          </div>
          <code>{fullClassNamePreview}</code>
        </div>

        <div className="flex flex-col gap-3 sm:col-span-2">
          <label className="flex flex-col gap-2">
            <span className="text-muted">Fade</span>
            <select
              value={preset}
              onChange={(event) => setPreset(event.target.value as Preset)}
              className="w-full border border-border bg-bg px-3 py-2 text-strong"
            >
              <option value="none">None</option>
              <option value="linear">Linear</option>
              <option value="ease-in">Ease in</option>
              <option value="ease-out">Ease out</option>
              <option value="ease-in-out">Ease in out</option>
              <option value="custom">Custom</option>
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-muted">Mask height: {maskHeight}%</span>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={maskHeight}
              onChange={(event) => setMaskHeight(Number(event.target.value))}
              className="accent-black"
            />
          </label>

          <div className="relative aspect-square w-full border border-border">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-subtle) 1px, transparent 1px), linear-gradient(to top, var(--color-subtle) 1px, transparent 1px)",
                backgroundSize: "20% 20%",
              }}
            />

            <svg
              viewBox="0 0 220 220"
              className="absolute inset-0 h-full w-full touch-none overflow-visible"
              onPointerMove={(event) => {
                if (preset === "custom" && activeHandle) {
                  updateHandle(event, activeHandle);
                }
              }}
              onPointerUp={() => setActiveHandle(null)}
              onPointerCancel={() => setActiveHandle(null)}
              onPointerLeave={() => setActiveHandle(null)}
            >
              <path
                d={`M${PLOT_MIN} ${PLOT_MAX} L${PLOT_MAX} ${PLOT_MAX}`}
                stroke="currentColor"
                className="text-border"
              />
              <path
                d={`M${PLOT_MIN} ${PLOT_MAX} L${PLOT_MIN} ${PLOT_MIN}`}
                stroke="currentColor"
                className="text-border"
              />
              <path
                d={`M${PLOT_MIN} ${PLOT_MAX} L${PLOT_MIN + graphCurve[0] * PLOT_SIZE} ${PLOT_MAX - graphCurve[1] * PLOT_SIZE}`}
                stroke="currentColor"
                className="text-muted"
              />
              <path
                d={`M${PLOT_MAX} ${PLOT_MIN} L${PLOT_MIN + graphCurve[2] * PLOT_SIZE} ${PLOT_MAX - graphCurve[3] * PLOT_SIZE}`}
                stroke="currentColor"
                className="text-muted"
              />
              <path
                d={curvePath}
                fill="none"
                stroke="currentColor"
                className="text-strong"
              />
              <circle
                cx={PLOT_MIN + graphCurve[0] * PLOT_SIZE}
                cy={PLOT_MAX - graphCurve[1] * PLOT_SIZE}
                r="4"
                fill="currentColor"
                className={
                  preset === "custom"
                    ? "cursor-grab text-strong active:cursor-grabbing"
                    : "text-muted"
                }
                onPointerDown={(event) => {
                  if (preset !== "custom") return;
                  event.currentTarget.setPointerCapture(event.pointerId);
                  setActiveHandle(1);
                }}
              />
              <circle
                cx={PLOT_MIN + graphCurve[2] * PLOT_SIZE}
                cy={PLOT_MAX - graphCurve[3] * PLOT_SIZE}
                r="4"
                fill="currentColor"
                className={
                  preset === "custom"
                    ? "cursor-grab text-strong active:cursor-grabbing"
                    : "text-muted"
                }
                onPointerDown={(event) => {
                  if (preset !== "custom") return;
                  event.currentTarget.setPointerCapture(event.pointerId);
                  setActiveHandle(2);
                }}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
