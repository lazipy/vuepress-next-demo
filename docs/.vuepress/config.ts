import type { UserConfig, DefaultThemeOptions } from 'vuepress';

const config: UserConfig<DefaultThemeOptions> = {
  lang: 'zh-CN',
  title: 'Ant Design Vue 测试',
  description: 'Ant Design Vue v2 测试',
  port: 11082,
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
