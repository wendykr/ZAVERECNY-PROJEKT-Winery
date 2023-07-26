import { HomePage } from "./pages/HomePage/index";
import { CataloguePage } from "./pages/CataloguePage/index";
import { DegustationPage } from "./pages/DegustationPage/index";
import { ContactPage } from "./pages/ContactPage/index";
import { ErrorPage } from "./pages/ErrorPage/index";
import { Header } from "./components/Header/index";
import { Footer } from "./components/Footer/index";
import { GoTop } from "./components/GoTop/index";
import { Modal } from "./components/Modal/index";
import './style.scss';

const titleElm = document.querySelector('title');
const descriptionElm = document.querySelector("meta[name='description']");
const ogTitleElm = document.querySelector("meta[property='og:title']");
const ogDescriptionElm = document.querySelector("meta[property='og:description']");
const ogImageElms = document.querySelectorAll("meta[property='og:image']");
const ogUrlElm = document.querySelector("meta[property='og:url']");
const twitterImageElms = document.querySelectorAll("meta[name='twitter:image']");
const twitterTitleElm = document.querySelector("meta[name='twitter:title']");
const twitterDescriptionElm = document.querySelector("meta[name='twitter:description']");

const imageSocKatalog = [
  `${window.location.origin}/images/og-soc-katalog-dark-v.jpg`,
  `${window.location.origin}/images/og-soc-katalog-light-v.jpg`,
];

const imageSocDegustace = [
  `${window.location.origin}/images/og-soc-degustace-dark-v.jpg`,
  `${window.location.origin}/images/og-soc-degustace-light-v.jpg`,
];

const imageSocKontakt = [
  `${window.location.origin}/images/og-soc-kontakt-dark-v.jpg`,
  `${window.location.origin}/images/og-soc-kontakt-light-v.jpg`,
];

const imageSocError = [
  `${window.location.origin}/images/og-soc-error-dark-v.jpg`,
  `${window.location.origin}/images/og-soc-error-light-v.jpg`,
];

const appElement = document.querySelector('#app');

appElement.append(Header());

if (location.pathname === '/') {
  appElement.append(HomePage());
} else if (location.pathname === '/catalogue') {
  appElement.append(CataloguePage());
  titleElm.innerHTML = 'Katalog | Winery';
  descriptionElm.setAttribute('content', 'Naše vína. Vyberte si z naší nabídky odrůd a objevte jedinečný výsledek naší ruční práce.');
  ogTitleElm.setAttribute('content', 'Katalog | Winery');
  ogDescriptionElm.setAttribute('content', 'Naše vína. Vyberte si z naší nabídky odrůd a objevte jedinečný výsledek naší ruční práce.');
  ogImageElms.forEach((elm, index) => {
    elm.setAttribute('content', imageSocKatalog[index]);
  });
  ogUrlElm.setAttribute('content', `${window.location.origin}/catalogue`);
  twitterImageElms.forEach((elm, index) => {
    elm.setAttribute('content', imageSocKatalog[index]);
  });
  twitterTitleElm.setAttribute('content', 'Katalog | Winery');
  twitterDescriptionElm.setAttribute('content', 'Naše vína. Vyberte si z naší nabídky odrůd a objevte jedinečný výsledek naší ruční práce.');
} else if (location.pathname === '/degustation') {
  appElement.append(DegustationPage());
  titleElm.innerHTML = 'Degustace | Winery';
  descriptionElm.setAttribute('content', 'Naplánujte si příjemné chvíle se svými přáteli a vyberte si z naší nabídky degustačních balíčků přímo v naší vinici.');
  ogTitleElm.setAttribute('content', 'Degustace | Winery');
  ogDescriptionElm.setAttribute('content', 'Naplánujte si příjemné chvíle se svými přáteli a vyberte si z naší nabídky degustačních balíčků přímo v naší vinici.');
  ogImageElms.forEach((elm, index) => {
    elm.setAttribute('content', imageSocDegustace[index]);
  });
  ogUrlElm.setAttribute('content', `${window.location.origin}/degustation`);
  twitterImageElms.forEach((elm, index) => {
    elm.setAttribute('content', imageSocDegustace[index]);
  });
  twitterTitleElm.setAttribute('content', 'Degustace | Winery');
  twitterDescriptionElm.setAttribute('content', 'Naplánujte si příjemné chvíle se svými přáteli a vyberte si z naší nabídky degustačních balíčků přímo v naší vinici.');
} else if (location.pathname === '/contact') {
  appElement.append(ContactPage());
  titleElm.innerHTML = 'Kontakt | Winery';
  descriptionElm.setAttribute('content', 'Ať už hledáte degustaci vín, nebo se chcete dozvědět více o našem příběhu, těšíme se na setkání s vámi.');
  ogTitleElm.setAttribute('content', 'Kontakt | Winery');
  ogDescriptionElm.setAttribute('content', 'Ať už hledáte degustaci vín, nebo se chcete dozvědět více o našem příběhu, těšíme se na setkání s vámi.');
  ogImageElms.forEach((elm, index) => {
    elm.setAttribute('content', imageSocKontakt[index]);
  });
  ogUrlElm.setAttribute('content', `${window.location.origin}/contact`);
  twitterImageElms.forEach((elm, index) => {
    elm.setAttribute('content', imageSocKontakt[index]);
  });
  twitterTitleElm.setAttribute('content', 'Kontakt | Winery');
  twitterDescriptionElm.setAttribute('content', 'Ať už hledáte degustaci vín, nebo se chcete dozvědět více o našem příběhu, těšíme se na setkání s vámi.');
} else {
  appElement.append(ErrorPage());
  titleElm.innerHTML = 'Stránka nenalezena | Winery';
  descriptionElm.setAttribute('content', 'Je nám líto, ale stránka, kterou se pokoušíte zobrazit, neexistuje. Ujistěte se prosím, že jste zadali správnou adresu stránky.');
  ogTitleElm.setAttribute('content', 'Stránka nenalezena | Winery');
  ogDescriptionElm.setAttribute('content', 'Je nám líto, ale stránka, kterou se pokoušíte zobrazit, neexistuje. Ujistěte se prosím, že jste zadali správnou adresu stránky.');
  ogImageElms.forEach((elm, index) => {
    elm.setAttribute('content', imageSocError[index]);
  });
  ogUrlElm.setAttribute('content', `${window.location.origin}/error`);
  twitterImageElms.forEach((elm, index) => {
    elm.setAttribute('content', imageSocError[index]);
  });
  twitterTitleElm.setAttribute('content', 'Stránka nenalezena | Winery');
  twitterDescriptionElm.setAttribute('content', 'Je nám líto, ale stránka, kterou se pokoušíte zobrazit, neexistuje. Ujistěte se prosím, že jste zadali správnou adresu stránky.');
};

appElement.append(GoTop(), Modal(), Footer());