import './style.scss';
import degustationCup from './img/degustation-cup.jpg';
import degustationRelax from './img/degustation-relax.jpg';
import degustationCustomized from './img/degustation-customized.jpg';

export const DegustationPage = () => {

    const element = document.createElement('div');
    element.classList.add('page');

    element.innerHTML = `
        <section class="background-white">
            <div class="content">Ochutnejte, vychutnejte, vnímejte a užívejte si. Zrak, vůně a degustace patří bezesporu ke smyslům, které pomáhají vytvořit základní obraz o kvalitě vína. Pro vinaře je degustace jedním z nejpříjemnějších okamžiků v celém procesu vytváření lahodného vína, okamžikem dychtivého očekávání, zda se dílo podařilo. Pokud chcete strávit příjemné chvíle s přáteli, poslechnout si, jak se víno vyrábí a dozvědět se o všech krocích, kterými prochází, než se objeví ve sklenici přímo před vámi, neváhejte a přijměte naše pozvání k návštěvě našeho vinařství na degustaci vín.
            </div>
        </section>
        <section>
            <h2 class="section__title">Degustační balíčky</h2>
            <div class="box">
                <div class="box__cup">
                    <div class="box__image">
                        <img class="box__image--cup" src="${degustationCup}" width="300" height="200" alt="Na skleničku" />
                    </div>
                    <p class="box__description">
                    Degustace 7+1 vzorků vína s komentářem, doplněná degustačními sousty.
                    Délka degustace je 2 hodiny.
                    Cena za osobu je 500 Kč při minimálním počtu 10 osob.
                    Při menším počtu osob se cena za osobu adekvátně navýší.</p>
                    <p class="box__button">Rezervovat</p>
                </div>
                    <div class="box__relax">
                    <div class="box__image">
                        <img class="box__image--relax" src="${degustationRelax}" width="300" height="200" alt="Na pohodu" />
                    </div>
                    <p class="box__description">
                    Degustace 10 vzorků vína s komentářem, doplněná degustačními sousty.
                    Délka degustace je 3 až 3,5 hodin.
                    Cena za osobu je 800 Kč při minimálním počtu 10 osob.
                    Při menším počtu osob se cena za osobu adekvátně navýší.</p>
                    <p class="box__button">Rezervovat</p>
                </div>
                <div class="box__customized">
                    <div class="box__image">
                        <img class="box__image--customized" src="${degustationCustomized}" width="300" height="200" alt="Na míru" />
                    </div>
                    <p class="box__description">Degustace vína na míru dle vašich přání a preferencí. Vína a dobu degustace vybereme společně na základě vašich preferencí a rozpočtu.</p>
                    <p class="box__button">Rezervovat</p>
                </div>
            </div>
            <div class="reservation">
                <div class="reservation__inner">
                    <h3 class="reservation__title">Rezervační formulář</h3>
                    <form class="reservation__form">
                    <div class="form__flex--row">
                        <div class="form__flex--coll">
                            <label class="reservation__form--label" for="name">Jméno *</label>
                            <input class="reservation__form--input" type="text" name="name" id="name" placeholder="Jméno" required/>
                        </div>
                        <div class="form__flex--coll">
                            <label class="reservation__form--label" for="email">E-mail *</label>
                            <input class="reservation__form--input" type="email" name="email" id="email" placeholder="E-mail" required/>
                        </div>
                    </div>
                    <div class="form__flex--row">
                        <div class="form__flex--coll">
                            <label class="reservation__form--label" for="tel">Telefon *</label>
                            <input class="reservation__form--input" type="tel" name="tel" id=tel" placeholder="123 456 789" pattern="[0-9]{3} [0-9]{3} [0-9]{3}" required/>
                        </div>
                        <div class="form__flex--coll">
                            <label class="reservation__form--label" for="select-packet">Degustační balíček *</label>
                            <select class="reservation__form--input" id="select-packet">
                            </select>
                        </div>
                    </div>
                    <div class="form__flex--row">
                        <div class="form__flex--coll">
                            <label class="reservation__form--label" for="date">Termín degustace *</label>
                            <input class="reservation__form--input" type="date" name="date" id="date" required/>
                        </div>
                        <div class="form__flex--coll">
                            <label class="reservation__form--label" for="number">Počet osob *</label>
                            <input class="reservation__form--input" type="number" name="number" id="number" placeholder="Počet osob" required/>
                        </div>
                    </div>
                    <label class="reservation__form--label" for="message">Zpráva</label>
                    <textarea class="reservation__form--input" name="message" id="message" placeholder="Zde specifikujte Vaše požadavky na služby, speciální přání apod." cols="30" rows="5"></textarea>
                    <input class="reservation__form--input terms" type="checkbox" value="" id="terms" required/>
                    <label class="reservation__form--label terms" for="terms">Odesláním formuláře potvrzujete, že jste se seznámili s podmínkami.</label>
                    <button class="reservation__form--button" type="submit" class="button">Odeslat</button>
                    </form>
                </div>
            </div>
            <div id="message" class="form__text">
                <div class="reservation__form--message">Vaši rezervaci jsme v pořádku přijali. Odpovíme vám, jak nejdříve to bude možné.</div>
            </div>
        </section>

        <section class="background-white">
            <div class="accordion">
                <h2 class="accordion__title">Mohlo by vás zajímat</h2>
                <div class="accordion__description">Často se nás ptáte na velmi podobné otázky, proto jsme pro vás připravili jejich seznam a vypracovali na ně odpovědi.</div>
                <div class="accordion__container">
                    <p class="accordion__label">Vzorky vína</p>
                    <div class="accordion__content"><p>Neustále obměňujeme naší nabídku vín na základě aktuálních trendů a poptávky spotřebitelů. Proto nelze vyhovět konkrétním preferencím vzorků vín pro detustaci. Může se lišít dle skladových zásob.</p></div>
                </div>
                <div class="accordion__container">
                    <p class="accordion__label">Prostředí degustace</p>
                    <div class="accordion__content"><p>Degustace vín probíhá v našich prostorách na adrese sídla společnosti. Po dohodě lze akci uspořádat u Vás ve firmě, na večírku apod. Ceny degustačních balíčků budou dodatečně upraveny.</p></div>
                </div>
                <div class="accordion__container">
                    <p class="accordion__label">Poplatky za degustaci</p>
                    <div class="accordion__content"><p>Poplatky za degustaci vína se liší v závislosti na vašem výběru degustačního balíčku a pokrývají náklady na vzorky vína, personál a další vybavení.</p></div>
                </div>
                <div class="accordion__container">
                    <p class="accordion__label">Zrušení termínu</p>
                    <div class="accordion__content"><p>Termín rezervace lze zrušit 48 hodin předem, jinak se hradí storno poplatek v plné výši.</p></div>
                </div>
            </div>
        </section>
    `;

    const accordionLabelElm = element.querySelectorAll('.accordion__label');

    accordionLabelElm.forEach(label => {
        label.addEventListener('click', function () {
            this.classList.toggle('label--active');

            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
              } else {
                content.style.maxHeight = content.scrollHeight + "px";
              }

            content.classList.toggle('content--active');
        })
    });

    const boxButtonElm = element.querySelectorAll('.box__button');

    boxButtonElm.forEach((button, id) => {
        button.addEventListener('click', () => {
            element.querySelector('.reservation__inner').style.display = 'block';
            element.querySelector('.form__text').style.display = 'none';

            const content = element.querySelector('.reservation');

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }

            content.classList.toggle('reservation--active');

            const boxCupElement = element.querySelector(".box__cup");
            const styleRulesCup = window.getComputedStyle(boxCupElement, "::before");

            const boxRelaxElement = element.querySelector(".box__relax");
            const styleRulesRelax = window.getComputedStyle(boxRelaxElement, "::before");

            const boxCustomizedElement = element.querySelector(".box__customized");
            const styleRulesCustomized = window.getComputedStyle(boxCustomizedElement, "::before");

            if (id === 0) {
                element.querySelector('#select-packet').innerHTML = `
                    <option value="0" selected>${styleRulesCup.content.slice(1, -1)}</option>
                    <option value="1" >${styleRulesRelax.content.slice(1, -1)}</option>
                    <option value="2" >${styleRulesCustomized.content.slice(1, -1)}</option>
            `;
            }

            if (id === 1) {
                element.querySelector('#select-packet').innerHTML = `
                    <option value="0" >${styleRulesCup.content.slice(1, -1)}</option>
                    <option value="1" selected>${styleRulesRelax.content.slice(1, -1)}</option>
                    <option value="2" >${styleRulesCustomized.content.slice(1, -1)}</option>
            `;
            }

            if (id === 2) {
                element.querySelector('#select-packet').innerHTML = `
                    <option value="0" >${styleRulesCup.content.slice(1, -1)}</option>
                    <option value="1" >${styleRulesRelax.content.slice(1, -1)}</option>
                    <option value="2" selected>${styleRulesCustomized.content.slice(1, -1)}</option>
            `;
            }
        });
    });

    element.querySelector('.reservation').addEventListener('submit', (event) => {
        event.preventDefault();

        element.querySelector('.reservation__form').reset();

        element.querySelector('.reservation__inner').style.display = 'none';
        element.querySelector('.reservation').style.maxHeight = '';
        element.querySelector('.form__text').style.display = 'block';
    });

    return element;
}