var url = "https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json"
kpxml = new XMLHttpRequest();
kpxml.onreadystatechange = function () {
    if (kpxml.readyState == 4 && kpxml.status == 200) {
        var kp = JSON.parse(kpxml.responseText);
        document.getElementById('kp').innerHTML = kp.slice(-1)[0][1];
    }
}
kpxml.open("GET", url, true);
kpxml.send(null);