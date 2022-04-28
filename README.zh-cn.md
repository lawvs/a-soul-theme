# A-SOUL Theme

[![Build](https://github.com/lawvs/a-soul-theme/actions/workflows/build.yml/badge.svg)](https://github.com/lawvs/a-soul-theme/actions/workflows/build.yml)

![a-soul-theme-preview](https://user-images.githubusercontent.com/18554747/165832745-806aea1f-a370-4d6a-9511-dc8d91a02f65.png)

![image](https://user-images.githubusercontent.com/18554747/165396514-cca8483e-fcd2-43d8-8c06-4e922ec4623c.png)

使用 [English(英语)](./README.md) 阅读本文档


## 安装

- 先从 [Releases](https://github.com/lawvs/a-soul-theme/releases) 页面下载 `a-soul-theme.vsix`。
- 复制 `a-soul-theme.vsix` 到 `<user home>/.vscode/extensions` 文件夹下，然后重启 VSCode.
- 你也可以直接在 `扩展面板` 安装下载好的 `a-soul-theme.vsix` 扩展.
  ![image](https://user-images.githubusercontent.com/18554747/165837108-f8a7da00-26d8-4c2a-b08e-86a61f42c5e3.png)

## 开发

```sh
# 克隆本仓库
git clone git@github.com:lawvs/a-soul-theme.git

cd ./a-soul-theme

# 安装依赖
pnpm install

# 启用开发模式
pnpm run dev

# 构建生成主题
pnpm run build

# 构建 vsix 包
pnpm run package
```

- 可以直接按 `F5` 打开一个新的窗口预览主题.
- 可以从菜单栏的 `File > Preferences > Color Themes` 挑选主题.
- 使用命令面板(Windows `Ctrl+Shift+P`，Mac `Cmd+Shift+P`)的 `Developer: Inspect Editor Tokens and Scopes` 可以检查语言的语法和作用域.

## 参考资料

- [Visual Studio Code Themes](https://code.visualstudio.com/docs/getstarted/themes)
- [Color Themes | Visual Studio Code](https://code.visualstudio.com/api/references/theme-color)
- [The VS Code Theme Editor](https://themes.vscode.one/)
- [vscode-theme-generator](https://github.com/Tyriar/vscode-theme-generator)
- [vscode-extension-samples](https://github.com/microsoft/vscode-extension-samples)
- [Dracula](https://github.com/dracula/dracula-theme)

## 授权

[The MIT License](./LICENSE)

注意：本软件的图标和设计参考的角色不包含在 MIT 许可中，A-SOUL 拥有版权。
