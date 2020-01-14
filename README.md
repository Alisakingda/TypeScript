# TypeScript

---

## 在 TypeScript 中使用 ESLint

ESLint 可以安装在当前项目中或全局环境下

`npm install --save-dev eslint`

替代掉默认的解析器，别忘了同时安装 typescript

`npm install --save-dev typescript @typescript-eslint/parser`

eslint 默认规则的补充

`npm install --save-dev @typescript-eslint/eslint-plugin`

### 创建配置文件

.eslintrc.js 或 .eslintrc.json

```js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // 禁止使用 var
    'no-var': 'error',
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface']
  }
}
```

package.json 中添加一个 script

```json
{
  "scripts": {
    "eslint": "eslint index.ts"
  }
}
```

### 检查整个项目的 ts 文件

```json
{
  "scripts": {
    "eslint": "eslint src --ext .ts"
  }
}
```

### 在 VSCode 中集成 ESLint 检查

省略（本人 github 上有 vscode 整体配置）

### 使用 Prettier 修复格式错误

1. 安装 prettier
   `npm install --save-dev prettier`

创建一个 prettier.config.js 文件

```js
// prettier.config.js or .prettierrc.js
module.exports = {
  // 一行最多 100 字符
  printWidth: 100,
  // 使用 4 个空格缩进
  tabWidth: 4,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾不需要逗号
  trailingComma: 'none',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 lf
  endOfLine: 'lf'
}
```

2. VSCode 中的 Prettier 插件

.vscode/settings.json

```json
{
  "files.eol": "\n",
  "editor.tabSize": 4,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    }
  ],
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## 使用 AlloyTeam 的 ESLint 配置

`npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-alloy`

.eslintrc.js

```js
module.exports = {
  extends: ['alloy', 'alloy/typescript'],
  env: {
    // 您的环境变量（包含多个预定义的全局变量）
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 您的全局变量（设置为 false 表示它不允许被重新赋值）
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // 自定义您的规则
    // Customize your rules
  }
}
```

### 使用 ESLint 检查 tsx 文件

1.

安装 eslint-plugin-react

`npm install --save-dev eslint-plugin-react`

2.

package.json 中的 scripts.eslint 添加 .tsx 后缀

```json
{
  "scripts": {
    "eslint": "eslint src --ext .ts,.tsx"
  }
}
```

3.vscode 配置

```json
{
  "files.eol": "\n",
  "editor.tabSize": 4,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ],
  "typescript.tsdk": "node_modules/typescript/lib"
}
```
