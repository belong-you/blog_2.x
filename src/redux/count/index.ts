import { bindActionCreators, createStore } from 'redux';

const INCREASE = Symbol('increase');
const REDUCE = Symbol('reduce');
const SET = Symbol('set');

const initialState = 0;

// reducer 必须是一个没有副作用的纯函数
function reducer(state: number = initialState, action: { type: symbol, payload?: any }) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case REDUCE:
      return state - 1;
    case SET: 
      return action.payload;
    default:
      return state;
  }
}


export const actions = {
  increaseAction() {
    return {
      type: INCREASE
    };
  },
  reduceAction() {
    return {
      type: REDUCE
    }
  },
  setAction(value: number) {
    return {
      type: SET,
      payload: value
    }
  }
}

// const store = createStore(reducer);

// 增强 action 创建函数的功能，完成分发
// export const boundActions = bindActionCreators(actions, store.dispatch);
// console.log(store.getState());

// store.dispatch(actionsObj.increaseAction());  // 向仓库分发 action

// boundActions.increaseAction();

// console.log(store.getState());

export default reducer;
