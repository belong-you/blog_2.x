import { NavLink, useHistory } from 'umi';
import { pathNameSplit } from '@/utils/browser';

const NoteFileList = ({ list}: any) => {
  let path = useHistory().location.pathname;
  const filePaths = pathNameSplit(path);
  const len = filePaths.length - 1;
  Number(filePaths[len]) && (path = path.split('/' + filePaths[len])[0]);
  
  return (<ul>{
    list && list.map((val: any, index: number) => <li key={index}>
      <NavLink to={path + '/' + val.split(/\s/)[0]}>{val}</NavLink>
    </li>)
  }</ul>);
}

export default NoteFileList;