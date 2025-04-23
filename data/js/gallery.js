const galleries = new Map();

galleries.set('club', {
    width: 3,
    incr: 3,
    thumb: false,
    data: [
        {
            id: `2425.jpg`,
            name: `2024-2025`
        },
        {
            id: `2324.jpg`,
            name: `2023-2024`
        },
        {
            id: `2223.jpg`,
            name: `2022-2023`
        },
        {
            id: `2122.jpg`,
            name: `2021-2022`
        },
        {
            id: `2021.jpg`,
            name: `2020-2021`
        },
        {
            id: `1920.jpg`,
            name: `2019-2020`
        },
        {
            id: `19.jpg`,
            name: `2018-2019`
        },
        {
            id: `18.jpg`,
            name: `2017-2018`
        },
        {
            id: `17.jpg`,
            name: `2016-2017`
        },
        {
            id: `15.jpg`,
            name: `2014-2015`
        },
        {
            id: `14.jpg`,
            name: `2013-2014`
        },
        {
            id: `06.jpg`,
            name: `2006`
        },
        {
            id: `04.jpg`,
            name: `2004`
        },
        {
            id: `85.jpg`,
            name: `1985`
        }
    ]
});

galleries.set('photos', {
    width: 4,
    incr: 5,
    thumb: true,
    data: [
        {
            id: `asgrad24.jpg`,
            name: `2024 Arts & Sciences CAS graduates!`,
            desc: `Back row, left-to-right: Sebastian DeRosa, Ben Jacobson-Bell; middle row: Justine Singleton, Adam Zortea, Cella Kove, Annika Deutsch, Dylan Jackaway, Grant Whitman; lower row: Maggie Li, Gillis Lowry`
        },
        {
            id: `fuertesgradf24.jpg`,
            name: `2024 CAS graduates!`,
            desc: `Top row, left to right: Dylan Jackaway, Annika Deutsch, Katherine (Kitty) O'Connor, Cella Kove, Anthony Fine, Ariel Marxena; bottom row: Benjamin Shapiro, Ben Jacobson-Bell, Gillis Lowry, Grant Whitman, Greg Powers`
        },
        {
            id: `fuertesgrad24.jpg`,
            name: `2024 CAS grads goofin around`
        },
        {
            id: `irvgrad24.jpg`,
            name: `2024 CAS Grads with Irv`
        },
        {
            id: `sunsetdeck.jpg`,
            name: `Sunset from Fuertes`
        },
        {
            id: `totality.jpg`,
            name: `Totality in Rochester!`
        },
        {
            id: `jmq28.jpg`,
            name: `CAS on FOX Philadelphia!`,
            desc: `With Jack Qualkenbush, and William C. Atkinson's modified slitless spectrograph, at the ROC the Eclipse festival.`
        },
        {
            id: `rocjason.jpg`,
            name: `Jason Peskin at ROC the Eclipse festival`
        },
        {
            id: `rocerikalcoholic.jpg`,
            name: `Marquice Sanchez-Fleming and Erik Payton at ROC the Eclipse festival`
        },
        {
            id: `rocjillianjb.jpg`,
            name: `Jillian Epstein and Ben Jacobson-Bell at ROC the Eclipse festival`
        },
        {
            id: `eclipseprep.jpg`,
            name: `Eclipse preparations at Fuertes`,
            desc: `April 7, 2024`
        },
        {
            id: `glasses.jpg`,
            name: `Huge line for eclipse glasses at Ho Plaza!`
        },
        {
            id: `clubfest2024.jpg`,
            name: `Ella Mansfield and Abby Bohl promoting eclipse safety at Spring 2024 ClubFest`
        },
        {
            id: `stickerbus.jpg`,
            name: `Design Contest Sticker Runner-Up: Susanne Guimbretiere`,
            desc: `Given to our 400 student participants in the bus trip to eclipse totality`
        },
        {
            id: `stickernys.jpg`,
            name: `Design Contest Sticker Runner-Up: Jillian Epstein`,
            desc: `Given out at open houses in Spring 2024`
        },
        {
            id: `stickereclipse.jpg`,
            name: `Design Contest Sticker Winner: Peter He`,
            desc: `Given out at open houses in Spring 2024`
        },
        {
            id: `eclipseposter.jpg`,
            name: `Poster Design Contest Winner: Valerio Poggiali`,
            desc: `Placed around campus in Spring 2024 to promote eclipse safety`
        },
        {
            id: `anndruyanqa.jpg`,
            name: `Ann Druyan Q&A with Gillis Lowry`,
            desc: `Ann Druyan discussed the Voyager Golden Record, Cosmos, and her husband Carl Sagan's favorite song.`
        },
        {
            id: `anndruyanad.jpg`,
            name: `Ann Druyan Q&A Thumbnail`,
            desc: `On February 13, 2024, CAS held a Cosmos episode 6 showing at Cornell Cinema, followed by a Q&A with Cosmos co-producer Ann Druyan!`
        },
        {
            id: `bit.jpg`,
            name: `CAS Freshmen in the road`,
            desc: `February 2024`
        },
        {
            id: `antenna.jpg`,
            name: `Antenna at Fuertes`,
            desc: `First experiments with radio reception from the observatory.`
        },
        {
            id: `decknight.jpg`,
            name: `Busy night on the deck`
        },
        {
            id: `c14mount.jpg`,
            name: `Mounting of the C14`,
            desc: `After extensive repairs, the C14 rises again!`
        },
        {
            id: `logbook.jpg`,
            name: `Signing of the logbook`,
            desc: `Around 6 AM during our first all-night observing session of 2023-24.`
        },
        {
            id: `venusirv.jpg`,
            name: `Venus and Irv`,
            desc: `Taken around 4 AM during an all-night observing session at the Fuertes Observatory.`
        },
        {
            id: `sagan23.jpg`,
            name: `President Gillis Lowry presenting Carl Sagan's Birthday Night 2023`
        },
        {
            id: `cowboys.jpg`,
            name: `CAS space cowboys for Halloween 2023`
        },
        {
            id: `irvrave.jpg`,
            name: `Irv with rave lighting :)`,
            desc: `Fall 2023`
        },
        {
            id: `club101.jpg`,
            name: `Irv is 101!`,
            desc: `Irv with some of his most devoted fans on his 101st birthday, October 2023`
        },
        {
            id: `fuertespano.jpg`,
            name: `Fuertes Fall Foliage`,
            desc: `2023`
        },
        {
            id: `visitors.jpg`,
            name: `Visitors during a tour`
        },
        {
            id: `fuertes1023.jpg`,
            name: `The Fuertes Observatory`,
            desc: `October 2023`
        },
        {
            id: `officers2324.jpg`,
            name: `2023-24 Officers`,
            desc: `2023-24 Officers, top from left to right: Gillis Lowry (President), Ben Jacobson-Bell (VP), Ben Shapiro (Outreach Coordinator), Haonan Gong (Treasurer), Abigail Bohl (Newsletter Editor-in-Chief); bottom: Annika Deutsch (President 2022-23)`
        },
        {
            id: `alia.jpg`,
            name: `Alia Bu, keyholder and Class of '23`
        },
        {
            id: `fuertesjb.jpg`,
            name: `Ben Jacobson-Bell and Fuertes Observatory, May 2023`
        },
        {
            id: `fuerteshillzoom.jpg`,
            name: `Fuertes in May 2023`
        },
        {
            id: `fuerteshill.jpg`,
            name: `Fuertes in May 2023`
        },
        {
            id: `planetwalkjuper.jpg`,
            name: `Sagan Planet Walk as part of Carl Sagan's Birthday celebration`,
            desc: `November 12, 2022`
        },
        {
            id: `planetwalksun.jpg`,
            name: `Sagan Planet Walk as part of Carl Sagan's Birthday celebration`,
            desc: `November 12, 2022`
        },
        {
            id: `clubsagan.jpg`,
            name: `Carl Sagan's Birthday celebration`,
            desc: `November 11, 2022`
        },
        {
            id: `gillissagan.jpg`,
            name: `Carl Sagan's Birthday celebration`,
            desc: `November 11, 2022`
        },
        {
            id: `pietoocrumbly.jpg`,
            name: `Carl Sagan's Birthday celebration`,
            desc: `November 11, 2022. The pie was much too crumbly.`
        },
        {
            id: `pirates.jpg`,
            name: `Halloween (pirate theme) 2022!`
        },
        {
            id: `crowd100.jpg`,
            name: `Irv Centennial!`,
            desc: `October 14, 2022`
        },
        {
            id: `gillis100.jpg`,
            name: `Irv Centennial!`,
            desc: `October 14, 2022`
        },
        {
            id: `pres100.jpg`,
            name: `Irv Centennial!`,
            desc: `October 14, 2022`
        },
        {
            id: `treats100.jpg`,
            name: `Irv Centennial!`,
            desc: `October 14, 2022`
        },
        {
            id: `cupcakes100.jpg`,
            name: `Irv Centennial!`,
            desc: `October 14, 2022`
        },
        {
            id: `club100.jpg`,
            name: `Irv Centennial!`,
            desc: `October 14, 2022`
        },
        {
            id: `tours100.jpg`,
            name: `Irv Centennial!`,
            desc: `October 14, 2022`
        },
        {
            id: `balloons100.jpg`,
            name: `Irv Centennial!`,
            desc: `October 14, 2022`
        },
        {
            id: `sticker100.jpg`,
            name: `Irv Centennial Sticker Design`,
            desc: `Designed by Abigail Bohl`
        },
        {
            id: `clubfest2022.jpg`,
            name: `ClubFest Fall 2022`
        },
        {
            id: `officers2122.jpg`,
            name: `Outgoing and incoming officers, May 2022`,
        },
        {
            id: `sunset.jpg`,
            name: `Fuertes in Spring 2022`
        },
        {
            id: `obsessionnvm.jpg`,
            name: `Ben Jacobson-Bell with the Obsession telescope`,
            desc: `April 2022`
        },
        {
            id: `moonpuzzledone.jpg`,
            name: `Moon puzzle!`,
            desc: `2022`
        },
        {
            id: `moonpuzzlegroup.jpg`,
            name: `Moon puzzle!`,
            desc: `2022`
        },
        {
            id: `moonpuzzle.jpg`,
            name: `Moon puzzle!`,
            desc: `2022`
        },
        {
            id: `gillisirv.jpg`,
            name: `Gillis Lowry, Outreach Coordinator 2022-23 with Irv`
        },
        {
            id: `fuertesorion.jpg`,
            name: `Fuertes and Orion`
        },
        {
            id: `fuertessiderainbow.jpg`,
            name: `Rainbows over Fuertes`
        },
        {
            id: `fuertessnow.jpg`,
            name: `Winter Fuertes`
        },
        {
            id: `fuertesnight.jpg`,
            name: `Fuertes at Night`
        },
        {
            id: `fuertesstartrails.jpg`,
            name: `Fuertes Startrails`
        },
        {
            id: `fuerteswintermoon.jpg`,
            name: `Fuertes with Winter Moon`
        },
        {
            id: `fuairtes.jpg`,
            name: `Fuertes from the Air`,
            desc: `Fuairtes, if you will`
        },
        {
            id: `fuertessunset.jpg`,
            name: `Sunset at Fuertes`
        },
        {
            id: `fuerteshalfmoon.jpg`,
            name: `The Fuertes Observatory`
        },
        {
            id: `fuertesredmoon.jpg`,
            name: `Fuertes with Moon`
        },
        {
            id: `fuertesvisits.jpg`,
            name: `Visitors around Fuertes Observatory`
        },
        {
            id: `eveningrainbow.jpg`,
            name: `Evening Rainbow`
        },
        {
            id: `fuerteseve.jpg`,
            name: `Fuertes on a Friday Night`
        },
        {
            id: `fuertesbackbw.jpg`,
            name: `The Fuertes Observatory`
        },
        {
            id: `fuertesfrontbw.jpg`,
            name: `The Fuertes Observatory`
        },
        {
            id: `fuertesupbw.jpg`,
            name: `The Fuertes Observatory`
        },
        {
            id: `deck.jpg`,
            name: `The Fuertes Observing Deck`
        },
        {
            id: `objective.jpg`,
            name: `Objective lens of Irv`
        },
        {
            id: `irvclosed.jpg`,
            name: `The Irving Porter Church Telescope`
        },
        {
            id: `irvmoon.jpg`,
            name: `Irv pointed to the Moon`
        },
        {
            id: `irvday.jpg`,
            name: `The Irving Porter Church Telescope`
        },
        {
            id: `irvflat.jpg`,
            name: `The Irving Porter Church Telescope`
        },
        {
            id: `irvwide.jpg`,
            name: `The Irving Porter Church Telescope`
        },
        {
            id: `solar.jpg`,
            name: `Solar observing through Irv!`
        },
        {
            id: `irvsun.jpg`,
            name: `Irv pointed to the Sun`
        },
        {
            id: `clockdrive3.jpg`,
            name: `Irv's clock drive`
        },
        {
            id: `clockdrive2.jpg`,
            name: `Irv's clock drive`
        },
        {
            id: `governor.jpg`,
            name: `Irv's clock drive`
        },
        {
            id: `oai.jpg`,
            name: `The Obsession and Irv`
        },
        {
            id: `obsession.jpg`,
            name: `The Obsession 15" Dobsonian telescope`
        },
        {
            id: `c14.jpg`,
            name: `The C14 telescope in use on the deck`
        },
        {
            id: `astrograph.jpg`,
            name: `Orion 8" astrograph`
        },
        {
            id: `oldclassroom.jpg`,
            name: `Fuertes classroom`
        },
        {
            id: `museumscope.jpg`,
            name: `Small Museum Scope`
        },
        {
            id: `transit.jpg`,
            name: `Transit in the museum at Fuertes Observatory`
        },
        {
            id: `spectrograph.jpg`,
            name: `Antique spectrograph`
        },
        {
            id: `slidewall.jpg`,
            name: `Backlit Astronomy Slide Box`
        },
        {
            id: `fuertesangle1992.jpg`,
            name: `Fuertes in 1992`,
            desc: `Photo by Brian Fox`
        },
        {
            id: `fuertesfront1992.jpg`,
            name: `Fuertes in 1992`,
            desc: `Photo by Brian Fox`
        },
        {
            id: `fuerteswalk1992.jpg`,
            name: `Fuertes in 1992`,
            desc: `Photo by Brian Fox`
        },
        {
            id: `fuertesside1992.jpg`,
            name: `Fuertes in 1992`,
            desc: `Photo by Brian Fox`
        },
        {
            id: `fuertes1992.jpg`,
            name: `Fuertes in 1992`,
            desc: `Photo by Brian Fox`
        },
        {
            id: `classroom1992.jpg`,
            name: `The classroom at Fuertes in 1992`,
            desc: `Photo by Brian Fox`
        },
        {
            id: `irvlex1992.jpg`,
            name: `Irv in 1992`,
            desc: `Photo by Brian Fox`
        },
        {
            id: `irvfull1992.jpg`,
            name: `Irv in 1992`,
            desc: `Photo by Brian Fox`
        },
        {
            id: `irv1992.jpg`,
            name: `Irv in 1992`,
            desc: `Photo by Brian Fox`
        },
        {
            id: `governor1992.jpg`,
            name: `Irv's clock drive in 1992`,
            desc: `Photo by Brian Fox`
        },
        {
            id: `irv1923.jpg`,
            name: `Professor Samuel L. Boothroyd using the Irving Porter Church Telescope`,
            desc: `1923`
        }
    ]
});

