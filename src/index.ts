import { readFile, writeFile } from "fs/promises";
import * as path from "path";
import { transparentize } from "polished";
import { IColorSet } from "vscode-theme-generator";
import { VscodeThemeGenerator } from "vscode-theme-generator/dist/vscodeThemeGenerator";
import { DianaColor } from "./config";
import { prepareDir, toHexColorString } from "./utils";

const OUTPUT_DIR = path.join(process.cwd(), "themes");

const genTheme = async ({
  label,
  type,
  colorSet,
}: {
  label: string;
  type: "light" | "dark";
  colorSet: IColorSet & {
    tokenColors?: readonly {
      name: string;
      scope: string;
      settings: Record<string, string>;
    }[];
  };
}) => {
  const name = label.toLowerCase().split(" ").join("-");
  const file = path.relative(
    process.cwd(),
    path.join(OUTPUT_DIR, `${name}-color-theme.json`)
  );
  // generateTheme(theme.name, colorSet, path.join(OUTPUT_DIR, theme.file));
  const themeString = new VscodeThemeGenerator().generateTheme(name, colorSet);

  const themeJson = JSON.parse(themeString);
  if (colorSet.tokenColors) {
    themeJson.tokenColors.push(...colorSet.tokenColors);
  }

  await writeFile(file, JSON.stringify(themeJson, null, 2), {
    encoding: "utf8",
  });

  return {
    label,
    uiTheme: type === "dark" ? "vs-dark" : "vs",
    path: file,
  } as const;
};

const dianaDark = async () => {
  const theme = {
    label: "Diana Dark",
    type: "dark",
  } as const;

  /**
   * The background color is ported from [Dracula Theme](https://github.com/dracula/dracula-theme)
   *
   * Licensed under MIT.
   */
  const Background = "#282a36";

  /**
   * - color1 determines boolean, identifier, keyword, storage, and cssClass
   * - color2 determines string, stringEscape, and cssId
   * - color3 determines function, class, classMember, type, and cssTag
   * - color4 determines functionCall and number
   */
  const colorSet: IColorSet = {
    type: theme.type,
    base: {
      background: Background,
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

  const themes: ContributesTheme[] = [await dianaDark()];

  packageJson.contributes.themes = themes;

  await writeFile(
    path.join(process.cwd(), "package.json"),
    JSON.stringify(packageJson, null, 2) + "\n"
  );
};

main();
