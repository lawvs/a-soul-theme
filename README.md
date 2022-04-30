# A-SOUL Theme

[![Build](https://github.com/lawvs/a-soul-theme/actions/workflows/build.yml/badge.svg)](https://github.com/lawvs/a-soul-theme/actions/workflows/build.yml)

![a-soul-theme-preview](https://user-images.githubusercontent.com/18554747/165832745-806aea1f-a370-4d6a-9511-dc8d91a02f65.png)

![image](https://user-images.githubusercontent.com/18554747/165396514-cca8483e-fcd2-43d8-8c06-4e922ec4623c.png)

Read this in [简体中文 (Simplified Chinese)](./README.zh-cn.md)

## Install

- Download `a-soul-theme.vsix` from the [Releases](https://github.com/lawvs/a-soul-theme/releases) page.
- Copy `a-soul-theme.vsix` into the `<user home>/.vscode/extensions` folder and restart Code.
- Or install it from `extension panel`.
  ![image](https://user-images.githubusercontent.com/18554747/165837108-f8a7da00-26d8-4c2a-b08e-86a61f42c5e3.png)
- Change color theme.
  ![image](https://user-images.githubusercontent.com/18554747/165841439-141b06cd-0f37-4701-8b58-b96e2b23bc16.png)


## Development

```sh
# Clone this repo
git clone git@github.com:lawvs/a-soul-theme.git

cd ./a-soul-theme

# Install dependencies
pnpm install

# Development
pnpm run dev

# Build theme
pnpm run build

# Build vsix package
pnpm run package
```

- You can press `F5` to open a new window with the extension loaded.
- Open `File > Preferences > Color Themes` and pick a color theme.
- Open a file that has a language associated. The languages configured grammar will tokenize the text and assign 'scopes' to the tokens. To examine these scopes, invoke the `Developer: Inspect Editor Tokens and Scopes` command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).

![inspect token](https://user-images.githubusercontent.com/18554747/166101716-538d8e05-f06c-4a05-8524-6c468d6a5359.png)

## References

- [Visual Studio Code Themes](https://code.visualstudio.com/docs/getstarted/themes)
- [Color Themes | Visual Studio Code](https://code.visualstudio.com/api/references/theme-color)
- [The VS Code Theme Editor](https://themes.vscode.one/)
- [vscode-theme-generator](https://github.com/Tyriar/vscode-theme-generator)
- [vscode-extension-samples](https://github.com/microsoft/vscode-extension-samples)
- [Dracula](https://github.com/dracula/dracula-theme)

## License

[The MIT License](./LICENSE)

NOTE: THE SOFTWARE ICON AND CHARACTERS IS NOT LICENSED BY MIT AND COPYRIGHT TO THE A-SOUL.