galleries.set('museum', {
    width: 4,
    incr: 6,
    thumb: false,
    data: [
        {
            id: '39.jpg'
        },
        {
            id: '38.jpg'
        },
        {
            id: '37.jpg'
        },
        {
            id: '36.jpg'
        },
        {
            id: '35.jpg'
        },
        {
            id: '34.jpg'
        },
        {
            id: '33.jpg'
        },
        {
            id: '32.jpg'
        },
        {
            id: '31.jpg'
        },
        {
            id: '30.jpg'
        },
        {
            id: '29.jpg'
        },
        {
            id: '28.jpg'
        },
        {
            id: '27.jpg'
        },
        {
            id: '26.jpg'
        },
        {
            id: '25.jpg'
        },
        {
            id: '24.jpg'
        },
        {
            id: '23.jpg'
        },
        {
            id: '22.jpg'
        },
        {
            id: '21.jpg'
        },
        {
            id: '20.jpg'
        },
        {
            id: '19.jpg'
        },
        {
            id: '18.jpg'
        },
        {
            id: '17.jpg'
        },
        {
            id: '16.jpg'
        },
        {
            id: '15.jpg'
        },
        {
            id: '14.jpg'
        },
        {
            id: '13.jpg'
        },
        {
            id: '12.jpg'
        },
        {
            id: '11.jpg'
        },
        {
            id: '10.jpg'
        },
        {
            id: '9.jpg'
        },
        {
            id: '8.jpg'
        },
        {
            id: '7.jpg'
        },
        {
            id: '6.jpg'
        },
        {
            id: '5.jpg'
        },
        {
            id: '4.jpg'
        },
        {
            id: '3.jpg'
        },
        {
            id: '2.jpg'
        },
        {
            id: '1.jpg'
        }
    ]
});

