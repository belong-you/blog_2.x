import { defineConfig } from 'umi';
import CompressionPlugin from 'compression-webpack-plugin';

export default defineConfig({
  ssr: {
    forceInitial: true,
    devServerRender: true,
  },
  links: [
    { rel: 'icon', href: '/logo.ico' },
    { rel: 'dns-prefetch', href: 'http://hpyyb.cn/' },
    { rel: 'dns-prefetch', href: 'http://www.hpyyb.cn/' },
    { rel: 'stylesheet', href: '/css/reset.css' },
    { rel: 'stylesheet', href: '/css/common.css' },
  ],
  base: '/blog',
  publicPath: '/',
  outputPath: '/deploy/public',
  dynamicImport: {},
  hash: true,
  targets: {
    ie: 11,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  devServer: {
    port: 20000
  },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          exact: true,
          component: '@/pages/home/index',
          title: '首页',
          state: { role: ['user'] },
        },
        { component: '@/pages/note/_type' },
        { component: '@/pages/notFound/index', title: '找不到页面' },
      ],
    },
  ],
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    // 设置 alias
    memo.resolve.alias.set('foo', '/tmp/a/b/foo');

    // 删除 umi 内置插件
    memo.plugins.delete('progress');
    memo.plugins.delete('friendly-error');
    memo.plugins.delete('copy');

    memo.plugin('CompressionPlugin').use(
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
        // 只处理大于xx字节 的文件，默认：0
        threshold: 1024,
        // 示例：一个1024b大小的文件，压缩后大小为768b，minRatio : 0.75
        minRatio: 0.8, // 默认: 0.8
        // 是否删除源文件，默认: false
        deleteOriginalAssets: false,
      }),
    );
  },
  // webpack5: {},
  plugins: [],
  fastRefresh: {},
});
