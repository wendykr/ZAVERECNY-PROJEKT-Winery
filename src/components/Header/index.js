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

  element.querySelector('.header').addEventListener('click', () => {
    window.location.href = '/';
  });

  element.querySelector('.header').addEventListener('mouseover', () => {
    element.querySelector('.header').style.cursor = 'pointer';
  });

  return element;
}