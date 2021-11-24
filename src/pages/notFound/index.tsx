import img_404 from '@/assets/imgs/404.png';
import style from './module.scss';

const Notfound = () => {
  return (<div className={style['not-found']}>
    <img src={img_404} alt="找不到页面" />
  </div>)
}

export default Notfound;