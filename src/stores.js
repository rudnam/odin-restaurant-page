// stores.js
import searchPng from './images/search.png'

function createTopbar() {
    const topbar = document.createElement('section');

    const p = document.createElement('p');
    const searchbar = document.createElement('div');
    const search = document.createElement('input');
    const btn = document.createElement('button');
    const searchIcon = new Image();
    const selectbar = document.createElement('div');
    const select = document.createElement('select');
    const placeholder = document.createElement('option');

    topbar.appendChild(p);
    topbar.appendChild(searchbar);
    topbar.appendChild(selectbar);
    btn.appendChild(searchIcon);
    searchbar.appendChild(search);
    searchbar.appendChild(btn);
    select.appendChild(placeholder);
    selectbar.appendChild(select);
    
    topbar.id = 'topbar';
    searchbar.id = 'searchbar'
    selectbar.id = 'selectbar';
    search.id = 'search';
    p.classList.add('topbar-title');
    p.innerText = 'Store Search';
    search.type = 'search';
    search.name = 'search';
    search.placeholder = "City";
    searchIcon.src = searchPng;
    placeholder.innerText = 'Select State';
    placeholder.disabled = true;
    placeholder.selected = true;
    
    const numOfCities = 5;
    for (let i=0; i<numOfCities; i++) {
        const option = document.createElement('option');
        option.value = `City ${i}`;
        option.innerText = `City ${i}`;
        select.appendChild(option);
    }
    
    return topbar;
}

function createStores() {
    const stores = document.createElement('section');
    
    const storeCards = document.createElement('div');

    stores.appendChild(storeCards)

    stores.id = 'stores';
    storeCards.classList.add('store-cards');

    const numOfStores = 15;
    for (let i=0; i<numOfStores; i++) {
        const storeCard = document.createElement('div');
        const cardTitle = document.createElement('p');
        const cardAddress = document.createElement('p');
        const cardSchedule = document.createElement('p');
        const cardContacts = document.createElement('div');
        const cardLine = document.createElement('hr');
        const cardDetails = document.createElement('button');
        const num1 = document.createElement('a');
        const num2 = document.createElement('a');

        storeCard.appendChild(cardTitle);
        storeCard.appendChild(cardAddress);
        storeCard.appendChild(cardSchedule);
        storeCard.appendChild(cardContacts);
        storeCard.appendChild(cardLine);
        storeCard.appendChild(cardDetails);
        cardContacts.appendChild(num1);
        cardContacts.appendChild(num2);
        storeCards.appendChild(storeCard);

        storeCard.classList.add('store-card');
        cardTitle.classList.add('card-title');
        cardAddress.classList.add('card-address');
        cardSchedule.classList.add('card-schedule');
        cardContacts.classList.add('card-contacts');
        cardDetails.classList.add('card-details');
        cardTitle.innerText = 'Alabang Town Center, Muntinlupa City';
        cardAddress.innerText = '1107 G/F Corte de las Palmas, Alabang Town Center, Ayala Alabang, City of Muntinlupa';
        cardSchedule.innerText = '11:00 AM - 08:00 PM';
        num1.innerText = '(0917)554-2996';
        num2.innerText = '(02)8556-7720';
        cardDetails.innerText = 'See Details';
    }

    return stores;

}

export default function loadStores() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    content.appendChild(createTopbar());
    content.appendChild(createStores());
    
    return;
}

