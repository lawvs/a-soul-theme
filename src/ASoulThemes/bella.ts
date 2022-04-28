import { transparentize } from "polished";
import { IColorSet } from "vscode-theme-generator";
import { BellaColor } from "../config";
import { genTheme } from "../genTheme";
import { toHexColorString } from "../utils";

export const genBellaDark = async () => {
  const theme = {
    label: "Bella Dark",
    type: "dark",
  } as const;

  /**
   * - color1 determines boolean, identifier, keyword, storage, and cssClass
   * - color2 determines string, stringEscape, and cssId
   * - color3 determines function, class, classMember, type, and cssTag
   * - color4 determines functionCall and number
   */
  const colorSet: IColorSet = {
    type: theme.type,
    base: {
      background: BellaColor.裙子,
      foreground: BellaColor.皮肤,
      color1: BellaColor.衣服,
      color2: BellaColor.黄星头饰,
      color3: BellaColor.头发高亮,
      color4: BellaColor.应援色,
    },
    ui: {
      cursor: BellaColor.应援色,
      selection: toHexColorString(transparentize(0.8, BellaColor.应援色)),
    },
    overrides: {
      "editorInlayHint.background": toHexColorString(
        transparentize(0.8, BellaColor.应援色)
      ),
    },
  };

  // Override token colors
  const tokenColors = [
    {
      name: "object key",
      scope: "meta.object-literal.key",
      settings: {
        foreground: BellaColor.皮肤,
      },
    },
    {
      name: "variable property",
      scope: "variable.other.property",
      settings: {
        foreground: BellaColor.皮肤,
      },
    },
  ] as const;

  return genTheme({
    label: theme.label,
    type: theme.type,
    colorSet: {
      ...colorSet,
      tokenColors,
    },
  });
};
