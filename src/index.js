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

const appElement = document.querySelector('#app');

appElement.append(Header());

if (location.pathname === '/') {
  appElement.append(HomePage());
} else if (location.pathname === '/catalogue') {
  appElement.append(CataloguePage());
  titleElm.innerHTML = 'Katalog | Winery';
  descriptionElm.setAttribute('content', 'Naše vína. Vyberte si z naší nabídky odrůd a objevte jedinečný výsledek naší ruční práce.');
} else if (location.pathname === '/degustation') {
  appElement.append(DegustationPage());
  titleElm.innerHTML = 'Degustace | Winery';
  descriptionElm.setAttribute('content', 'Naplánujte si příjemné chvíle se svými přáteli a vyberte si z naší nabídky degustačních balíčků přímo v naší vinici.');
} else if (location.pathname === '/contact') {
  appElement.append(ContactPage());
  titleElm.innerHTML = 'Kontakt | Winery';
  descriptionElm.setAttribute('content', 'Ať už hledáte degustaci vín, nebo se chcete dozvědět více o našem příběhu, těšíme se na setkání s vámi.');
} else {
  appElement.append(ErrorPage());
  titleElm.innerHTML = 'Stránka nenalezena | Winery';
  descriptionElm.setAttribute('content', 'Je nám líto, ale stránka, kterou se pokoušíte zobrazit, neexistuje. Ujistěte se prosím, že jste zadali správnou adresu stránky.');
};

appElement.append(GoTop(), Modal(), Footer());