const galleries = new Map();

galleries.set('club', {
    galtype: 'club',
    width: 3,
    incr: 3,
    thumb: false,
    exclude: [],
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
    galtype: 'photos',
    width: 4,
    incr: 5,
    thumb: true,
    exclude: [],
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
            id: `officers2425.jpg`,
            name: `2024-25 Officers`,
            desc: `2024-25 Officers, from left to right: Gillis Lowry (President 23-24), Erik Payton (President 24-25), Ben Jacobson-Bell (Vice President 23-24), Andrew Lewis (Vice President 24-25), Jillian Epstein (Outreach Coordinator 24-25), Ben Shapiro (Outreach Coordinator 23-24), Abby Bohl (Newsletter Editor-in-Chief 23-24), Shane Kuo (Newsletter Editor-in-Chief 24-25), Haonan Gong (Treasurer 23-24), Christopher Brown (Treasurer 24-25)`
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
    galtype: 'museum',
    width: 4,
    incr: 6,
    thumb: false,
    exclude: [],
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

galleries.set(`messier`, {
    galtype: 'astro',
    width: 10,
    incr: 11,
    thumb: true,
    exclude: ['border', 'altname'],
    data: [
        {
            id: `crab.jpg`,
            name: `M1`,
            desc: `M1 (the Crab Nebula), Taken by Riley Scott Jacob using the 12" Irving P. Church Refractor. 21x 30" frames at ISO 6400.`
        },
        {
            name: `M2`
        },
        {
            name: `M3`
        },
        {
            name: `M4`
        },
        {
            name: `M5`
        },
        {
            name: `M6`
        },
        {
            name: `M7`
        },
        {
            id: `m8.jpg`,
            name: `M8`,
            altname: `Lagoon Nebula`,
            desc: `Star cluster plus H II emission nebula in Sagittarius. Taken by Ben Jacobson-Bell, Gillis Lowry, Marquice Sanchez-Fleming, and Shane Kuo through the 12" Irving P. Church Refractor on 6/24/25. 49 x 30-second frames stacked using Siril, and post-processed with Photoshop.`
        },
        {
            name: `M9`
        },
        {
            name: `M10`
        },
        {
            name: `M11`
        },
        {
            name: `M12`
        },
        {
            id: `m13.jpg`,
            name: `M13`,
            altname: `Great Globular Cluster in Hercules`,
            desc: `Great Globular Cluster in Hercules, taken through the 12" Irving P. Church Refractor on June 2, 2025, during a 50% Moon. Stacked from 15x 60-second frames.`
        },
        {
            name: `M14`
        },
        {
            name: `M15`
        },
        {
            id: `m16.jpg`,
            name: `M16`,
            altname: `Eagle Nebula`,
            desc: `Star cluster plus H II emission nebula in Sagittarius, also featuring the Pillars of Creation! Taken by Ben Jacobson-Bell, Gillis Lowry, and Marquice Sanchez-Fleming through the 12" Irving P. Church Refractor on 6/25/25. 184 x 30-second frames stacked using Siril, and post-processed with Photoshop.`
        },
        {
            id: `m17.jpg`,
            name: `M17`,
            altname: `Omega Nebula`,
            desc: `Star cluster plus H II emission nebula in Sagittarius. Taken by Marquice Sanchez-Fleming on 6/24/25 using the 12" Irving P. Church Refractor. Later stacked 124 x 30-second frames by Ben Jacobson-Bell, Gillis Lowry, and Marquice Sanchez-Fleming using Siril, and post-processed with Photoshop.`
        },
        {
            name: `M18`
        },
        {
            name: `M19`
        },
        {
            id: `m20.jpg`,
            name: `M20`,
            altname: `Trifid Nebula`,
            desc: `Star cluster plus H II emission nebula in Sagittarius. Taken by Marquice Sanchez-Fleming on 6/24/25 using the 12" Irving P. Church Refractor. Later stacked 26 x 1-minute frames by Ben Jacobson-Bell, Gillis Lowry, and Marquice Sanchez-Fleming using Siril, and post-processed with Photoshop.`
        },
        {
            name: `M21`
        },
        {
            name: `M22`
        },
        {
            name: `M23`
        },
        {
            name: `M24`
        },
        {
            name: `M25`
        },
        {
            name: `M26`
        },
        {
            id: `m27irv.jpg`,
            name: `M27`,
            altname: `Dumbbell Nebula`,
            desc: `Dumbbell Nebula, taken through the 12" Irving P. Church Refractor, May 26th, 2025, by Ben Jacobson-Bell, Andrew Lewis, Gillis Lowry, and Marquice Sanchez-Fleming. 19x 90-second exposures stacked in Siril, ISO 1600.`
        },
        {
            name: `M28`
        },
        {
            id: `m29.jpg`,
            name: `M29`,
            altname: `Cooling Tower Cluster`,
            desc: `Open cluster ("Cooling Tower Cluster") in Cygnus, near the Sadr region. Taken by Ben Jacobson-Bell, Shane Kuo, and Andrew Lewis using the 12" Irving P. Church Refractor on June 2, 2025. Stacked from 66x 30-second frames.`
        },
        {
            name: `M30`
        },
        {
            id: `andromeda.jpg`,
            name: `M31`,
            altname: `Andromeda Galaxy`,
            desc: `The Andromeda Galaxy, taken by Riley Scott Jacob using a 250-mm lens on a sky-tracking DSLR camera (no telescope). 60x 2-minute frames.`
        },
        {
            name: `M32`
        },
        {
            id: `triangulum.jpg`,
            name: `M33`,
            altname: `Triangulum Galaxy`,
            desc: `M33 (the Triangulum Galaxy), taken by Sam Newman-Stonebraker using the 8" Orion astrograph.`
        },
        {
            name: `M34`
        },
        {
            name: `M35`
        },
        {
            id: `m36.jpg`,
            name: `M36`,
            altname: `Pinwheel Cluster`,
            desc: `Open cluster in Auriga. Taken by Erik Payton, Ben Jacobson-Bell, Shane Kuo, and Andrew Lewis using the 12" Irving P. Church Refractor on April 20, 2025. Stacked from ~50x 30-second monochrome frames.`
        },
        {
            name: `M37`
        },
        {
            name: `M38`
        },
        {
            id: `m39.jpg`,
            name: `M39`,
            altname: `Pyramid Cluster`,
            desc: `Open cluster ("Pyramid Cluster") north of Deneb. Taken by Erik Payton, Ben Jacobson-Bell, Gillis Lowry, and Marquice Sanchez-Fleming using the 12" Irving P. Church Refractor on June 4, 2025. Stacked from ~20x 30-second frames, ISO 1600.`
        },
        {
            id: `m40.jpg`,
            name: `M40`,
            altname: `Winnecke 4`,
            desc: `Single 20-second frame of M40 / Winnecke 4, a double star mistakenly recorded by Charles Messier as a deep-sky object. Taken by Ben Jacobson-Bell using the Irving P. Church Refractor on May 26, 2025. The galaxy NGC 4290 is faintly visible to the left of the image.`
        },
        {
            name: `M41`
        },
        {
            id: `m42.jpg`,
            name: `M42`,
            altname: `Orion Nebula`,
            desc: `Single 30" frame taken by Marquice Sanchez-Fleming using the 5" Meade refractor and CMOS camera (monochrome).`
        },
        {
            name: `M43`
        },
        {
            name: `M44`
        },
        {
            id: `pleiades.jpg`,
            name: `M45`,
            altname: `Pleiades`,
            desc: `Taken by Dang Pham with the 8" Orion astrograph.`
        },
        {
            name: `M46`
        },
        {
            name: `M47`
        },
        {
            name: `M48`
        },
        {
            name: `M49`
        },
        {
            name: `M50`
        },
        {
            id: `m51irv.jpg`,
            name: `M51`,
            altname: `Whirlpool Galaxy`,
            desc: `Spiral galaxy in Ursa Major. Taken through the 12" Irving P. Church Refractor by Ben Jacobson-Bell, Gillis Lowry, Marquice Sanchez-Fleming, Shane Kuo, Connor Rosenthal, and Jake Turner on 6/22/25. 11 x 3-minute frames stacked with Siril, post-processed with Photoshop.`
        },
        {
            name: `M52`
        },
        {
            name: `M53`
        },
        {
            name: `M54`
        },
        {
            name: `M55`
        },
        {
            name: `M56`
        },
        {
            id: `ringlr.jpg`,
            name: `M57`,
            altname: `Ring Nebula`,
            desc: `Taken by Erik Payton and Ben Jacobson-Bell on August 1, 2023, using the 12" Irving P. Church Refractor. 124x 30-second frames stacked with Astro Pixel Processor.`
        },
        {
            name: `M58`
        },
        {
            name: `M59`
        },
        {
            name: `M60`
        },
        {
            name: `M61`
        },
        {
            name: `M62`
        },
        {
            name: `M63`
        },
        {
            name: `M64`
        },
        {
            name: `M65`
        },
        {
            name: `M66`
        },
        {
            name: `M67`
        },
        {
            name: `M68`
        },
        {
            name: `M69`
        },
        {
            name: `M70`
        },
        {
            name: `M71`
        },
        {
            name: `M72`
        },
        {
            name: `M73`
        },
        {
            name: `M74`
        },
        {
            name: `M75`
        },
        {
            name: `M76`
        },
        {
            name: `M77`
        },
        {
            name: `M78`
        },
        {
            name: `M79`
        },
        {
            name: `M80`
        },
        {
            id: `m81irv.jpg`,
            name: `M81`,
            altname: `Bode's Galaxy`,
            desc: `Taken through the 12" Irving P. Church Refractor, April 22nd, 2025, by Ben Jacobson-Bell, Erik Payton, Shane Kuo, Gillis Lowry, and Andrew Lewis. 21x 3-minute frames stacked in Siril.`
        },
        {
            id: `onlythefinest.jpg`,
            name: `M82`,
            altname: `Cigar Galaxy`,
            desc: `Taken by Erik Payton, Ben Jacobson-Bell, Shane Kuo, and Andrew Lewis on April 20, 2025. 12x 3-minute frames stacked with Siril, post-processed with Photoshop.`
        },
        {
            name: `M83`
        },
        {
            name: `M84`
        },
        {
            name: `M85`
        },
        {
            name: `M86`
        },
        {
            name: `M87`
        },
        {
            name: `M88`
        },
        {
            name: `M89`
        },
        {
            name: `M90`
        },
        {
            name: `M91`
        },
        {
            id: `m92.jpg`,
            name: `M92`,
            desc: `Globular cluster in Hercules. Taken through the 12" Irving P. Church Refractor, May 16th, 2025, by Ben Jacobson-Bell, Erik Payton, Gillis Lowry, and Ella Mansfield. 30x 1-minute frames stacked in Siril.`
        },
        {
            name: `M93`
        },
        {
            name: `M94`
        },
        {
            name: `M95`
        },
        {
            name: `M96`
        },
        {
            id: `owl.jpg`,
            name: `M97`,
            altname: `Owl Nebula`,
            desc: `Taken by Riley Scott Jacob using the 12" Irving P. Church Refractor on May 7, 2018.`
        },
        {
            name: `M98`
        },
        {
            name: `M99`
        },
        {
            name: `M100`
        },
        {
            id: `m101irv.jpg`,
            name: `M101`,
            altname: `Pinwheel Galaxy`,
            desc: `Counterclockwise spiral galaxy in Ursa Major. Taken by Ben Jacobson-Bell, Gillis Lowry, Marquice Sanchez-Fleming, and Shane Kuo through the 12" Irving P. Church Refractor on 6/23/25. 8 x 3-minute frames stacked with Siril and post-processed with Photoshop.`
        },
        {
            name: `M102`
        },
        {
            name: `M103`
        },
        {
            name: `M104`
        },
        {
            name: `M105`
        },
        {
            name: `M106`
        },
        {
            name: `M107`
        },
        {
            name: `M108`
        },
        {
            name: `M109`
        },
        {
            name: `M110`
        }
    ]
});

galleries.set(`astro`, {
    galtype: 'astro',
    width: 3,
    incr: 4,
    thumb: true,
    exclude: [],
    data: [
        {
            id: `grandss.jpg`,
            name: `The Solar System from Fuertes`
        },
        {
            id: `planetscomp.jpg`,
            name: `Collection of planets from Fuertes`
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
            desc: `Taken by Andrew Lewis using the Coronado H-alpha telescope on March 12, 2024. Compiled using GIMP.`
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
            id: `sunspots.jpg`,
            name: `Sunspots through Irv`
        },
        {
            id: `mercury.jpg`,
            name: `Mercury`
        },
        {
            id: `venus.jpg`,
            name: `Venus`
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
            id: `thewebsitedoesnotneedanothermoonimage.jpg`,
            name: `Moon`,
            desc: `50.7% Moon (June 2, 2025) taken through the 12" Irving P. Church Refractor Telescope by Ben Jacobson-Bell and Shane Kuo. Stacked from 40x 0.05-second frames. Slight orange color is due to high-altitude wildfire smoke.`
        },
        {
            id: `mars.jpg`,
            name: `Mars`
        },
        {
            id: `asteroid7220philnicholson.jpg`,
            name: `Asteroid (7220) Philnicholson`,
            desc: `Main-belt asteroid named after the Cornell Astronomical Society's faculty advisor since 1983, Professor Phil Nicholson. Attempt at detection made April 23, 2025, by Ben Jacobson-Bell, Erik Payton, Shane Kuo, and Andrew Lewis using the 12" Irving P. Church Refractor. Opposition was reached ~5 days earlier. Single frame (with Lyrid meteor streak) shown here.`
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
            id: `saturnclear.jpg`,
            name: `Saturn`,
            desc: `Taken by Riley Scott Jacob using a personal Orion XT12i (12" Dobsonian). Stacked from the best 1% of 20,000 frames using AutoStakkert.`
        },
        {
            id: `saturngap.jpg`,
            name: `Saturn`
        },
        {
            id: `saturnside.jpg`,
            name: `Saturn`,
            desc: `Taken by Erik Payton on August 27, 2023, using the 12" Irving P. Church Refractor. 100x 0.2-second frames stacked.`
        },
        {
            id: `uranus.jpg`,
            name: `Uranus`
        },
        {
            id: `neptune.jpg`,
            name: `Neptune`
        },
        {
            id: `pluto.jpg`,
            name: `Pluto and Charon`
        },
        {
            id: `crab.jpg`,
            name: `M1`,
            altname: `Crab Nebula`,
            desc: `M1 (the Crab Nebula), Taken by Riley Scott Jacob using the 12" Irving P. Church Refractor. 21x 30" frames at ISO 6400.`
        },
        {
            id: `m8.jpg`,
            name: `M8`,
            altname: `Lagoon Nebula`,
            desc: `Star cluster plus H II emission nebula in Sagittarius. Taken by Ben Jacobson-Bell, Gillis Lowry, Marquice Sanchez-Fleming, and Shane Kuo through the 12" Irving P. Church Refractor on 6/24/25. 49 x 30-second frames stacked using Siril, and post-processed with Photoshop.`
        },
        {
            id: `m13.jpg`,
            name: `M13`,
            altname: `Great Globular Cluster in Hercules`,
            desc: `Great Globular Cluster in Hercules, taken through the 12" Irving P. Church Refractor on June 2, 2025, during a 50% Moon. Stacked from 15x 60-second frames.`
        },
        {
            id: `m16.jpg`,
            name: `M16`,
            altname: `Eagle Nebula`,
            desc: `Star cluster plus H II emission nebula in Sagittarius, also featuring the Pillars of Creation! Taken by Ben Jacobson-Bell, Gillis Lowry, and Marquice Sanchez-Fleming through the 12" Irving P. Church Refractor on 6/25/25. 184 x 30-second frames stacked using Siril, and post-processed with Photoshop.`
        },
        {
            id: `m17.jpg`,
            name: `M17`,
            altname: `Omega Nebula`,
            desc: `Star cluster plus H II emission nebula in Sagittarius. Taken by Marquice Sanchez-Fleming on 6/24/25 using the 12" Irving P. Church Refractor. Later stacked 124 x 30-second frames by Ben Jacobson-Bell, Gillis Lowry, and Marquice Sanchez-Fleming using Siril, and post-processed with Photoshop.`
        },
        {
            id: `m20.jpg`,
            name: `M20`,
            altname: `Trifid Nebula`,
            desc: `Star cluster plus H II emission nebula in Sagittarius. Taken by Marquice Sanchez-Fleming on 6/24/25 using the 12" Irving P. Church Refractor. Later stacked 26 x 1-minute frames by Ben Jacobson-Bell, Gillis Lowry, and Marquice Sanchez-Fleming using Siril, and post-processed with Photoshop.`
        },
        {
            id: `m27.jpg`,
            name: `M27`,
            altname: `Dumbbell Nebula`,
            desc: `Dumbbell Nebula, taken by Riley Scott Jacob using the 12" Irving P. Church Refractor in May 2018.`
        },
        {
            id: `m27irv.jpg`,
            name: `M27`,
            altname: `Dumbbell Nebula`,
            desc: `Dumbbell Nebula, taken through the 12" Irving P. Church Refractor, May 26th, 2025, by Ben Jacobson-Bell, Andrew Lewis, Gillis Lowry, and Marquice Sanchez-Fleming. 19x 90-second exposures stacked in Siril, ISO 1600.`
        },
        {
            id: `m29.jpg`,
            name: `M29`,
            altname: `Cooling Tower Cluster`,
            desc: `Open cluster ("Cooling Tower Cluster") in Cygnus, near the Sadr region. Taken by Ben Jacobson-Bell, Shane Kuo, and Andrew Lewis using the 12" Irving P. Church Refractor on June 2, 2025. Stacked from 66x 30-second frames.`
        },
        {
            id: `andromeda.jpg`,
            name: `M31`,
            altname: `Andromeda Galaxy`,
            desc: `The Andromeda Galaxy, taken by Riley Scott Jacob using a 250-mm lens on a sky-tracking DSLR camera (no telescope). 60x 2-minute frames.`
        },
        {
            id: `m31core.jpg`,
            name: `M31`,
            altname: `Andromeda Galaxy`,
            desc: `Core of the spiral galaxy closest to the Milky Way Galaxy. Taken by Marquice Sanchez-Fleming with the 12" Irving P. Church Refractor on 6/23/25. Stacked by Ben Jacobson-Bell, Gillis Lowry, and Marquice Sanchez-Fleming using 45 x 3-minute frames through Siril, and post-processed with Photoshop.`
        },
        {
            id: `triangulum.jpg`,
            name: `M33`,
            altname: `Triangulum Galaxy`,
            desc: `M33 (the Triangulum Galaxy), taken by Sam Newman-Stonebraker using the 8" Orion astrograph.`
        },
        {
            id: `m36.jpg`,
            name: `M36`,
            altname: `Pinwheel Cluster`,
            desc: `Open cluster in Auriga. Taken by Erik Payton, Ben Jacobson-Bell, Shane Kuo, and Andrew Lewis using the 12" Irving P. Church Refractor on April 20, 2025. Stacked from ~50x 30-second monochrome frames.`
        },
        {
            id: `m39.jpg`,
            name: `M39`,
            altname: `Pyramid Cluster`,
            desc: `Open cluster ("Pyramid Cluster") north of Deneb. Taken by Erik Payton, Ben Jacobson-Bell, Gillis Lowry, and Marquice Sanchez-Fleming using the 12" Irving P. Church Refractor on June 4, 2025. Stacked from ~20x 30-second frames, ISO 1600.`
        },
        {
            id: `m40.jpg`,
            name: `M40`,
            altname: `Winnecke 4`,
            desc: `Single 20-second frame of M40 / Winnecke 4, a double star mistakenly recorded by Charles Messier as a deep-sky object. Taken by Ben Jacobson-Bell using the Irving P. Church Refractor on May 26, 2025. The galaxy NGC 4290 is faintly visible to the left of the image.`
        },
        {
            id: `orionzhou.jpg`,
            name: `M42`,
            altname: `Orion Nebula`
        },
        {
            id: `m42.jpg`,
            name: `M42`,
            altname: `Orion Nebula`,
            desc: `Single 30" frame taken by Marquice Sanchez-Fleming using the 5" Meade refractor and CMOS camera (monochrome).`
        },
        {
            id: `m45.jpg`,
            name: `M45`,
            altname: `Pleiades`
        },
        {
            id: `pleiades.jpg`,
            name: `M45`,
            altname: `Pleiades`,
            desc: `Taken by Dang Pham with the 8" Orion astrograph.`
        },
        {
            id: `whirlpool.jpg`,
            name: `M51`,
            altname: `Whirlpool Galaxy`
        },
        {
            id: `m51.jpg`,
            name: `M51`,
            altname: `Whirlpool Galaxy`,
            desc: `Taken by Riley Scott Jacob using the 12" Irving P. Church Refractor. 3x 30" frames, ISO 6400. Stacked with DSS.`
        },
        {
            id: `m51irv.jpg`,
            name: `M51`,
            altname: `Whirlpool Galaxy`,
            desc: `Spiral galaxy in Ursa Major. Taken through the 12" Irving P. Church Refractor by Ben Jacobson-Bell, Gillis Lowry, Marquice Sanchez-Fleming, Shane Kuo, Connor Rosenthal, and Jake Turner on 6/22/25. 11 x 3-minute frames stacked with Siril, post-processed with Photoshop.`
        },
        {
            id: `ring91017.jpg`,
            name: `M57`,
            altname: `Ring Nebula`,
            desc: `September 10, 2017`
        },
        {
            id: `ringmsf.jpg`,
            name: `M57`,
            altname: `Ring Nebula`,
            desc: `Taken by Riley Scott Jacob using the 12" Irving P. Church Refractor. 15x 60-second frames at ISO 1600, stacked with DSS.`
        },
        {
            id: `ringhbo.jpg`,
            name: `M57`,
            altname: `Ring Nebula`,
            desc: `Taken at the Hartung-Boothroyd Observatory, through the James Houck 25" reflector`
        },
        {
            id: `ringlr.jpg`,
            name: `M57`,
            altname: `Ring Nebula`,
            desc: `Taken by Erik Payton and Ben Jacobson-Bell on August 1, 2023, using the 12" Irving P. Church Refractor. 124x 30-second frames stacked with Astro Pixel Processor.`
        },
        {
            id: `ringlrlr.jpg`,
            name: `M57`,
            altname: `Ring Nebula`,
            desc: `Taken using the 25" James R. Houck Telescope at the Hartung–Boothroyd Observatory.`
        },
        {
            id: `ringvivid.jpg`,
            name: `M57`,
            altname: `Ring Nebula`,
            desc: `Taken using the 25" James R. Houck Telescope at the Hartung–Boothroyd Observatory.`
        },
        {
            id: `m57irv.jpg`,
            name: `M57`,
            altname: `Ring Nebula`,
            desc: `Planetary nebula in the Constellation Lyra. Taken by Marquice Sanchez-Fleming on 6/24/25 using the 12" Irving P. Church Refractor. Later stacked 67 x 30-second frames by Ben Jacobson-Bell, Gillis Lowry, and Marquice Sanchez-Fleming using Siril, and post-processed with Photoshop.`
        },
        {
            id: `m81.jpg`,
            name: `M81`,
            altname: `Bode's Galaxy`,
            desc: `Taken by Riley Scott Jacob using the 12" Irving P. Church Refractor in May 2018.`
        },
        {
            id: `m81irv.jpg`,
            name: `M81`,
            altname: `Bode's Galaxy`,
            desc: `Taken through the 12" Irving P. Church Refractor, April 22nd, 2025, by Ben Jacobson-Bell, Erik Payton, Shane Kuo, Gillis Lowry, and Andrew Lewis. 21x 3-minute frames stacked in Siril.`
        },
        {
            id: `m82.jpg`,
            name: `M82`,
            altname: `Cigar Galaxy`
        },
        {
            id: `m82again.jpg`,
            name: `M82`,
            altname: `Cigar Galaxy`,
            desc: `Taken by Riley Scott Jacob using the 12" Irving P. Church Refractor in May 2018.`
        },
        {
            id: `m82p.jpg`,
            name: `M82`,
            altname: `Cigar Galaxy`
        },
        {
            id: `onlythefinest.jpg`,
            name: `M82`,
            altname: `Cigar Galaxy`,
            desc: `Taken by Erik Payton, Ben Jacobson-Bell, Shane Kuo, and Andrew Lewis on April 20, 2025. 12x 3-minute frames stacked with Siril, post-processed with Photoshop.`
        },
        {
            id: `m92.jpg`,
            name: `M92`,
            desc: `Globular cluster in Hercules. Taken through the 12" Irving P. Church Refractor, May 16th, 2025, by Ben Jacobson-Bell, Erik Payton, Gillis Lowry, and Ella Mansfield. 30x 1-minute frames stacked in Siril.`
        },
        {
            id: `owl.jpg`,
            name: `M97`,
            altname: `Owl Nebula`,
            desc: `Taken by Riley Scott Jacob using the 12" Irving P. Church Refractor on May 7, 2018.`
        },
        {
            id: `m101.jpg`,
            name: `M101`,
            altname: `Pinwheel Galaxy`
        },
        {
            id: `m101irv.jpg`,
            name: `M101`,
            altname: `Pinwheel Galaxy`,
            desc: `Counterclockwise spiral galaxy in Ursa Major. Taken by Ben Jacobson-Bell, Gillis Lowry, Marquice Sanchez-Fleming, and Shane Kuo through the 12" Irving P. Church Refractor on 6/23/25. 8 x 3-minute frames stacked with Siril and post-processed with Photoshop.`
        },
        {
            id: `try6.jpg`,
            name: `Caldwell 38`,
            altname: `Needle Galaxy`,
            desc: `Taken by Riley Scott Jacob with the 12" Irving P. Church Refractor. 5x 30" frames, ISO 6400. Stacked with DSS.`
        }
    ]
});

const el_tmp = `<div class="gallery-col" onclick="openLightboxTwo();toSlideTwo(%slide)">
    <div class="gallery-container" style="object-fit: cover">
        <img src="%path" style="object-fit: cover" class="gallery-image">
        <div class="gallery-overlay">
            <div class="gallery-text" style="color: black">%name%altname</div>
        </div>
    </div>
</div>
`

const el_tmp_noborder = `<div class="gallery-col" onclick="openLightboxTwo();toSlideTwo(%slide)">
    <div class="gallery-container gallery-container-noborder" style="object-fit: cover">
        <img src="%path" style="object-fit: cover" class="gallery-image">
        <div class="gallery-overlay">
            <div class="gallery-text" style="color: black">%name%altname</div>
        </div>
    </div>
</div>
`

let height = 0;

const galtype = document.getElementById('galtype').getAttribute('data-galtype');
let galdata = galleries.get(galtype);
let width = galdata.width;
let incr = galdata.incr;
let galname = galdata.galtype;
let exclude = galdata.exclude;
if (window.innerWidth < 750) {
    if (galtype == 'messier') {
        incr = 22;
        width = 5;
    } else {
        incr = Math.ceil(width * incr / 2);
        width = 2;
    }
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
        galbuilder += (exclude.includes('border') ? el_tmp_noborder : el_tmp).replace(/%path/g, tgt.id ? `/data/img/${galname}${thumb ? '/thumb' : ''}/${tgt.id.replace(/\.{a-zA-Z}{3,4}/g, '.jpg')}` : `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2PQ0DX6DwACjwGHAe9kcwAAAABJRU5ErkJggg==`).replace(/%name/g, tgt.name || '').replace(/%altname/g, tgt.altname && !exclude.includes('altname') ? `<br><span style="font-size: 0.75em; white-space: nowrap;">${tgt.altname}</span>` : '').replace(/%slide/g, i + 1);
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
        if (tgt.id) {
            lbbuilder += `<div class="slideTwo"><img onclick="window.open('/data/img/${galname}/${tgt.id}','_blank').focus()" data-src="/data/img/${galname}/${tgt.id}" class="gallery-image-slide"><div style="font-size: 3vh; margin-top: 2vh; width: 100%; text-align: center;">${tgt.name || ''}</div>
            <div style="font-size: 2vh; margin: 2vh 0; width: 100%; text-align: center;">${tgt.altname || ''}</div><div style="width: 100%; font-size: 2vh; text-align: center;">${tgt.desc || ''}</div></div>`;
        } else {
            lbbuilder += `<div class="slideTwo"><img data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2PQ0DX6DwACjwGHAe9kcwAAAABJRU5ErkJggg==" class="gallery-image-slide"><div style="font-size: 3vh; margin-top: 2vh; width: 100%; text-align: center;">${tgt.name || ''}</div>
            <div style="font-size: 2vh; margin: 2vh 0; width: 100%; text-align: center;">${tgt.altname || ''}</div><div style="width: 100%; font-size: 2vh; text-align: center;">${tgt.desc || ''}</div></div>`;
        }
    }
    lbbuilder += `</div>\n<span style="z-index: 2147483647;" class="close pointer" onclick="closeLightboxTwo()">&times;</span>\n<a class="previous" style="position: absolute; left: 0;" onclick="changeSlideTwo(-1)">&#10094;</a>\n<a class="next" onclick="changeSlideTwo(1)">&#10095;</a>`

    document.getElementById('lightboxtwo').innerHTML = lbbuilder;
}

galplace(height);
