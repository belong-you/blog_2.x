import { IRouteProps } from 'umi';
import store from '@/store/index';
import { actions } from '@/store/count';
import { Provider } from 'react-redux';
import Counter from '@/components/Counter'
import styles from './module.scss';


function IndexPage(props: IRouteProps) {
  const { data, history } = props;

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Provider store={store}>
        <button onClick={() => {
          store.dispatch(actions.setAction(10))
        }}>click</button>
        <Counter />
      </Provider>

    </div>
  );
}

IndexPage.getInitialProps = async (ctx: any) => {
  let data = null;
  data = await {a: 1}
  return Promise.resolve({
    data,
  })
}

export default IndexPage;