window.onresize = function () {
    var windowsize = window.innerHeight;
    var height = document.getElementById('test').scrollHeight;
    let shift = ((Math.abs(height - windowsize) + (height - windowsize)) / 4);
    let scale = windowsize + ((Math.abs(height - windowsize) + (height - windowsize)) / 185)
    document.getElementById('bg').style.marginTop = (shift) + "px"
    document.getElementById('bg').style.height = scale + "px";

    setTimeout(() => {
        document.getElementById('bg').style.marginTop = (shift - 10) + "px";
    },
        10);
    var scrolldist = document.getElementById('wind').scrollTop;
    if (scrolldist > height - windowsize) {
        document.getElementById('wind').scrollTo(0, height - windowsize);
    }
}

window.onload = function () {
    var windowsize = window.innerHeight;
    var height = document.getElementById('test').scrollHeight;
    let shift = ((Math.abs(height - windowsize) + (height - windowsize)) / 4);
    let scale = windowsize + ((Math.abs(height - windowsize) + (height - windowsize)) / 185)
    document.getElementById('bg').style.marginTop = (shift) + "px"
    document.getElementById('bg').style.height = scale + "px";

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
    var windowwide = window.innerWidth;
    var height = document.getElementById('test').scrollHeight;
    var scrolldist = document.getElementById('wind').scrollTop;
    if (scrolldist > height - windowsize) {
        document.getElementById('wind').scrollTo(0, height - windowsize);
    }
}
