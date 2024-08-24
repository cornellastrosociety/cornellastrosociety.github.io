const items = document.querySelectorAll(".item");
let imageURLs = [
    "/data/img/irv2.jpg",
    "/data/img/obs.jpg",
    "/data/img/oai.jpg",
    "/data/img/c14deck.jpg",
    "/data/img/bob.jpg",
    "/data/img/ag.jpg",
];
//initially empty
let deviceType = "";
let events = {
    mouse: {
        start: "mouseover",
        end: "mouseout",
    },
    touch: {
        start: "touchstart",
        end: "touchend",
    },
};
const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};
isTouchDevice();
items.forEach((item, index) => {

    let img = document.createElement("img");
    img.setAttribute("src", imageURLs[index]);
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    item.appendChild(img);
    //Initial CSS properties for all items
    item.style.flex = "1";
    item.style.transition = "flex 1.2s ease-in-out";

    item.addEventListener(events[deviceType].start, throttleone(itemexp, 200));
    item.addEventListener(events[deviceType].end, throttleone(itemcont, 200));


    function itemexp() {
        var ratio = img.naturalWidth / img.naturalHeight;
        item.style.flex = 5 * ratio / (104 / 60 - ratio); //Expand the item
        item.children[0].style.animationName = "caption";
        item.children[0].style.opacity = 0.7;
    }
    function itemcont() {
        item.style.flex = "1"; //Contract the item
        item.children[0].style.animationName = "a";
        item.children[0].style.opacity = 0;
    }


});

let slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
    if (document.getElementById('hamburger') != null) {
        document.getElementById('hamburger').classList.add('hamburger_hide');
    }
    else if (document.getElementById('burger') != null) {
        document.getElementById('burger').classList.add('burger_hide');
    }
    document.getElementById('lightbox').style.display = 'block';
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    if (document.getElementById('wind')) document.getElementById('wind').style.overflow = 'hidden';
};

function closeLightbox() {
    if (document.getElementById('hamburger') != null) {
        document.getElementById('hamburger').classList.add('hamburger_show');
        document.getElementById('hamburger').classList.remove('hamburger_hide');
    }
    else if (document.getElementById('burger') != null) {
        document.getElementById('burger').classList.add('burger_show');
        document.getElementById('burger').classList.remove('burger_hide');
    }
    document.getElementById('lightbox').style.display = 'none';
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
    if (document.getElementById('wind')) document.getElementById('wind').style.overflow = 'auto';
};

function changeSlide(n) {
    showSlide(slideIndex += n);
};

function toSlide(n) {
    showSlide(slideIndex = n);
};

function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    let modalPreviews = document.getElementsByClassName('modal-preview');

    if (n > slides.length) {
        slideIndex = 1;
    };

    if (n < 1) {
        slideIndex = slides.length;
    };

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    for (let i = 0; i < modalPreviews.length; i++) {
        modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    };

    if (slides.length >= slideIndex) slides[slideIndex - 1].style.display = 'block';
    if (modalPreviews.length >= slideIndex) modalPreviews[slideIndex - 1].className += ' active';
    resizeSlide(slideIndex)
};



function resizeSlide(n) {
    i = n - 1;
    imgH = document.getElementsByClassName('slide')[i].children[0].height;
    imgW = document.getElementsByClassName('slide')[i].children[0].width;
    vpH = window.innerHeight;
    vpW = window.innerWidth;
    if (document.getElementsByClassName('slide')[i].children[0].height / document.getElementsByClassName('slide')[i].children[0].width > ((5 / 6) * (vpH / vpW))) {
        document.getElementsByClassName('slide')[0].parentElement.style.width = (vpH * 7 / 10 * (imgW / imgH)) + 'px';
        document.getElementsByClassName('slide')[0].parentElement.style.height = 'auto';

    }
    else {
        document.getElementsByClassName('slide')[0].parentElement.style.width = (vpW * 9 / 10) + 'px';
        document.getElementsByClassName('slide')[0].parentElement.style.height = 'auto';

    }
    if (document.getElementsByClassName('slide')[i].childElementCount >= 2) {
        document.getElementsByClassName('slide')[i].children[1].style.fontSize = vpH / 40 + 'px';
    }
    if (document.getElementsByClassName('slide')[i].childElementCount >= 3) {
        document.getElementsByClassName('slide')[i].children[2].style.fontSize = vpH / 60 + 'px';
    }
}


