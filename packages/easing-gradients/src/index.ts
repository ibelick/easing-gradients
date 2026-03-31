export type EasingGradientStop = {
  color: string;
  position: number;
  ease?: string;
};

export type EasingGradient = {
  angle?: string;
  stops: EasingGradientStop[];
};

export const createEasingGradient = (gradient: EasingGradient): string => {
  const angle = gradient.angle ?? "180deg";
  const stops = gradient.stops
    .map((stop) => `${stop.color} ${stop.position}%`)
    .join(", ");

  return `linear-gradient(${angle}, ${stops})`;
};
