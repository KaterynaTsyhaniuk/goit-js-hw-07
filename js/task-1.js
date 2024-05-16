'use strict';
const mainLiElem = document.querySelectorAll('ul#categories > .item');
console.log(`Number of categories: ${mainLiElem.length}`);

const allTitle = mainLiElem.forEach(elem => {
  const titleName = elem.querySelector('h2').textContent;
  const allItems = elem.querySelectorAll('li').length;
  console.log(`Category: ${titleName}`);
  console.log(`Elements: ${allItems}`);
});
