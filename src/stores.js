// stores.js
import searchPng from './images/search.png'


function createTopbar() {
    const topbar = document.createElement('section');

    topbar.id = 'topbar';
    const p = document.createElement('p');
    p.classList.add('topbar-title');
    p.innerText = 'Store Search';
    topbar.appendChild(p);

    const searchbar = document.createElement('div');
    searchbar.id = 'searchbar'
    const search = document.createElement('input');
    search.type = 'search';
    search.name = 'search';
    search.id = 'search';
    search.placeholder = "City";
    const btn = document.createElement('button');
    const searchIcon = new Image();
    searchIcon.src = searchPng;
    btn.appendChild(searchIcon);
    searchbar.appendChild(search);
    searchbar.appendChild(btn);
    topbar.append(searchbar);

    const selectbar = document.createElement('div');
    selectbar.id = 'selectbar';
    const select = document.createElement('select');
    const placeholder = document.createElement('option');
    placeholder.innerText = 'Select State';
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);
    const numOfCities = 5;
    for (let i=0; i<numOfCities; i++) {
        const option = document.createElement('option');
        option.value = `City ${i}`;
        option.innerText = `City ${i}`;
        select.appendChild(option);
    }
    selectbar.append(select);
    topbar.append(selectbar);


    return topbar;
}

function createStores() {
    const stores = document.createElement('section');
    
    stores.id = 'stores';
    const storeCards = document.createElement('div');
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

        storeCard.appendChild(cardTitle);
        storeCard.appendChild(cardAddress);
        storeCard.appendChild(cardSchedule);
        storeCard.appendChild(cardContacts);
        storeCard.appendChild(cardLine);
        storeCard.appendChild(cardDetails);

        storeCard.classList.add('store-card');
        cardTitle.innerText = 'Alabang Town Center, Muntinlupa City';
        cardTitle.classList.add('card-title');
        cardAddress.innerText = '1107 G/F Corte de las Palmas, Alabang Town Center, Ayala Alabang, City of Muntinlupa';
        cardAddress.classList.add('card-address');
        cardSchedule.innerText = '11:00 AM - 08:00 PM';
        cardSchedule.classList.add('card-schedule');
        const num1 = document.createElement('a');
        const num2 = document.createElement('a');
        num1.innerText = '(0917)554-2996';
        num2.innerText = '(02)8556-7720';
        cardContacts.appendChild(num1);
        cardContacts.appendChild(num2);
        cardContacts.classList.add('card-contacts');
        cardDetails.innerText = 'See Details';
        cardDetails.classList.add('card-details');
        storeCards.appendChild(storeCard);
    }

    stores.appendChild(storeCards)
    
    return stores;

}

export default function loadStores() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    console.log('stores');

    content.appendChild(createTopbar());
    content.appendChild(createStores());
    return;
}

