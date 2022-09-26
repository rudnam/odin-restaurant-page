// menu.js
import cakeJpg from './images/cake.jpg';
import { createSearchbar } from './home';

function createMenu() {
    const menu = document.createElement('section');

    const menuTitle = document.createElement('p');
    const menuItems = document.createElement('div');
    
    menu.appendChild(menuTitle);
    menu.appendChild(menuItems);

    menu.id = 'menu';
    menuTitle.classList.add('menu-title');
    menuItems.classList.add('menu-items');
    menuTitle.innerHTML = "What<span>'</span>s New<span>?</span>";
    
    const numOfMenuItems = 12;
    
    for (let i=0; i<numOfMenuItems; i++) {
        const menuItem = document.createElement('div');
        const itemImg = document.createElement('div');
        const itemText = document.createElement('div');
        const itemTitle = document.createElement('p');
        const itemPrice = document.createElement('p');
        const itemDescription = document.createElement('p');
        const cake = new Image();

        itemImg.appendChild(cake);
        menuItem.appendChild(itemImg);
        menuItem.appendChild(itemText);
        itemText.appendChild(itemTitle);
        itemText.appendChild(itemPrice);
        itemText.appendChild(itemDescription);
        menuItems.appendChild(menuItem);

        menuItem.classList.add('menu-item');
        itemText.classList.add('item-text');
        itemImg.classList.add('item-img');
        itemTitle.classList.add('item-title');
        itemPrice.classList.add('item-price');
        itemDescription.classList.add('item-description');
        cake.src = cakeJpg;
        itemTitle.innerText = 'Biscoff Silvanas';
        itemPrice.innerText = 'PHP 365';
        itemDescription.innerText = 'Biscoff flavor and rich buttercream in between layers of cashew-meringue wafers';
    }
    return menu;
}


export default function loadMenu() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    content.appendChild(createSearchbar());
    content.appendChild(createMenu());
    return;
}