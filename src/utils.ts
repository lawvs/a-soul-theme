import { parseToRgb, rgb } from "polished";

/**
 * Format color string to hex color format
 * @example
 * ```ts
 * toHexColorString('rgba(250,235,151,0.9)')
 * // '#faeb97e5'
 * ```
 */
export const toHexColorString = (color: string) => {
  const maybeRgbaColor = parseToRgb(color);

  if ("alpha" in maybeRgbaColor) {
    const { alpha, ...RgbColor } = maybeRgbaColor;
    return rgb(RgbColor) + Math.trunc(alpha * 255).toString(16);
  }
  const RgbColor = maybeRgbaColor;
  return rgb(RgbColor);
};
