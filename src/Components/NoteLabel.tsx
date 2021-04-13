import { NavLink } from 'umi';

const NoteLabel = ({ list, path = '' }: any) => {
  return (<ul>{
    list && list.map((val: any, index: number) => typeof val === 'object' ? 
    <li key={index}>
      <NavLink to={'/note/' + (path && path) + val.link}>{val.folder}</NavLink>

      {/* 组件递归 */}
      <NoteLabel list={val.files} path={path + val.link + '/'} />
    </li> 
    : null)
  }</ul>);
}

export default NoteLabel;