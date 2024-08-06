var nav_data = `<!-- Nav bar, should persist across pages; add nav_el_sel to current page -->
 <div id = "navone" class = "show_small nav_no_display" style = "width: 80vh; max-width: 80vw; height: 100vh; position: fixed; background: url(/data/img/moonburger.jpg) no-repeat right center; background-size: cover; top: 0vh; right: 0px; z-index: 2147483647;">
        <div onclick = hidemenu() style = "width: 10vh; font-size: 10vh; color:  black; margin-right: 2vh; top: 0vh; float: right; margin-top: 2vh; rotate: 45deg; user-select: none">+</div>
        <div style = "position: relative; width: 25vh; margin-right: 3vh; float: right; margin-left: 5vh; ">
            <div style = "height: 15vh"></div>
            <div class = "no_und" ><a class = "no_und"   href="/"><div  class = "mnav_main" id="nav_home">Home</div></a> </div>
            
            <div  class = "mnav_main" id="nav_about">About <i class = "arrow down" id = "aboutarrow" onclick = showhide("about")> </i > </div>
                <div>
                    <div class = "mnav_sub no_und"id = "mnav_about" style = "display: none; color: black">
                        <a href="/about/theclub" id="nav_about_theclub" class = "nav_dd_sub">The Club <br></a>
                        <a href="/about/telescope" id="nav_about_telescope" class = "nav_dd_sub">The Telescope <br></a>
                        <a href="/about/fuertes" id="nav_about_fuertes" class = "nav_dd_sub">Fuertes History <br></a>
                        <a href="/about/irvhistory" id="nav_about_irvhistory" class = "nav_dd_sub">Telescope History <br></a>
                        <a href="/about/slides" id="nav_about_slides" class = "nav_dd_sub">Lantern Slide Wall <br></a>
                    </div>
                </div>
          
 
                <div class = "mnav_main"  id="nav_visit">Visit Us <i class = "arrow down" id = "visitarrow" onclick = showhide("visit")> </i ></div>
                <div>
                    <div  class = "mnav_sub no_und" id = "mnav_visit" style = "display: none; color: black">
                        <a href="/visit/hours" id="nav_visit_hours" class = "nav_dd_sub">Hours, Directions <br></a>
                        <a href="/visit/accessibility" id="nav_visit_accessibility" class = "nav_dd_sub">Accessibility <br></a>
                        <a href="/visit/weather" id="nav_visit_weather" class = "nav_dd_sub">Weather <br></a>
                    </div>
                </div>

                <div class = "mnav_main "  id="nav_events">Events <i class = "arrow down" id = "eventarrow" onclick = showhide("event")> </i ></div>
                <div >
                    <div  class = "mnav_sub no_und" id = "mnav_event" style = "display: none; color: black">
                        <a href="/events/lectures" id="nav_events_lectures" class = "nav_dd_sub">Lecture Series <br></a>
                        <a href="/events/openhouse" id="nav_events_openhouse" class = "nav_dd_sub">Open Houses <br></a>
                    </div>
                </div>
            
                <div class = "mnav_main "id="nav_photos">Photos <i class = "arrow down" id = "photoarrow" onclick = showhide("photo")> </i ></div>
                <div >
                    <div class = "mnav_sub no_und " id = "mnav_photo" style = "display: none; color: black">
                        <a href="/photos/photos" id="nav_photos_photos" class = "nav_dd_sub">Photo Gallery <br></a>
                        <a href="/photos/museum" id="nav_photos_museum" class = "nav_dd_sub">Museum Gallery <br></a>
                        <a href="/photos/astro" id="nav_photos_astro" class = "nav_dd_sub">Astrophotography <br></a>
                    </div>
                </div>
                <div class = "no_und" > <a  class = "no_und" href="/newsletters"><div  id="nav_newsletters" class = "mnav_main ">Newsletters</div></a>   </div>
       

        </div> 
    </div>
        <a id="hamburger" style="position: absolute; top: 0; right: 0; z-index: 2147483646; font-size: 50px; text-decoration: none; color: white;" href="javascript:void('Irv :D');">☰</a>
        <nav class="nav_no_display" style="display: grid; grid-template-columns: 16.67% 16.67% 16.67% 16.67% 16.67% 16.67%; animation: flyin ease-in-out 1s none;">
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
                        <a href="/events/past" id="nav_events_past">Past Events</a>
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

document.getElementById('hamburger').onclick = function () {
    const nav = document.getElementsByTagName('nav')[0];
    if (nav && nav.classList.contains('nav_no_display')) nav.classList.replace('nav_no_display', 'nav_display');
    else if (nav && nav.classList.contains('nav_display')) nav.classList.replace('nav_display', 'nav_no_display');
    if (document.getElementsByTagName('html')[0].style.overflow === 'auto' || document.getElementsByTagName('html')[0].style.overflow === "") {
        document.getElementsByTagName('html')[0].style.overflow = 'hidden';
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        if (document.getElementById('wind')) document.getElementById('wind').style.overflow = 'hidden';
    }
    else if (document.getElementsByTagName('html')[0].style.overflow === 'hidden') {
        document.getElementsByTagName('html')[0].style.overflow = 'auto';
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        if (document.getElementById('wind')) document.getElementById('wind').style.overflow = 'auto';
    }
}

window.onresize = function () {
    if (document.getElementsByClassName('slideTwo').length > 0) {
        resizeSlideTwo(slideIndexTwo)
    }
    if (document.getElementsByClassName('slide').length > 0) {
        resizeSlide(slideIndex)
    }

}

document.onkeyup = function (e) {
    if (document.getElementsByClassName('slideTwo').length > 0) {
        if (e.key == 'Escape') {
            closeLightboxTwo();
        } else if (e.key == 'ArrowLeft') {
            changeSlideTwo(-1);
        } else if (e.key == 'ArrowRight') {
            changeSlideTwo(1);
        }
    }
    if (document.getElementsByClassName('slide').length > 0) {
        if (e.key == 'Escape') {
            closeLightbox();
        } else if (e.key == 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key == 'ArrowRight') {
            changeSlide(1);
        }
    }

}
