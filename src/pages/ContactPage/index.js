import './style.scss';
import iconAddress from './img/icon-address.svg';
import iconEmail from './img/icon-email.svg';
import iconPhone from './img/icon-phone.svg';

export const ContactPage = () => {

    const element = document.createElement('div');
    element.classList.add('page');

    element.innerHTML = `
        <section class="padding-reset maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41575.57413731048!2d18.292520525862386!3d49.362115129789096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714783595d98361%3A0x522b19b65fec5b34!2s756%2006%20Velk%C3%A9%20Karlovice%2C%20%C4%8Cesko!5e0!3m2!1scs!2sus!4v1687354119613!5m2!1scs!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
        <section class="background-white">
            <h2 class="section__title">Kontaktujte nás</h2>
                <div class="section__flex">
                    <div class="touch__content touch__phone">
                        <p class="touch__title">Telefon</p>
                        <a class="touch__description" href="tel:+420421124024">+420 421 124 024</a>
                        <div class="touch__image">
                            <img class="touch__img" src="${iconPhone}" width="40" height="40" alt="icon phone" />
                        </div>
                    </div>
                    <div class="touch__content touch__email">
                        <p class="touch__title">E-mail</p>
                        <a class="touch__description" href="mailto:info@vinarstvi.netlify.app">info@vinarstvi.netlify.app</a>
                        <div class="touch__image">
                            <img class="touch__img" src="${iconEmail}" width="50" height="50" alt="icon email" />
                        </div>
                    </div>
                    <div class="touch__content touch__address">
                        <p class="touch__title">Adresa</p>
                        <p class="touch__description">246, Velké Karlovice, 756 06</p>
                        <div class="touch__image">
                            <img class="touch__img" src="${iconAddress}" width="60" height="60" alt="icon address" />
                        </div>
                    </div>
                </div>
        </section>
        <section>
            <h2 class="section__title">Pošlete nám zprávu</h2>
                <form class="form">
                    <label class="form__label" for="name">Jméno *</label>
                    <input class="form__input" type="text" name="name" id="name" placeholder="Jméno" required/>
                    <label class="form__label" for="email">E-mail *</label>
                    <input class="form__input" type="email" name="email" id="email" placeholder="E-mail" required/>
                    <label class="form__label" for="message">Zpráva *</label>
                    <textarea class="form__input" name="message" id="message" placeholder="Zde začnete psát ..." cols="30" rows="5" required></textarea>
                    <input class="form__input terms" type="checkbox" value="" id="terms" required/>
                    <label class="form__label terms" for="terms">Souhlasím se shromažďováním, uchováváním a zpracováním mých odeslaných údajů.</label>
                    <button class="form__button" type="submit" class="button">Odeslat</button>
                </form>
        </section>
    `;

    const touchContentElm = element.querySelectorAll('.touch__content');

    touchContentElm.forEach((content) => {
        content.addEventListener('mouseenter', function () {
            this.classList.add('mouse-enter');
        });
        content.addEventListener('mouseleave', function () {
            this.classList.remove('mouse-enter');
        });
    });

    element.querySelector('.form').addEventListener('submit', (event) => {
        event.preventDefault();

        element.querySelector('.form').innerHTML = '';
        element.querySelector('.form').innerHTML = `<div class="form__message">Zprávu jsme v pořádku přijali. Odpovíme vám, jak nejdříve to bude možné.</div>`;
    })

    return element;
}