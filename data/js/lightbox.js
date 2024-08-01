

let slideIndexTwo = 1;
showSlideTwo(slideIndexTwo);

function openLightboxTwo() {
    if (document.getElementById('hamburger') != null) {
        document.getElementById('hamburger').classList.add('hamburger_hide');
    }
    else if (document.getElementById('burger') != null) {
        document.getElementById('burger').classList.add('burger_hide');
    }


    document.getElementById('lightboxtwo').style.display = 'block';
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    if (document.getElementById('wind')) document.getElementById('wind').style.overflow = 'hidden';
};

function closeLightboxTwo() {
    if (document.getElementById('hamburger') != null) {
        document.getElementById('hamburger').classList.add('hamburger_show');
        document.getElementById('hamburger').classList.remove('hamburger_hide');
    }
    else if (document.getElementById('burger') != null) {
        document.getElementById('burger').classList.add('burger_show');
        document.getElementById('burger').classList.remove('burger_hide');
    }
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
    resizeSlideTwo(slideIndexTwo);
};

function resizeSlideTwo(n) {
    i = n - 1;
    imgH = document.getElementsByClassName('slideTwo')[i].children[0].height;
    imgW = document.getElementsByClassName('slideTwo')[i].children[0].width;
    vpH = window.innerHeight;
    vpW = window.innerWidth;
    if (document.getElementsByClassName('slideTwo')[i].children[0].height / document.getElementsByClassName('slideTwo')[i].children[0].width > ((5 / 6) * (vpH / vpW))) {
        document.getElementsByClassName('slideTwo')[0].parentElement.style.width = (vpH * 7 / 10 * (imgW / imgH)) + 'px';
        document.getElementsByClassName('slideTwo')[0].parentElement.style.height = 'auto';

    }
    else {
        document.getElementsByClassName('slideTwo')[0].parentElement.style.width = (vpW * 9 / 10) + 'px';
        document.getElementsByClassName('slideTwo')[0].parentElement.style.height = 'auto';

    }
    if (document.getElementsByClassName('slideTwo')[i].childElementCount >= 2) {
        document.getElementsByClassName('slideTwo')[i].children[1].style.fontSize = vpH / 40 + 'px';
    }
    if (document.getElementsByClassName('slideTwo')[i].childElementCount >= 3) {
        document.getElementsByClassName('slideTwo')[i].children[2].style.fontSize = vpH / 60 + 'px';
    }
}

