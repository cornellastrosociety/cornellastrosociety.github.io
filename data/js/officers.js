/*
 * This listing of officers is transferred directly to the About the Club page.
 * Each officer's object contains their title, whether their NetID should be highlighted,
 * The name of the person in the office, and the NetID of the officer. NetID highlighting
 * is historically included for the President and Vice President.
 */
const officers = [
    {
        title: "President",
        highlight: true,
        officer: "Ella Mansfield",
        netid: "emm362"
    },
    {
        title: "Vice President",
        highlight: true,
        officer: "Andrew Lewis",
        netid: "ail36"
    },
    {
        title: "Treasurer",
        highlight: false,
        officer: "Treyton Grahn",
        netid: "txg3"
    },
    {
        title: "Outreach Coordinator",
        highlight: false,
        officer: "Elina Stengle",
        netid: "ens65"
    },
    {
        title: "Newsletter Editor-in-Chief",
        highlight: false,
        officer: "Abigail Bohl",
        netid: "acb338"
    }
]

var listing = '';
for (var officer of officers) listing += `<b>${officer.title}</b>\n<br>\n${officer.officer} (<span style="color: ${officer.highlight ? 'rgb(50, 120, 190)' : 'rgb(50, 110, 160)'}">${officer.netid}</span>)\n<br><br>\n`;
document.getElementById('officers').innerHTML = listing;

// Reference from https://stackoverflow.com/questions/16485255
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