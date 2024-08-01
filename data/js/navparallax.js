var nav_data = `<!-- Nav bar, should persist across pages; add nav_el_sel to current page -->
        
        <nav class="nav_no_display" style="display: grid; grid-template-columns: 16.67% 16.67% 16.67% 16.67% 16.67% 16.67%; animation: flyin ease-in-out 1s none;  height: 10%;">
            <a href="/"><button class="nav_el" id="nav_home">Home</button></a>
            <div class="nav_dd">
                <button class="nav_el" id="nav_about">About</button>
                <div class="nav_dd_menu">
                    <div class="nav_dd_main">
                        <a href="/about/theclub" id="nav_about_theclub">The Club</a>
                        <a href="/about/telescope" id="nav_about_telescope">The Telescope</a>
                        <a href="/about/fuertes" id="nav_about_fuertes">Fuertes History</a>
                        <a href="/about/irvhistory" id="nav_about_irvhistory">Telescope History</a>
                        <a href="/about/slides" id="nav_about_slides">Lantern Slide Wall</a>
                    </div>
                </div>
            </div>
            <div class="nav_dd">
                <button class="nav_el" style="width: 100%;" id="nav_visit">Visit Us</button>
                <div class="nav_dd_menu">
                    <div class="nav_dd_main">
                        <a href="/visit/hours" id="nav_visit_hours">Hours, Directions</a>
                        <a href="/visit/accessibility" id="nav_visit_accessibility">Accessibility</a>
                        <a href="/visit/weather" id="nav_visit_weather">Weather</a>
                    </div>
                </div>
            </div>
            <div class="nav_dd">
                <button class="nav_el" style="width: 100%;" id="nav_events">Events</button>
                <div class="nav_dd_menu">
                    <div class="nav_dd_main">
                        <a href="/events/lectures" id="nav_events_lectures">Lecture Series</a>
                        <a href="/events/openhouse" id="nav_events_openhouse">Open Houses</a>
                    </div>
                </div>
            </div>
            <div class="nav_dd">
                <button class="nav_el" style="width: 100%;" id="nav_photos">Photos</button>
                <div class="nav_dd_menu">
                    <div class="nav_dd_main">
                        <a href="/photos/photos" id="nav_photos_photos">Photo Gallery</a>
                        <a href="/photos/museum" id="nav_photos_museum">Museum Gallery</a>
                        <a href="/photos/astro" id="nav_photos_astro">Astrophotography</a>
                    </div>
                </div>
            </div>
            <a href="/newsletters"><button class="nav_el" id="nav_newsletters">Newsletters</button></a>
        </nav>`

document.write(nav_data);

function showNav() {
    const nav = document.getElementById('navtwo');
    if (nav && nav.classList.contains('nav_no_display')) nav.classList.replace('nav_no_display', 'nav_display');
    else if (nav && nav.classList.contains('nav_display')) nav.classList.replace('nav_display', 'nav_no_display');
}
