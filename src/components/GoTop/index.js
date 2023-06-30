import './style.scss';

export const GoTop = () => {

    const element = document.createElement('div');

    element.innerHTML = `
        <button id="go-top" title="Nahoru"></button>
    `;

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            element.querySelector('#go-top').style.display = "block";
        } else {
            element.querySelector('#go-top').style.display = "none";
        }
    });

    element.querySelector('#go-top').addEventListener('click', () => {
        document.body.scroll({
            top: 0,
            behavior: "smooth"
        });
        document.documentElement.scroll({
            top: 0,
            behavior: "smooth"
        });
    })

    return element;
}

