// Stolen from https://stackoverflow.com/questions/16485255
var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQn19DgNGfikvgpEcoEJBe4105Ng04R8JTtCwYNO1caZO87oZ1jCVMByCFmQ8qkk-kmlgDaUSIBbrZH/pub?output=csv";
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var tab = xmlhttp.responseText.split(/\n/g);
        var str = '';
        tab.shift();
        for (const row of tab) {
            var els = row.split(/,/g);
            str += `<tr><td>${els[0]}</td><td>${els[1]}</td><td>${els[2]}</td><td>${els[3]}</td><td>${els[4]}</td><td>${els[5]}</td><td>${els[6]}</td></tr>`;
        }
        document.getElementById('tab_officers').innerHTML = str;
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send(null);