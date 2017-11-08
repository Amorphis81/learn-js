"use strict";

var styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-Ролл');
styles[styles.length-2] = 'Классика';
var elem = styles.shift();
styles.unshift('Рэп', 'Рэгги');

alert(styles);