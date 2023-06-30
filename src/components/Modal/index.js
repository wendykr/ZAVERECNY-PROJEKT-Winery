import './style.scss';

export const Modal = () => {

    const element = document.createElement('div');

    element.innerHTML = `
        <div class="modal" id="modal">
            <div class='modal__container'>
                <div class="modal__content">
                    <p class="modal__paragraph">Už vám bylo 18 let? Zavřením tohoto okna potvrzujete, že ANO.</p>
                </div>
                <span class="modal__button--close" title="zavřít">x</span>
            </div>
        </div>
    `;

    window.addEventListener('load', () => {
        const closeBtn = element.querySelector('.modal__button--close');
        const modalMenu = element.querySelector('#modal');

        if (sessionStorage.getItem('dontLoad') == null) {
            setTimeout(() => {
                modalMenu.classList.add('show');
                document.body.style.overflow = 'hidden';
            },3000);
        
            closeBtn.addEventListener('click', () => {
                sessionStorage.setItem('dontLoad', 'true');
                modalMenu.classList.remove('show');
                document.body.style.overflow = 'auto';
            });
        }
      });

    return element;
}
