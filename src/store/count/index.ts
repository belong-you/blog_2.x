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

export default reducer;
