import type { PathLike } from "node:fs";
import { existsSync, mkdirSync } from "node:fs";
import { parseToRgb, rgb } from "polished";

export const prepareDir = (dir: PathLike) => {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
};

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
