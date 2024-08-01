window.onresize = function () {

    var windowsize = window.outerHeight;
    var windowwide = window.outerWidth;
    var height = document.getElementById('test').scrollHeight;
    let shift = ((Math.abs(height - windowsize) + (height - windowsize)) / 4);
    let scale = windowsize + ((Math.abs(height - windowsize) + (height - windowsize)) / 198)
    document.getElementById('bg').style.marginTop = (shift) + "px"
    document.getElementById('bg').style.height = scale + "px";
    document.getElementById('bg').style.width = windowwide + "px";
    setTimeout(() => {
        document.getElementById('bg').style.marginTop = (shift - 10) + "px";
    },
        10);
    var scrolldist = document.getElementById('wind').scrollTop;
    if (scrolldist > height - windowsize) {
        document.getElementById('wind').scrollTo(0, height - windowsize);
    }
    if (document.getElementsByClassName('slideTwo').length > 0) {
        resizeSlideTwo(slideIndexTwo)
    }
    if (document.getElementsByClassName('slide').length > 0) {
        resizeSlide(slideIndex)
    }

}

document.onkeyup = function (e) {
    if (document.getElementsByClassName('slideTwo').length > 0) {
        if (e.key == 'Escape') {
            closeLightboxTwo();
        } else if (e.key == 'ArrowLeft') {
            changeSlideTwo(-1);
        } else if (e.key == 'ArrowRight') {
            changeSlideTwo(1);
        }
    }
    if (document.getElementsByClassName('slide').length > 0) {
        if (e.key == 'Escape') {
            closeLightbox();
        } else if (e.key == 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key == 'ArrowRight') {
            changeSlide(1);
        }
    }

}

window.onload = function () {
    var windowsize = window.outerHeight;
    var windowwide = window.outerWidth;
    var height = document.getElementById('test').scrollHeight;
    let shift = ((Math.abs(height - windowsize) + (height - windowsize)) / 4);
    let scale = windowsize + ((Math.abs(height - windowsize) + (height - windowsize)) / 198)
    document.getElementById('bg').style.marginTop = (shift) + "px";
    document.getElementById('bg').style.height = scale + "px";


    document.getElementById('bg').style.width = windowwide + "px";


    setTimeout(() => {
        document.getElementById('bg').style.marginTop = (shift - 10) + "px";
    },
        10);
    var scrolldist = document.getElementById('wind').scrollTop;
    if (scrolldist > height - windowsize) {
        document.getElementById('wind').scrollTo(0, height - windowsize);
    }
}

function overscroll() {
    var windowsize = window.innerHeight;
    var height = document.getElementById('test').scrollHeight;
    var scrolldist = document.getElementById('wind').scrollTop;
    if (scrolldist > height - windowsize) {
        document.getElementById('wind').scrollTo(0, height - windowsize);
    }

    var windowwidth = window.innerWidth;
    var width = document.getElementById('test').scrollWidth;
    var scrollwidedist = document.getElementById('wind').scrollLeft;
    if (scrollwidedist > width - windowwidth) {
        document.getElementById('wind').scroll(width - windowwidth, 0);
    }
}

