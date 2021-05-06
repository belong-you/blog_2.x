import { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './footer.scss';

const Footer: FC = () => {
  return (<footer className={style.footer}>
    <p>Copyright © 2020&nbsp;
      <Link to='/'>bozai.tech</Link>
      &nbsp;晋ICP备20006880号</p>
    <p>Powered by Yubo.Yang</p>
  </footer>)
}

export default Footer;