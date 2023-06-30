import { Navigation } from "../Header/Navigation";
import './style.scss';
import logoWine from './img/logo-wine.svg';

export const Header = () => {
  const element = document.createElement('header');
  element.innerHTML = `
    <div class="header">
      <img class="header__logo" src="${logoWine}" width="150" height="80" alt="logo Winery" />
    </div>
  `;

  element.append(Navigation());

  element.querySelector('.header__logo').addEventListener('click', () => {
    window.location.href = '/';
  });

  element.querySelector('.header__logo').addEventListener('mouseover', () => {
    element.querySelector('.header__logo').style.cursor = 'pointer';
  });

  return element;
}