galleries.set(`astro`, {
    width: 3,
    incr: 4,
    thumb: true,
    data: [
        {
            id: `andromeda.jpg`,
            name: `Andromeda Galaxy`
        },
        {
            id: `crab.jpg`,
            name: `Crab Nebula`
        },
        {
            id: `grandss.jpg`,
            name: `The Solar System from Fuertes`
        },
        {
            id: `irvprom.jpg`,
            name: `Solar prominences through Irv`
        },
        {
            id: `irvprom2.jpg`,
            name: `Solar prominences through Irv`
        },
        {
            id: `jupbands.jpg`,
            name: `Jupiter`
        },
        {
            id: `jupiter.jpg`,
            name: `Jupiter`
        },
        {
            id: `jupiterbw.jpg`,
            name: `Jupiter`
        },
        {
            id: `jupiterhc.jpg`,
            name: `Jupiter`
        },
        {
            id: `jupitermoons.jpg`,
            name: `Jupiter, and a Selection of its Moons`
        },
        {
            id: `m27.jpg`,
            name: `M27`
        },
        {
            id: `m42.jpg`,
            name: `M42`,
            desc: `taken by Marquice Sanchez-Fleming`
        },
        {
            id: `m45.jpg`,
            name: `M45`
        },
        {
            id: `m51.jpg`,
            name: `M51`
        },
        {
            id: `m81.jpg`,
            name: `M81`
        },
        {
            id: `m81irv.jpg`,
            name: `M81`,
            desc: `Taken through Irv, April 22nd, 2025, by Ben Jacobson-Bell, Erik Payton, and Shane Kuo. 21 3-minute frames stacked in Siril.`
        },
        {
            id: `m82.jpg`,
            name: `M82`
        },
        {
            id: `m82again.jpg`,
            name: `M82`
        },
        {
            id: `m82p.jpg`,
            name: `M82`
        },
        {
            id: `m101.jpg`,
            name: `M101`
        },
        {
            id: `mars.jpg`,
            name: `Mars`
        },
        {
            id: `mercury.jpg`,
            name: `Mercury`
        },
        {
            id: `moon.jpg`,
            name: `Moon`
        },
        {
            id: `mooncontrast.jpg`,
            name: `Moon`
        },
        {
            id: `moonedge.jpg`,
            name: `Moon`
        },
        {
            id: `moonirv.jpg`,
            name: `Moon`
        },
        {
            id: `neptune.jpg`,
            name: `Neptune`
        },
        {
            id: `orionzhou.jpg`,
            name: `Orion Nebula`
        },
        {
            id: `owl.jpg`,
            name: `Owl Nebula`
        },
        {
            id: `planetscomp.jpg`,
            name: `Collection of planets from Fuertes`
        },
        {
            id: `pleiades.jpg`,
            name: `Pleiades`
        },
        {
            id: `pluto.jpg`,
            name: `Pluto and Charon`
        },
        {
            id: `ring91017.jpg`,
            name: `Ring Nebula`,
            desc: `September 10, 2017`
        },
        {
            id: `ringmsf.jpg`,
            name: `Ring Nebula`
        },
        {
            id: `ringhbo.jpg`,
            name: `Ring Nebula`,
            desc: `Taken at the Hartung-Boothroyd Observatory, through the James Houck 25" reflector`
        },
        {
            id: `ringlr.jpg`,
            name: `Ring Nebula`
        },
        {
            id: `ringlrlr.jpg`,
            name: `Ring Nebula`
        },
        {
            id: `ringvivid.jpg`,
            name: `Ring Nebula`
        },
        {
            id: `saturnclear.jpg`,
            name: `Saturn`
        },
        {
            id: `saturngap.jpg`,
            name: `Saturn`
        },
        {
            id: `saturnside.jpg`,
            name: `Saturn`
        },
        {
            id: `sun1.jpg`,
            name: `Sun`,
            desc: `Taken using the Coronado H-alpha telescope`
        },
        {
            id: `sun4.jpg`,
            name: `Sun`,
            desc: `Taken using the Coronado H-alpha telescope`
        },
        {
            id: `sun5.jpg`,
            name: `Transit of the Tiangong Space Station across the Sun`,
            desc: `Taken using the Coronado H-alpha telescope. March 12, 2024`
        },
        {
            id: `sunspots.jpg`,
            name: `Sunspots through Irv`
        },
        {
            id: `triangulum.jpg`,
            name: `Triangulum Galaxy`
        },
        {
            id: `try6.jpg`
        },
        {
            id: `uranus.jpg`,
            name: `Uranus`
        },
        {
            id: `venus.jpg`,
            name: `Venus`
        },
        {
            id: `whirlpool.jpg`,
            name: `Whirlpool Galaxy`
        }
    ]
});

