import './style.scss';
import iconBars from './img/icon-bars.svg';
import iconXmark from './img/icon-xmark.svg';

export const Navigation = () => {

    const element = document.createElement('nav');
    element.classList.add('navigation');

    element.innerHTML = `
        <div class="navigation__toggler"><img class="navigation__toggler--icon" src="${iconBars}" width="20" height="20" alt="icon toggler" /></div>
        <ul class="navigation__list">
            <li class="navigation__item"><a href="/" class="navigation__link link-home">Domů</a></li>
            <li class="navigation__item"><a href="/catalogue" class="navigation__link link-catalogue">Katalog</a></li>
            <li class="navigation__item"><a href="/degustation" class="navigation__link link-degustation">Degustace</a></li>
            <li class="navigation__item"><a href="/contact" class="navigation__link link-contact">Kontakt</a></li>
        </ul>
    `;

    if (location.pathname === '/') {
        element.querySelector('.link-home').classList.add('navigation__link--active');
    } else if (location.pathname === '/catalogue') {
        element.querySelector('.link-catalogue').classList.add('navigation__link--active');
    } else if (location.pathname === '/degustation') {
        element.querySelector('.link-degustation').classList.add('navigation__link--active');
    } else if (location.pathname === '/contact') {
        element.querySelector('.link-contact').classList.add('navigation__link--active');
    }

    let toggle;
    element.querySelector('.navigation__toggler').addEventListener('click', () => {
        const content = element.querySelector('.navigation__list');

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }

        content.classList.toggle('show-navigation');

        if (toggle === true) {
            element.querySelector('.navigation__toggler--icon').src  = `${iconBars}`;
            toggle = false;
        } else {
            element.querySelector('.navigation__toggler--icon').src  = `${iconXmark}`;
            toggle = true;
        }
    });

    element.querySelector('.navigation__toggler').addEventListener('mouseover', () => {
        element.querySelector('.navigation__toggler').style.cursor = 'pointer';
        element.querySelector('.navigation__toggler').classList.add('hover');
    });

        element.querySelector('.navigation__toggler').addEventListener('mouseleave', () => {
        element.querySelector('.navigation__toggler').classList.remove('hover');
    });

    return element;
}