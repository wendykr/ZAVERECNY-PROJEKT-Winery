# Winery Theme

Závěrečný projekt semestrálního kurzu [JavaScript 2 JARO 2023](https://www.czechitas.cz/kurzy/javascript-2)

- [Minimální požadavky](#Minimální-požadavky)
- [Abstrakt](#Abstrakt)
- [Rozsah a realizace](#Rozsah-a-realizace)

## Minimální požadavky

Požadavky ze strany ogranizátorů kurzu pro uznání projektu (stav uspěla) a udělení certifikátu.

- jednoduchý web s tématikou **malé rodinné vinařství**
- web bude obsahovat **4 různé obsahové stránky**
  - Úvod, Katalog vín, Degustace a Kontakty
- je postavený použitím **Webpacku**


## Abstrakt

Hlavním tématem bylo vytvořit statický web, tzn. nebude se ptát na žádné API s cílem využít co nejvíce znalostí z kurzu, vyzkoušet si, co nám zrovna nešlo a nebo jsme si chtěli lépe procvičit.

- na úvodní stranu umístit měnící se reklamu v podobě banneru
- vytvořit na stránce Katalog vín nabídku s možností jejího filtrování
- umístit rezervační formulář na stránce Degustace s možností výběru a následného zpracování dat
- umožnit kontaktovat majitele vinařství prostřednictvím kontaktního formuláře


## Rozsah a realizace

Stručný výčet znalostí, které jsem v projektu využila.
*Uvádím znalosti týkající se JavaScriptu - responsivitu a technické znalosti HTML/CSS považuji v tomto projektu jako samozřejmost.*

- **manipulace DOM** přes innerHTML a metody elementů (append, create, querySelector/All)
- reagování na různé eventy (banner: **mouse events**, úvod: **scroll**, formuláře: **submit**, degustace: **click**)
- použití časovače (**setTimeout, clearTimeout**)
- pokročilá práce metod polí (**Array#filter, Array.forEach**)
