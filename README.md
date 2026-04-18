# StylePulse · 部署指引

## 最简单的部署方式（10-15 分钟，全程浏览器操作）

### 第 1 步：注册两个免费账号
1. 打开 https://github.com 注册一个账号（用于存代码）
2. 打开 https://vercel.com 用 GitHub 账号登录（用于部署）

### 第 2 步：把代码上传到 GitHub
1. 在 GitHub 右上角点 `+` → `New repository`
2. 名字填 `stylepulse`，选 `Public`，点 `Create repository`
3. 在新仓库页面点 `uploading an existing file`
4. 把这个文件夹里的所有文件**（除了 node_modules）**拖进去上传
5. 下方点绿色按钮 `Commit changes`

### 第 3 步：Vercel 一键部署
1. 登录 Vercel 后点 `Add New` → `Project`
2. 选刚创建的 `stylepulse` 仓库，点 `Import`
3. 什么都不用改，直接点 `Deploy`
4. 等 1-2 分钟，会得到类似 `stylepulse-xxx.vercel.app` 的网址

就完成了。把这个网址发给任何人，手机打开就能看到你的原型。

### 以后想修改怎么办？
直接让 Claude 改代码，改完替换 GitHub 里的文件，Vercel 会自动重新部署，不用管任何事。

## 项目文件说明
- `src/App.jsx` - 主要的 UI 代码（要改界面改这个）
- `src/index.css` - 全局样式
- `package.json` - 依赖清单
- 其他都是工具配置，不用动

## 技术栈
- React 18 + Vite（前端框架）
- Tailwind CSS（样式）
- Lucide React（图标）
- 部署在 Vercel（免费）
