var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalnobutton = document.querySelector('.modal__action--negative');
var togglebutton = document.querySelector('.toggle-button');
var mobilenav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav-item-cta');

console.dir(backdrop.style['background-image']);

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(function () {
            backdrop.classList.add('open');
        }, 10);
    });
}

backdrop.addEventListener('click', function () {
    // mobilenav.style.display = 'none';
    mobilenav.classList.remove('open');
    closemodal();
})

if (modalnobutton) {
    modalnobutton.addEventListener('click', closemodal)
}


function closemodal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    backdrop.classList.remove('open');
    setTimeout(function () {
        backdrop.style.display = 'none';
    }, 200);
    if (modal) {
        modal.classList.remove('open');
    }
}

togglebutton.addEventListener('click', function () {
    // mobilenav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobilenav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function () {
        backdrop.classList.add('open');
    }, 10);

})

ctaButton.addEventListener('animationstart', function (event) {
    console.log('Animation started', event);
})

ctaButton.addEventListener('animationend', function (event) {
    console.log('Animation ended', event);
})

ctaButton.addEventListener('animationiteration', function (event) {
    console.log('Animation iteration', event);
})