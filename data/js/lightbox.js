document.onkeyup = function (e) {
    if (e.key == 'Escape') {
        closeLightboxTwo();
    } else if (e.key == 'ArrowLeft') {
        changeSlideTwo(-1);
    } else if (e.key == 'ArrowRight') {
        changeSlideTwo(1);
    }
}

let slideIndexTwo = 1;
showSlideTwo(slideIndexTwo);

function openLightboxTwo() {
    document.getElementById('hamburger').classList.add('hamburger_hide');
    document.getElementById('lightboxtwo').style.display = 'block';
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    if (document.getElementById('wind')) document.getElementById('wind').style.overflow = 'hidden';
};

function closeLightboxTwo() {
    document.getElementById('hamburger').classList.remove('hamburger_hide');
    document.getElementById('lightboxtwo').style.display = 'none';
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
    if (document.getElementById('wind')) document.getElementById('wind').style.overflow = 'auto';
};

function changeSlideTwo(n) {
    showSlideTwo(slideIndexTwo += n);
};

function toSlideTwo(n) {
    showSlideTwo(slideIndexTwo = n);
};

function showSlideTwo(n) {
    const slidesTwo = document.getElementsByClassName('slideTwo');
    let modalPreviewsTwo = document.getElementsByClassName('modal-preview-two');

    if (n > slidesTwo.length) {
        slideIndexTwo = 1;
    };

    if (n < 1) {
        slideIndexTwo = slidesTwo.length;
    };

    for (let j = 0; j < slidesTwo.length; j++) {
        slidesTwo[j].style.display = "none";
    };

    for (let j = 0; j < modalPreviewsTwo.length; j++) {
        modalPreviewsTwo[j].className = modalPreviewsTwo[j].className.replace(' active', '');
    };

    if (slidesTwo.length >= slideIndexTwo) slidesTwo[slideIndexTwo - 1].style.display = 'grid';
    if (modalPreviewsTwo.length >= slideIndexTwo) modalPreviewsTwo[slideIndexTwo - 1].className += ' active';
};
