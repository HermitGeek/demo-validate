## 一、目录结构

- 项目 根目录

    ```
    ├── /.vscode             # vscode 编辑器配置
    │   ├── /pluginList.md   # vscode 插件列表
    │   ├── /settings.json   # vscode 基础配置
    │   │
    ├── /configs             # 项目 构建配置
    │   ├── /dev.conf.js     # 开发模式 构建配置
    │   ├── /prod.conf.js    # 生产模式 构建配置
    │   │
    ├── /dist                # 构建后文件
    ├── /docs                # 项目文档
    ├── /node_modules        # 项目依赖
    ├── /scripts             # 构建脚本
    │   ├── /jenkins         # jenkins 构建、部署 脚本
    │   ├── /webpack         # webpack 配置文件
    │   │
    ├── /src                 # 项目路径
    ├── .csscomb.json        # csscomb 配置
    ├── .editorconfig        # editorconfig 配置
    ├── .eslintignore        # eslint 忽略的文件
    ├── .eslintrc            # eslint 配置
    ├── .gitignore           # git 忽略的文件
    ├── .jsbeautifyrc        # js 格式化配置
    ├── .stylelintrc         # css 格式化配置
    ├── .babel.config.js     # babel 配置
    ├── .jsconfig.json       # jsconfig 配置
    ├── package-lock.json    # 锁定依赖包版本
    ├── package.json         # 项目组 npm 配置
    ├── postcss.config.js    # postcss 配置
    ```

- 项目 配置目录

    ```
    ├── /configs             # 项目 构建配置
    │   ├── /dev.conf.js     # 开发模式 构建配置（环境变量、构建路径）
    │   ├── /prod.conf.js    # 生产模式 构建配置（环境变量、构建路径）   
    ```

- 项目 开发目录

    ```
    ├── /src                       
    │   ├── /common                 # 通用 模块
    │       ├── /utils              # 通用 脚本
    │           ├── /$api-conf      # ajax API 配置
    │           ├── /$cache         # localforage 配置
    │           ├── /$dicts         # 数据字典 配置
    │           ├── /$handler       # 方法集
    │           ├── /$http          # ajax 封装方法
    │           ├── /$router        # 路由配置
    │           ├── /$store         # 状态树配置
    │           │
    │       ├── /views              # 通用 页面组件
    │           ├── /$app           # 通用模块 入口页面
    │           ├── /demo           # 通用模块 demo页面
    │           │
    │       ├── /widgets            # 通用 UI组件
    │           ├── /$icons         # fontawesome 配置（PC端）
    │           ├── /$iview         # iview 配置（PC端）
    │           ├── /$vant          # vant 配置（mobile端）
    │           ├── /base-chart     # 图表组件（基于 echarts）
    │           ├── /base-loading   # loading 组件（PC端）
    │           │
    │   ├── /module1                # module1 模块
    │       ├── /utils              # 独立模块 脚本
    │       │
    │       ├── /views              # 独立模块 页面组件
    │           ├── /$app           # 独立模块 入口页面
    │           ├── /demo           # 独立模块 demo页面
    │           │
    │       ├── /widgets            # 独立模块 UI组件
    │       │
    │   ├── /index.html             # html 模板
    │   ├── /index.js               # 入口 JS
    ```

## 二、命令列表

> 如下命令，均在 项目根目录下执行

- `npm run serve:dev`

    以开发模式 本地运行项目

- `npm run serve:prod`
    
    以生产模式 本地运行项目

- `npm run build:dev`

    以开发模式 构建项目

- `npm run build:prod`

    以生产模式 构建项目

- `npm run build:show`

    以生产模式 构建项目，并可视化展示 打包后代码体积

- `npm run eslint:fix`

    根据 eslint、airbnb 规范 校验 JavaScript，并自动修复 部分问题


## 三、开发约束

### 1. PC端、mobile端 约束

关于 路径

- 路径别名 `@src`：等同于 `/src`（项目中不允许 使用绝对路径）

