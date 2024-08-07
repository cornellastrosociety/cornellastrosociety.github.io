var nav_data = `<!-- Nav bar, should persist across pages; add nav_el_sel to current page -->

     <div id="burger" onclick = showNav() style=" user-select: none; position: fixed; top: 2vh; right: 0; z-index: 2147483649; width: min(50px, 12vh); height: min(50px, 12vh); background-color: black; margin-right: 2vh; text-align: center; border: solid white; border-width: 0.25vh;">    
            <a id = "lines" style=" user-select: none; display: block;  position: relative; z-index: 2147483649; font-size: min(50px, 12vh); text-decoration: none; color: white; line-height:min(50px, 12.5vh);" >☰</a>
            <a id = "arrdown" class = "large_arrow up " style=" border-color: inherit; user-select: none; display: none; width: min(12.5px,3vh); height: min(12.5px, 3vh);margin: min(16.667px, 4vh) 0vh 0vh 0vh; z-index: 2147483649;" ></a> 
        </div>
            <div id = "navtwo" class = "show_small nav_no_display" style = "animation: slidein 0.5s; width: 80vh; max-width: 80vw; height: 100vh; position: fixed; background: url(/data/img/moonburger.jpg) no-repeat right center; background-size: cover; top: 0vh; right: 0px; z-index: 2147483646;">
                
                <div style = "position: relative; width: 25vh; margin-right: 3vh; float: right; ">
                    <div style = "height: 15vh"></div>
                    <div class = "no_und" ><a class = "no_und"   href="/"><div  class = "mnav_main" id="nav_home">Home</div></a> </div>
            
            <div  class = "mnav_main" id="nav_about">About <i class = "arrow down" id = "aboutarrow" onclick = showhide("about")> </i > </div>
                <div>
                    <div class = "mnav_sub no_und"id = "mnav_about" style = "display: none; color: black">
                    <br style = "font-size: 1vh">
                        <a href="/about/theclub" id="nav_about_theclub" class = "nav_dd_sub">The Club <br> <br style = "font-size: 1vh"></a>
                        <a href="/about/telescope" id="nav_about_telescope" class = "nav_dd_sub">The Telescope <br> <br style = "font-size: 1vh"></a>
                        <a href="/about/fuertes" id="nav_about_fuertes" class = "nav_dd_sub">Fuertes History <br> <br style = "font-size: 1vh"></a>
                        <a href="/about/irvhistory" id="nav_about_irvhistory" class = "nav_dd_sub">Telescope History <br> <br style = "font-size: 1vh"></a>
                        <a href="/about/slides" id="nav_about_slides" class = "nav_dd_sub">Lantern Slide Wall <br> <br style = "font-size: 1vh"></a>
                    </div>
                </div>
          
 
                <div class = "mnav_main"  id="nav_visit">Visit Us <i class = "arrow down" id = "visitarrow" onclick = showhide("visit")> </i ></div>
                <div>
                    <div  class = "mnav_sub no_und" id = "mnav_visit" style = "display: none; color: black">
                    <br style = "font-size: 1vh">
                        <a href="/visit/hours" id="nav_visit_hours" class = "nav_dd_sub">Hours, Directions <br> <br style = "font-size: 1vh"></a>
                        <a href="/visit/accessibility" id="nav_visit_accessibility" class = "nav_dd_sub">Accessibility <br> <br style = "font-size: 1vh"></a>
                        <a href="/visit/weather" id="nav_visit_weather" class = "nav_dd_sub">Weather <br> <br style = "font-size: 1vh"></a>
                    </div>
                </div>

                <div class = "mnav_main "  id="nav_events">Events <i class = "arrow down" id = "eventarrow" onclick = showhide("event")> </i ></div>
                <div >
                    <div  class = "mnav_sub no_und" id = "mnav_event" style = "display: none; color: black">
                    <br style = "font-size: 1vh">
                        <a href="/events/lectures" id="nav_events_lectures" class = "nav_dd_sub">Lecture Series <br> <br style = "font-size: 1vh"></a>
                        <a href="/events/openhouse" id="nav_events_openhouse" class = "nav_dd_sub">Open Houses <br> <br style = "font-size: 1vh"></a>
                    </div>
                </div>
            
                <div class = "mnav_main "id="nav_photos">Photos <i class = "arrow down" id = "photoarrow" onclick = showhide("photo")> </i ></div>
                <div >
                    <div class = "mnav_sub no_und " id = "mnav_photo" style = "display: none; color: black">
                    <br style = "font-size: 1vh">
                        <a href="/photos/photos" id="nav_photos_photos" class = "nav_dd_sub">Photo Gallery <br> <br style = "font-size: 1vh"></a>
                        <a href="/photos/museum" id="nav_photos_museum" class = "nav_dd_sub">Museum Gallery <br> <br style = "font-size: 1vh"></a>
                        <a href="/photos/astro" id="nav_photos_astro" class = "nav_dd_sub">Astrophotography <br> <br style = "font-size: 1vh"></a>
                    </div>
                </div>
                <div class = "no_und" > <a  class = "no_und" href="/newsletters"><div  id="nav_newsletters" class = "mnav_main ">Newsletters</div></a>   </div>
       
               
        
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


