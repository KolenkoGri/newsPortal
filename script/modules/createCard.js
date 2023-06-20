const noPhoto = '../../image/no_photo.png'
export const renderCard = (err, data) => {
    console.log(data);
    if(err) {
        console.warn(err, data);
    }
    
    const template = document.createDocumentFragment();
    const item = data.articles.map((d) => {
            const card = document.createElement('div');
            card.classList.add('article__content');
            const artImage = document.createElement('div');
            artImage.classList.add('article__image');
            const image = document.createElement('img');
            image.classList.add('article__image--pic');
            artImage.append(image);
            image.src = `${d.urlToImage ? d.urlToImage : noPhoto}`;
            const articleTextArrow = document.createElement('div');
            articleTextArrow.classList.add('article__text-arrow');
            const articleText = document.createElement('div');
            articleText.classList.add('article__text');
            articleText.textContent = d.title;
            const articleArrow = document.createElement('a');
            articleArrow.classList.add('article__arrow');
            articleArrow.href = d.url;
            articleArrow.target = '_blank';
            articleTextArrow.append(articleText,articleArrow);
            const articleDescrip = document.createElement('div');
            articleDescrip.classList.add('article__descrip');
            articleDescrip.textContent = d.description;
            const articleFooter = document.createElement('div');
            articleFooter.classList.add('article__footer');
            const articleDateTime = document.createElement('div');
            articleDateTime.classList.add('article__date-time');
            const articleDate = document.createElement('div');
            articleDate.classList.add('article__date');
            articleDate.textContent = d.publishedAt.split('').slice(0,10).join('');
            const articleTime = document.createElement('div');
            articleTime.classList.add('article__time');
            articleTime.textContent = d.publishedAt.split('').slice(11,16).join('');
            articleDateTime.append(articleDate, articleTime);
            const articleAuthor = document.createElement('div');
            articleAuthor.classList.add('article__author');
            articleAuthor.textContent = d.author;
            articleFooter.append(articleDateTime, articleAuthor);
            card.append(artImage, articleTextArrow, articleDescrip,articleFooter);
            return card;
    });

    item.splice(4);
    template.append(...item);

    return template;
};

            // articleBlock.insertAdjacentHTML('beforeend',`
            // <div class="article__content">
            //     <div class="article__image">
            //         <img class = "article__image--pic" src=${d.urlToImage} alt="">
            //     </div>
            //     <div class="article__text-arrow">
            //         <div class="article__text">${d.title}</div>
            //         <a class="article__arrow" href=${d.url}></a>
            //     </div>
            //     <div class="article__descrip">${d.description}</div>
            //     <div class="article__footer">
            //         <div class="article__date-time">
            //             <div class="article__date">${d.publishedAt.split('').slice(0,10).join('')}</div>
            //             <div class="article__time">${d.publishedAt.split('').slice(11,16).join('')}</div>
            //         </div>
            //         <div class="article__author">${d.author}</div>
            //     </div>
            // </div>
            // `)  