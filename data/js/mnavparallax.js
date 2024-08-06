var nav_data = `<!-- Nav bar, should persist across pages; add nav_el_sel to current page -->

    <div  id="burger"style=" position:sticky; top: 0;  z-index: 2147483646;">
            <a style = "font-size: 50px; text-decoration: none; color: white; position: absolute; right: 0px;" href="javascript:void('Irv :D');" onclick = showNav()>☰</a>
            <div id = "navtwo" class = "show_small nav_no_display" style = "width: 80vh; max-width: 80vw; height: 100vh; position: fixed; background: url(/data/img/moonburger.jpg) no-repeat right center; background-size: cover; top: 0vh; right: 0px; z-index: 2147483647;">
                <div onclick = hidemenu() style = "width: 10vh; font-size: 10vh; color:  black; margin-right: 2vh; top: 0vh; float: right; margin-top: 2vh; rotate: 45deg;  user-select: none"> + </div>
                <div style = "position: relative; width: 25vh; margin-right: 3vh; float: right; ">
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
                        <div >
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
        </div>`

document.write(nav_data);



function showhide(input)
{

    arrow = document.getElementById(input + 'arrow');
    content = document.getElementById('mnav_' + input);
    if (arrow.classList.contains('up'))
        {
            arrow.classList.replace('up', 'down');
            content.style.display = 'none';
        }
    else if (arrow.classList.contains('down'))
        {
            arrow.classList.replace('down', 'up');
            content.style.display = 'block';
        }
}

function hidemenu() {
    const nav = document.getElementById('navtwo');
    if (nav.classList.contains('nav_no_display')) nav.classList.replace('nav_no_display', 'nav_display');
    else if (nav && nav.classList.contains('nav_display')) nav.classList.replace('nav_display', 'nav_no_display');
    if (document.getElementsByTagName('html')[0].style.overflow === 'auto' ||document.getElementsByTagName('html')[0].style.overflow === "")
        {
            document.getElementsByTagName('html')[0].style.overflow = 'hidden';
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            if (document.getElementById('wind')) document.getElementById('wind').style.overflow = 'hidden';
        }
        else if(document.getElementsByTagName('html')[0].style.overflow === 'hidden')
        {
            document.getElementsByTagName('html')[0].style.overflow = 'auto';
            document.getElementsByTagName('body')[0].style.overflow = 'auto';
            if (document.getElementById('wind')) document.getElementById('wind').style.overflow = 'auto';
        }
}