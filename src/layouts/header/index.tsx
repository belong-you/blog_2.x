import { FC } from "react";
import style from './header.scss';

const Header: FC = () => {
  return (<header className={style.header}>
    <a href="http://bozai.tech/">Olb Blog</a>
    <a href="https://github.com/belong-you">GitHub</a>
  </header>)
}

export default Header;