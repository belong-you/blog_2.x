import cheerio from 'cheerio';
import { IRouteProps } from "umi";
import PropTypes from 'prop-types';
import { useLayoutEffect , useState } from 'react';
import style from './linksList.scss';
import { scrollTo } from '@/utils/browser';
const { ['log'] : c } = console;


const LinksList = ({ html }: IRouteProps) => {
  
  const arr = searchTitleList(html);

  return (<ul className={style.links_list}>{arr.map((val: any, index: number) => <li key={index} 
    style={{textIndent: val.level.slice(1) - 1 + 'em', fontWeight: val.level === 'h1' ? 'bold' : 'inherit'}}
    onClick={() => jump(val.id)}
  >{
    val.text
  }</li>)}</ul>)
}

export default LinksList;

function jump (id: string) {
  const top = document.getElementById(id)?.offsetTop;
  scrollTo(top);
}

function searchTitleList (html: string) {
  const $ = cheerio.load(html);
  const arr = Array.from($('h1,h2,h3,h4'));
  const newArr: any[] = [];
  arr.forEach((val: any) => {
    const id = val.attribs.id;
    const text = val.children[0].data;
    const level = val.name;
    // const offsetTop = document.getElementById(id)?.offsetTop;
    newArr.push({ id, text, level });
  })
  return newArr;
}

LinksList.propTypes = {
  html: PropTypes.string
}