import { Navigation } from "../Header/Navigation";
import './style.scss';
import logoWine from './img/logo-wine.svg';

export const Header = () => {
  const element = document.createElement('header');
  element.innerHTML = `
    <div class="header">
      <div class="header__inner">
        <img class="header__logo" src="${logoWine}" width="150" height="80" alt="logo Vinařství" />
      </div>
    </div>
  `;

  element.querySelector('.header').append(Navigation());

  element.querySelector('.header__inner').addEventListener('click', () => {
    window.location.href = '/';
  });

  element.querySelector('.header__inner').addEventListener('mouseover', () => {
    element.querySelector('.header__inner').style.cursor = 'pointer';
  });

  return element;
}