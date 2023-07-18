import './style.scss';

export const Item = ( props ) => {
    let { imageUrl, title, price, status } = props;

    let statusClass = '';
    if (status) {
        statusClass = ' available';
        status = 'Skladem';
    } else {
        status = 'Vyprodáno';
    }

    const element = document.createElement('div');
    element.classList.add('item');
    element.innerHTML = `
        <div class="item__wrap">
            <img class="item__image" src="${imageUrl}" title="${title}" />
        </div>
        <h3 class="item__title">${title}</h3>
        <p class="item__price">${price} Kč</p>
        <p class="item__status${statusClass}">${status}</p>
    `;

    return element;
}