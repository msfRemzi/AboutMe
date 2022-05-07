


let navList = document.querySelector('.nav__list');
let subNavListBoxses = document.querySelectorAll('.sub-nav__list-box');

subNavListBoxses.forEach((item) => {
    if (!item.classList.contains('_not-arrow')) {

        let i = document.createElement('i');
        i.classList.add('_icon-arrow-down');
        i.classList.add('nav-list__arrow');

        item.before(i);
    }
});



let navBtn = document.querySelector('.nav__menu-btn');
let navMenu = document.querySelector('.nav__content-right');

navBtn.addEventListener('click', (e) => navMenu.classList.toggle('active'));



setAdaptiveMenu();
addEventListener('resize', setAdaptiveMenu);

function setAdaptiveMenu() {
    let desctopLanguageBtn = `
    <a href="#!" data-lang-title="ru" class="nav__list-link nav__local-btn _icon-language">RU</a>
    <div class="sub-nav__list-box _not-arrow _sub-nav__language-box">
        <ul class="sub-nav__list _lang">
            <li class="link">
                <a href="#!" data-lang-btn="en" class="local__link link">
                    En
                </a>
            </li>
            <li class="link">
                <a href="#!" data-lang-btn="uz" class="local__link link">
                    Uz
                </a>
            </li>

        </ul>
    </div>
`;

    let mobileLanguageBtn = `
    <a href="#!" data-lang-title="ru" class="nav__list-link">Язык</a>
    <i class="_icon-arrow-down nav-list__arrow"></i>
    <div class="sub-nav__list-box">
        <ul class="sub-nav__list">
            <li class="link">
                <a href="#!" data-lang-btn="ru" class="sub-nav__list-link local__link link">
                    Ru
                </a>
            </li>
            <li class="link">
                <a href="#!" data-lang-btn="uz" class="sub-nav__list-link local__link link">
                    Uz
                </a>
            </li>
            <li class="link">
                <a href="#!" data-lang-btn="en" class="sub-nav__list-link local__link link">
                    en
                </a>
            </li>
        </ul>
    </div>
`;

    let li = document.querySelector('li.link._lang-li__btn');

    li.innerHTML = innerWidth > li.getAttribute('data-adaptive-size') ? desctopLanguageBtn : mobileLanguageBtn;

}


let subSubNavLists = document.querySelectorAll('.sub-sub-nav__list');

subSubNavLists.forEach(list => {
    if (!list.classList.contains('_not-arrow')) {

        let i = document.createElement('i');
        i.classList.add('_icon-arrow-down');
        i.classList.add('_arrow-right');
        list.before(i);
    }
});


let navListBtns = document.querySelectorAll('.nav__list>li');
console.log(navListBtns);
navListBtns.forEach(btn => {

    btn.addEventListener('click', (e) => {
        let subMenuBox = btn.querySelector('.sub-nav__list-box');
        if (subMenuBox) {
            let hasActive = subMenuBox.classList.contains('active');

            navListBtns.forEach(item => {
                let box = item.querySelector('.sub-nav__list-box');
                if (box) {
                    box.classList.remove('active')
                }
                let icon = item.querySelector('.nav-list__arrow');
                if (icon) {
                    icon.classList.remove('active')
                }

            });
            let arrow = btn.querySelector('.nav-list__arrow');
            if (hasActive) {
                if (arrow) {
                    arrow.classList.remove('active')
                }
                subMenuBox.classList.remove('active');
            } else {
                if (arrow) {
                    arrow.classList.add('active')
                }
                subMenuBox.classList.add('active');
            }
        }
    });
});
