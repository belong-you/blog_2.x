import { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './module.scss';

const Footer: FC = () => {
  return (<footer className={style.footer}>
    <p>Copyright © 2020&nbsp;
      <Link to='/'>bozai.tech</Link>
      &nbsp;
      <a href="https://beian.miit.gov.cn/" target="blank">晋ICP备20006880号</a>
    </p>
    <p>Powered by Yubo.Yang</p>
  </footer>)
}

export default Footer;