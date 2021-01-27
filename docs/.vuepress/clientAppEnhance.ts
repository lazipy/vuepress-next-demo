import type { ClientAppEnhance } from '@vuepress/client';
import antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';


const clientAppEnhance: ClientAppEnhance = ({ app }) => {
  app.use(antd);
};

export default clientAppEnhance;
