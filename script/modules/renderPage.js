import fetchRequest from "./fetch.js";
import {renderCard} from "./createCard.js";
const articleBlock = document.querySelector('.article__block');
const searchTitle = document.querySelector('.search__title');
const searchBlock = document.querySelector('.search__block');
const search = document.querySelector('.search');
const headerSearch = document.querySelector('.header__search');

const initGoods = async () => {
    const goods = await fetchRequest('headlines.json', {
        callback:renderCard,
    });
    console.log(goods);
    articleBlock.append(goods);
};
const initSearch = async () => {
    const goods = await fetchRequest('search.json', {
        callback:renderCard,
    });
    console.log(goods);


    searchBlock.append(goods);
    searchTitle.textContent = `По вашему запросу “Россия” найдено 8 результатов`
    search.classList.toggle('search__open');
};

headerSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    initSearch();
})



// const initSelect = async () => {
//     const goods = await fetchRequest('search.json', {
//         callback:renderCard,
//     });

//     createCard(items)
// }

initGoods();
initSearch();