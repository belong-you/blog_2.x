import { Route, Router } from 'umi';
const { ['log']: c } = console;

export default (history: any) => {
  if (typeof window === 'object') {
    // window.addEventListener('popstate', function (e) {
    //   c(131354564563)
    //   // e.state.value ? e.state.value : false;
    // })
  }
};
