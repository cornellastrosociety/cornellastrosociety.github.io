

const newsletters = [
    {
        yr: `2024`,
        mth: `August`,
        desc: `Our final special issue newsletter of the summer contains another look into the Museum Restoration Project, discussing the telescopes at the forefront of astronomy research and their relation to Cornell.`,
        date: `aug24`
    },
    {
        yr: `2024`,
        mth: `July`,
        desc: `Our first special issue of Summer '24 introduces our new Editor-in-Chief, Shane Kuo, and unveils our Museum Restoration Project!`,
        date: `jul24`
    },
    {
        yr: `2024`,
        mth: `May`,
        desc: `Our final issue of the '23-24 school year is a tribute to graduating seniors: an eclipse recap, two pieces by renowned moon-writer Justine Singleton, a sign-off from Pres. Gillis Lowry, and a final crossword from Vice Pres. Ben Jacobson-Bell. Fare thee well!`,
        date: `may24`
    },
    {
        yr: `2024`,
        mth: `February`,
        desc: `A short issue announcing our eclipse design contest winners (Valerio Poggiali's poster and Peter He's sticker), as well as our "Voyager Spacecraft Week" events, featuring Prof. James Cordes and Ann Druyan!`,
        date: `feb24`
    },
    {
        yr: `2023`,
        mth: `December`,
        desc: `As winter break begins, we review this semester's lecture series and astro-photographs, plot multiple exoplanets across the night sky, and sled down a hill on Iapetus. Happy holidays from CAS!`,
        date: `dec23`
    },
    {
        yr: `2023`,
        mth: `November`,
        desc: `Our November edition contains club updates galore, from sun puzzles to space cowboy costumes to astrophotography. It also features musings on Pluto's planet status, a poetic spin on our usual moon pieces, and the return of the CAS crossword!`,
        date: `nov23`
    },
    {
        yr: `2023`,
        mth: `October`,
        desc: `We celebrate autumn with the fall of an asteroid sample back to Earth, everything you need to know about the two upcoming eclipses, a prize-winning article about spacecraft passing in the night, and much more!`,
        date: `oct23`
    },
    {
        yr: `2023`,
        mth: `September`,
        desc: `Our first newsletter of the Fall '23 semester and a look ahead at some upcoming events.`,
        date: `sep23`
    },
    {
        yr: `2023`,
        mth: `May`,
        desc: `Our final issue of Spring '23 travels to the International Space Station and Europa! Help us welcome next year's club officers, and follow along on our trip back to Cherry Springs!`,
        date: `may23`
    },
    {
        yr: `2023`,
        mth: `April`,
        desc: `Our flowery April edition features a new volcanic discovery on Venus, a sugary look at Saturn's moon Mimas, the Doppler Shift, and multiple pictures from our members (including an asteroid)!`,
        date: `apr23`
    },
    {
        yr: `2023`,
        mth: `March`,
        desc: `Our first full-length issue of spring 2023 reviews the Green Comet, examines an impossible ring, peers through multiple wavelengths, and takes a journey to Uranus's moon, Miranda!`,
        date: `mar23`
    },
    {
        yr: `2023`,
        mth: `February`,
        desc: `An introduction from our new Editor-in-Chief, Abigail Bohl, and an overview of this semester's events!`,
        date: `feb23`
    },
    {
        yr: `2022`,
        mth: `December`,
        desc: `For our December edition, we take a trip to Triton, gaze up at winter constellations and the Andromeda galaxy, discuss parallax and exoplanets, and wonder about the future of Artemis.`,
        date: `dec22`
    },
    {
        yr: `2022`,
        mth: `November`,
        desc: `This post-Halloween edition features a letter to Carl Sagan for his 88th birthday, recent astrophotography by club members, a spooooky look at dark matter and dark energy, an investigation of why stars shine, and more!`,
        date: `nov22`
    },
    {
        yr: `2022`,
        mth: `October`,
        desc: `This candy-corn-colored edition takes a trip to Callisto, reviews recent failures to launch, tells us why stars twinkle, and exposes a Carl Sagan-quoting mishap.`,
        date: `oct22`
    },
    {
        yr: `2022`,
        mth: `May`,
        desc: `Our final issue of the 2021-22 school year investigates Sagittarius A*, reviews a club trip to Mount Pleasant, and discusses the Planetary Sciences Decadal! Plus our usual crossword and a constellation overview.`,
        date: `may22`
    },
    {
        yr: `2022`,
        mth: `April`,
        desc: `We examine the CAS solar telescope and water on exoplanets, as well as interview Quanta Magazine writer Natalie Wolchover. Also, two pieces of creative writing from club members!`,
        date: `apr22`
    },
    {
        yr: `2022`,
        mth: `March`,
        desc: `Celebrating the 50th anniversary of Pioneer 10! We also bring you updates from the Parker Solar Probe and Cornell's Alpha CubeSat mission hoping to launch a light sail!`,
        date: `mar22`
    },
    {
        yr: `2022`,
        mth: `February`,
        desc: `Our first monthly newsletter! This issue provides an in-depth look at JWST, Carl Sagan fun facts, space poetry, and a crossword!`,
        date: `feb22`
    }
]

const template_sect = `<div class="main_content nl">
    <div class="nl_data main_group">
        <div class="nl_yr">%yr</div>
        <span class="nl_mth">%mth</span>
    </div>
    <div></div>
    <div class="main_group">
        <div class="nl_desc">%desc</div>
        <a target="_blank" href="/data/newsletters/CAS Newsletter %mth %yr.pdf">
            <div class="nl_link">Read ></div>
        </a>
    </div>
    <div></div>
    <div class="nl_tc">
        <a target="_blank" href="/data/newsletters/CAS Newsletter %mth %yr.pdf"><img class="nl_thumb" style="width: 100%;" src="/data/img/newsletter/%date.png" alt="%mth %yr CAS Newsletter thumbnail"></a>
    </div>
</div>`;

const nl_sect = document.getElementById('nl_main');
if (nl_sect) {
    const insertion = [];
    for (let i = 0; i < newsletters.length; i++) {
        const nl = newsletters[i];
        insertion.push(template_sect.replace(/%yr/g, nl.yr).replace(/%mth/g, nl.mth).replace(/%desc/g, nl.desc).replace(/%date/g, nl.date));
        if (i < newsletters.length - 1) {
            insertion.push(`<hr class="nl_hr">`);
        }
    }
    nl_sect.innerHTML = insertion.join('\n\n');
}

const template_widg = `<a target="_blank" href="/data/newsletters/CAS Newsletter %mth %yr.pdf" style="display: block; text-align: center;">
    <img class="nl_thumb" style="width: 60%;" src="/data/img/newsletter/%date.jpg" alt="%mth %yr CAS Newsletter thumbnail">
</a>`;

const nl_widget = document.getElementById('nl_widget');
if (nl_widget) {
    const nl = newsletters[0];
    const insertion = template_widg.replace(/%yr/g, nl.yr).replace(/%mth/g, nl.mth).replace(/%desc/g, nl.desc).replace(/%date/g, nl.date);
    nl_widget.innerHTML = insertion;
}