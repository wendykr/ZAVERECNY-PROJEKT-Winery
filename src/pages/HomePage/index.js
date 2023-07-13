import './style.scss';
import slider01 from './img/slider01.jpg';
import slider02 from './img/slider02.jpg';
import iconGlass from './img/icon-glass.svg';
import iconHabit from './img/icon-habit.svg';
import iconSmell from './img/icon-smell.svg';
import iconSorts from './img/icon-sorts.svg';

export const HomePage = () => {

    const element = document.createElement('div');
    element.classList.add('page');

    element.innerHTML = `
        <div class="slider">
            <ul class="slider__items">
                <li class="slider__item slider__item--active">
                    <img src="${slider01}" alt="banner sbližujeme lidi" width="1920" height="500" />
                </li>
                <li class="slider__item">
                    <img src="${slider02}" alt="banner jedinečnost vína" width="1920" height="500" />
                </li>
            </ul>
            <button class="slider__nav slider__nav--prev"><span> < </span></button>
            <button class="slider__nav slider__nav--next"><span> > </span></button>
        </div>
        <section class="quick">
            <div class="quick__content">
                <h2 class="quick__title">Vyberte si jeden z našich degustačních balíčků.</h2>
                <p class="quick__description">Dovolujeme si vás oslovit s nabídkou degustačních balíčků za výhodné ceny.</p>
                <a href="/degustation" class="quick__button">Více informací</a>
            </div>
        </section>
        <section>
            <div class="content__second">
                <div class="content__second--text">
                    <h3 class="headline">Více než víno</h3>
                    <div class="more">
                        <h4 class="more__title">Víno není pouze nápoj</h4>
                        <p class="more__content">Víno není jen nápoj, ale také kulturní symbol, představující tradici, dědictví a řemeslo. Má bohatou historii a může odrážet jedinečné vlastnosti regionů, kde se vyrábí. Víno má sílu vyvolat emoce, podnítit konverzaci a vytvořit nezapomenutelné okamžiky.</p>
                        <p class="more__content">Kromě toho se víno často užívá ve společenském prostředí, sbližuje lidi a podporuje vztahy. Zvýrazňuje pokrmy, doplňuje chutě a dokáže pozvednout zážitek ze stolování. Degustaci vína zahrnuje zkoumání různých odrůd hroznů, porozumění terroir a objevování umění párování vín.</p>
                        <a class="more__button" href="/catalogue">Zobrazit více</a>
                    </div>
                </div>
                <div class="content__second--content">
                    <div class="skills">
                        <div class="skills__image ">
                            <img class="skills__image--glass" src="${iconGlass}" width="50" height="50" alt="icon glass" />
                        </div>
                        <div class="skills__content">
                            <h4 class="skills__title">Sklenice</h4>
                            <p class="skills__description">Čím větší sklenice, tím větší možnost provzdušnit víno a uvolnit jeho aroma.</p>
                        </div>
                    </div>
                    <div class="skills">
                        <div class="skills__image">
                            <img class="skills__image--smell" src="${iconSmell}" width="50" height="50" alt="icon smell" />
                        </div>
                        <div class="skills__content">
                            <h4 class="skills__title">Vůně</h4>
                            <p class="skills__description">Každá odrůda hroznů má své jedinečné aroma.</p>
                        </div>
                    </div>
                    <div class="skills">
                        <div class="skills__image">
                            <img class="skills__image--sorts" src="${iconSorts}" width="50" height="50" alt="icon sorts" />
                        </div>
                        <div class="skills__content">
                            <h4 class="skills__title">Jedinečnost</h4>
                            <p class="skills__description">Vína jsou unikátní díky odrůdám hroznů nebo výrobním procesům.</p>
                        </div>
                    </div>
                    <div class="skills">
                        <div class="skills__image">
                            <img class="skills__image--habit" src="${iconHabit}" width="50" height="50" alt="icon habit" />
                        </div>
                        <div class="skills__content">
                            <h4 class="skills__title">Tradice</h4>
                            <p class="skills__description">Dlouholetá tradice hluboce zakořeněná v historii výroby, předávaná z generace na generaci.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    const sliderItemsElement = element.querySelector('.slider__items');
    const prevElement = element.querySelector('.slider__nav--prev');
    const nextElement = element.querySelector('.slider__nav--next');
    let currentSlideItem = element.querySelector('.slider__item--active');
    let timeout;

    const changeSlide = (forwards = true) => {
        let nextSlideItem = forwards
            ? currentSlideItem.nextElementSibling
            : currentSlideItem.previousElementSibling;

        if (!nextSlideItem) {
            nextSlideItem = forwards
            ? sliderItemsElement.firstElementChild
            : sliderItemsElement.lastElementChild;
        }

        currentSlideItem.classList.remove('slider__item--active');
        nextSlideItem.classList.add('slider__item--active');

        currentSlideItem = nextSlideItem;

        timeout = setTimeout(changeSlide, 5000);
    };

    const startSlideShow = () => {
        clearTimeout(timeout);
        timeout = setTimeout(changeSlide, 5000);
    };

    const stopSlideShow = () => {
        clearTimeout(timeout);
    };

    changeSlide();

    element.querySelector('.slider').addEventListener('mouseenter', () => {
        stopSlideShow();
    });

    element.querySelector('.slider').addEventListener('mouseleave', () => {
        startSlideShow();
    });

    nextElement.addEventListener('click', () => {
        stopSlideShow();
        changeSlide();
    });

    prevElement.addEventListener('click', () => {
        stopSlideShow();
        changeSlide(false);
    });

    const skillsElement = element.querySelectorAll('.skills');

    const showSkills = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        skillsElement.forEach((skills, i) => {
            const skillsTop = skills.getBoundingClientRect().top;
            
            if (skillsTop < triggerBottom) {
                setTimeout(() => {
                    skills.classList.add('show');
                  }, i * 500);
                
            }
        })
    }

    window.addEventListener('scroll', showSkills);

    return element;
}

