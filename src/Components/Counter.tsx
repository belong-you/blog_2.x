import { actions } from "@/store/count";
import { connect } from "react-redux";
import { IRouteProps } from "umi";


function mapStateToProps(state: any, ownProps: any) {
  return {
    number: state.count
  }
}

// 映射事件处理函数
function mapDispatchToProps (dispatch: any) {
  return {
    onIncrease() {
      dispatch(actions.increaseAction());
    },
    onReduce() {
      dispatch(actions.reduceAction());
    }
  }
}

function Counter(props: IRouteProps) {
  return (<div>
    <h1>{props.number}</h1>
    <p>
      <button onClick={props.onIncrease}>加</button>
      <button onClick={props.onReduce}>减</button>
    </p>
  </div>)
}

// connect 返回一个高阶组件
const hoc = connect(mapStateToProps, mapDispatchToProps);

// 传入展示组件，返回一个容器组件
export default hoc(Counter);