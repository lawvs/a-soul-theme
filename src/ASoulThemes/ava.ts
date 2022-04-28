import { transparentize } from "polished";
import { IColorSet } from "vscode-theme-generator";
import { DarkBackground, AvaColor } from "../config";
import { genTheme } from "../genTheme";
import { toHexColorString } from "../utils";

export const genAvaDark = async () => {
  const theme = {
    label: "Ava Dark",
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
      foreground: AvaColor.应援色,
      color1: AvaColor.头发,
      color2: AvaColor.裙子,
      color3: AvaColor.裙子,
      color4: AvaColor.领结,
    },

    ui: {
      cursor: AvaColor.应援色,
      selection: toHexColorString(transparentize(0.8, AvaColor.应援色)),
    },
    overrides: {
      "statusBar.background": AvaColor.鞋子,
      "statusBar.debuggingBackground": AvaColor.领结,
      "editorInlayHint.foreground": toHexColorString(
        transparentize(0.4, AvaColor.皮肤)
      ),
    },
  };

  // Override token colors
  const tokenColors = [
    {
      name: "object key",
      scope: "meta.object-literal.key",
      settings: {
        foreground: AvaColor.发梢,
      },
    },
    {
      name: "variable property",
      scope: "variable.other.property",
      settings: {
        foreground: AvaColor.头发暗部,
      },
    },
    {
      name: "type primitive",
      scope: "support.type.primitive",
      settings: {
        foreground: AvaColor.头饰飘带,
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
