import { defineConfig } from 'umi';

export default defineConfig({
  ssr: {
    forceInitial: true,
    devServerRender: true,
  },
  links: [
    { rel: 'stylesheet', href: '/css/reset.css' },
    { rel: 'stylesheet', href: '/css/common.css' },
  ],
  publicPath: '/',
  outputPath: '/ssr_deploy/dist',
  hash: true,
  targets: {
    ie: 11,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  devServer: {
    port: 2000
  },
  routes: [
    { path: '/', exact: true, component: '@/pages/index', title: '首页', state: { role: ['user'] } },
    { component: '@/pages/note/_type' },
    { component: '@/pages/404', title: '找不到页面' }
  ],
  fastRefresh: {},
});
