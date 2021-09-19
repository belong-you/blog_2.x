export default [
  {
    exact: false,
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        exact: true,
        component: '@/pages/home/index',
        title: '首页',
        state: { role: ['user'] },
      },
      {
        path: '/note',
        exact: false,
        title: '个人笔记',
        component: '@/pages/note/_type'
      },
      {
        component: '@/pages/notFound/index',
        title: '找不到页面'
      },
    ]
  },
]