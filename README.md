# A-SOUL Theme

[![Build](https://github.com/lawvs/a-soul-theme/actions/workflows/build.yml/badge.svg)](https://github.com/lawvs/a-soul-theme/actions/workflows/build.yml)

![image](https://user-images.githubusercontent.com/18554747/165396514-cca8483e-fcd2-43d8-8c06-4e922ec4623c.png)

## Install

- To start using your extension with Visual Studio Code copy it into the `<user home>/.vscode/extensions` folder and restart Code.
- To share your extension with the world, read on https://code.visualstudio.com/docs about publishing an extension.

## Development

```sh
# Clone this repo
git clone git@github.com:lawvs/a-soul-theme.git

# Install dependencies
pnpm install

# Development
pnpm run dev

# Build vsix package
pnpm run build
```

- You can press `F5` to open a new window with the extension loaded.
- Open `File > Preferences > Color Themes` and pick a color theme.
- Open a file that has a language associated. The languages' configured grammar will tokenize the text and assign 'scopes' to the tokens. To examine these scopes, invoke the `Developer: Inspect Editor Tokens and Scopes` command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) .

## References

- [Visual Studio Code Themes](https://code.visualstudio.com/docs/getstarted/themes)
- [Color Themes | Visual Studio Code](https://code.visualstudio.com/api/references/theme-color)
- [vscode-background](https://github.com/shalldie/vscode-background)
- [The VS Code Theme Editor](https://themes.vscode.one/)
- [vscode-theme-generator](https://github.com/Tyriar/vscode-theme-generator)
- [vscode-extension-samples](https://github.com/microsoft/vscode-extension-samples)
- [Dracula](https://github.com/dracula/dracula-theme)

## License

[The MIT License](./LICENSE)

NOTE: THE SOFTWARE ICON AND CHARACTERS IS NOT LICENSED BY MIT AND COPYRIGHT TO THE A-SOUL.
