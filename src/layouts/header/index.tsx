import { FC } from 'react';
import { Link } from 'umi';
import style from './header.scss';

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <a href="http://old.hpyyb.cn">Olb Blog</a>
        <a href="https://github.com/belong-you">GitHub</a>
        <Link to='/note'>Note</Link>
      </div>
    </header>
  );
};

export default Header;
