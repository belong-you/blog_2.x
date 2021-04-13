import { apiGetNoteLabel, apiGetNoteFile } from '@/axios/note';
import NoteLabel from '@/Components/NoteLabel';
import NoteFileList from '@/Components/NoteFileList';
import { pathNameSplit } from '@/utils/browser';
import { deepCloneObj } from '@/utils/object';
import MarkdownIt from 'markdown-it';
import './markdown.scss';
import hljs from 'highlight.js';
import 'highlight.js/scss/github.scss';
import style from './type.scss';
import { useEffect } from 'react';
const md = MarkdownIt();
const { [ 'log' ] : c } = console;

const NotePage = ({ label, text, fileList }: any) => {
  const html = text ? md.render(text) : 'loading...';
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block: any) => {
      hljs.highlightBlock(block);
    });
  });
  return (<div>
    <div className={[style.note_list, 'fl'].join(' ')} >
      <NoteLabel list={label} />
    </div>
    <div className={[style.file_list, 'fl'].join(' ')} >
      <NoteFileList list={fileList} />
    </div>
    <div className={[style.content, 'article-main', 'fl'].join(' ')} 
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  </div>);
}

NotePage.getInitialProps = async ({ history }: any) => {
  const pathArr = pathNameSplit(history.location.pathname.split('/note/')[1]);

  const label: any = await apiGetNoteLabel();
  const arr = getAssignData(label.data, pathArr);  // 递归数组过滤
  const fileList = getLastFileList(arr);  // 数组最后的文件列表
  const url = getFilenameUrl(arr, pathArr);  // 指定文件路径
  const file: any = await apiGetNoteFile(escape(url));  

  let text: string = '';
  if (file.code == 200) text = file.data;
  else if (file.code == 500) text = file.msg;

  return Promise.resolve({
    label: label.data,
    fileList,
    text,
  })

}
export default NotePage;


/**
 * 根据路由获取文件的路径
 * @param arr 
 * @returns 
 */
function getFilenameUrl (arr: any[], pathArr: string[], url: string = ''): string {
  const value = arr[0];
  const str = pathArr[pathArr.length - 1] + ' ';
  if (typeof value === 'object') {
    url += `${value.id} ${value.folder === value.link ? '' : value.folder + '_'}${value.link}/`;
    return getFilenameUrl(value.files, pathArr, url);  // 递归
  } else if (typeof value === 'string') {
    if (!Number(str)) return url += arr[0];
    for (let i = 0; i < arr.length; i ++) {
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
 function getLastFileList (arr: any[], fileList: string[] = []): any {
  if (typeof arr[0] === 'string') return fileList = arr;
  return getLastFileList(arr[0].files, fileList);
}

/**
 * 数组深度过滤（具有一定规则，可递归）
 * @param data 
 * @param words 
 * @returns 
 */
function getAssignData(data: any[], words: string[], count = 0, arr: any[] = []) {
  const len = words.length - 1;
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
