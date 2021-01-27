1.参考[官方快速上手](https://vuepress.github.io/zh/guide/getting-started.html#%E6%89%8B%E5%8A%A8%E5%AE%89%E8%A3%85)创建前端项目 2.添加`2.0.0-rc.9`依赖

```json
{
  "name": "vuepress-next-demo",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  },
  "dependencies": {
    "ant-design-vue": "^2.0.0-rc.9",
    "vuepress": "^2.0.0-alpha.19"
  },
  "devDependencies": {
    "less": "^4.1.0",
    "less-loader": "^7.3.0"
  }
}
```

3. `docs/.vuepress`创建`config.ts`和`clientAppEnhance.ts`

- config.ts

```ts
import type { UserConfig, DefaultThemeOptions } from 'vuepress';

const config: UserConfig<DefaultThemeOptions> = {
  lang: 'zh-CN',
  title: 'Ant Design Vue 测试',
  description: 'Ant Design Vue v2 测试',
  port: 3000,
  bundlerConfig: {
    less: {
      lessOptions: {
        modifyVars: {},
        javascriptEnabled: true,
      },
    },
  },
};

// @ts-ignore
export = config;
```

- clientAppEnhance.ts

```ts
import type { ClientAppEnhance } from '@vuepress/client';
import antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';

const clientAppEnhance: ClientAppEnhance = ({ app }) => {
  app.use(antd);
};

export default clientAppEnhance;
```

5. `docs/README.md` 使用 `tooltip`

```markdown
# Hello VuePress

测试

<a-tooltip title="tooltip 标题">
这是 tooltip
</a-tooltip>

<a-card title="card 标题">
这是 card
</a-card>
```

6. 执行`yarn dev`，打开`vuepree`网页，`antd`组件报错。


`a-tooltip` 组件报错
```js
Uncaught (in promise) TypeError: this.isNoTitle is not a function
    at Proxy.render (webpack-internal:///./node_modules/ant-design-vue/es/tooltip/Tooltip.js:203)
    at renderComponentRoot (webpack-internal:///./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js:794)
    at componentEffect (webpack-internal:///./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js:4232)
    at reactiveEffect (webpack-internal:///./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js:73)
    at effect (webpack-internal:///./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js:48)
    at setupRenderEffect (webpack-internal:///./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js:4215)
    at mountComponent (webpack-internal:///./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js:4173)
    at processComponent (webpack-internal:///./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js:4133)
    at patch (webpack-internal:///./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js:3760)
    at mountChildren (webpack-internal:///./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js:3933)
```