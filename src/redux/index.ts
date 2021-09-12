import { createStore, combineReducers, bindActionCreators } from 'redux';

import count, { actions } from './count/index';

// function reducer (state: any, action: any) {
//   return {
//     count: count(state, action)
//   }
// }

const reducer = combineReducers({
  count,
})

const store = createStore(reducer);
// console.log(store.getState())

// // 增强 action 创建函数的功能，完成分发
// const boundActions = bindActionCreators(actions, store.dispatch);

// boundActions.increaseAction()
// store.dispatch(actions.increaseAction())

// console.log(store.getState())
export default store;