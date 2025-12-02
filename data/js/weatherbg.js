// Thanks Marquice for the suggestion
// will not replace background based on input location; this would be too messy
var url = "https://forecast.weather.gov/MapClick.php?lat=42.4528&lon=-76.4745&FcstType=digitalDWML"
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var tab = xmlhttp.responseText.split(/\n/g);
        var temp = +tab[tab.findIndex(e => e.includes('temperature'))].match(/>\d+/g)[0].substring(1);
        var cloud = +tab[tab.findIndex(e => e.includes('cloud-amount'))].match(/>\d+/g)[0].substring(1);
        var precip = +tab[tab.findIndex(e => e.includes('probability-of-precipitation'))].match(/>\d+/g)[0].substring(1);
        var precipavgsrw = tab[tab.findIndex(e => e.includes('probability-of-precipitation'))].match(/>\d+/g);
        var precipavgs = []
        for (let i = 0; i < 8; i++) precipavgs.push(+precipavgsrw[i].substring(1));
        var precipavgs = precipavgs.reduce((a, i) => a + i, 0) / 8;
        var newclass = '';
        if (precipavgs >= 80 && temp <= 20 && new Date().getDay() == 5 && new Date().getHours() >= 17) newclass = 'idiot_bg';
        else if (precipavgs >= 70 && temp <= 25 && [0, 5, 6].includes(new Date().getDay()) && (new Date().getHours() >= 17 || new Date().getHours < 6)) newclass = 'sled_bg';
        else if (precip >= 40 && temp <= 32) newclass = 'snow_bg';
        else if (cloud >= 75) newclass = 'cloud_bg';
        else if (cloud >= 25) newclass = 'pc_bg';
        else if (cloud >= 17) newclass = 'sc_bg';
        else if (cloud >= 10) newclass = 'mc_bg';
        else newclass = 'clear_bg';
        document.getElementsByTagName('body')[0].classList.add(newclass);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send(null);