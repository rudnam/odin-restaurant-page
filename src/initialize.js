// initialize.js
import Logo from './images/logo.png';
import FB from './images/fb-logo.png';
import IG from './images/ig-logo.png';
import Favicon from './images/favicon.jpg';
import loadHome from './home';
import loadStores from './stores';
import loadMenu from './menu';

function createHeader() {
    const header = document.createElement('header');

    const divHeader = document.createElement('div');
    const a = document.createElement('a');
    const logo = new Image();
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const order = document.createElement('button');
    const payment = document.createElement('button');

    a.appendChild(logo);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    header.appendChild(divHeader);
    divHeader.appendChild(a);
    divHeader.appendChild(ul);
    divHeader.appendChild(order);
    divHeader.appendChild(payment);

    order.id = 'order';
    payment.id = 'payment';
    divHeader.classList.add('header');
    logo.src = Logo;
    a.href = ".";
    order.innerText = 'ORDER NOW';
    payment.innerText = 'DIRECT ONLINE PAYMENT';
    li1.innerText = 'HOME';
    li1.addEventListener('click', function() {
        loadHome();
    });
    li2.innerText = 'OUR STORES';
    li2.addEventListener('click', function() {
        loadStores();
    });
    li3.innerText = 'MENU';
    li3.addEventListener('click', function() {
        loadMenu();
    });

    return header;
}

function createFooter() {
    const footer = document.createElement('footer');

    const divTitle = document.createElement('div');
    const divButtons = document.createElement('div');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button');
    const divSocmed = document.createElement('div');
    const divFb = document.createElement('div');
    const divIg = document.createElement('div');
    const fbLogo = new Image();
    const igLogo = new Image();
    const divCopyright = document.createElement('div');

    divButtons.appendChild(btn1);
    divButtons.appendChild(btn2);
    divButtons.appendChild(btn3);
    divFb.appendChild(fbLogo);
    divIg.appendChild(igLogo);
    divSocmed.appendChild(divFb);
    divSocmed.appendChild(divIg);
    footer.appendChild(divTitle);
    footer.appendChild(divButtons);
    footer.appendChild(divSocmed);
    footer.appendChild(divCopyright);

    divTitle.classList.add('ftr-title');
    divButtons.classList.add('ftr-buttons');
    divSocmed.classList.add('ftr-socmed');
    divCopyright.classList.add('ftr-copyright');
    divTitle.innerHTML = "Conti<span>'</span>s Bakeshop and Restaurant";
    divCopyright.innerHTML = "© Copyright <span>Conti's Bakeshop and Restaurant.</span> All Rights Reserved";
    btn1.innerText = 'Our Services';
    btn2.innerText = 'Our Careers';
    btn3.innerText = 'Contact us';
    fbLogo.src = FB;
    igLogo.src = IG;

    return footer;
}

function initFavicon() {
    const link = document.createElement('link');
    
    document.head.appendChild(link);

    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = Favicon;

    return;
}

export default function initialize() {
    const content = document.createElement('div');

    document.body.appendChild(createHeader());
    document.body.appendChild(content);
    document.body.appendChild(createFooter());

    content.id = 'content';

    initFavicon();
    loadHome();

    return;
}