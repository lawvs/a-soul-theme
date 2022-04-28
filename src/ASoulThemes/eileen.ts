import { transparentize } from "polished";
import { IColorSet } from "vscode-theme-generator";
import { EileenColor } from "../config";
import { genTheme } from "../genTheme";
import { toHexColorString } from "../utils";

export const genEileenDark = async () => {
  const theme = {
    label: "Eileen Dark",
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
      background: EileenColor.裙子,
      foreground: EileenColor.皮肤,
      color1: EileenColor.手环,
      color2: EileenColor.头发暗部,
      color3: EileenColor.眼睛亮部,
      color4: EileenColor.鞋子,
    },
    ui: {
      cursor: EileenColor.应援色,
      selection: toHexColorString(transparentize(0.5, EileenColor.应援色)),
    },
    overrides: {
      "statusBar.background": EileenColor.鞋子,
      "statusBar.debuggingBackground": EileenColor.吊坠,
    },
  };

  // Override token colors
  const tokenColors = [
    {
      name: "object key",
      scope: "meta.object-literal.key",
      settings: {
        foreground: EileenColor.皮肤,
      },
    },
    {
      name: "variable property",
      scope: "variable.other.property",
      settings: {
        foreground: EileenColor.手环,
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
