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
                <form class="filters__form">
                    <label class="filters__label">
                        Dostupnost
                    </label>
                    <select class="filters__select" id="select-status">
                    </select>
                <button class="filters__button" type="submit">Zobrazit</button>
                </form>
                <div class="filters__form">
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
            title: "Rubicone IGP Chardonay",
            price: 484,
            status: true,
        },
        {
            id: 1,
            imageUrl: images02,
            title: "Freghino Litro",
            price: 242,
            status: false,
        },
        {
            id: 2,
            imageUrl: images03,
            title: "Franquette",
            price: 303,
            status: false,
        },
        {
            id: 3,
            imageUrl: images04,
            title: "La Garmaise",
            price: 180,
            status: false,
        },
        {
            id: 4,
            imageUrl: images05,
            title: "HOMOK",
            price: 199,
            status: true,
        },
        {
            id: 5,
            imageUrl: images06,
            title: "Beaujolais-Villages",
            price: 194,
            status: false,
        },
        {
            id: 6,
            imageUrl: images07,
            title: "Koala Vert",
            price: 190,
            status: false,
        },
        {
            id: 7,
            imageUrl: images08,
            title: "Guefen",
            price: 191,
            status: true,
        },
        {
            id: 8,
            imageUrl: images09,
            title: "Rosato La Salita",
            price: 278,
            status: true,
        },
        {
            id: 9,
            imageUrl: images10,
            title: "Bianco Damigiana",
            price: 155,
            status: true,
        },
        {
            id: 10,
            imageUrl: images11,
            title: "Atelier",
            price: 204,
            status: false,
        },
        {
            id: 11,
            imageUrl: images12,
            title: "La Mosca",
            price: 281,
            status: false,
        },
    ];

    const status = [
        {
            id: 0,
            name: "Vše",
        },
        {
            id: 1,
            name: "Skladem",
        },
        {
            id: 2,
            name: "Vyprodáno",
        },
    ];

    const sort = [
        {
            id: 0,
            name: "Výchozí",
        },
        {
            id: 1,
            name: "Nejlevnější",
        },
        {
            id: 2,
            name: "Nejdražší",
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
            `<option value="${oneOption.id}">${oneOption.name}</option>`
        )
        .join('');

    const selectSortElm = element.querySelector('#select-sort');
    selectSortElm.innerHTML = sort
        .map(oneOption =>
            `<option value="${oneOption.id}">${oneOption.name}</option>`
        )
        .join('');

    element.querySelector('.filters').addEventListener('submit', (event) => {
        event.preventDefault();

        const select = element.querySelector('#select-status').value;
        console.log(select);

        let result = '';
        if (select === '1') {
            result = items.filter((oneItem) => oneItem.status === true);
        } else if (select === '2') {
            result = items.filter((oneItem) => oneItem.status === false);
        } else {
            result = items.filter((oneItem) => oneItem.status === true || oneItem.status === false);
        }

        const listItemElm = result
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