- 引入路径层级较多：推荐使用 `@src/`

关于 ajax

- 通用模块下 `$http` 是基于 axios 封装的通用方法，该方法被挂载到 Vue实例下，接口配置位于 `@src/common/utils/$api-conf`

- 项目中发请求 均使用 `this.$http()`；状态树中发请求 需引入 `$http` 文件


关于 `$router`

- 每个模块均有自己的 入口页面组件，即模块下的 `views/$app`，通用模块 入口页面组件：`@src/common/views/$app`

- 页面组件 层级如下：

    ```
    通用模块 `$app` 页面组件 > 通用模块 其他页面组件 = 独立模块 `$app` 页面组件 > 独立模块 其他页面组件
    ```

- 路由配置 `@src/common/utils/$router` 中，路由参数 `meta.keepAlive` 决定当前页面是否开启 `keep-alive` 缓存

- 路由配置 `@src/common/utils/$router` 中，路由参数 `meta.rank` 决定已缓存的页面，何时 动态销毁缓存（具体机制 见 路由配置代码）


关于 状态管理

- 状态树中定义的变量，均以 `$` 开头，与组件内变量的命名 做明显区分

- 状态树 `$group` 中存储的状态，默认被存储到 `localStorage` 中

- 禁止 `getters` 直接返回 `state` 中的值，这种场景下 在组件中直接获取 `state` 中的值，是个不错的选择


关于 依赖包的引入

- dev开发者 不能擅自引入 依赖包，需 master开发者 确认

- 依赖包 能按需引入的一定要按需引入，如 `lodash`、`iview`、`fontawesome` 等

    ```
    // 最佳实践

    import _cloneDeep from 'lodash/cloneDeep';
    ```


### 2. PC端 约束

- 页面 定宽 `1200px`

- 使用 [iview](https://www.iviewui.com/) 组件库，相关配置位于 `@src/common/widgets/$iview`

- 使用 [fontawesome](https://fontawesome.com/) 字体图标，相关配置位于 `@src/common/widgets/$icons`

- 图片 **建议压缩**，压缩用具 [TinyPNG](https://tinypng.com/)


### 3. mobile端 约束

- 页面 最大宽度 `750px`

- 避免使用过多的lib，以保证 mobile端页面性能

- 在非必要情况下，避免使用状态管理方案（vuex）

- 必要时可使用 [vant](https://youzan.github.io/vant/#/zh-CN/intro) 组件库，相关配置位于 `@src/common/widgets/$vant`

- 图片 **必须压缩**，压缩用具 [TinyPNG](https://tinypng.com/)；尽量使用 `jpg` 格式的图片，压缩率高

- 任何文件名、路径中 不得出现中文
    
- mobile端设计稿 是以 `iPhone6/7/8` 屏幕为基准 的二倍图，设计稿宽度 750px

- mobile端适配 采用 `rem` + `viewport` 方案，使用插件 `postcss-px2rem-exclude` 自动将 `px` 单位转成 `rem` 单位（只转换 `@src/` 目录下的CSS文件）
    
    > 针对 需要转换单位的CSS属性值，具体尺寸 为设计稿尺寸，单位 `px`，属性值后面 无注释

    > 针对 不需要转换单位的CSS属性值，具体尺寸 为设计稿尺寸的 `1/2`，单位 `px`，属性值后面 增加注释 `/* no */`



## 四、代码校验

- vscode 插件列表，见 `.vscode`，及时安装

- `commit` 前，终端执行命令 `npm run eslint:fix` 检验并改正

- 代码校验遵循 框架集成的 开发规范，参考如下

    - CSS 规范: styleLint

    - CSS 转换: postcss

    - CSS 美化: csscomb

    - CSS 预编译: scss（推荐）、sass、less

    - JavaScript 规范: eslint + airbnb

    - JavaScript 转换: babel7

    - JavaScript 美化: jsbeautifier
