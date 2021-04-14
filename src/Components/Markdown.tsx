import { useRef, useEffect } from "react";
import MarkdownIt from 'markdown-it';
import style from './markdown.scss';
import hljs from 'highlight.js';
import 'highlight.js/scss/github.scss';
const md = MarkdownIt();

const Markdown = ({ text }: any) => {
  const refMd: any = useRef();
  const html = text ? md.render(text) : 'loading...';
  useEffect(() => {
    refMd.current.querySelectorAll('pre code').forEach((block: any) => {
      hljs.highlightBlock(block);
    });
  });
  return (<div ref={refMd}  className={style.markdown}
    dangerouslySetInnerHTML={{ __html: html }}
  ></div>)
}

export default Markdown;