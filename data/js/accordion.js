const items = document.querySelectorAll(".item");
let imageURLs = [
    "/data/img/irv2.jpg",
    "/data/img/obs.jpg",
    "/data/img/oai.jpg",
    "/data/img/c14deck.jpg",
    "/data/img/bob.png",
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
    var ratio = img.naturalWidth / img.naturalHeight;

    item.addEventListener(events[deviceType].start, throttleone(itemexp, 200));
    item.addEventListener(events[deviceType].end, throttleone(itemcont, 200));


    function itemexp() {
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
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('wind').style.overflow = "hidden";
};

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.getElementById('wind').style.overflow = "auto";
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

    console.log(slides)
    if (slides.length >= slideIndex) slides[slideIndex - 1].style.display = 'block';
    if (modalPreviews.length >= slideIndex) modalPreviews[slideIndex - 1].className += ' active';
};

document.onkeyup = function (e) {
    if (e.key == 'Escape') {
        closeLightbox();
    } else if (e.key == 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key == 'ArrowRight') {
        changeSlide(1);
    }
}