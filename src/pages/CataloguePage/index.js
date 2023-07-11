import { Item } from '../../pages/CataloguePage/Item/index';
import images01 from '../CataloguePage/Item/img/product-photo-01.jpg';
import images02 from '../CataloguePage/Item/img/product-photo-02.jpg';
import images03 from '../CataloguePage/Item/img/product-photo-03.jpg';
import images04 from '../CataloguePage/Item/img/product-photo-04.jpg';
import images05 from '../CataloguePage/Item/img/product-photo-05.jpg';
import images06 from '../CataloguePage/Item/img/product-photo-06.jpg';
import images07 from '../CataloguePage/Item/img/product-photo-07.jpg';
import images08 from '../CataloguePage/Item/img/product-photo-08.jpg';
import images09 from '../CataloguePage/Item/img/product-photo-09.jpg';
import images10 from '../CataloguePage/Item/img/product-photo-10.jpg';
import images11 from '../CataloguePage/Item/img/product-photo-11.jpg';
import images12 from '../CataloguePage/Item/img/product-photo-12.jpg';

import './style.scss';

export const CataloguePage = () => {

    const element = document.createElement('div');
    element.classList.add('page');

    element.innerHTML = `
        <section class="background-white">
            <div class="content">
                Naše nabídka vín je navržena tak, aby splňovala nejvyšší standardy kvality a přitom zůstala pro vás dostupná za rozumné ceny.
                Naším cílem je umožnit vám prozkoumat bohatost chuťových profilů a jedinečné vlastnosti vín tak, abyste si mohli vybrat přesně podle svých preferencí.
                Ať už se rozhodnete vína ochutnat přímo u nás, nebo si je zakoupit domů, doufáme, že si jej budete moci naplno vychutnat a užít ve svém volném čase.
            </div>
        </section>
        <section>
            <h2 class="section__title">Aktuálně nabízíme</h2>
            <div class="filters">
                <form class="filters__form--main">
                    <div class="filters__field">
                        <label class="filters__label">
                            Dostupnost
                        </label>
                        <select class="filters__select" id="select-status">
                        </select>
                    </div>
                    <div class="filters__field">
                        <label class="filters__label">
                            Barva
                        </label>
                        <select class="filters__select" id="select-color">
                        </select>
                    </div>
                    <div class="filters__field">
                        <label class="filters__label">
                            Obsah cukru
                        </label>
                        <select class="filters__select" id="select-sugar">
                        </select>
                    </div>
                <button class="filters__button" type="submit">Zobrazit</button>
                </form>
                <div class="filters__form--minor">
                    <label class="filters__label">Řazení</label>
                    <select class="filters__select" id="select-sort">
                    </select>
                </div>
            </div>
            <div class="catalog"></div>
        </section>
    `;

    element.querySelector('.catalog').innerHTML= '';

    const items = [
        {
            id: 0,
            imageUrl: images01,
            title: 'Rubicone IGP Chardonay',
            feature: {
                color: 'bílé',
                sugar: 'suché',
            },
            price: 484,
            status: true,
        },
        {
            id: 1,
            imageUrl: images02,
            title: 'Freghino Litro',
            feature: {
                color: 'růžové',
                sugar: 'polosuché',
            },
            price: 242,
            status: false,
        },
        {
            id: 2,
            imageUrl: images03,
            title: 'Franquette',
            feature: {
                color: 'červené',
                sugar: 'sladké',
            },
            price: 303,
            status: false,
        },
        {
            id: 3,
            imageUrl: images04,
            title: 'La Garmaise',
            feature: {
                color: 'bílé',
                sugar: 'suché',
            },
            price: 180,
            status: false,
        },
        {
            id: 4,
            imageUrl: images05,
            title: 'HOMOK',
            feature: {
                color: 'růžové',
                sugar: 'polosuché',
            },
            price: 199,
            status: true,
        },
        {
            id: 5,
            imageUrl: images06,
            title: 'Beaujolais-Villages',
            feature: {
                color: 'červené',
                sugar: 'sladké',
            },
            price: 194,
            status: false,
        },
        {
            id: 6,
            imageUrl: images07,
            title: 'Koala Vert',
            feature: {
                color: 'bílé',
                sugar: 'suché',
            },
            price: 190,
            status: false,
        },
        {
            id: 7,
            imageUrl: images08,
            title: 'Guefen',
            feature: {
                color: 'růžové',
                sugar: 'polosladké',
            },
            price: 191,
            status: true,
        },
        {
            id: 8,
            imageUrl: images09,
            title: 'Rosato La Salita',
            feature: {
                color: 'červené',
                sugar: 'sladké',
            },
            price: 278,
            status: true,
        },
        {
            id: 9,
            imageUrl: images10,
            title: 'Bianco Damigiana',
            feature: {
                color: 'bílé',
                sugar: 'suché',
            },
            price: 155,
            status: true,
        },
        {
            id: 10,
            imageUrl: images11,
            title: 'Atelier',
            feature: {
                color: 'růžové',
                sugar: 'polosladké',
            },
            price: 204,
            status: false,
        },
        {
            id: 11,
            imageUrl: images12,
            title: 'La Mosca',
            feature: {
                color: 'červené',
                sugar: 'sladké',
            },
            price: 281,
            status: false,
        },
    ];

    const status = [
        {
            id: 0,
            name: 'vše',
        },
        {
            id: 1,
            name: 'skladem',
        },
        {
            id: 2,
            name: 'vyprodáno',
        },
    ];

    const color = [
        {
            id: 0,
            name: '---',
        },
        {
            id: 1,
            name: 'bílé',
        },
        {
            id: 2,
            name: 'červené',
        },
        {
            id: 3,
            name: 'růžové',
        },
    ];

    const sugar = [
        {
            id: 0,
            name: '---',
        },
        {
            id: 1,
            name: 'suché',
        },
        {
            id: 2,
            name: 'polosuché',
        },
        {
            id: 3,
            name: 'polosladké',
        },
        {
            id: 4,
            name: 'sladké',
        },
    ];

    const sort = [
        {
            id: 0,
            name: 'výchozí',
        },
        {
            id: 1,
            name: 'nejlevnější',
        },
        {
            id: 2,
            name: 'nejdražší',
        },
    ];

    const listItemElm = items
    .map(oneItem => Item(
      {
          id: oneItem.id,
          imageUrl: oneItem.imageUrl,
          title: oneItem.title,
          price: oneItem.price,
          status: oneItem.status,
      })
    );

    element.querySelector('.catalog').append(...listItemElm);

    const selectStatusElm = element.querySelector('#select-status');
    selectStatusElm.innerHTML = status
        .map(oneOption =>
            `<option value="${oneOption.id}">${oneOption.name.charAt(0).toUpperCase() + oneOption.name.slice(1)}</option>`
        )
        .join('');

    const selectColorElm = element.querySelector('#select-color');
    selectColorElm.innerHTML = color
        .map(oneOption =>
            `<option value="${oneOption.id}">${oneOption.name.charAt(0).toUpperCase() + oneOption.name.slice(1)}</option>`
        )
        .join('');

    const selectSugarElm = element.querySelector('#select-sugar');
    selectSugarElm.innerHTML = sugar
        .map(oneOption =>
            `<option value="${oneOption.id}">${oneOption.name.charAt(0).toUpperCase() + oneOption.name.slice(1)}</option>`
        )
        .join('');

    const selectSortElm = element.querySelector('#select-sort');
    selectSortElm.innerHTML = sort
        .map(oneOption =>
            `<option value="${oneOption.id}">${oneOption.name.charAt(0).toUpperCase() + oneOption.name.slice(1)}</option>`
        )
        .join('');

    element.querySelector('.filters').addEventListener('submit', (event) => {
        event.preventDefault();

        const textStatus = element.querySelector('#select-status').options[element.querySelector('#select-status').selectedIndex].text;
        let resultStatus;
        if (textStatus === 'Skladem') {
            resultStatus = '.status === true)';
        } else if (textStatus === 'Vyprodáno') {
            resultStatus = '.status ==== false)';
        } else {
            resultStatus = '.status === true || item.status === false)';
        }

        const textColor = element.querySelector('#select-color').options[element.querySelector('#select-color').selectedIndex].text;
        let resultColor;
        if (textColor === '---') {
            resultColor = `.feature.color === 'bílé' || item.feature.color === 'červené' || item.feature.color === 'růžové')`;
        } else {
            resultColor = `.feature.color === '` + textColor.toLowerCase() + `')`;
        }

        const textSugar = element.querySelector('#select-sugar').options[element.querySelector('#select-sugar').selectedIndex].text;
        let resultSugar;
        if (textSugar === '---') {
            resultSugar = `.feature.sugar === 'suché' || item.feature.sugar === 'brut' || item.feature.sugar === 'sladké')`;
        } else {
            resultSugar = `.feature.sugar === '` + textSugar.toLowerCase() + `')`;
        }

        const result = items.filter(item => eval(`(item${resultStatus}`) && eval(`(item${resultColor}`) && eval(`(item${resultSugar}`));

        let listItemElm;

        if (result.length > 0) {

            listItemElm = result
            .map(oneItem => Item(
                {
                    id: oneItem.id,
                    imageUrl: oneItem.imageUrl,
                    title: oneItem.title,
                    price: oneItem.price,
                    status: oneItem.status,
                })
            );
        } else {
            listItemElm = 'Zadaným kritériím neodpovídají žádné záznamy.';
        }

        element.querySelector('.catalog').innerHTML = `
            <div id="loader">
                <div id="loader__ball"></div>
                <p id="loader__text">Načítám</p>
            </div>`;

        setTimeout(showPage, 2000);

        function showPage() {
            element.querySelector('#loader').style.display = "none";
            element.querySelector('.catalog').append(...listItemElm);
        }
    })

    element.querySelector('#select-sort').addEventListener('change', (event) => {

        let sortedItems = '';
        if (event.target.value === '1') {

            sortedItems = items
                .sort((p1, p2) => {
                    if (p1.price > p2.price) {
                        return 1;
                    }
                    if (p1.price < p2.price) {
                        return -1;
                    }
                    return 0;
                });
        } else if (event.target.value === '2') {

            sortedItems = items
                .sort((p1, p2) => {
                    if (p1.price < p2.price) {
                        return 1;
                    }
                    if (p1.price > p2.price) {
                        return -1;
                    }
                    return 0;
                });
        } else {
            sortedItems = items
                .sort((i1, i2) => {
                    if (i1.id < i2.id) {
                        return 1;
                    }
                    if (i1.id > i2.id) {
                        return -1;
                    }
                    return 0;
                })
        }

        const listItemElm = sortedItems
        .map(oneItem => Item(
            {
                id: oneItem.id,
                imageUrl: oneItem.imageUrl,
                title: oneItem.title,
                price: oneItem.price,
                status: oneItem.status,
            })
        );

        element.querySelector('.catalog').innerHTML = `
            <div id="loader">
                <div id="loader__ball"></div>
                <p id="loader__text">Načítám</p>
            </div>`;

        setTimeout(showPage, 2000);

        function showPage() {
            element.querySelector('#loader').style.display = "none";
            element.querySelector('.catalog').append(...listItemElm);
        }
    })

    return element;
}