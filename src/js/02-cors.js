/*
 * - Cross-Origin Resource Sharing (CORS)
 *  - https://pokeapi.co/
 *  - https://darksky.net/dev
 * - Proxy
 *  - Хранение API ключей и секретов
 *  - https://lpj-weather-service.herokuapp.com/
 */
import '../css/common.css';
import NewApiService from './NewsAPI'

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesList: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', onSearchFunc);
// refs.loadMoreBtn.addEventListener('click', toLoadMore);

const NewApi = new NewApiService();

let searchQuery = '';

function onSearchFunc(e) {
  e.preventDefault();
  
  const searchQuery = e.currentTarget.elements.query.value;
  
  NewApi.fetchArticles(searchQuery)
}
     
       
      
  