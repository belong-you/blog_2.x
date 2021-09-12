import { FC } from 'react';
import style from './header.scss';

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <a href="http://old.hpyyb.cn">Olb Blog</a>
        <a href="https://github.com/belong-you">GitHub</a>
      </div>
    </header>
  );
};

export default Header;
