import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';

import { getItemMarkup } from './markup/get-item-markup';

const galleryRef = document.querySelector('.gallery');
const searchFormRef = document.querySelector('.search-form');

searchFormRef.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(e) {
  e.preventDefault();
  const input = e.target.elements.searchQuery;
  console.dir(input.value);
  renderList([{}, {}]);
}
function removeChildren(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function renderList(itemList) {
  galleryRef.insertAdjacentHTML('beforeend', getItemListMarkup(itemList));
}

function getItemListMarkup(itemList) {
  return itemList.map(it => getItemMarkup(it)).join('');
}

// https://pixabay.com/api/?key=30341549-2658c35ea7dbba4c0cdeabc27&q=yellow+flowers&image_type=photo

function fetchItems(string) {
  axios
    .get(
      'https://pixabay.com/api/?key=30341549-2658c35ea7dbba4c0cdeabc27&q=yellow+flowers&image_type=photo'
    )
    .then(res => {});
}
