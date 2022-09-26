// home.js
import searchPng from './images/search.png'
import mangoJpg from './images/MangoBravo.jpg'
import cakeJpg from './images/cake.jpg';
import ytJpg from './images/ytimg.jpg';
import contisJpg from './images/contis.jpg';

export function createSearchbar() {
    const searchbar = document.createElement('section');

    const search = document.createElement('input');
    const btn = document.createElement('button');
    const searchIcon = new Image();

    btn.appendChild(searchIcon);
    searchbar.appendChild(search);
    searchbar.appendChild(btn);

    searchbar.id = 'searchbar';
    search.id = 'search';
    search.type = 'search';
    search.name = 'search';
    search.placeholder = "Search for your CONTI's favorites...";
    searchIcon.src = searchPng;
    
    return searchbar;
}

function createPictures() {
    const pictures = document.createElement('section');
    
    const mangoPhoto = new Image();

    pictures.appendChild(mangoPhoto);

    pictures.id = 'pictures';
    mangoPhoto.src = mangoJpg;
    
    return pictures;
}

function createProducts() {
    const products = document.createElement('section');

    const p = document.createElement('p');
    const divItems = document.createElement('div');
    
    products.append(p);
    products.append(divItems);
    
    products.id = 'products';
    p.classList.add('products-title');
    divItems.classList.add('product-items');
    p.innerHTML = '<span>Our <span class="green">Products</span></span>';
    
    const numOfProducts = 6;
    for (let i=0; i<numOfProducts; i++) {
        const divItem = document.createElement('div');
        const divTitle = document.createElement('div');
        const divImg = document.createElement('div');
        const cake = new Image();

        divItem.appendChild(divTitle);
        divImg.appendChild(cake);
        divItem.appendChild(divImg);
        divItems.appendChild(divItem);

        divItem.classList.add('product-item');
        divTitle.classList.add('product-title');
        divImg.classList.add('product-img');
        divTitle.innerText = "FABULOUS CAKES";
        cake.src = cakeJpg;
    }

    return products;
}

function createVideo() {
    const video = document.createElement('section');

    const thumbnail = new Image();

    video.appendChild(thumbnail);

    video.id = 'video';
    thumbnail.src = ytJpg;

    return video;
}

function createStory() {
    const story = document.createElement('section');

    const divPhoto = document.createElement('div');
    const contis = new Image();
    const divText = document.createElement('div');
    const divTitle = document.createElement('div');
    const divSubtitle = document.createElement('div');
    const divContent = document.createElement('div');

    divPhoto.appendChild(contis);
    story.appendChild(divPhoto);
    divText.appendChild(divTitle);
    divText.appendChild(divSubtitle);
    divText.appendChild(document.createElement('br'));
    divText.appendChild(divContent);
    story.appendChild(divText);

    story.id = 'story';
    divPhoto.classList.add('story-photo');
    divText.classList.add('story-text');
    divTitle.classList.add('story-title');
    divSubtitle.classList.add('story-subtitle');
    divContent.classList.add('story-content');
    contis.src = contisJpg;
    divTitle.innerText = 'Our Story';
    divSubtitle.innerText = 'FOREVER SHARING JOY FROM OUR HOME TO YOURS';
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

    return story;
}

export default function loadHome() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    content.appendChild(createSearchbar());
    content.appendChild(createPictures());
    content.appendChild(createProducts());
    content.appendChild(createVideo());
    content.appendChild(createStory());

    return;
}