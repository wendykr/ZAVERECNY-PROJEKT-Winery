import './style.scss';
import iconEmoji from './img/icon-emoji.svg';

export const ErrorPage = () => {

  const element = document.createElement('div');
  element.classList.add('page');

  element.innerHTML = `
      <section class="notfound">
        <img class="notfound__image" src="${iconEmoji}" width="120" height="120" alt="icon emoji" />
        <div class="notfound__content">
          <h1 class="notfound__title">404</h1>
          <h2 class="notfound__perex">Oops! Stránka nebyla nalezena</h2>
          <p class="notfound__description">Omlouváme se, ale stránka, kterou hledáte, neexistuje. Je možné že byla odstraněna, přesunuta nebo také nemusela nikdy existovat.</p>
          <a href="/" class="notfound__link">Zpět na hlavní stránku</a>
        </div>
      </section>
  `;

  return element;
}