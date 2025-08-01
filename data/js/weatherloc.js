const aqi = (lati, loni) => {
    var params = [];
    var url = `https://www.airnowapi.org/aq/observation/latLong/current/?format=application/json&latitude=${lati}&longitude=${loni}&distance=225&API_KEY=09C7F15E-B6E6-4305-B9D4-4963D2B192C4`;
    var xmlhttp3 = new XMLHttpRequest();
    xmlhttp3.onreadystatechange = function () {
        if (xmlhttp3.readyState == 4 && xmlhttp3.status == 200) {
            var json = JSON.parse(xmlhttp3.responseText);
            if (json.length == 0) {
                params.push('No air quality data for this location');
            } else {
                for (var param of json) {
                    params.push(`<a target="_blank" href="https://www.airnow.gov/" style="font-size:12px"  title="Reporting Area: ${param.ReportingArea ?? 'None'}">${param.ParameterName}</a>: ${param.AQI}`);
                }
                document.getElementById('aqi').innerHTML = `<span style="font-size:12px;">${params.join('&nbsp&nbsp')}</span>`;
            }
        }
    }
    xmlhttp3.open("GET", url, true);
    xmlhttp3.send(null);
}

const moondat = (lati, loni, tzoff) => {
    var tzf = `Etc/GMT${tzoff < 0 ? '+' : '-'}${tzoff.toString().replace(/[+-]/g, '')}`;
    var locdate = new Date(new Date().toLocaleString("en-US", { timeZone: tzf }));
    var formatlocdate = `${locdate.getFullYear()}-${locdate.getMonth()+1}-${locdate.getDate()}`;
    var url = `https://aa.usno.navy.mil/api/rstt/oneday?date=${formatlocdate}&coords=${lati},${loni}&tz=${tzoff}`;
    var xmlhttp4 = new XMLHttpRequest();
    xmlhttp4.onreadystatechange = function () {
        if (xmlhttp4.readyState == 4 && xmlhttp4.status == 200) {
            var json = JSON.parse(xmlhttp4.responseText);
            if (json.length == 0) {
                document.getElementById('moondattoday').innerHTML = 'No moon data available';
            } else {
                var moonphase = json.properties.data.fracillum;
                var phasename = json.properties.data.curphase.toLowerCase();
                var moonrise = json.properties.data.moondata.filter(datum => datum.phen == 'Rise')[0];
                var moonset = json.properties.data.moondata.filter(datum => datum.phen == 'Set')[0];
                var formatstr = `<span style="font-size:12px;"><a target="_blank" href="https://aa.usno.navy.mil/data/api.html">Moon today</a>: ${moonphase} illuminated ${phasename}, rise: ${moonrise ? moonrise.time : 'none'}, set: ${moonset ? moonset.time : 'none'} (${tzf.replace('+', '^').replace('-', '+').replace('^', '-').replace('Etc/', '')})</span>`;
                document.getElementById('moondattoday').innerHTML = formatstr;
            }
        }
    }
    xmlhttp4.open("GET", url, true);
    xmlhttp4.send(null);

    var locdate = new Date(new Date().toLocaleString("en-US", { timeZone: tzf }));
    locdate = new Date(locdate.setDate(locdate.getDate() + 1));
    var formatlocdate = `${locdate.getFullYear()}-${locdate.getMonth()+1}-${locdate.getDate()}`;
    var url = `https://aa.usno.navy.mil/api/rstt/oneday?date=${formatlocdate}&coords=${lati},${loni}&tz=${tzoff}`;
    var xmlhttp5 = new XMLHttpRequest();
    xmlhttp5.onreadystatechange = function () {
        if (xmlhttp5.readyState == 4 && xmlhttp5.status == 200) {
            var json = JSON.parse(xmlhttp5.responseText);
            if (json.length == 0) {
                document.getElementById('moondattomorrow').innerHTML = 'No moon data available';
            } else {
                var moonphase = json.properties.data.fracillum;
                var phasename = json.properties.data.curphase.toLowerCase();
                var moonrise = json.properties.data.moondata.filter(datum => datum.phen == 'Rise')[0];
                var moonset = json.properties.data.moondata.filter(datum => datum.phen == 'Set')[0];
                var formatstr = `<span style="font-size:12px;"><a target="_blank" href="https://aa.usno.navy.mil/data/api.html">Moon tomorrow</a>: ${moonphase} illuminated ${phasename}, rise: ${moonrise ? moonrise.time : 'none'}, set: ${moonset ? moonset.time : 'none'} (${tzf.replace('+', '^').replace('-', '+').replace('^', '-').replace('Etc/', '')})</span>`;
                document.getElementById('moondattomorrow').innerHTML = formatstr;
            }
        }
    }
    xmlhttp5.open("GET", url, true);
    xmlhttp5.send(null);
}

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
            document.getElementById('placename').innerHTML = dispname || name || inputloc.value;

            // Get WFO
            var wfo = 'BGM'; // Default to Binghamton
            var stt = 'NY'; // Default to New York
            var tz = new Date().getTimezoneOffset() / -60; // Default to local computer time
            var url = `https://forecast.weather.gov/MapClick.php?lat=${lat}&lon=${lon}&FcstType=digitalDWML`;
            xmlhttp2 = new XMLHttpRequest();
            xmlhttp2.onreadystatechange = function () {
                if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
                    var credit = xmlhttp2.responseText.split(/\n/g).filter(l => l.trim().startsWith('<credit>'))[0];
                    var state = xmlhttp2.responseText.split(/\n/g).filter(l => l.trim().startsWith('<city state='))[0];
                    var tzraw = xmlhttp2.responseText.match(/:00:00[+-]-?\d{2}:\d{2}/g)[0].replace(':00:00', '').trim();
                    if (tzraw.substring(0,2) == '--') tzraw = `+${tzraw.substring(2)}`;
                    tz = ((tzraw[0] == '+') ? 1 : -1) * (+tzraw.substring(1,3) + (+tzraw.substring(4) / 60));
                    console.log(tz)
                    wfo = credit.split(/\.gov/g)[1].replace('</credit>', '').replace(/\//g, '').trim().toUpperCase();
                    wfo = wfo.replace('ANCHORAGE', 'AFC').replace('JUNEAU', 'AJK').replace('FAIRBANKS', 'AFG');
                    stt = state.split('state="')[1].split('">')[0] || 'NY';
                }
            }
            xmlhttp2.open("GET", url, false);
            xmlhttp2.send(null);

            hour = document.getElementById('weatherhr').value;
            document.getElementById('nwsembed').setAttribute('src', `https://forecast.weather.gov/meteograms/Plotter.php?lat=${lat}&lon=${lon}&wfo=${wfo}&zcode=${stt}Z025&gset=20&gdiff=10&unit=0&tinfo=EY5&ahour=${hour}&pcmd=11110111000000000000000000000000000000000000000000000000000&lg=en&indu=1!1!1!&dd=&bw=&hrspan=48&pqpfhr=6&psnwhr=6`); // zcode may be irrelevant but must be valid
            document.getElementById('forecastlink').setAttribute('href', `https://forecast.weather.gov/MapClick.php?lat=${lat}&lon=${lon}&unit=0&lg=english&FcstType=graphical`);
            btn.style.backgroundColor = 'rgba(84, 216, 93, 0.8)';
            clearTimeout(reset);
            setTimeout(() => {
                btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                btn.removeAttribute('disabled');
                btn.style.cursor = 'pointer';
            }, 1000);
            aqi(lat, lon);
            moondat(lat, lon, tz);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
}

