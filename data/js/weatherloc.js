const getloc = () => {
    btn = document.getElementById('updateloc');
    btn.setAttribute('disabled', true);
    btn.style.cursor = 'wait';
    reset = setTimeout(() => {
        btn.style.backgroundColor = 'rgba(216, 84, 84, 0.8)';
        setTimeout(() => {
            btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            btn.removeAttribute('disabled');
            btn.style.cursor = 'pointer';
        }, 1000);
    }, 5000);
    inputloc = document.getElementById('inputloc');
    var url = `https://nominatim.openstreetmap.org/search.php?q=${inputloc.value}&format=jsonv2`; // this is a public api
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var json = JSON.parse(xmlhttp.responseText)[0];
            var lat = json.lat;
            var lon = json.lon;
            var name = json.name;
            var dispname = json.display_name;
            document.getElementById('placename').innerText = name || dispname || inputloc.value;

            // Get WFO
            var wfo = 'BGM'; // Default to Binghamton
            var url = `https://forecast.weather.gov/MapClick.php?lat=${lat}&lon=${lon}&FcstType=digitalDWML`;
            xmlhttp2 = new XMLHttpRequest();
            xmlhttp2.onreadystatechange = function () {
                if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
                    var credit = xmlhttp2.responseText.split(/\n/g).filter(l => l.trim().startsWith('<credit>'))[0];
                    wfo = credit.split(/\.gov/g)[1].replace('</credit>', '').replace(/\//g, '').trim().toUpperCase();
                    console.log(wfo);
                }
            }
            xmlhttp2.open("GET", url, false);
            xmlhttp2.send(null);

            document.getElementById('nwsembed').setAttribute('src', `https://forecast.weather.gov/meteograms/Plotter.php?lat=${lat}&lon=${lon}&wfo=${wfo}&zcode=NYZ025&gset=20&gdiff=10&unit=0&tinfo=EY5&ahour=0&pcmd=11110111000000000000000000000000000000000000000000000000000&lg=en&indu=1!1!1!&dd=&bw=&hrspan=48&pqpfhr=6&psnwhr=6`); // zcode may be irrelevant but must be valid
            btn.style.backgroundColor = 'rgba(84, 216, 93, 0.8)';
            clearTimeout(reset);
            setTimeout(() => {
                btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                btn.removeAttribute('disabled');
                btn.style.cursor = 'pointer';
            }, 1000);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
}