let dots = document.querySelectorAll('.succes__dots');
let applicationLeft = document.querySelector('.succes__left');
let AppWidth = applicationLeft.offsetWidth;
let AppHeight = applicationLeft.offsetHeight;
let widthNum = Math.floor(Math.random() * AppWidth + 1)
let HeightNum = Math.floor(Math.random() * AppWidth + 1)

for (let i = 0; i < dots.length; i++) {
    dots[i].style.left = `${widthNum}px`
    dots[i].style.bottom = `${HeightNum}px`
    console.log(dots[i]);
}



