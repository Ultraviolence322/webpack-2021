import '@/styles/css/style.css';
import json from '@/assets/some.json';
import webpackImg from '@/assets/webpack123.png';
import '@/styles/scss/style.scss';

import '@/babel.js';

let a = 3;
let b = 3;

console.log('JSON', json);

console.log('wpImg', webpackImg);

$('#json').html(JSON.stringify(json));
