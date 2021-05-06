import { NavLink, useHistory } from 'umi';
import { sleep } from '@/utils/browser';
import { pathNameSplit } from '@/utils/browser';
import { useEffect, useState } from 'react';
import style from './noteLabel.scss';
const { ['log'] : c } = console;

const NoteLabel = ({ list, path = '', count = 0 }: any) => {
  let url = useHistory().location.pathname.split('/note/')[1];
  const filePaths = pathNameSplit(url);
  let active = '';  // 要展开的部分
  if (count < 1 && filePaths !== undefined) active = filePaths[0];
  count ++;  // 组件递归的深度

  // 控制列表展开收起
  const [ open, setOpen ] = useState(true);
  useEffect(() => {
    if (count === 1) {
      const storage = localStorage.getItem('NOTE_LABEL_OPEN');
      if (storage === 'true') setOpen(true);
      else setOpen(false);
    }
  }, [open])

  function labelOpen () {
    setOpen(!open);
    localStorage.setItem('NOTE_LABEL_OPEN', String(!open));
  }

  const [ flag, setFlag ] = useState(false);
  sleep(16).then(() => setFlag(true));


  return (<ul className={count === 1 && open ? style.note_label : ''}>
  {count === 1 ? <p className={style.open} onClick={labelOpen}>展开</p> : null}
  {list && list.map((val: any, index: number) => typeof val === 'object' ? 
    <li key={index} className={count === 1 && active === val.link ? style.active : ''} >
      <NavLink to={'/note/' + (path && path) + val.link}>{val.folder}</NavLink>

      {/* 组件递归 */}
      <NoteLabel list={val.files} path={path + val.link + '/'} count={count} />
      {/* {flag ? <NoteLabel list={val.files} path={path + val.link + '/'} count={count} /> : null } */}
    </li> 
    : null)
  }
  </ul>);
}

export default NoteLabel;
