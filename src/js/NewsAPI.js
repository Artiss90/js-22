export default class NewsApiService {
  constructor() { };
  fetchArticles(searchQuery) {
    const API_KEY = '4330ebfabc654a6992c2aa792f3173a3';
    const BASE_URL = 'https://newsapi.org/v2';
    const options = {headers: {
    Authorization: API_KEY,
  },
};

  const url = `${BASE_URL}/everything?q=${searchQuery}&language=en&pageSize=10&page=1`;      
  

  fetch(url, options).then(response => response.json()).catch(console.log);}
}