// let btnLinks = [...document.querySelectorAll('.right__btn-link[data-tabs]')];
// let tabs = [...document.querySelectorAll('.products__tab[data-tabs]')];

// changeProductsTitle();
// addEventListener('resize', changeProductsTitle);

// function changeProductsTitle() {
//     let productsTitle = document.querySelector('.products__title');
//     if (innerWidth <= 768) {
//         productsTitle.innerHTML = 'Наши услуги';
//     } else {
//         productsTitle.innerHTML = 'Наши продукты';
//     }
// }

// btnLinks.forEach((link) => {
//     link.addEventListener('click', (e) => {
//         let linkAtr = link.getAttribute('data-tabs');
//         tabs.forEach((tab) => {
//             let tabAtr = tab.getAttribute('data-tabs');
//             if (linkAtr == tabAtr) {
//                 tab.classList.add('active');
//                 btnLinks.forEach((item) => item.classList.remove('active'));
//                 link.classList.add('active');
//             } else {
//                 tab.classList.remove('active');
//             }
//         });
//     });
// });


const headerBtn = document.querySelector('.left__btn');
const headerContentLeft = document.querySelector('.header__content-left');
const text = document.querySelector('.left__text');

headerBtnChangePosition();
addEventListener('resize', headerBtnChangePosition);
function headerBtnChangePosition() {
    if (innerWidth <= 992) {
        headerContentLeft.after(text);
        headerContentLeft.after(headerBtn);
    } else {
        headerContentLeft.append(headerBtn);
        headerContentLeft.append(text);
    }
}