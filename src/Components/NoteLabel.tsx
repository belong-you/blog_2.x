import { NavLink } from 'umi';
import { sleep } from '@/utils/browser';
import { useState } from 'react';
const { ['log'] : c } = console;

const NoteLabel = ({ list, path = '' }: any) => {
  const [ flag, setFlag ] = useState(false);
  sleep(16).then(() => setFlag(true));

  return (<ul>{
    list && list.map((val: any, index: number) => typeof val === 'object' ? 
    <li key={index}>
      <NavLink to={'/note/' + (path && path) + val.link}>{val.folder}</NavLink>

      {/* 组件递归 */}
      {/* <NoteLabel list={val.files} path={path + val.link + '/'} /> */}
      {flag ? <NoteLabel list={val.files} path={path + val.link + '/'} /> : null }
    </li> 
    : null)
  }
  </ul>);
}

export default NoteLabel;