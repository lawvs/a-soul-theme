import { transparentize } from "polished";
import { IColorSet } from "vscode-theme-generator";
import { DarkBackground, DianaColor } from "../config";
import { genTheme } from "../genTheme";
import { toHexColorString } from "../utils";

export const genDianaDark = async () => {
  const theme = {
    label: "Diana Dark",
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
      background: DarkBackground,
      foreground: DianaColor.皮肤,
      color1: DianaColor.衣服暗部,
      color2: DianaColor.头发亮部,
      color3: DianaColor.裙子,
      color4: DianaColor.领结,
    },
    syntax: {
      // identifier: DianaColor.眼睛亮部,
    },
    ui: {
      cursor: DianaColor.应援色,
      selection: toHexColorString(transparentize(0.7, DianaColor.应援色)),
    },
    overrides: {
      "statusBar.background": DianaColor.鞋子,
      "editorInlayHint.background": toHexColorString(
        transparentize(0.8, DianaColor.应援色)
      ),
      "statusBar.debuggingBackground": DianaColor.领结,
    },
  };

  // Override token colors
  const tokenColors = [
    {
      name: "object key",
      scope: "meta.object-literal.key",
      settings: {
        foreground: DianaColor.皮肤,
      },
    },
    {
      name: "variable property",
      scope: "variable.other.property",
      settings: {
        foreground: DianaColor.皮肤,
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