const el_tmp = `<div class="gallery-col" onclick="openLightboxTwo();toSlideTwo(%slide)">
    <div class="gallery-container" style="object-fit: cover">
        <img src="%path" style="object-fit: cover" class="gallery-image">
        <div class="gallery-overlay">
            <div class="gallery-text" style="color: black">%name</div>
        </div>
    </div>
</div>
`

let height = 0;

const galtype = document.getElementById('galtype').getAttribute('data-galtype');
let galdata = galleries.get(galtype);
let width = galdata.width;
let incr = galdata.incr;
if (window.innerWidth < 750) {
    width = 2;
    incr = 16;
}
let thumb = galdata.thumb;
let pics = galdata.data;

const galplace = () => {
    height += incr;
    let galbuilder = '';
    for (let i = 0; i <= pics.length; i++) {
        if (i == pics.length) {
            if (i % width != 0) {
                galbuilder += `</div>\n`;
            }
            document.getElementById('gal_ext').style.display = 'none';
            break;
        }
        if (i >= width * height) {
            break;
        }
        const tgt = pics[i];
        if (i % width == 0) {
            const cols = `${' 1fr 1%'.repeat(width - 1)} 1fr`
            galbuilder += `<div class="gallery-row" style="grid-template-columns:${cols}">\n\t`;
        }
        galbuilder += el_tmp.replace(/%path/g, `/data/img/${galtype}${thumb ? '/thumb' : ''}/${tgt.id.replace(/\.{a-zA-Z}{3,4}/g, '.jpg')}`).replace(/%name/g, tgt.name || '').replace(/%slide/g, i + 1);
        if (i % width == width - 1) {
            galbuilder += `</div>\n`;
        } else {
            galbuilder += `<div></div>\n`;
        }
    }

    document.getElementById(`gal`).innerHTML = galbuilder;

    let lbbuilder = '';
    lbbuilder += `<div class="modal-content" id="slidesTwo" style="width: 60vh; height: auto;">`
    for (let i = 0; i < width * height && i < pics.length; i++) {
        const tgt = pics[i];
        lbbuilder += `<div class="slideTwo"><img data-src="/data/img/${galtype}/${tgt.id}" class="gallery-image-slide"><div style="font-size: 3vh; margin: 2vh 0; width: 100%; text-align: center;">${tgt.name || ''}</div><div style="width: 100%; font-size: 2vh; text-align: center;">${tgt.desc || ''}</div></div>`;
    }
    lbbuilder += `</div>\n<span style="z-index: 2147483647;" class="close pointer" onclick="closeLightboxTwo()">&times;</span>\n<a class="previous" style="position: absolute; left: 0;" onclick="changeSlideTwo(-1)">&#10094;</a>\n<a class="next" onclick="changeSlideTwo(1)">&#10095;</a>`

    document.getElementById('lightboxtwo').innerHTML = lbbuilder;
}

galplace(height);
