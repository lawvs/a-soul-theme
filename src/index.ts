import { readFile, writeFile } from "node:fs/promises";
import * as path from "node:path";
import { genAvaDark } from "./ASoulThemes/ava";
import { genBellaDark } from "./ASoulThemes/bella";
import { genCarolDark } from "./ASoulThemes/carol";
import { genDianaDark } from "./ASoulThemes/diana";
import { genEileenDark } from "./ASoulThemes/eileen";
import { OUTPUT_DIR } from "./config";
import { prepareDir } from "./utils";

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
    genDianaDark(),
    genAvaDark(),
    genBellaDark(),
    genCarolDark(),
    genEileenDark(),
  ]);

  packageJson.contributes.themes = themes;

  await writeFile(
    path.join(process.cwd(), "package.json"),
    JSON.stringify(packageJson, null, 2) + "\n"
  );
};

main();
