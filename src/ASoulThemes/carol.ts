import { transparentize } from "polished";
import { IColorSet } from "vscode-theme-generator";
import { CarolColor } from "../config";
import { genTheme } from "../genTheme";
import { toHexColorString } from "../utils";

export const genCarolDark = async () => {
  const theme = {
    label: "Carol Dark",
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
      background: CarolColor.衣服暗部,
      foreground: CarolColor.应援色,
      color1: CarolColor.头发挑染,
      color2: CarolColor.头发亮部,
      color3: CarolColor.眼睛高亮,
      color4: CarolColor.领带,
    },
    ui: {
      cursor: CarolColor.应援色,
      selection: toHexColorString(transparentize(0.8, CarolColor.应援色)),
    },
    overrides: {
      "statusBar.background": CarolColor.鞋子,
      "editorInlayHint.background": toHexColorString(
        transparentize(0.8, CarolColor.应援色)
      ),
      "statusBar.debuggingBackground": CarolColor.领带,
    },
  };

  // Override token colors
  const tokenColors = [
    {
      name: "object key",
      scope: "meta.object-literal.key",
      settings: {
        foreground: CarolColor.皮肤,
      },
    },
    {
      name: "variable property",
      scope: "variable.other.property",
      settings: {
        foreground: CarolColor.皮肤,
      },
    },
    {
      name: "variable object",
      scope: "variable.other.object",
      settings: {
        foreground: CarolColor.领带,
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
