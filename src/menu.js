// menu.js

import cakeJpg from './images/cake.jpg';
import { createSearchbar } from './home';

function createMenu() {
    const menu = document.createElement('section');

    menu.id = 'menu';
    
    const menuTitle = document.createElement('p');
    menuTitle.classList.add('menu-title');
    menuTitle.innerHTML = "What<span>'</span>s New<span>?</span>";
    menu.appendChild(menuTitle);
    const numOfMenuItems = 12;
    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    for (let i=0; i<numOfMenuItems; i++) {
        const menuItem = document.createElement('div');
        const itemImg = document.createElement('div');
        const itemText = document.createElement('div');
        const itemTitle = document.createElement('p');
        const itemPrice = document.createElement('p');
        const itemDescription = document.createElement('p');

        menuItem.classList.add('menu-item');
        itemText.classList.add('item-text');
        itemImg.classList.add('item-img');
        itemTitle.classList.add('item-title');
        itemPrice.classList.add('item-price');
        itemDescription.classList.add('item-description');

        const cake = new Image();
        cake.src = cakeJpg;
        itemImg.appendChild(cake);
        itemTitle.innerText = 'Biscoff Silvanas';
        itemPrice.innerText = 'PHP 365';
        itemDescription.innerText = 'Biscoff flavor and rich buttercream in between layers of cashew-meringue wafers';


        menuItem.appendChild(itemImg);
        menuItem.appendChild(itemText);
        itemText.appendChild(itemTitle);
        itemText.appendChild(itemPrice);
        itemText.appendChild(itemDescription);

        menuItems.appendChild(menuItem);
    }
    menu.appendChild(menuItems);
    return menu;
}


export default function loadMenu() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    content.appendChild(createSearchbar());
    content.appendChild(createMenu());
    console.log('menu');
    return;
}