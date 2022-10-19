let links = document.getElementById('links');
let bars = document.getElementById('icon-bars');
let close = document.getElementById('icon-close');

let goUp = document.getElementById('goUp');

bars.addEventListener('click', () => {
    links.classList.add('active');
    close.style.display = 'block';
    bars.style.display = 'none';
});

close.addEventListener('click', () => {
    bars.style.display = "block";
    close.style.display = 'none';
    links.classList.remove('active');
});

window.onscroll = function () {
    if (window.scrollY >= 800) {
        goUp.style.display = 'block';
    } else {
        goUp.style.display = 'none';
    }
}


