import styles from './index.scss';

function IndexPage(props: any) {
  const { data } = props;
  console.log(props)
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
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