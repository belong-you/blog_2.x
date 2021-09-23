import { defineConfig } from 'umi';
import CompressionPlugin from 'compression-webpack-plugin';
import routes from './.routes';
import env from './env_variable';
import path from 'path';

export default defineConfig({
  ssr: {
    forceInitial: true,
    devServerRender: true,
  },
  metas: [{ content: "on", httpEquiv: "x-dns-prefetch-control" }],
  links: [
    { rel: 'dns-prefetch', href: 'http://hpyyb.cn/' },
    { rel: 'dns-prefetch', href: 'http://www.hpyyb.cn/' },
  ],
  base: env.BASE_ROUTE_URL,
  publicPath: '/',
  outputPath: '/deploy/dist',
  alias: {
    '~': path.resolve(__dirname)
  },
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
  routes,
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    // 设置 alias
    // memo.resolve.alias.set('foo', '/tmp/a/b/foo');

    // 删除 umi 内置插件
    memo.plugins.delete('progress');
    memo.plugins.delete('friendly-error');
    memo.plugins.delete('plugin-antd');
    memo.plugins.delete('plugin-analytics');
    memo.plugins.delete('plugin-crossorigin');
    memo.plugins.delete('plugin-initial-state');
    memo.plugins.delete('plugin-model');
    memo.plugins.delete('plugin-locale');
    memo.plugins.delete('plugin-request');

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
