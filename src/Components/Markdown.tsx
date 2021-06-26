import { useRef, useEffect, ElementRef, useState } from 'react';
import style from './markdown.scss';
import hljs from 'highlight.js';
import PropTypes from 'prop-types';
import 'highlight.js/scss/github.scss';
import { IRouteProps, Route, Router } from 'umi';
const { ['log']: c } = console;

const Markdown = ({ html }: IRouteProps) => {
  const refMd: any = useRef();

  useEffect(() => {
    // 代码高亮
    refMd.current.querySelectorAll('pre code').forEach((block: any) => {
      hljs.highlightBlock(block);
    });
  });
  return (
    <div
      ref={refMd}
      className={style.markdown}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
};

export default Markdown;

Markdown.propTypes = {
  html: PropTypes.string,
};
