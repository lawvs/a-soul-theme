import { writeFile } from "fs/promises";
import * as path from "path";
import { IColorSet } from "vscode-theme-generator";
import { VscodeThemeGenerator } from "vscode-theme-generator/dist/vscodeThemeGenerator";
import { OUTPUT_DIR } from "./config";

export const genTheme = async ({
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
