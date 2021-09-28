import { api_getNoteLabel, api_getNoteFile } from '@/api/note';
import NoteLabel from './components/NoteLabel';
import NoteFileList from './components/NoteFileList';
import Markdown from '@/components/Markdown/index';
import MarkdownIt from 'markdown-it';
import LinksList from '@/components/LinksList/index';
import { pathNameSplit } from '@/utils/browser';
import { deepCloneObj } from '@/utils/object';
import style from './module.scss';
import { IRouteProps } from 'umi';
import { createNum } from '@/utils/number';
const md = MarkdownIt();
import { ctx_unfold } from './context';
import { useState } from 'react';
const { ['log']: c } = console;

const NotePage = ({ label, text, fileList, history }: IRouteProps) => {
  const iter = createNum();  // 数字生成器，提供id用
  const html = text ? md.render(text) : 'loading...';

  let newHTML = '';

  const [ unfold, setUnfold ] = useState(ctx_unfold);

  const titleReg = /^\<h\d/g; // 标题匹配
  html.split(/\n/).forEach((val: string) => {
    // h 标签添加 id
    if (titleReg.test(val)) {
      const strStart = val.slice(0, 3);
      val = val.replace(titleReg, `${strStart} id='${iter.next().value}'`);
    }
    /\>$/.test(val) ? (newHTML += val) : (newHTML += val + '\n');
  });

  return (
    <div className={style.note_container}>
      <div className={[style.folder_list].join(' ')}>
        <NoteLabel list={label} />
      </div>

      <div className={style.wrapper}>
        <div className={['leayer', style.wrap].join(' ')}>
          <div className={[style.file_list].join(' ')}>
            <NoteFileList list={fileList} />
          </div>
          <div className={[style.content].join(' ')}>
            <Markdown html={newHTML} />
          </div>
        </div>
      </div>

      <div className={style.links_list}>
        <LinksList html={newHTML} />
      </div>
    </div>
  );
};


let label: any = null;
NotePage.getInitialProps = async ({ history }: IRouteProps) => {
  const pathArr = pathNameSplit(history.location.pathname.split('/note/')[1]);

  if (!label) {
    label = await api_getNoteLabel();
  }
  // const label: any = await apiGetNoteLabel();
  const arr = getAssignData(label.data, pathArr); // 递归数组过滤
  const fileList = getLastFileList(arr); // 数组最后的文件列表
  const url = getFilenameUrl(arr, pathArr); // 指定文件路径
  const file: any = await api_getNoteFile(escape(url));

  let text: string = '';
  if (file.code == 200) text = file.data;
  else if (file.code == 500) text = file.msg;

  return Promise.resolve({
    label: label.data,
    fileList,
    text,
  });
};
export default NotePage;

/**
 * 根据路由获取文件的路径
 * @param arr
 * @returns
 */
function getFilenameUrl(arr: any[], pathArr: string[], url: string = ''): string {
  if (!arr || !pathArr) return 'undefined';
  const value = arr[0];
  const str = pathArr[pathArr.length - 1] + ' ';
  if (typeof value === 'object') {
    url += `${value.id} ${value.folder === value.link ? '' : value.folder + '_'}${value.link}/`;
    return getFilenameUrl(value.files, pathArr, url); // 递归
  } else if (typeof value === 'string') {
    if (!Number(str)) return (url += arr[0]);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].startsWith(str)) {
        url += arr[i];
        break;
      }
    }
  }
  return url;
}

/**
 * 获取最后的文件列表
 * @param arr 递归数组
 * @returns
 */
function getLastFileList(arr: any[], fileList: string[] = []): any {
  if (arr.length === 0) return;
  if (typeof arr[0] === 'string') return (fileList = arr);
  return getLastFileList(arr[0].files, fileList);
}

/**
 * 数组深度过滤（具有一定规则，可递归）
 * @param data
 * @param words
 * @returns
 */
function getAssignData(data: any[], words: string[], count = 0, arr: any[] = []) {
  // const len = words.length - 1;
  if (!data || !words) return arr;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'object' && data[i].link === words[count]) {
      arr[0] = deepCloneObj(data[i]);
      arr.length = 1;
      count++;
      arr[0].files && getAssignData(arr[0].files, words, count, arr[0].files);
      break;
    }
  }
  return arr;
}
