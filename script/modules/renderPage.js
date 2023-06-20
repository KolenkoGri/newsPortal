import fetchRequest from "./fetch.js";
import {renderCard} from "./createCard.js";
import {preload} from "./preload.js";

const articleBlock = document.querySelector('.article__block');
const searchTitle = document.querySelector('.search__title');
const articleTitle = document.querySelector('.article__title');
const searchBlock = document.querySelector('.search__block');
const search = document.querySelector('.search');
const article = document.querySelector('.article');
const headerSearch = document.querySelector('.header__search');
const headerInput = document.querySelector('.header__input');

const init = (searchInfo) => {
    preload(true);
    return Promise.all([
        fetchRequest('top-headlines?country=ru', {
            callback:renderCard,
            headers: {
                'X-Api-Key' : 'dea617e64c4d47f98f9291eb6a4f0d8c'
            },
        }),
        fetchRequest(`everything?q=${searchInfo}`, {
            callback:renderCard,
            headers: {
                'X-Api-Key' : 'dea617e64c4d47f98f9291eb6a4f0d8c'
            },
        }),
    ])
};

headerSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    init(headerInput.value).then(data => {
        preload(false);
        articleBlock.append(data[0]);
        articleTitle.textContent = 'Cвежие новости';
        article.classList.toggle('article__open');
    
        searchBlock.append(data[1]);
        searchTitle.textContent = `По вашему запросу “${headerInput.value}” найдено 4 результата`
        search.classList.toggle('search__open');
    });
})