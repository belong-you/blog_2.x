import { FC } from 'react';
import { Link } from 'umi';
import style from './module.scss';

const Header: FC = () => {

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <Link to='/'>Home</Link>
        <Link to='/note'>Note</Link>
        <Link to='/chat'>Chat</Link>
        <a href="https://github.com/belong-you">GitHub</a>
        <a href="http://old.hpyyb.cn">Olb Blog</a>
      </div>
    </header>
  );
};

export default Header;
