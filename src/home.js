// home.js
import searchPng from './images/search.png'
import mangoJpg from './images/MangoBravo.jpg'
import cakeJpg from './images/cake.jpg';
import ytJpg from './images/ytimg.jpg';
import contisJpg from './images/contis.jpg';

function createSearchbar() {
    const searchbar = document.createElement('section');

    searchbar.id = 'searchbar';
    const search = document.createElement('input');
    search.type = 'search';
    search.name = 'search';
    search.id = 'search';
    search.placeholder = "Search for your CONTI's favorites...";
    const btn = document.createElement('button');
    const searchIcon = new Image();
    searchIcon.src = searchPng;
    btn.appendChild(searchIcon);
    searchbar.appendChild(search);
    searchbar.appendChild(btn);

    return searchbar;
}

function createPictures() {
    const pictures = document.createElement('section');
    
    pictures.id = 'pictures';
    const mangoPhoto = new Image();
    mangoPhoto.src = mangoJpg;
    pictures.appendChild(mangoPhoto);

    return pictures;
}

function createProducts() {
    const products = document.createElement('section');

    products.id = 'products';
    const p = document.createElement('p');
    p.classList.add('products-title');
    p.innerHTML = '<span>Our <span class="green">Products</span></span>';
    products.append(p);
    const divItems = document.createElement('div');
    divItems.classList.add('product-items');
    const numOfProducts = 6;
    for (let i=0; i<numOfProducts; i++) {
        const divItem = document.createElement('div');
        divItem.classList.add('product-item');
        const divTitle = document.createElement('div');
        divTitle.classList.add('product-title');
        divTitle.innerText = "FABULOUS CAKES";
        divItem.appendChild(divTitle);
        const divImg = document.createElement('div');
        divImg.classList.add('product-img');
        const cake = new Image();
        cake.src = cakeJpg;
        divImg.appendChild(cake);
        divItem.appendChild(divImg);
        divItems.appendChild(divItem);
    }
    products.append(divItems);

    return products;
}

function createVideo() {
    const video = document.createElement('section');

    video.id = 'video';
    const thumbnail = new Image();
    thumbnail.src = ytJpg;
    video.appendChild(thumbnail);

    return video;
}

function createStory() {
    const story = document.createElement('section');

    story.id = 'story';
    const divPhoto = document.createElement('div');
    divPhoto.classList.add('story-photo');
    const contis = new Image();
    contis.src = contisJpg;
    divPhoto.appendChild(contis);
    story.appendChild(divPhoto);
    const divText = document.createElement('div');
    divText.classList.add('story-text');
    const divTitle = document.createElement('div');
    divTitle.classList.add('story-title');
    divTitle.innerText = 'Our Story';
    divText.appendChild(divTitle);
    const divSubtitle = document.createElement('div');
    divSubtitle.classList.add('story-subtitle');
    divSubtitle.innerText = 'FOREVER SHARING JOY FROM OUR HOME TO YOURS';
    divText.appendChild(divSubtitle);
    divText.appendChild(document.createElement('br'));
    const divContent = document.createElement('div');
    divContent.classList.add('story-content');
    divContent.innerHTML = `<p>
                            A passion to create and serve delectable food reminiscent of the convenience 
                            and comforting warmth of one's own home, this is what we at Conti's are all 
                            about.
                            </p><br>
                            <p>
                            Since opening its doors to families and friends in Parañaque in 1997, Conti's 
                            Bakeshop and Restaurant has created and shared memories of togetherness to 
                            people who have come to love our wide selection of products, including our 
                            signature dishes such as the Baked Salmon, Chicken Pie, and the well-loved 
                            Mango Bravo.
                            </p><br>
                            <p>
                            With the joy and satisfaction of every guest who walks into our stores in 
                            mind, this food haven which began as a simple family restaurant now brings 
                            the familiar feelings of home and carefully prepared products to thousands 
                            of homes across the country through continuous product innovation and service 
                            expansion. Conti's Bakeshop & Restaurant today extends its commitment to 
                            hospitality and culinary excellence in 10 communities, serving more than 150 
                            sought-after dishes by guests who, over the years, have helped write our 
                            story of inspiration and success.
                            </p><br>
                            <p>
                            We are committed to make every guest experience memorable and to continue sharing our story in every product we create and serve.
                            </p>`;
    divText.appendChild(divContent);
    story.appendChild(divText);

    return story;
}

export default function loadHome() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    console.log('a');
    content.appendChild(createSearchbar());
    content.appendChild(createPictures());
    content.appendChild(createProducts());
    content.appendChild(createVideo());
    content.appendChild(createStory());

    return;
}