const sethr = () => {
    url = document.getElementById('nwsembed').getAttribute('src');
    hr = document.getElementById('weatherhr').value;
    url = url.replace(/&ahour=\d+/g, `&ahour=${hr}`);
    document.getElementById('nwsembed').setAttribute('src', url)
}

var locmap = new Map();
locmap.set('fuertes', 'https://forecast.weather.gov/meteograms/Plotter.php?lat=42.4528&lon=-76.4745&wfo=BGM&zcode=NYZ025&gset=20&gdiff=10&unit=0&tinfo=EY5&ahour=0&pcmd=11110111000000000000000000000000000000000000000000000000000&lg=en&indu=1!1!1!&dd=&bw=&hrspan=48&pqpfhr=6&psnwhr=6');
locmap.set('cssp', 'https://forecast.weather.gov/meteograms/Plotter.php?lat=41.6633&lon=-77.8234&wfo=CTP&zcode=NYZ025&gset=20&gdiff=10&unit=0&tinfo=EY5&ahour=0&pcmd=11110111000000000000000000000000000000000000000000000000000&lg=en&indu=1!1!1!&dd=&bw=&hrspan=48&pqpfhr=6&psnwhr=6');

var locaqimap = new Map();
locaqimap.set('fuertes', [42.4528, -76.4745]);
locaqimap.set('cssp', [41.6633, -77.8234]);

const switchloc = () => {
    loc = document.getElementById('locpicker').value;
    url = locmap.get(loc) ?? locmap.get('fuertes');
    aqis = locaqimap.get(loc) ?? locaqimap.get('fuertes');
    hr = document.getElementById('weatherhr').value;
    url = url.replace(/&ahour=\d+/g, `&ahour=${hr}`);
    document.getElementById('nwsembed').style.opacity = "0%";
    document.getElementById('nwsembed').setAttribute('src', url);
    document.getElementById('nwsembed').onload = () => {
        document.getElementById('nwsembed').style.opacity = "100%";
    }
    aqi(aqis[0], aqis[1]);
}