import { IRouteProps, NavLink, useHistory } from 'umi';
import { pathNameSplit } from '@/utils/browser';
import style from './noteFileList.scss';
const { ['log'] : c } = console;

const NoteFileList = ({ list }: IRouteProps) => {
  let path = useHistory().location.pathname;
  const filePaths = pathNameSplit(path);
  const len = filePaths.length - 1;
  let active = filePaths[len];
  if (!Number(active)) {
    active = list && list[0].match(/(\d|\.)+/)[0];
  }

  Number(filePaths[len]) && (path = path.split('/' + filePaths[len])[0]);
  
  return (<ul className={style.note_file_list}>{
    list && list.map((val: any, index: number) => <li key={index}
      className={active === val.match(/(\d|\.)+/)[0] ? style.active : ''}
    >
      <NavLink to={path + '/' + val.split(/\s/)[0]}>{val.slice(0, -3)}</NavLink>
    </li>)
  }</ul>);
}

export default NoteFileList;