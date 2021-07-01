// CommonJS 스펙: 모듈 가져오기
// var _ = require('lodash');
// es6 방식의 모듈 가져오기
import _ from 'lodash';
// named import 하는 방법: { 이름 }
import {area, circumference} from './js/circle';
// default import 하는 방법: {} 없이 이름을 마음대로 바꿀수 있다.
import cube from './js/cube';

import './style.css';
import './hello.scss';

import treeImage from './assets/images/img_tree.gif';

console.log(area(5), circumference(5));

console.log(cube.bulk(5));

const component = () => {
  console.log('webpack test');
  let element = document.getElementById('root');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // const img = document.createElement('img');
  // img.src = treeImage;
  // element.appendChild(img);

  return element;
}

document.body.appendChild(component());
