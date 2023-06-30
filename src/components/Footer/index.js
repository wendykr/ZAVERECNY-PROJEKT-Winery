import './style.scss';

export const Footer = () => {
  const element = document.createElement('footer');
  element.classList.add('footer');
  element.innerHTML = `
        <p class="footer__text">
          © 2023 <a target="_blank" class="footer__link" href="https://github.com/wendykr/">Vendula Krajíčková</a>
        </p>
        <p class="footer__text">
          Závěrečný projekt kurzu <a class="footer__link" href="https://www.czechitas.cz/kurzy/javascript-2">JavaScript 2</a>
        </p>
        <p class="footer__text">
        Zdroje fotografií <a class="footer__link" href="https://www.freepik.com">freepik.com</a>
      </p>
  `;

  return element;
}