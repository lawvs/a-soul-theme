import { readFile, writeFile } from "fs/promises";
import * as path from "path";
import { transparentize } from "polished";
import { IColorSet } from "vscode-theme-generator";
import { AvaColor, BellaColor, DianaColor, OUTPUT_DIR } from "./config";
import { genTheme } from "./genTheme";
import { prepareDir, toHexColorString } from "./utils";

/**
 * The background color is ported from [Dracula Theme](https://github.com/dracula/dracula-theme)
 *
 * Licensed under MIT.
 */
const DarkBackground = "#282a36";

const avaDark = async () => {
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
      selection: toHexColorString(transparentize(0.8, AvaColor.应援色)), //"#faeb9788",
    },
    overrides: {
      "statusBar.background": AvaColor.鞋子,
      "statusBar.debuggingBackground": AvaColor.领结,
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
      scope: "	support.type.primitive",
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

const bellaDark = async () => {
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
      selection: toHexColorString(transparentize(0.8, BellaColor.应援色)), //"#faeb9788",
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

const dianaDark = async () => {
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
      selection: toHexColorString(transparentize(0.8, DianaColor.应援色)), //"#faeb9788",
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

type ContributesTheme = {
  label: string;
  uiTheme: "vs-dark" | "vs";
  path: string;
};

const main = async () => {
  await prepareDir(OUTPUT_DIR);

  const packageJson = JSON.parse(
    await readFile(path.join(process.cwd(), "package.json"), {
      encoding: "utf8",
    })
  );

  const themes: ContributesTheme[] = await Promise.all([
    bellaDark(),
    avaDark(),
    dianaDark(),
  ]);

  packageJson.contributes.themes = themes;

  await writeFile(
    path.join(process.cwd(), "package.json"),
    JSON.stringify(packageJson, null, 2) + "\n"
  );
};

main();
