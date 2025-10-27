/*
=~=~=~=~=~=~=~=~=
Adding a lecture:

Add a corresponding object. Fields include:
 * id: an optional tag to associate an id with the lecture
 * attributes: an object with fields with a (type, value) pair.
   Tags may be used as frequently as desired, except for title
   or specialtitle, of which only one may be used. Types include:
   * title
   * specialtitle (highlights title)
   * date
   * datetime (separate date and time with %)
   * loc
   * presenter
 * desc: Lecture description
 * media: an object with the following fields:
   * type: photo | video | lphoto
   * ref: /data/img/lecture/[].jpg name if photo
          thumb id separated by %%% to https://www.youtube.com/watch?v=[] if video
          photo id separated by %%% to external link if lphoto
   * attr: Attribution caption, if necessary
   * unbounded: true to override 16:9 aspect ratio

Make sure to escape characters that would break the object format,
such as an apostrophe inside single quotes, with a backslash.

All text fields support HTML input as needed.

If adding a lecture series, update the quick list of upcoming lectures
on the lectures page.

If migrating lectures from cur_lecs to past_lecs, one should also
ensure the date range in the "Past Lectures" block on the lectures
page shows the correct ending year.

=~=~=~=~=~=~=~=~=
*/

var cur_lecs = [
    {
        attributes: [
            {
                type: 'title',
                value: 'From the First Light of the Cosmos to the Cameras that Capture it Today'
            },
            {
                type: 'presenter',
                value: 'Prof. Abigail Crites'
            },
            {
                type: 'datetime',
                value: 'October 24th, 2025%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'Nearly 14 billion years ago, the universe blazed with light in the first moments after the Big Bang. That light has been stretching as the universe expands, now reaching us as an invisible millimeter glow that still fills the sky. By building exquisitely sensitive cameras to capture this faint signal, scientists have opened a window into the universe\'s early days—revealing how the first stars and galaxies took shape and how the cosmos has grown into the vast, rich structure we see today.',
        media: {
            type: 'video',
            ref: '102425%%%-KFHUA54Z9o'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'We Have [Insert Planet Name] At Home: The Amazing World of Analog Studies'
            },
            {
                type: 'presenter',
                value: 'Alexia Kubas'
            },
            {
                type: 'datetime',
                value: 'October 17th, 2025%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'With limited budgets and competing scientific priorities, it is impossible to send dedicated missions to every fascinating world in our Solar System. Even the lucky few missions that get selected require years (if not decades!) of patience before we start receiving data. In the meantime, we can turn to our own planet to learn about extreme environments far beyond Earth. Analog science allows us to study planetary processes without leaving the stratosphere—preparing us for future missions while deepening our understanding of the Earth system. In this talk, Alexia will highlight how Earth-based research, especially in the polar regions, reveals new insights into hydrology and astrobiology on cold, icy planets across the Solar System.',
        media: {
            type: 'video',
            ref: '101725%%%3iDpASMda1M'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Seeing the Forest, Not the Trees: Serendipitous Glances into the Universe'
            },
            {
                type: 'presenter',
                value: 'Prof. Dongwoo Chung'
            },
            {
                type: 'datetime',
                value: 'September 26th, 2025%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'The story of visual astronomy is all about looking at distinct objects and spotting patterns across those objects. In the story of early radio astronomy, on the other hand, some of the most important discoveries were completely serendipitous. Following some of these historical anecdotes, Professor Dongwoo Chung of the Department of Astronomy will discuss how researchers at Cornell and elsewhere are developing a new kind of astronomical survey that scans the cosmos in three dimensions without trying to target detections of individual objects.',
        media: {
            type: 'video',
            ref: '92625%%%vHzR8UxoRkY'
        }
    },
]

var past_lecs = [
    {
        attributes: [
            {
                type: 'yurititle',
                value: 'Tenth Annual Yuri\'s Night Lecture: How to Thrive on the Moon'
            },
            {
                type: 'presenter',
                value: 'Prof. Mason Peck'
            },
            {
                type: 'datetime',
                value: 'April 11th, 2025%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'Mason Peck is the Stephen Fujikawa professor of Astronautics at Cornell University, where his research focuses on spacecraft system architectures, attitude dynamics and control, and organizational practices for technology development and innovation. His past research includes chip-scale spacecraft, propellantless orbit maneuvers, and actuation with control-moment gyroscopes. Recent years have seen new missions to the moon with ultimate objectives that include permanent human settlement, national security, and commercial enterprises. In this talk he will discuss some of the space-technology innovations that must be in place if humanity is to realize these aspirations.',
        media: {
            type: 'video',
            ref: '41825%%%mSj06aw1JAU',
            attr: 'NASA'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Binary Asteroid Formation and NASA/DART: Double Asteroid Redirection Test'
            },
            {
                type: 'presenter',
                value: 'Colby Merrill'
            },
            {
                type: 'datetime',
                value: 'March 7th, 2025%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'Colby is a PhD candidate in aerospace engineering at Cornell University. They were a member of the NASA/DART investigation team\'s dynamics working group and currently serve on the ESA/Hera science team. Their research is varied across multiple disciplines. Some of their recent work focuses on constraining ages for asteroid moons, optimizing spacecraft orbits, and designing missions for asteroid deflection. Outside of research, you can find them birding, hiking, gaming, and reading. This talk will focus on the NASA/DART mission, which impacted the asteroid moon, Dimorphos, in 2022 and how this moon and many asteroid moons form.',
        media: {
            type: 'video',
            ref: '3725%%%1-ohA6w9rks'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Finding Our Way'
            },
            {
                type: 'presenter',
                value: 'Ho\'okele Ka\'iulani Murphy'
            },
            {
                type: 'datetime',
                value: 'February 28th, 2025%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'The Cornell Astronomical Society\'s second lecture of the semester, presented by Ho\'okele Ka\'iulani Murphy, Professor of Hawaiian Astronomy and Navigation at University of Hawai\'i Honolulu Community College. She will be sharing the story of Hōkūle\'a, the voyaging canoe at the heart of the revival of traditional navigation in Hawai\'i. Guided by the knowledge of the heavens and the ocean, contemporary navigators sail in the wake of their ancestors.',
        media: {
            type: 'video',
            ref: '22825%%%PS97Yh1x3tc',
            attr: 'Polynesian Voyaging Society / \'Ōiwi TV / Nā\'ālehu Anthony'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Weird and Wonderful Worlds in our Galaxy'
            },
            {
                type: 'presenter',
                value: 'Dr. Lili Alderson'
            },
            {
                type: 'datetime',
                value: 'February 7th, 2025%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'From the Solar System to the most extreme exoplanets, we will explore how astronomers study the atmospheres of planets, and highlight some of the strangest skies we\'ve explored so far.',
        media: {
            type: 'video',
            ref: '2725%%%LvBXcdoxIn8'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'From Sagan to Spacecraft: CAS Members\' Student Research'
            },
            {
                type: 'datetime',
                value: 'November 22nd, 2024%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Toni Morrison Hall 102'
            }
        ],
        desc: 'Tons of fascinating astronomy research happens at Cornell, across multiple different departments. CAS members research everything from spacecraft and satellites to exoplanets and supernovae.',
        media: {
            type: 'video',
            ref: '112224%%%brze-SSfqqo'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Fred Young Telescope: Exploring the Early Universe'
            },
            {
                type: 'presenter',
                value: 'Prof. Gordon Stacey'
            },
            {
                type: 'datetime',
                value: 'November 15th, 2024%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Toni Morrison Hall 102'
            }
        ],
        desc: 'When FYST is completed, it will be installed near the summit of Cerro Chajnantor in Chile\'s Atacama Desert and become the second highest telescope in the world. Outfitted with cutting edge instrumentation, FYST will be able to rapidly map the sky at submillimeter to millimeter wavelengths, collecting data that will give scientists insight into "cosmic dawn"—the universe\'s earliest days—as well as play a role in the search for gravitational waves and dark matter.',
        media: {
            type: 'video',
            ref: '111524%%%u2vIIxNqFP8'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Are We Alone? Searching for Life and Intelligence in the Universe'
            },
            {
                type: 'presenter',
                value: 'Prof. Shami Chatterjee'
            },
            {
                type: 'datetime',
                value: 'November 8th, 2024%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Toni Morrison Hall 102'
            }
        ],
        desc: 'Professor Shami Chatterjee of the Department of Astronomy will be speaking about the search for intelligent life, as part of the Carl Sagan Institute\'s <a target="_blank" href="https://carlsaganinstitute.cornell.edu/news/celebration-carl-sagans-90th-birthday-being-held-nov-9">celebration of Professor Carl Sagan\'s 90th birthday</a>. People have wondered about life and intelligence beyond the Earth since the dawn of history. We will take a quick tour of searches for extraterrestrial intelligence (SETI), the quest for planets beyond our solar system, and the prospects for finding life and intelligence beyond the Earth with new telescopes and surveys.',
        media: {
            type: 'video',
            ref: '11824%%%wXEdR9FDftA'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The History of the Telescope'
            },
            {
                type: 'presenter',
                value: 'Antique Telescope Society President Bart Fried'
            },
            {
                type: 'datetime',
                value: 'October 18th, 2024%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Toni Morrison Hall 102'
            }
        ],
        desc: 'Much of what you thought you knew about the telescope will be challenged in this presentation... Many of the wrong people get credit for things they didn\'t do and others have been overlooked or forgotten. But first, consider that before the telescope, we knew nothing of the Universe we reside in. It\'s as if we were locked in a room with closed window blinds since time immemorial, seeing only the walls around us. But in 1608, the greatest invention of all time was demonstrated for the first time, allowing the blinds to be thrown open and our understanding of who, what and where we are in our existence to be illuminated. This gave humanity a soul-rocking new understanding of ourselves. That process continues today, with every new revelation of the Webb and other great telescopes!',
        media: {
            type: 'video',
            ref: '101824%%%HfxN8K9fJLw'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Extreme Astrophysics with Compact Objects'
            },
            {
                type: 'presenter',
                value: 'Prof. Dong Lai'
            },
            {
                type: 'datetime',
                value: 'September 27th, 2024%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Toni Morrison Hall 102'
            }
        ],
        desc: 'Compact objects, including white dwarfs, neutron stars and black holes, are some of the most exotic objects in the universe. How do we study them and what secrets do they reveal?',
        media: {
            type: 'video',
            ref: '92724%%%ZpTgXP5tYUQ'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'When Black Holes Collide: Revealing the Universe Through Gravitational Waves'
            },
            {
                type: 'presenter',
                value: 'Francisco Blanco'
            },
            {
                type: 'datetime',
                value: 'September 20th, 2024%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Toni Morrison Hall 102'
            }
        ],
        desc: 'In this talk, we will explore the fascinating world of binary systems—pairs of objects like black holes or neutron stars—and their role in generating gravitational waves. We\'ll discuss how detectors like LIGO and the upcoming LISA mission capture these ripples in spacetime, offering us a new window into the universe. We\'ll also delve into the mathematical frameworks—numerical relativity, post-Newtonian expansion and self-force approach—used to study the intricate dynamics of these systems and predict their gravitational wave signals. Finally, we\'ll discover how their study gives us insights into new fundamental physics.',
        media: {
            type: 'video',
            ref: '92024%%%TL3KomLeIiE'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Astrophotography'
            },
            {
                type: 'datetime',
                value: 'April 19th, 2024%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Mews East Lounge'
            }
        ],
        desc: 'A special lecture for CAS members about techniques in astrophotography.',
        media: {
            type: 'encphoto',
            ref: '41924%%%https:\/\/drive.google.com/file/d/%%%EG_qjpfm>7N[]q.7XCmwx?\\\\IifzALee;X'
        }
    },
    {
        attributes: [
            {
                type: 'yurititle',
                value: 'Ninth Annual Yuri\'s Night Lecture: Space: The New Warfighting Domain'
            },
            {
                type: 'presenter',
                value: 'Prof. Gregory Falco'
            },
            {
                type: 'datetime',
                value: 'April 12th, 2024%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'As geopolitical tensions rise and fierce technological competition escalates, space has become the premier theater to showcase defense prowess. This talk will discuss counterspace capabilities in development for space vehicles and murky international norms surrounding space weapons.',
        media: {
            type: 'photo',
            ref: '41224'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Solar Eclipses and Saros Cycles'
            },
            {
                type: 'presenter',
                value: 'Prof. Phil Nicholson'
            },
            {
                type: 'datetime',
                value: 'March 22nd, 2024%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Toni Morrison Hall 102'
            }
        ],
        desc: 'CAS Advisor Prof. Phil Nicholson discusses the basic geometry and terminology of lunar and solar eclipses, how and why they are governed by the ancient "Saros cycle", the circumstances of the eclipse of April 8, and some of the ways in which eclipses have been used historically to teach us about solar physics and the history of the Earth–Moon system.',
        media: {
            type: 'video',
            ref: '32224%%%eNr5pcTNrv0'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Exoplanets and How We Study Them'
            },
            {
                type: 'presenter',
                value: 'Maura Lally'
            },
            {
                type: 'datetime',
                value: 'March 15th, 2024%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'Astronomy graduate student Maura Lally discusses primary exoplanet exoplanet detection methods, including transits, radial velocities, and direct detections. Maura also details the atmospheres of transiting exoplanets.',
        media: {
            type: 'video',
            ref: '31524%%%-e6ZgK-Yptg'
        }
    },
    {
        attributes: [
            {
                type: 'specialtitle',
                value: 'The Optics of the Irving Porter Church Telescope'
            },
            {
                type: 'presenter',
                value: 'Dr. John Church'
            },
            {
                type: 'datetime',
                value: 'March 8th, 2024%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Robert Purcell Community Center 106'
            }
        ],
        desc: 'The Irving Porter Church 12-inch refracting telescope in Fuertes Observatory has an objective lens designed, ground, and polished by the Brashear Company of Pittsburgh in 1920. Its original glass disks came as a gift from Yerkes Observatory in Wisconsin. Based on an assumption that its two lens elements are made of the same glasses that are in the 40-inch Yerkes refractor, a provisional study has been made of its optical properties. Charles Hastings of Yale was a long-term designer for Brashear. Hastings personally made a 9.4-inch objective for the Johns Hopkins University and published its complete specifications in 1882; the Church objective may have been a direct scale-up of the latter lens with minor adjustments. The talk will include a historical discussion of lens designing and evaluation methods, using two Hastings-designed objectives as examples.',
        media: {
            type: 'video',
            ref: '3824%%%JVuZ8vnSuuw'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Biosignatures in the Ancient Earth\'s Atmosphere: Could Dinosaurs Be Seen from Space?'
            },
            {
                type: 'presenter',
                value: 'Dr. Rebecca Payne'
            },
            {
                type: 'datetime',
                value: 'March 1st, 2024%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'Today, evidence of life can be seen all over the Earth, from the land and oceans to the atmosphere. These observations define what we look for when searching for life on other planets. But what about ancient life on Earth? Would the earlier life that roamed the Earth during the past 500 million years (from sponges to the first trees to dinosaurs) have been detectable to aliens from faraway exoplanets? How can we tell? And should we be looking for space-dinosaurs?<br>Our second lecture of the semester, hosted by Dr. Rebecca Payne, will discuss research on the biosignatures of life on the ancient Earth and the potential use of similar biosignatures for our own interstellar life-seeking purposes.',
        media: {
            type: 'video',
            ref: '3124%%%S6AxTlTcx3g'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Voyager Spacecraft: What Are We Learning Now?'
            },
            {
                type: 'presenter',
                value: 'Prof. James Cordes'
            },
            {
                type: 'datetime',
                value: 'February 16th, 2024%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'Voyager 1 and 2 were launched in 1977 and completed a grand tour of the Solar System. About ten years ago, they left the magnetic influence of the Sun and are still returning data. Prof. Cordes will discuss what we are learning from this data and more!',
        media: {
            type: 'video',
            ref: '21624%%%zV6DL-EHSUQ'
        }
    },
    {
        id: 'anndruyan',
        attributes: [
            {
                type: 'specialtitle',
                value: 'Carl Sagan\'s <em>Cosmos</em> and Q&A with Ann Druyan'
            },
            {
                type: 'presenter',
                value: 'Sponsored by the Carl Sagan Institute'
            },
            {
                type: 'datetime',
                value: 'February 13th, 2024%6:30 PM'
            },
            {
                type: 'loc',
                value: 'Cornell Cinema'
            }
        ],
        desc: 'As part of our "Voyager Spacecraft Week," CAS joined Cornell Cinema in presenting <em>Cosmos</em> Episode 6: Traveler\'s Tales. After the showing, Carl Sagan\'s wife and co-producer Ann Druyan featured in a live Q&A with the audience. In addition to her work on <em>Cosmos</em> in 1980, Ann Druyan was the writer and producer for the two newer seasons of <em>Cosmos</em> (A Spacetime Odyssey in 2014 and Possible Worlds in 2020). She has written and co-written dozens of books, television shows, and movies, including six books with Carl Sagan and the film adaptation of <em>Contact</em>. She was also a member of the Voyager Golden Record team, which selected pictures, sounds, and music from Earth to cast out into space; her heartbeat and brain waves will roam the stars for millions of years.',
        media: {
            type: 'video',
            ref: '21324%%%za9UFwB1cKI'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Carl Sagan\'s Life'
            },
            {
                type: 'presenter',
                value: 'CAS President Gillis Lowry'
            },
            {
                type: 'datetime',
                value: 'November 7th, 2023%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Robert Purcell Community Center Room 218'
            }
        ],
        desc: 'Cornell Astronomical Society President Gillis Lowry provides a lighthearted overview of late Cornell Professor Carl Sagan\'s life to honor his 89th birthday!',
        media: {
            type: 'lphoto',
            ref: '11723%%%https://www.youtube.com/watch?v=xjDU8vMcids'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Purple is the New Green: The Colors of Life as a Tool to Find Life in the Cosmos'
            },
            {
                type: 'presenter',
                value: 'Dr. Ligia Coelho'
            },
            {
                type: 'datetime',
                value: 'October 6th, 2023%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Toni Morrison Hall 102'
            }
        ],
        desc: 'What does the spectral fingerprint of biopigments look like? How can it aid in the search for extraterrestrial life? Are there purple-hued aliens? This lecture seeks to answer these questions and more!',
        media: {
            type: 'video',
            ref: '10623%%%MkBb9lhTr1s'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Adaptive Optic Upgrades to LIGO: Achieving Higher Laser Power'
            },
            {
                type: 'presenter',
                value: 'CAS Member Sophia Arnold'
            },
            {
                type: 'datetime',
                value: 'September 29th, 2023%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Toni Morrison Hall 102'
            }
        ],
        desc: 'The Laser Interferometer Gravitational Wave Observatory (LIGO) is severely limited in its sensitivity by quantum noise. CAS member Sophia Arnold outlines the development of LIGO and paths for future improvement.',
        media: {
            type: 'video',
            ref: '92923%%%lO2UUDqPGbQ'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Life After Nova: The Resurrection of a Supernova in Radio Wavelengths'
            },
            {
                type: 'presenter',
                value: '2022-23 CAS President Annika Deutsch'
            },
            {
                type: 'datetime',
                value: 'September 22nd, 2023%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Toni Morrison Hall 102'
            }
        ],
        desc: 'Our first lecture of the semester comes from former president Annika Deutsch! She\'ll discuss her research involving observations of supernova SN2018ivc, which revealed a dramatic re-brightening after the supernova had already exploded. What might this tell us about the original star?',
        media: {
            type: 'video',
            ref: '92223%%%4AXuRbtHvBE'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Peering Through the Space Between Stars and Galaxies'
            },
            {
                type: 'presenter',
                value: 'Stella Ocker'
            },
            {
                type: 'datetime',
                value: 'April 21st, 2023%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'Most of the ordinary matter in the universe that is not locked up in stars takes the form of diffuse ionized gas, or plasma. Astronomy PhD student Stella Ocker will discuss recent breakthroughs in our efforts to resolve cosmic plasma across a vast range of spatial scales—from nearby interstellar space traversed by the Voyager Interstellar Mission to space between galaxies traversed by fast radio bursts.',
        media: {
            type: 'photo',
            ref: '42123'
        }
    },
    {
        attributes: [
            {
                type: 'yurititle',
                value: 'Eighth Annual Yuri\'s Night Celebration: The Sunset of SmallSats and the Dawn of Big Space'
            },
            {
                type: 'presenter',
                value: 'Prof. Mason Peck'
            },
            {
                type: 'datetime',
                value: 'April 14th, 2023%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'Celebrating Yuri\'s Night and human spaceflight with Prof. Mason Peck!<br><br>SpaceX\'s Starship launch vehicle will disrupt the modern-day dominance of tiny spacecraft. What will the future of larger spacecraft look like? What infrastructure will we need to establish a sustained presence in cislunar space?',
        media: {
            type: 'video',
            ref: '41423%%%ZgY4K0plnhY'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'From Exoplanets to Pulsars: CAS Members\' Student Research'
            },
            {
                type: 'datetime',
                value: 'March 24th, 2023%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'Our very own undergraduate members discussed their research in exoplanets, cosmology, and pulsar timing!',
        media: {
            type: 'video',
            ref: '32423%%%H08XRPi0DP4'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Story of Minor Planets'
            },
            {
                type: 'presenter',
                value: 'Dr. Rixin Li'
            },
            {
                type: 'datetime',
                value: 'March 17th, 2023%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'The story of minor planets is a fascinating one that spans billions of years and takes us on a journey through the history of our solar system. Asteroids, comets, and dwarf planets have played a crucial role in the formation of worlds like our Earth. Cornell Research Associate Rixin Li will introduce the formation and the destinies of these minor planets!',
        media: {
            type: 'video',
            ref: '31723%%%nQ-kMP00Q08'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Building a Galaxy-scale Detector for Gravitational Waves'
            },
            {
                type: 'presenter',
                value: 'Prof. Shami Chatterjee'
            },
            {
                type: 'datetime',
                value: 'March 10th, 2023%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'Einstein\'s theory of general relativity predicts gravitational waves—ripples in the fabric of space-time itself. We have now detected such ripples from black hole mergers. Shami Chatterjee, a Cornell astronomer and member of the NANOGrav collaboration, will talk about ongoing efforts to build a Galaxy-scale detector to observe low-frequency gravitational waves, as well as unexpected discoveries along the way.',
        media: {
            type: 'video',
            ref: '31023%%%jzy7t3nIxD8'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Mystery of the Missing Antimatter'
            },
            {
                type: 'presenter',
                value: 'Prof. Yuval Grossman'
            },
            {
                type: 'datetime',
                value: 'March 3rd, 2023%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'Matter and anti-matter are mirror images of each other—so why is there so much more matter in the universe than anti-matter? Prof. Grossman, a Cornell researcher of theoretical high-energy physics, and will discuss this puzzle and the progress so far in solving it.',
        media: {
            type: 'video',
            ref: '3323%%%YTSHpk7JPCI'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Carl Sagan\'s Birthday Lecture - Alien Earths'
            },
            {
                type: 'presenter',
                value: 'Prof. Lisa Kaltenegger'
            },
            {
                type: 'datetime',
                value: 'November 11th, 2022%7:30 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'On the Friday nearest November 9th, we celebrated Carl Sagan\'s birthday with apple pie and a talk by Professor Lisa Kaltenegger, who follows in Sagan\'s footsteps to search for life on exoplanets.',
        media: {
            type: 'video',
            ref: '111122%%%kjH2Tt7rgIM'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Building Instruments For Astrophysics Research'
            },
            {
                type: 'presenter',
                value: 'Prof. Abby Crites'
            },
            {
                type: 'datetime',
                value: 'October 21st, 2022%8:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'Abigail Crites is an Assistant Professor & Fred Young Faculty Fellow in the Cornell Department of Astronomy. She will discuss the physics, engineering, and software development needed to build instruments that study the evolution of our universe!',
        media: {
            type: 'video',
            ref: '102122%%%_1tdOcud7F8'
        }
    },
    {
        attributes: [
            {
                type: 'specialtitle',
                value: 'Irving Porter Church Memorial Telescope 100th Anniversary Lecture'
            },
            {
                type: 'presenter',
                value: 'Prof. Phil Nicholson'
            },
            {
                type: 'datetime',
                value: 'October 14th, 2022%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'On October 14th, we celebrated the 100th birthday of our beloved telescope, Irv! CAS faculty advisor Phil Nicholson highlighted Irv\'s history, with space-themed cupcakes provided! We had telescope, museum, and sky tours every half hour, along with a special slideshow of Irv memories. Happy "Birvday"!',
        media: {
            type: 'video',
            ref: '101422%%%U7-tVG1SUFw'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Student-Built Spacecraft - Cornell University Space Systems Design Studio'
            },
            {
                type: 'datetime',
                value: 'October 7th, 2022%7:30 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'Water propellant and holograms in space? Cornell students involved in Space Systems Design Studio missions will give lectures about the spacecraft they\'re building!',
        media: {
            type: 'video',
            ref: '10722%%%dSt0EE6suQA'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Heating Leftovers: Understanding Planet Formation From the Stuff Left Behind'
            },
            {
                type: 'presenter',
                value: 'Dr. Tajana Schneiderman'
            },
            {
                type: 'datetime',
                value: 'September 30th, 2022%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Appel Commons Multipurpose Room 303'
            }
        ],
        desc: 'Dr. Schneiderman is a Visiting Scientist in the Cornell Department of Astronomy. Her talk examines planetary debris—gas and dust—and how it helps reveal a planet\'s history!',
        media: {
            type: 'video',
            ref: '93022%%%ct9PMMnYkpM'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Tension in the Cosmos: How Fast is the Universe Expanding Today?'
            },
            {
                type: 'presenter',
                value: 'Prof. Michael Niemack'
            },
            {
                type: 'date',
                value: 'April 2nd, 2021'
            }
        ],
        desc: 'Recent measurements of the cosmic microwave background (the remnant light from the Big Bang) suggest the Universe is expanding slower than measurements of supernova and other more “local” sources. These differing measurements of the Hubble expansion constant could indicate that a more complex model is needed to describe our Universe or could be due to a problem with one or more of the measurements themselves. We will discuss our current dark energy and dark matter dominated cosmological model as well as recent measurements from the Atacama Cosmology Telescope and other observatories that have contributed to this tension in our cosmological model. We will also briefly describe next generation observatories including the CCAT Observatory and Simons Observatory that will help address these questions in the future.',
        media: {
            type: 'video',
            ref: '4221%%%BdOLtSz99Aw'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Exoplanets and the Search for Habitable Worlds'
            },
            {
                type: 'presenter',
                value: 'Postdoctoral Fellow Jayesh Goyal'
            },
            {
                type: 'date',
                value: 'March 26th, 2021'
            }
        ],
        desc: 'For centuries, humans have wondered about the existence of planets around stars, other than our own Sun. However, for the first time in human history we have the capability not just to find, but also to characterize these far away worlds, termed as “Exoplanets". In this talk Dr. Goyal will show the astonishing variety of exoplanets that have been discovered and techniques used to find them. He will discuss how we study exoplanet atmospheres using the combination of remote sensing observations, 1D and 3D atmospheric models, retrieval techniques and thereby characterize them. Dr. Goyal will also briefly discuss how modeling the atmospheres of exoplanets from first principles, aid in-depth understanding of different processes, in the past as well as present Earth. Finally, he will show our approach to answer one of the most fundamental questions of humanity, Are we alone in this Universe?',
        media: {
            type: 'video',
            ref: '32621%%%J4kRIdGJUco'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Cornell Reaches New Heights: Building a Telescope at 18,400 Feet'
            },
            {
                type: 'presenter',
                value: 'Prof. Martha Haynes'
            },
            {
                type: 'date',
                value: 'December 11th, 2020'
            }
        ],
        desc: 'Cornell University is the major partner in an international collaboration establishing the CCAT Observatory at 5600 meters (18,400 feet) elevation on Cerro Chajnantor in the Atacama region of northern Chile that will host the Fred Young Submillimeter Telescope (FYST), named for Fred M. Young \'64, M.Engr. \'66, MBA \'66. The FYST will be a 6-meter diameter telescope designed to operate at submillimeter to millimeter wavelengths and capable of mapping the sky very rapidly and efficiently. This talk will give an overview of the observatory, the telescope and the forefront science to be done with it.',
        media: {
            type: 'photo',
            ref: '121120'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The New Science of Gravitational Wave Astronomy'
            },
            {
                type: 'presenter',
                value: 'Prof. Sean McWilliams'
            },
            {
                type: 'date',
                value: 'December 4th, 2020'
            }
        ],
        desc: 'Prof. McWilliams will discuss the recent history of the birth of this new field of observational astronomy that leverages gravitational waves, which are an extraordinary prediction of Einstein\'s theory that we are now regularly observing for the first time. He will highlight some of the most exciting discoveries that this field has made possible, and will describe our plans and hopes for the future of the field.',
        media: {
            type: 'photo',
            ref: '12420',
            attr: 'NASA'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Pulsars: Timekeepers of the Cosmos'
            },
            {
                type: 'presenter',
                value: 'Prof. Maura McLaughlin'
            },
            {
                type: 'date',
                value: 'November 20th, 2020'
            }
        ],
        media: {
            type: 'photo',
            ref: '112020',
            attr: 'NASA/GSFC'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Collisions of Black Holes and Neutron Stars'
            },
            {
                type: 'presenter',
                value: 'Prof. Zach Etienne'
            },
            {
                type: 'date',
                value: 'October 16th, 2020'
            }
        ],
        media: {
            type: 'video',
            ref: '101620%%%YG3vfEI_Loo'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'A Space-Based Physics Lab: Probing Neutron Star Physics & Gravitational Waves with Millisecond Pulsar Timing'
            },
            {
                type: 'presenter',
                value: 'Postdoctoral Fellow Thankful Cromartie'
            },
            {
                type: 'date',
                value: 'October 9th, 2020'
            }
        ],
        media: {
            type: 'video',
            ref: '10920%%%Mn_lIMv8KCM'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'How Do Galaxies Get Their Gas?'
            },
            {
                type: 'presenter',
                value: 'Prof. D.J. Pisano'
            },
            {
                type: 'date',
                value: 'October 2nd, 2020'
            }
        ],
        media: {
            type: 'video',
            ref: '10220%%%dFpkdy4J43Q'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Fast Radio Bursts: An Evolving Cosmic Mystery'
            },
            {
                type: 'presenter',
                value: 'Prof. Duncan Lorimer'
            },
            {
                type: 'date',
                value: 'September 18th, 2020'
            }
        ],
        desc: 'Fast Radio Bursts are millisecond-duration pulses of unknown origin that were discovered by an undergraduate student at West Virginia University in 2007. A decade on, with over 100 further bursts currently known, fast radio bursts remain enigmatic sources which parallel the early days of gamma-ray burst astronomy in the early 1970s. I will tell the story of their discovery, summarize what we know about them so far, describe the science opportunities these bursts present, and make predictions for what we might learn in the next decade.',
        media: {
            type: 'video',
            ref: '91820%%%9WqaUSiB76k'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'How to Search for Dark Matter'
            },
            {
                type: 'presenter',
                value: 'Andre Frankenthal'
            },
            {
                type: 'date',
                value: 'September 13th, 2019'
            }
        ],
        desc: 'What is dark matter? Despite decades of intense effort, we still have not found direct evidence for it, apart from its inferred gravitational presence. Dark matter constitutes about a quarter of the universe energy content and yet we have few clues about what it is made of. In this talk, Andre will describe the broad and active program currently underway to search for direct evidence of dark matter. This program encompasses diverse and complementary experimental techniques, theoretical models, and simulation paradigms. We are looking for dark matter everywhere: in the skies, in the laboratory, and on the planet – so far, with no luck. In this context, he will introduce his work in searching for dark matter using particle accelerators, which is part of a new front of theoretical and experimental efforts with potential to help us uncover this ever-growing mystery.',
        media: {
            type: 'photo',
            ref: '91319',
            attr: 'Tom Abel & Ralf Kaehler (KIPAC, SLAC), AMNH'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Search for a Second Earth'
            },
            {
                type: 'presenter',
                value: 'Dr. Siddharth Hegde'
            },
            {
                type: 'date',
                value: 'May 3rd, 2019'
            }
        ],
        desc: 'Are we alone? Or are there other worlds out there, like the Earth, that can support life? The field of exoplanet research has seen unprecedented progress over the last decade with over 3500 planets now been detected outside our Solar System. Further more, this number is expected to rise exponentially over the next few years with new and improved ground- and space-based telescopes set to take center-stage. Recent advances on this front suggest that small, Earth-sized, planets are abundant in our galaxy with many thought to lie in the host star\'s habitable zone where the conditions on the planet are optimal to have liquid water on the surface. This realization, coupled with the ongoing discovery of new organisms on Earth in environments previously thought to be inhospitable for life, suggests that extraterrestrial life could be far more commonplace than previously imagined. In this talk, Dr. Hegde will explore some of the methods that can be used in characterizing an Earth-like planet for potential habitability and life by providing a link between geomicrobiology and observational astronomy.',
        media: {
            type: 'photo',
            ref: '5319',
            attr: 'Jack Madden'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Exploring the New Frontiers of Gravitational Wave Astronomy'
            },
            {
                type: 'presenter',
                value: 'Prof. David Chernoff'
            },
            {
                type: 'date',
                value: 'April 26th, 2019'
            }
        ],
        desc: 'Gravitational waves were first directly observed in 2015 when LIGO and Virgo detected the inspiral and merger of two massive black holes. At least 8 more examples of merging black holes and 1 example of merging neutron stars have been recorded subsequently. These discoveries highlight the emergence of a new astronomical discipline, gravitational wave astronomy. The experimental confirmation of the existence of black holes, a unique prediction of Einstein\'s general theory of relativity, represents a home run for gravitational wave astronomy. We will review some of the history of the hunt for gravitational waves and speculate how the new discipline will help scientists explore new and otherwise inaccessible regimes of our Universe.',
        media: {
            type: 'photo',
            ref: '42619',
            attr: 'NSF'
        }
    },
    {
        attributes: [
            {
                type: 'yurititle',
                value: 'Seventh Annual Yuri\'s Night Lecture'
            },
            {
                type: 'presenter',
                value: 'Prof. Nikole Lewis'
            },
            {
                type: 'date',
                value: 'April 12th, 2019'
            }
        ],
        desc: 'In the past two decades we have seen rapid growth in our capabilities to detect and explore planets around other stars. Facilities like the Kepler, Spitzer, and Hubble Space Telescopes have revealed fascinating worlds that bear little resemblance to the planets in our solar system. Future facilities like the James Webb Space Telescope as well as space and ground based “life finder” missions will increase the fidelity with which we can explore these worlds along the path to answering the questions “How did we get here?” and “Are we alone?”.',
        media: {
            type: 'photo',
            ref: '41219'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Apollo 8: First Humans to Leave Earth, Was It a Big Gamble or a No-Brainer?'
            },
            {
                type: 'presenter',
                value: 'Dr. Peter Thomas'
            },
            {
                type: 'date',
                value: 'March 22nd, 2019'
            }
        ],
        desc: 'The talk will review some of the context and development of the Apollo 8 mission which was the first human visit to another world. As part of the “space race” the flight required decisions that in current context would be rash, and even then caused great concern.',
        media: {
            type: 'photo',
            ref: '32219'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Studying Star Formation In The Early Universe: An Infrared Perspective'
            },
            {
                type: 'presenter',
                value: 'Cody Lamarche'
            },
            {
                type: 'date',
                value: 'March 15th, 2019'
            }
        ],
        desc: 'Cody Lamarche will be talking about his work using fine-structure spectral lines in the far-infrared to investigate the properties of the early universe, including star formation, active galactic nuclei, and the interstellar medium.',
        media: {
            type: 'photo',
            ref: '31519',
            attr: 'Madau & Dickinson (2014)'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Searching for Intelligent Life in Cornell Classrooms and Beyond'
            },
            {
                type: 'presenter',
                value: 'Jack Madden'
            },
            {
                type: 'date',
                value: 'November 9th, 2018'
            }
        ],
        desc: 'Jack Madden will discuss several of his research projects using computer models to predict the habitability of exoplanets, as well as measure learning of students learning astronomy using virtual reality.',
        media: {
            type: 'photo',
            ref: '11918'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Cornell\'s Submillimeter/Millimeter Telescope CCAT-Prime: Unveiling the Secrets of the Early Universe and the History of Star and Galaxy Formation in the Universe'
            },
            {
                type: 'presenter',
                value: 'Dr. Thomas Nikola'
            },
            {
                type: 'date',
                value: 'May 11th, 2018'
            }
        ],
        desc: 'CCAT-Prime is a 6-meter class telescope for submillimeter and millimeter astronomical observations that is being built in northern Chile by an international collaboration under the leadership of Cornell. The telescope will be equipped with several instruments that employ the most advanced submillimeter and millimeter detector technology. The telescope will study the history of the early Universe, and Research Associate Thomas Nikola will present on the instruments that his team is developing, as well as the scientific motivation for building the telescope.',
        media: {
            type: 'photo',
            ref: '51118',
            attr: 'Dr. Thomas Nikola'
        }
    },
    {
        attributes: [
            {
                type: 'yurititle',
                value: 'Sixth Annual Yuri\'s Night Lecture: Interstellar Probes: How to Fly By Proxima Centauri in Your Lifetime'
            },
            {
                type: 'presenter',
                value: 'Dr. Mason Alan Peck'
            },
            {
                type: 'date',
                value: 'April 20th, 2018'
            }
        ],
        desc: 'Several Cornellians advise the Breakthrough Starshot project, an audacious attempt to fly a tiny probe--1 to 2 grams--to our nearest star. This demanding mission requires technologies that don\'t exist yet but which we hope will be in place in 20 years\' time, when we anticipate the probe will launch. If successful, this lightweight spacecraft will reach 20% light speed after a few minutes\' thrust from a high-power laser. Then, some 21 years after launch, it will fly past Proxima B and transmits a few bits of data back to Earth: spectral information from an image? Radiation measurements? Confirmation of the presence or absence of radio communications near the planet? This talk describes the technical challenges and speculates about other missions we could undertake if we had only 1% of the required capability, such as reaching Mars in a day and spanning our solar system in only 8 weeks.',
        media: {
            type: 'photo',
            ref: '42018'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Search for Life Begins at Home: Using Our Pale Blue Dot to Find Others'
            },
            {
                type: 'presenter',
                value: 'Dr. Jack O\'Malley-James'
            },
            {
                type: 'date',
                value: 'March 23rd, 2018'
            }
        ],
        desc: 'Astronomers have now found the first habitable rocky worlds around other stars – worlds that could have just the right temperatures to support life. So what happens next? To find out if these habitable worlds are inhabited, we need to know the global effects life can have on a planet, and crucially, which of those effects we could observe with our telescopes. We can gain some clues by looking at what life on Earth does today, but, so far, the planets we have found seem to have dramatically different environments compared to the modern day Earth. However, if we look millions, or even billions of years back through time, we start to find overlaps between conditions on these worlds and our own. The further back in time we look, the more alien our planet becomes. Strange environments, climates and weird forms of ancient life serve as perfect tools for figuring out many more of the unique “fingerprints” biology can leave behind on a planet for us to find. All of this takes us a step closer to finding extraterrestrial life – if it is there – on the un-Earth-like worlds around our nearest stars. In this talk Dr. O\'Malley-James will discuss how we do this, what we might find, and what the future has in store for our quest to find other Earths.',
        media: {
            type: 'photo',
            ref: '32318',
            attr: 'Dr. O\'Malley-James'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Black Holes on the Horizon: From Astronomy to Quantum Mechanics'
            },
            {
                type: 'presenter',
                value: 'Prof. Tom Hartman'
            },
            {
                type: 'date',
                value: 'December 1st, 2017'
            }
        ],
        desc: 'Black holes are the densest, darkest objects in the universe, and their motion powers the brightest galaxies in the sky. They also provide a theoretical window into nature at the tiniest subatomic distances, by pushing the extremes of quantum mechanics, particle physics, and gravitation. In this talk, Professor Hartman will describe how black holes set fundamental limits on physical laws, from the exotic realm of quantum gravity to the everyday experience of boiling water.',
        media: {
            type: 'photo',
            ref: '12117',
            attr: 'NASA'
        }
    },
    {
        attributes: [
            {
                type: 'specialtitle',
                value: 'A Century of Observing at Fuertes'
            },
            {
                type: 'presenter',
                value: 'Prof. Phil Nicholson'
            },
            {
                type: 'presenter',
                value: 'Mike Roman'
            },
            {
                type: 'date',
                value: 'November 17th, 2017'
            },
            {
                type: 'loc',
                value: 'Appel Service Center'
            }
        ],
        desc: 'For the hundredth anniversary of the Fuertes Professor Phil Nicholson and Alumnus Mike Roman will give a special lecture highlighting the observatory\'s history and its long term impact at Cornell.',
        media: {
            type: 'photo',
            ref: '111717'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Exploring the Origins of the Universe with the CCAT-prime Telescope'
            },
            {
                type: 'presenter',
                value: 'Prof. Martha Haynes'
            },
            {
                type: 'date',
                value: 'November 10th, 2017'
            }
        ],
        desc: 'The Universe as we know it began some 13.8 billion years ago in the event known as the "Big Bang". Cosmologists today use forefront telescopes, instruments and techniques to try to trace the history of cosmic expansion, especially in the earliest times before the first stars, galaxies and supermassive black holes formed. In this talk, she will discuss how Cornell scientists are laying the groundwork for exploring early epochs in cosmic history by building a novel-design submillimeter telescope at an exceptional site in the Atacama region of northern Chile.',
        media: {
            type: 'photo',
            ref: '111017',
            attr: 'ESA'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Saturn\'s System at the End of Cassini'
            },
            {
                type: 'presenter',
                value: 'Prof. Jonathan Lunine'
            },
            {
                type: 'date',
                value: 'October 27th, 2017'
            }
        ],
        desc: 'The Cassini spacecraft ended its 13 year odyssey in the Saturn system on September 15 with a fiery burnup in Saturn\'s atmosphere. What did Cassini discover during its time there, and especially what did it learn in the closing months of the mission? The answer is -- "an amazing amount", Professor Lunine will describe some of the highlights.',
        media: {
            type: 'photo',
            ref: '102717',
            attr: 'NASA'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Juno: Latest Results from Inside Jupiter'
            },
            {
                type: 'presenter',
                value: 'Prof. Jonathan Lunine'
            },
            {
                type: 'date',
                value: 'May 12th, 2017'
            }
        ],
        desc: 'Juno is the first solar-powered spacecraft to orbit and collect data at a giant planet. In orbit around Jupiter since July 2016, Juno has already begun to yield surprises about the solar system\'s largest planet. Prof. Lunine will describe why we want to explore Jupiter, what Juno is finding, and the unique challenges of observing with a spinning solar-powered spacecraft. ',
        media: {
            type: 'photo',
            ref: '51217',
            attr: 'NASA'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Ocean Worlds of the Outer Solar System: Life as we know it or life as we don\'t?'
            },
            {
                type: 'presenter',
                value: 'Prof. Alexander Hayes'
            },
            {
                type: 'date',
                value: 'April 28th, 2017'
            }
        ],
        desc: 'Solar System Exploration stands on the verge of profound discovery, with the opportunity to look for the signs of life in the Ocean Worlds of the outer solar system within the next few decades. We will review recent discoveries at Europa, Enceladus, and Titan to explain why these moons may represent the best places to look for life outside of Earth.',
        media: {
            type: 'photo',
            ref: '42817',
            attr: 'NASA'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Habitable Zone: Extensions in Time and Space'
            },
            {
                type: 'presenter',
                value: 'Dr. Ramses Ramirez'
            },
            {
                type: 'date',
                value: 'April 21st, 2017'
            }
        ],
        desc: 'The habitable zone is the circular region around a star in which liquid water could exist on the surface of a rocky planet. Previously established definitions of the habitable zone have adopted an Earth-centered approach, assuming that the main-sequence phase of stellar evolution, and the most common greenhouse gases on our planet - carbon dioxide and water vapor - are the established norms of habitability throughout the cosmos. Here, I argue that the Earth-centered approach can be causing us to overlook many potentially habitable planets on our target list. Not only can habitable worlds exist during other phases of stellar evolution, but other greenhouse gases, such as hydrogen, can significantly extend the width of the traditional habitable zone. I also discuss the potential habitability of Proxima Centauri b and the TRAPPIST-1 planets within the context of my new habitable zone definitions.',
        media: {
            type: 'photo',
            ref: '42117',
            attr: 'NASA'
        }
    },
    {
        attributes: [
            {
                type: 'yurititle',
                value: 'Fifth Annual Yuri\'s Night Lecture: "Thousands of New Worlds"'
            },
            {
                type: 'presenter',
                value: 'Dr. Lisa Kaltenegger'
            },
            {
                type: 'date',
                value: 'April 14th, 2017'
            }
        ],
        desc: 'The detection of exoplanets orbiting other stars has revolutionized our view of our place in the universe. First results suggest that it is teeming with a fascinating diversity of rocky planets including those in the Habitable Zone. The next generation of telescopes will be able to peer into the atmospheres of rocky planets and give us a glimpse into other worlds. Our own planet and its wide range of biota serves as a Rosetta stone for how we could detect habitability and signs of life on exoplanets. For the first time in human history we have developed the technology to detect potential habitable worlds.',
        media: {
            type: 'photo',
            ref: '41417',
            attr: 'NASA/JPL'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Our Search for Life Beyond the Solar System'
            },
            {
                type: 'presenter',
                value: 'Dr. Siddharth Hegde'
            },
            {
                type: 'date',
                value: 'March 24th, 2017'
            }
        ],
        desc: 'Are we alone? Or are there other worlds out there, like the Earth, that can support life? The field of exoplanet research has seen unprecedented progress over the last decade with over 3500 planets now been detected outside our Solar System. Further more, this number is expected to rise exponentially over the next few years with new and improved ground- and space-based telescopes set to take center-stage. Recent advances on this front suggest that small, Earth-sized, planets are abound in our galaxy with many of them thought to lie in the host star\'s habitable zone where the conditions on the planet are optimal to have liquid water on the surface. This realization, coupled with the ongoing discovery of new organisms on Earth in environments previously thought to be inhospitable for life, suggests that extraterrestrial life could be far more commonplace than previously imagined. In this talk, Dr. Hegde will explore some of the methods that can be used in characterizing an Earth-like planet for potential habitability and life by providing a link between geomicrobiology and observational astronomy.',
        media: {
            type: 'photo',
            ref: '32417',
            attr: 'Hegde/Max Planck Institute'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Fast Radio Bursts: Mysterious Flashes from the Distant Universe'
            },
            {
                type: 'presenter',
                value: 'Dr. Shami Chatterjee'
            },
            {
                type: 'date',
                value: 'March 17th, 2017'
            }
        ],
        desc: 'With recent strides in radio telescope sensitivity and computational capacity, astronomers have discovered “fast radio bursts”, dispersed millisecond-long flashes of radio waves that appear to come from random directions in the sky. Recently, we have caught one in the act and identified exactly where it came from, and the answer defies all expectations, because the source appears to be two and a half billion light years away. What mechanism could produce flashes so bright that they are detectable across the universe, and yet so common that there are five to ten thousand of these bursts all over the sky each and every day? Astronomers are in hot pursuit.',
        media: {
            type: 'photo',
            ref: '31717'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Search for Life in Extreme Exoplanetary Environments'
            },
            {
                type: 'presenter',
                value: 'Dr. Siddharth Hegde'
            },
            {
                type: 'date',
                value: 'December 2nd, 2016'
            }
        ],
        desc: 'Are we alone? Or are there other worlds out there that can support life? The field of exoplanet research has seen unprecedented progress over the last decade with over two thousand planets being detected outside our Solar System. Further more, this number is expected to rise exponentially over the next few years. Recent advances on this front suggest that small, Earth-mass, planets are abound in our galaxy with many of them thought to lie in the host star\'s habitable zone where the conditions on the planet are optimal to have liquid water on the surface. This realization, coupled with the ongoing discovery of new organisms on Earth in environments previously thought to be inhospitable for life, suggests that extraterrestrial life could be more common than previously thought. In this talk, Dr. Hegde will explore some of the methods that can be used in characterizing an Earth-like planet for potential habitability and life by providing a link between geomicrobiology and observational astronomy.',
        media: {
            type: 'photo',
            ref: '12216',
            attr: 'NASA'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'What Cassini Has Taught Us About Saturn\'s Rings'
            },
            {
                type: 'presenter',
                value: 'Prof. Phil Nicholson'
            },
            {
                type: 'date',
                value: 'November 11th, 2016'
            }
        ],
        desc: 'Due to its spectacular ring system, Saturn is probably the most iconic planet in the solar system, and is absolutely breathtaking when viewed through a modest sized telescope on a still night. Galileo first saw the planet and its rings through his small telescope in 1610, and described the planet as having "ears". As technology and our understanding of physics improved, Saturn\'s rings continued to perplex astronomers, and the system is still one of the most studied phenomena in the solar system. Launched in 1997, NASA\'s Cassini Spacecraft arrived at the Saturn system in 2004. Over the past decade, Cassini has returned a plethora of data on Saturn, its remarkable moons, and the spectacularly complex rings. On November 11th in the Fuertes Classroom, Professor Phil Nicholson will discuss many of the fascinating things that Cassini has discovered about the ring system, and how it has changed our understanding of how planetary ring systems form and evolve.',
        media: {
            type: 'photo',
            ref: '111116',
            attr: 'NASA'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Exoplanet Habitable Zones: An Overview of the "Goldilocks Zone"'
            },
            {
                type: 'presenter',
                value: 'Dr. Ramses Ramirez'
            },
            {
                type: 'date',
                value: 'November 4th, 2016'
            }
        ],
        desc: 'Over the past two decades, thousands of exoplanets (planets orbiting stars other than our Sun) have been discovered by ground-based telescopes and space-telescopes (most famously the Kepler Space Telescope). Better technology is allowing astronomers to detect smaller and more extreme exoplanets than ever before, and the diversity of the planets discovered thus far is astonishing. Some of the most exciting findings have been the discovery of several rocky, "Earth-like" planets in the Habitable ("Goldilocks") Zones of their parent stars (i.e. ability for liquid water to exist on the surface). On November 4th in the Fuertes Observatory Classroom, Dr. Ramirez from Cornell\'s Carl Sagan Institute will discuss many of the intriguing planets found in the Habitable Zone, how they are being studied, and the prospect of possibly finding alien life on a planet light years away from the Earth.',
        media: {
            type: 'photo',
            ref: '11416',
            attr: 'NASA'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Search for Life on Europa and Enceladus'
            },
            {
                type: 'presenter',
                value: 'Prof. Jonathan Lunine'
            },
            {
                type: 'date',
                value: 'April 29th, 2016'
            }
        ],
        desc: 'Professor Lunine is interested in how planets form and evolve, what processes maintain and establish habitability, and what kinds of exotic environments (methane lakes, etc.) might host a kind of chemistry sophisticated enough to be called "life". He pursues these interests through theoretical modeling and participation in spacecraft missions. He works with the radar and other instruments on Cassini, is co-investigator on the Juno mission launched in 2011 to Jupiter and on the near-infrared spectrometer under development for the Europa Multiple Flyby mission. He is on the science team for the James Webb Space Telescope, focusing on characterization of extrasolar planets and Kuiper Belt objects. Lunine is currently PI for a proposed mission to look for signs of life in Saturn\'s moon Enceladus, and has contributed to concept studies for a wide range of planetary and exoplanetary missions.',
        media: {
            type: 'photo',
            ref: '42916',
            attr: 'NASA'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'NASA\'s Cassini Spacecraft Views the Active Moon Enceladus'
            },
            {
                type: 'presenter',
                value: 'Dr. Paul Helfenstein'
            },
            {
                type: 'datetime',
                value: 'April 15th, 2016%7:30 PM'
            },
            {
                type: 'loc',
                value: 'Fuertes Observatory'
            }
        ],
        desc: 'Join us in the Fuertes Observatory classroom at 7:30pm this Friday for a lecture by Dr. Paul Helfenstein titled NASA\'s Cassini Spacecraft Views the Active Moon Enceladus. NASA\'s Cassini spacecraft has been in orbit around Saturn since 2004, and has taken astonishing images of the Saturnian system; many scientific discoveries have been made by the orbiter. Dr. Helfenstein is a member of the Cassini Imaging Science Subsystem (ISS) Team, and will present a review of Cassini imaging camera results that show the unique geology and geyser activity on Enceladus. Enceladus likely has a liquid water ocean beneath its icy surface, and is therefore one of the best candidates to find alien life in the Solar System.',
        media: {
            type: 'photo',
            ref: '41516',
            attr: 'NASA/JPL'
        }
    },
    {
        attributes: [
            {
                type: 'yurititle',
                value: 'Fourth Annual Yuri\'s Night Lecture: "Alien Ocean: New Paths to Europa"'
            },
            {
                type: 'presenter',
                value: 'Prof. Mason Peck'
            },
            {
                type: 'date',
                value: 'April 8th, 2016'
            }
        ],
        desc: 'Join us for our fourth annual Yuri\'s Night Event at 7:30pm at Fuertes, celebrating human spaceflight and space exploration. The event\'s talk will be given by Professor Mason Peck, former Chief Technologist at NASA. Where would you send a probe to search for life in the solar system? Probably somewhere with a warm water ocean. It turns out that Earth is not the only such place. There\'s Europa, Jupiter\'s icy moon that has more than double Earth\'s water. This talk will describe NASA\'s plans for a robotic Europa mission, which will conduct detailed reconnaissance during a number of close flybys in the 2020s to determine whether or not the conditions there are suitable for life as we understand it. It will use ice-penetrating radar and magnetometers to understand the depth and salinity of the ocean. And it will look at the heat signatures from plumes erupting from the surface, if they can be found. We\'ll also talk about some more speculative mission concepts, some of which are being developed at Cornell: among them, a soft robotic rover that could slither through the ice and jet around underwater like a squid, and a soda-bottle-size spacecraft carrying aluminum nanoparticles that would explosively react with ice and water on impact, creating a plume to be analyzed by a satellite overhead.',
        media: {
            type: 'photo',
            ref: '4816',
            attr: 'Cornell/NASA'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Ancient Astronomy in Scotland and Brittany'
            },
            {
                type: 'presenter',
                value: 'Prof. Phil Nicholson'
            },
            {
                type: 'date',
                value: 'March 18th, 2016'
            }
        ],
        desc: 'Professor Phil Nicholson researches the orbital dynamics of planetary ring systems and natural satellites, as well as infrared observational studies of planets, their satellites, and their rings. He is the editor-in-chief of the planetary science journal, Icarus, and has served on the Committees on Planetary and Lunar Exploration and on Astronomy and Astrophysics of the National Research Council, time assignment committees for the Kuiper Airborne Observatory and Hubble Space Telescope, and scientific advisory committees for Arecibo and IPAC. Professor Nicholson is very interested in the history of astronomy, and how the people of ancient world used tools to understand the universe around them. On Friday, March 18th, he will discuss the history of Bronze Age astronomy in the Celtic World.',
        media: {
            type: 'photo',
            ref: '31816',
            attr: 'Wikipedia/CC 4.0-BY-SA'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Whirlpool, The Cartwheel and the Mice: The Intriguing Lives of Galaxies'
            },
            {
                type: 'presenter',
                value: 'Prof. Martha Haynes'
            },
            {
                type: 'date',
                value: 'March 11th, 2016'
            }
        ],
        desc: 'Galaxies come in a remarkable variety of shapes and sizes; some are red and some are blue. Exotic names describe some of them: the "Cigar"; the "Black-Eye"; the "Antennae". Additionally, while some galaxies inhabit the rich clusters of galaxies and have many thousands of neighbors, others exist in virtual isolation. During the course of their lifetimes, galaxies in such different environments are subjected to very a variety of interactions with their surroundings, sometimes triggering episodes of furious star formation or feeding their voracious central supermassive black holes. In this talk, we will discuss what the appearance of galaxies today can teach us about "extragalactic sociology": how their lives are affected by their environments.',
        media: {
            type: 'photo',
            ref: '31116',
            attr: 'NASA'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Extreme Planetary Systems'
            },
            {
                type: 'presenter',
                value: 'Prof. Dong Lai'
            },
            {
                type: 'date',
                value: 'March 4th, 2016'
            },
            {
                type: 'loc',
                value: 'Fuertes Observatory'
            }
        ],
        desc: 'Professor Dong Lai joined the Cornell Astronomy faculty in the Fall of 1997 after three years as apostdoctoral fellow at Caltech. He has held visiting positions atthe Kavli Institute for Theoretical Physics, Institute for Advanced Study, Canadian Institute for Theoretical Astrophysics, National Astronomical Observatory of China, etc. On Friday, March 4th, he discussed "Extreme Planetary Systems" at Fuertes. Observations over the last decade have revealed exoplanetary systems that are completely different from our own Solar System. These extreme planetary systems are changing our view of planetary formation. Professor Lai focused on hot Jupiters, giant planets in close orbits around their host stars (period about 5 days). He also discussed planets around binary stars (\'Tatooine\').',
        media: {
            type: 'photo',
            ref: '3416',
            attr: 'NASA'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Pluto Wars: The Return of Planet X'
            },
            {
                type: 'presenter',
                value: 'Art Samplaski'
            },
            {
                type: 'datetime',
                value: 'February 26th, 2016%7:30 PM'
            },
        ],
        desc: 'Join us for a talk on the New Horizons mission to Pluto and the recently hypothesized "Planet Nine". The talk will be given by Art Samplaski, Fuertes Observatory outreach volunteer, in the observatory classroom. In the nearly 10 years since the IAU demoted Pluto (once called "Planet X") to "dwarf planet," resistance has lingered against what many feel was a badly-worded definition. And once the New Horizons probe showed Pluto to be as complex and dynamic a world as any other, the debate has only intensified. Now in the last few weeks there is evidence that there may be a Neptune-sized "Planet Nine" out in the solar system\'s dark fringes. Join us as we look at the backstory and current state of a saga of discovery more spectacular than any Lucas/Spielberg extravangaza... because it\'s real!',
        media: {
            type: 'photo',
            ref: '22616',
            attr: 'NASA'
        }
    },
    {
        attributes: [
            {
                type: 'yurititle',
                value: 'Third Annual Yuri\'s Night Celebration'
            },
            {
                type: 'presenter',
                value: 'Prof. Lisa Kaltenegger'
            },
            {
                type: 'datetime',
                value: 'April 10th, 2015%7:30 PM'
            },
        ],
        desc: 'All are welcome to come celebrate human spaceflight and space exploration at Fuertes Observatory! To commemorate Yuri Gagarin\'s spaceflight, the Cornell Astronomical Society is hosting a lecture form Dr. Lisa Kaltenegger (Cornell Professor of Astronomy and Director of the Institute for Pale Blue Dots), rocket launches from CU Rocketry, space food, astronomical observing, and more! All ages welcome.',
        media: {
            type: 'photo',
            ref: '41015'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Public Lecture on Astrophysics'
            },
            {
                type: 'presenter',
                value: 'Prof. Dan Weedman'
            },
            {
                type: 'datetime',
                value: 'March 27th, 2015%7:30 PM'
            },
        ],
        desc: 'Professor Dan Weedman will be giving a public lecture on astrophysics at the Fuertes Observatory! He will discuss observational discoveries about the most distant galaxies and quasars. How they formed in the early universe is one of the biggest mysteries in astrophysics.'
    },
    {
        attributes: [
            {
                type: 'yurititle',
                value: 'Second Annual Yuri\'s Night Celebration'
            },
            {
                type: 'presenter',
                value: 'Prof. Jean Hunter'
            },
            {
                type: 'presenter',
                value: 'Prof. Mason Peck'
            },
            {
                type: 'datetime',
                value: 'April 11th, 2014%7:30 PM'
            },
        ],
        desc: 'Come celebrate human spaceflight at Fuertes Observatory! It will be an evening of space food, expert lectures, shuttle simulation, museum tours, and astronomical observing! Professor Jean Hunter of Cornell University will give a short talk on her work creating better food for astronauts and demonstrate a water recycling process used in space. Professor Mason Peck of Cornell University (formerly Chief Technologist for NASA) will discuss human exploration of asteroids.',
        media: {
            type: 'photo',
            ref: '41114'
        }
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Robotic Exploration'
            },
            {
                type: 'datetime',
                value: 'March 21st, 2014%7:30 PM'
            },
            {
                type: 'presenter',
                value: 'Kevin Kruempelstaedter'
            }
        ],
        desc: 'CAS member Kevin Kruempelstaedter, a mechanical engineering student, is presenting a lecture on autonomous space exploration! The lecture will be about robots and their role in the exploration of Mars, focusing more specifically on the Mars rovers and landers and the challenges they face.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Europa, the Oceanic World'
            },
            {
                type: 'datetime',
                value: 'February 28th, 2014%7:30 PM'
            },
            {
                type: 'presenter',
                value: 'Adrian Poniatowski'
            }
        ],
        desc: 'The recent blast of chilly weather befits a lecture on a distant icy world orbiting Jupiter. Ever since its discovery four hundred years ago, Europa and the Galilean moons of Jupiter have provided us with invaluable insights into the mechanics of our solar system, moon systems, planetary geology, and geomagnetic effects. Recent discoveries have focused on the thrilling possibility of finding life in a liquid ocean theorized to exist under the icy crust of Europa. This lecture will be an general survey of the knowledge gathered to-date on the moon, primarily from the Galileo mission, with a special emphasis on discussing Europa\'s ocean and future missions to the moon.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Uncle Carl Wants YOU to Participate in Citizen Astronomy Projects!'
            },
            {
                type: 'datetime',
                value: 'February 7th, 2014%7:30 PM'
            },
            {
                type: 'presenter',
                value: 'Art Samplaski'
            }
        ],
        desc: 'Thanks to the Internet and dirt-cheap computing, we are living in a Golden Age(TM) for citizen science. Multiple crowdsourcing websites allow everyday people around the world to help specialists analyze datasets that would overwhelm any supercomputer, with no special training or advanced degree needed. Not only are there astronomy projects, but also ones on nature/climate studies, medicine, and the humanities. In some instances, such as the galaxy-sized gas cloud "Hanny\'s Voorwerp," significant discoveries have been made by average people! Join us as we explore some of the ways ordinary folks can make valuable contributions to science while having fun and, in many cases, seeing amazing images. (Not to mention being a MUCH more productive way to waste time than playing more "Angry Birds!"'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The History of Fuertes Observatory'
            },
            {
                type: 'datetime',
                value: 'November 8th, 2013%8:00 PM'
            },
            {
                type: 'presenter',
                value: 'Prof. Phil Nicholson'
            }
        ],
        desc: 'The Fuertes Observatory is the second-last of a long line of astronomical observatories at Cornell, and by far the longest-lived, having been completed almost 100 years ago. Prof. Nicholson will review the early history of astronomy at Cornell, culminating in the construction of Fuertes in 1917 and the installation of the 12-inch refractor in 1922. We will also look briefly at the history and construction of the 24-inch reflector at the Hartung-Boothroyd Observatory, located on Mt Pleasant about 5 miles from the Cornell campus.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Asteroid Mining and Planetary Resources'
            },
            {
                type: 'datetime',
                value: 'November 1st, 2013%7:30 PM'
            },
            {
                type: 'presenter',
                value: 'Yoni Saltzman'
            }
        ],
        desc: 'In April of 2012 a company named Planetary Resources unveiled itself to the world and in one fell swoop asteroid mining jumped from the pages of science fiction into the world of science fact. Yoni Saltzman, a Senior Independent Major in the College of Engineering with a primary focus in Mechanical Engineering and a secondary focus in Astronomy, will speak about his experiences working at Planetary Resources during the Summer of 2013. The talk will give an overview of the driving forces and technologies behind asteroid mining as well as the economic feasibility of plans that were once considered pure fiction.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Voyager 1, Humanity\'s First Baby Step into the Galaxy'
            },
            {
                type: 'datetime',
                value: 'September 27th, 2013%7:30 PM'
            },
            {
                type: 'presenter',
                value: 'Art Samplaski'
            }
        ],
        desc: 'On Sept. 12, 2013, NASA announced that new data analysis showed the spacecraft Voyager 1, launched 36 years and 1 week earlier, had crossed the boundary into interstellar space just over a year earlier. News about a decades-old space probe may not seem as emotionally direct and dramatic as the Apollo 11 landing; but Voyager\'s achievement is as important a moment in the history of humanity as Neil Armstrong\'s "That\'s one small step." For the first time ever, a human-made object has left the solar system; only a handful of events in the history of exploration are as significant. Come join us for a look at the history of Project Voyager, the discoveries it and its twin have made, how we determined that it had crossed the frontier, and connections to other exploration milestones.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'ET Phones Home?: Atrobiological Thoughts'
            },
            {
                type: 'date',
                value: 'May 3rd, 2013'
            },
            {
                type: 'presenter',
                value: 'Adrian Poniatowski'
            }
        ],
        desc: 'CAS President Adrian Poniatowski will be giving a lecture on the possibility of extraterrestrial life, reasonable considerations one can make about such beings, recently discovered exoplanets that could be host to ET, and finally ending with a debate about the philosophical implications of our place in the Universe, be it teeming with civilized life or devoid of it.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Impact!'
            },
            {
                type: 'date',
                value: 'April 26th, 2013'
            },
            {
                type: 'presenter',
                value: 'Brecken Blackburn'
            }
        ],
        desc: 'CAS member Brecken Blackburn will be giving a lecture this week on asteroid impacts, a perennial favorite of science fiction novels and apocalyptic prophecies alike. But how much do we know about these silent killers? She will be talking about what asteroids actually are, how they have shaped Earth\'s development, and the technologies that could find and protect us from death from the skies.'
    },
    {
        attributes: [
            {
                type: 'yurititle',
                value: 'First Annual Yuri\'s Night Celebration: The Development of Rocket Technology'
            },
            {
                type: 'date',
                value: 'April 12th, 2013'
            },
            {
                type: 'presenter',
                value: 'Don Barry'
            }
        ],
        desc: 'Don Barry, an astronomer working and teaching here at Cornell and a frequent visitor to Fuertes, will be giving a historical overview of the development of rocket technology as a whole, starting with Tsiolkovsky and Goddard, focusing some detail on the 1950s and 1960s, and in particular discussing citizen participation in that early period, when hundreds of people were involved in amateur observations to help in the determination of orbits of those first spacecraft.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Observations on Literature & the Night Sky from a Late-Blooming Star-Geezer'
            },
            {
                type: 'date',
                value: 'April 5th, 2013'
            },
            {
                type: 'presenter',
                value: 'Wallace Watson'
            }
        ],
        desc: 'Wallace Watson, a CAS member and retired English professor and dean (Duquesne University, Pittsburgh PA,) will discuss, and show examples of, astronomical references in European and American literature, as well as his own recent ventures into amateur astronomy.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'This is NOT Your Parents\' Solar System...'
            },
            {
                type: 'date',
                value: 'February 22nd, 2013'
            },
            {
                type: 'presenter',
                value: 'Art Samplaski'
            }
        ],
        desc: 'Dwarf planets, Kuiper Belt Objects, chaotic orbits, the Crater of Doom, and now hot Jupiters around other stars... Many people long for the Good Old Days(TM) when the solar system was simple: nine planets going around the Sun like clockwork, and just a few comets and asteroi-DUCK! being untidy. Well, how about the REALLY Good Old Days, when there were only seven movable things and a bunch of stars all going around the Earth? The history of planetary astronomy reflects the scientific process: as we get new data, we have to revise how we think about things--and our place in the universe. Join us for a tour of how we learned about the solar system, why the last 50 years has truly been the Golden Age of planetary science, and a bit about current research. As a lab practical (assuming the cloud gods permit us!), we\'ll observe a few of the planets and asteroids currently visible.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Into Darkness'
            },
            {
                type: 'date',
                value: 'February 1st, 2013'
            },
            {
                type: 'presenter',
                value: 'Michael Hammer'
            }
        ],
        desc: 'Most of the universe is invisible, almost literally. All of the cloudy nights we have in Ithaca that prevent us from seeing the night sky do not compare to the impossibility of trying to see dark matter with your eyes, a telescope, a microscope, or any other type of scope instrument. Dark matter is not hiding. It makes up over 75% of the mass in the universe and yet we cannot see it. I will talk about what dark matter is, why we think so much dark matter exists, why it is impossible to "see," and the new state-of-the-art attempts to detect dark matter --- something that could happen possibly even in the next few years.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Spectrometry - Reading the Lines'
            },
            {
                type: 'date',
                value: 'November 16th, 2012'
            },
            {
                type: 'presenter',
                value: 'Noah Warnke'
            }
        ],
        desc: 'One of the most important scientific techniques for modern astronomy, spectrometry involves pulling apart light into its constituent rainbow and measuring the relative amounts of each wavelength ("color"). This measurement reveals a surprisingly large amount of information about the object and conditions that created the light, and about the medium that the light traveled through before reaching the instrument. There are numerous methods used for spectrometry, and numerous important findings resulting from it, including the expansion (and acceleration) of the universe, the chemical composition of stars and nebulae, discovery of new elements, characterization of planetary atmospheres, discovery of exoplanets, geology on Mars - the list goes on and on! In this lecture, we will look at the basics of light and the spectrum, at various techniques for measuring it, and at some of the more interesting pieces of information that can be obtained with spectrometric techniques.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'A Journey Through the Solar System'
            },
            {
                type: 'date',
                value: 'November 9th, 2012'
            },
            {
                type: 'presenter',
                value: 'Rick Kline'
            }
        ],
        desc: 'Rick Kline, Data Manager for the Cornell Spacecraft Planetary Imaging Facility, will take us on a spectacular journey through the solar system for this week\'s lecture. Kline has been flying the solar system for 25 years, and is well versed in the unfolding science of robotic planetary exploration. In a presentation of stunning images returned from spacecraft, Kline will share his extensive knowledge of robotic spacecraft missions to neighboring planets and entertain the whole family with images of our Sun, the planets, moons, asteroids, comets, and other celestial objects that share the solar system with Earth.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Thirty Days Hath... Um, Er, Ahh...'
            },
            {
                type: 'date',
                value: 'October 26th, 2012'
            },
            {
                type: 'presenter',
                value: 'Art Samplaski'
            }
        ],
        desc: 'If you think trying remember the day of your mother-in-law\'s birthday is bad, you haven\'t even scratched the surface yet: Gregorian Calendar, Julian Date, Lunar Synodic Calendar, O.S. vs. N.S., Precession of the Equinoxes/Earth\'s Orbit... (never mind the impending destruction of Earth this coming December 21st by the rogue planet Nibiru--NOT!)'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Saturn\'s Giant Moon Titan'
            },
            {
                type: 'date',
                value: 'September 28th, 2012'
            },
            {
                type: 'presenter',
                value: 'Noah Warnke'
            }
        ],
        desc: 'The planets of the Solar System collectively have hundreds of moons orbiting them. Only one of these moons has any significant atmosphere, and that moon will be the subject of this lecture. Titan has had a very long observational history, but its extreme distance from Earth and ever-present blanket of opaque haze have presented serious obstacles to its study. Only in the last decade have we really started to understand this enigmatic body. We have found that Titan represents, in several important ways, the most Earthlike environment in the Solar System after the Earth itself. These similarities, along with some striking differences, will be examined in this lecture.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Celestial Navigation'
            },
            {
                type: 'date',
                value: 'September 21st, 2012'
            },
            {
                type: 'presenter',
                value: 'Adrian Poniatowski'
            }
        ],
        desc: 'The art and science of navigation by the stars holds an ancient and hallowed place in the human story. From time immemorial, the stone age explorers used the stars to propagate the human race throughout all the world. But even today, celestial navigation serves nautical, aeronautical, and terrestrial navigation in a host of essential ways that testify to the enduring relevance and utility of the subject. We will talk about the history and theory of celestial navigation, as well as the role Fuertes Observatory played in contributing to the subject.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Hidden Ocean of Europa'
            },
            {
                type: 'date',
                value: 'September 14th, 2012'
            },
            {
                type: 'presenter',
                value: 'Bob Pappalardo'
            }
        ],
        desc: 'Jupiter\'s moon Europa may be a habitable world. Galileo spacecraft data suggest that an ocean lurks beneath its frozen ice surface. A paucity of large craters argues for a young surface and recent geological activity, and magnetometry confirms that a salty ocean persists today. Europa\'s ocean and surface are inherently linked. Tidal deformation of the floating ice shell generates stresses that fracture and deform the surface to create ridges and bands. Dark spots, domes, and chaos are probably related to tidally driven ice convection and partial melting. Europa\'s activity may permit the "ingredients" necessary for life to be present within the satellite\'s ocean. Astonishing geology and high astrobiological potential make Europa a top priority for future spacecraft exploration.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Earth\'s Habitability'
            },
            {
                type: 'date',
                value: 'April 27th, 2012'
            },
            {
                type: 'presenter',
                value: 'Michael Hammer'
            }
        ],
        desc: 'To this day, the Earth is the only place we know in the universe that can definitively support life. Right now, we are looking for other planets that could potentially harbor life, but how hard are they to find? The Earth possesses a unique combination of characteristics that any one planet or moon in the rest of the galaxy might never be able to reproduce exactly, yet it is these characteristics that have helped create the diverse biosphere which defines the planet. While we may never find an exact copy of our home planet, we can study what we know about the Earth as well as the rest of the solar system and apply that knowledge to finding other habitable worlds and redefining what it means for a world to be habitable.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Really, Really, Really, Really, Really, Really, __REALLY__ Big Picture'
            },
            {
                type: 'date',
                value: 'March 9th, 2012'
            },
            {
                type: 'presenter',
                value: 'Art Samplaski'
            }
        ],
        desc: 'The scale of distances in astronomy is beyond anything in everyday human experience. Also, since we are quite literally stuck in one spot, how can we possibly determine the distance to nebulae and galaxies? In this talk, we will try to put a personal spin, however inadequate, on the first; and we will also see the variety of methods astronomers have used to get estimates of ever greater distances through the universe. If you have ever timed yourself to run 100 meters, or can stop by the Sagan Memorial Planetwalk on the Ithaca Commons and time how long it takes you to walk from the Sun pillar to the Earth pillar, we can plug the numbers into a calculator to show just how long it would take -YOU- to get to various places in the immediate universe! :) In any case, whether you want to do some SERIOUS long-distance running yourself or just watch others try, please join us!'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Death of Stars'
            },
            {
                type: 'date',
                value: 'February 10th, 2012'
            },
            {
                type: 'presenter',
                value: 'Bryan Scherrer'
            }
        ],
        desc: 'Last semester, CAS learned of the full-bodied fury of nuclear fusion, of what it really means to be a star. This semester, we go beyond that, to the ends of a star\'s lifetime. Some results are boring. The least massive stars may live 100 billion years, but go out with little more than a whimper. In contrast, he most massive stars live a scant million years and die in the most colossally destructive events in the known universe. Come learn about these two extremes and everything in between, as well as what happens after the death of stars.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Transits and Eclipses: Planetary Peekaboos'
            },
            {
                type: 'date',
                value: 'February 3rd, 2012'
            },
            {
                type: 'presenter',
                value: 'Art Samplaski'
            }
        ],
        desc: 'This is a VERY good year for things getting in front of the Sun. The Moon will twice eclipse the Sun: 1st, on May 20 or 21 (depending where you live) an annular eclipse, visible across the northern Pacific basin, including western North America; then, on Nov. 13 or 14, a total eclipse (northern Australia will be the only landfall). And on June 5 or 6, the planet Venus will pass also in front of the Sun: a transit, also visible across the Pacific (although part of it will be visible from North America)--and the last one until 2117(!). In this talk we will look at the geometry that differentiates the three, the historical importance of transits for determining the size of our solar system, and how they are now used to discover an amazing variety of planets in other star systems. Please join us!'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Titan & Enceladus'
            },
            {
                type: 'date',
                value: 'November 18th, 2011'
            },
            {
                type: 'presenter',
                value: 'Michael Hammer'
            }
        ],
        desc: 'Saturn has long captivated people with its vast ring system, but also in orbit are 62 moons of various different shapes and sizes. Towards the end of the last century, NASA launched the Cassini-Huygens mission to study Saturn and some of its larger moons in depth. In the 7 years it has been orbit, Cassini has made some shocking discoveries, most notably on Titan—the 2nd largest moon in the solar system, and on Enceladus—the most reflective object in the solar system. Join me this Friday, as we\'ll explore these exciting new discoveries and the features of these moons that make them surprisingly resemble Earth itself.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Space Suits: What Keeps You Alive While Hurtling Through Space'
            },
            {
                type: 'date',
                value: 'November 11th, 2011'
            },
            {
                type: 'presenter',
                value: 'Daniel Rocio'
            }
        ],
        desc: 'Space suits have been seen as a symbol of the manned space program, though they have not always had their famous backpack and round helmet design, nor will they always. There are also many considerations that go into the design that give the space suit its iconic appearance including breathability and temperature. But what are the issues when you try to give somebody a portable atmosphere? Come, learn and find out.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Music of the Spheres and other Ancient and Early Medieval conceptions of Celestial Harmony'
            },
            {
                type: 'date',
                value: 'November 4th, 2011'
            },
            {
                type: 'presenter',
                value: 'Lorraine Fitzmaurice'
            }
        ],
        desc: ' Most people have heard the phrase \'the music of the spheres\' at some point, whether with regard to a vague sense of order and beauty of the cosmos or pieces of music based upon such a concept like Holst\'s Suite The Planets. But what does the phrase actually mean, and where does it come from? What does music have to do with math and astronomy? Join me as we dig through Medieval manuscripts to find out this Friday at Fuertes Observatory.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Los Alamos National Laboratory in Space'
            },
            {
                type: 'date',
                value: 'October 28th, 2011'
            },
            {
                type: 'presenter',
                value: 'Erik Edelmann'
            }
        ],
        desc: 'This lecture will be about Los Alamos National Laboratory\'s contribution to the space program. They have assisted in many NASA projects (usually for power systems) and have had their own projects, usually based on satellite systems and construction.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'SOFIA - NASA\'s Stratospheric Observatory For Infrared Astronomy'
            },
            {
                type: 'date',
                value: 'October 14th, 2011'
            },
            {
                type: 'presenter',
                value: 'Yoni Saltzman'
            }
        ],
        desc: 'For centuries, astronomers have relied on ground-based telescopes to view the universe. However, over the last two decades, space-based telescopes have helped to propel science to amazing new heights (literally). Yet space-based telescopes are enormously expensive and extremely hard to service. Over the last 18 months, the gap between ground-based and space-based telescopes has been bridged by NASA\'s new airborne Stratospheric Observatory. Inside this modified 747 is a 2.5 meter telescope that has already made an uncountable number of amazing discoveries. Come learn everything imaginable about one of astronomy\'s newest and greatest telescopes. Meet a student researcher who worked at NASA and flew on SOFIA this past summer. View never-before-seen images of the interior of the SOFIA aircraft and ask questions regarding astronomical research that has only recently been available to the general public.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Exoplanets - Highlights from the Frontier of Detectability'
            },
            {
                type: 'date',
                value: 'September 30th, 2011'
            },
            {
                type: 'presenter',
                value: 'Everett Schlawin'
            }
        ],
        desc: 'While we have long pondered the existence of extrasolar planets, astronomers only had the instruments and survey sizes to begin finding them beginning in the early 1990s. Since this time, the newest exoplanet finds have appeared in abundance behind an envelope set by instrument precision. The rapid progression of this curtain has unveiled hundreds of exoplanets in the last decade from highly eccentric Jovian planets to tidally stretched planets to super Earths to planets in the habitable zones of their host stars. This talk highlights some of the newest results on exoplanet finds and exoplanet atmospheres that have been uncovered mostly correctly and sometimes incorrectly at the frontier.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Stellar Evolution - the birth and life of a star'
            },
            {
                type: 'date',
                value: 'September 23rd, 2011'
            },
            {
                type: 'presenter',
                value: 'Bryan Scherrer'
            }
        ],
        desc: 'Much is said in popular culture about the deaths of stars. Black holes are popular (and extremely misunderstood) standards in modern culture. But what about what happened before the black hole? What of the innumerable stars that don\'t even have the chance of becoming black hole? Those are the times that are truly fascinating. Join us at Fuertes Observatory to learn about the lives of the stars.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Neptune Then and Now'
            },
            {
                type: 'date',
                value: 'September 16th, 2011'
            },
            {
                type: 'presenter',
                value: 'Art Samplaski'
            }
        ],
        desc: 'The planet Neptune is unique among solar system objects in that it was discovered by means of mathematics (and some luck...:). Discrepancies in the position of the planet Uranus led to a calculated orbit for another planet that was perturbing it, and Neptune was observed on Sept. 23, 1846, within one degree of the predicted position. On July 12, 2011, Neptune finally completed one orbit around the Sun since its discovery. To mark the occasion, in this talk we\'ll look at the story of its discovery and what has been learned about it through Voyager 2\'s 1989 flyby and observations from the Hubble Telescope.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Chinese Astronomy Part II – The Modern Chinese Space Program'
            },
            {
                type: 'date',
                value: 'September 9th, 2011'
            },
            {
                type: 'presenter',
                value: 'Hua Liu'
            }
        ],
        desc: 'China\'s meteoric rise into the ranks of the world\'s most advanced nations comes hand in hand with its desire to break the confines of the atmosphere and venture into the final frontier. A latecomer to the space club dominated by more senior organizations like NASA, the Chinese National Space Administration had to expand quickly as not to get sidelined, while constantly adapting to a changing political climate. Join us for Part II of "Chinese Astronomy" as we tour the Modern Chinese Space Program: from its humble and controversial beginnings, to the modern entity that reflects Chinese technological and economical might.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Stellar Distances'
            },
            {
                type: 'date',
                value: 'April 23rd, 2010'
            },
            {
                type: 'presenter',
                value: 'Bryan Scherrer'
            }
        ],
        desc: 'Distance across planet Earth is a simple thing. The most crude measurement, simply traveling the distance, is an accurate way to measure the space between two points. How is this done across spacetime? Come and learn about the various trigonometric methods used to define distance across space, and the full spectrum of tools astronomers use to measure distances in the universe.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Dark Matter'
            },
            {
                type: 'date',
                value: 'April 16th, 2010'
            },
            {
                type: 'presenter',
                value: 'Stephen Demjanenko'
            }
        ],
        desc: 'Several astronomical observations suggest that there is a large amount of unseen (Dark) matter in our universe. Several theories have been developed to account of this extra matter and tests are underway to try and detect it here on Earth. This lecture will discuss the need for dark matter as well as what it could possibly be. Recent results from several experiments will be presented.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Radio Astronomy: History and Applications'
            },
            {
                type: 'date',
                value: 'April 9th, 2010'
            },
            {
                type: 'presenter',
                value: 'Russell Reinhart'
            }
        ]
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Astronomy and the Origin of Life'
            },
            {
                type: 'date',
                value: 'March 12th, 2010'
            },
            {
                type: 'presenter',
                value: 'Hua Liu'
            }
        ],
        desc: 'The origin of life has always been a topic of much controversy, and many hypotheses were made regarding the first formation of life on the primordial earth. This lecture seeks to explore how prevailing theories try to rationalize the origin of life, and the role celestial objects played within these mechanistical explanations - from the hypothesis relating to the formation of the first organic compounds, to the very first coming of life itself.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Life on Mars: Adventures at the Mars Desert Research Station'
            },
            {
                type: 'date',
                value: 'March 5th, 2010'
            },
            {
                type: 'presenter',
                value: 'Mary Beth Wilhelm'
            }
        ],
        desc: 'Come find out what life is like at simulated Martian Habitat! Wilhelm will discuss her adventures at the Mars Desert Research Station in the southeastern Utah desert this winter: battling failing generators, freezing temperatures, hunting for extreme microorganisms, and launching areal mapping blimps...all while staying \'in simulation.\''
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Other Astronomers'
            },
            {
                type: 'date',
                value: 'February 26th, 2010'
            },
            {
                type: 'presenter',
                value: 'Kim-Yen Nguyen'
            },
            {
                type: 'presenter',
                value: 'Ashlee Wilkins'
            }
        ],
        desc: 'Astronomy is not limited to the Mars rovers and black holes and dark energy you see on the news. Most astronomers spend their entire careers pursuing other cosmological questions that often do not make the local headlines but that are no less instrumental to understanding the universe. Addressing topics from the Paradox of Youth to cosmic strings, every question astronomers seek to answer is one more step towards unraveling the deepest secrets of the universe. In a tribute to the everyday astronomer, we will provide a brief survey of current research in astronomy that is just as interesting as microscopic black holes in particle colliders. To all the Albert Einstein- and Carl Sagan-esque stars of astronomy, we salute you for your incomparable genius. But to all the other astronomers: we salute you, too, for your own brilliance in the work you do every day.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Physics of Star Trek'
            },
            {
                type: 'date',
                value: 'February 19th, 2010'
            },
            {
                type: 'presenter',
                value: 'Lisa Bacis'
            }
        ],
        desc: 'Have you ever wondered where you go when Scotty beams you up, what really happens at warp speed, or why the Enterprise needs those dilithium crystals? Well, all that and more will be answered as we take you on a journey through space and time and boldly go where no Cornellian has gone before.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Messieur Messier and His Marathon'
            },
            {
                type: 'date',
                value: 'February 12th, 2010'
            },
            {
                type: 'presenter',
                value: 'Art Samplaski'
            }
        ],
        desc: 'One of 18th c. French astronomer Charles Messier\'s job duties was to look for comets, but he and his assistant Pierre Méchain kept finding non-moving faint fuzzy things. The "Messier catalogue" they compiled is now famous as the crème-de-la-crème list of star clusters, galaxies, etc. of the northern sky. Come learn a little about Messier, the deep-sky objects in his catalogue, and "Messier marathons," an increasingly popular activity for astronomy clubs, where people try to see all 110 Messier objects in a single all- night observing session. If the weather permits, immediately after the talk you can go upstairs to see a few of Messr. Messier\'s objects.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Neutron Stars'
            },
            {
                type: 'date',
                value: 'November 20th, 2009'
            },
            {
                type: 'presenter',
                value: 'Stephen Demjanenko'
            }
        ]
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Oort Cloud'
            },
            {
                type: 'date',
                value: 'November 13th, 2009'
            },
            {
                type: 'presenter',
                value: 'Brian Crandall'
            }
        ],
        desc: 'The Oort Cloud Out in the solar system\'s limits lay some snowballs; millions of them. The Oort Cloud objects, like toys from a forgotten childhood, lie at the edge of our system, quietly hanging out, not doing a whole lot and seemingly not worth paying attention to. However, these snowballs actually are disturbed very easily...and that might send them on an unpleasant visit towards planet earth. You may think a snowball is no big deal, but I\'ll bet you\'ll start caring a lot more when a snowball the size of a mountain starts plummeting out from the sky. Join CAS as we take a tour of the icy limits of the solar system and its dangerous denizens.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Chinese Astronomy'
            },
            {
                type: 'date',
                value: 'October 30th, 2009'
            },
            {
                type: 'presenter',
                value: 'Hua Liu'
            }
        ],
        desc: 'The ancients once said that we can predict the future from the stars, but through the stars, we can also see far into the past. Through the western sky, we recall the many familiar myths and legends of times long past: of how Perseus rescued Andromeda on the winged Pegasus, of Orion and his faithful dog Sirius. Yet, as we leave the confines of familiarity, gazing far into the east, we see another civilization: a civilization rivaling ancient Rome and Greece in splendor, with its own constellations, its own myths and legends, and its own way of interpreting the enigmatic universe. Join us on a tour of the eastern sky, where everything is familiar yet unfamiliar at the same time.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Extraterrestrial Life'
            },
            {
                type: 'date',
                value: 'October 23rd, 2009'
            },
            {
                type: 'presenter',
                value: 'Larry Klaes'
            }
        ]
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The South Pole of Mars'
            },
            {
                type: 'date',
                value: 'October 16th, 2009'
            },
            {
                type: 'presenter',
                value: 'Nicki Button'
            }
        ],
        desc: 'The seasonal polar caps of Mars is composed of CO2. In the south some CO2 ice is retained throughout the year, call the residual cap. Observations in the 1970s, 1990s, and early 2000s indicated some year-to-year variations of the seasonal cap cycle and some changes in the residual cap. The Mars Reconnaissance Orbiter carries several imaging instruments which can monitor seasonal and year-to-year changes. We use Context camera data, 5 m/pixel, to compare two Mars years of summer defrosting in order to evaluate climate and effects on the underlying, older CO2 deposits.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Quantum Physics and Zen'
            },
            {
                type: 'date',
                value: 'October 2nd, 2009'
            },
            {
                type: 'presenter',
                value: 'Brandon Bass'
            }
        ],
        desc: 'Quantum physics is about expanding your mind, and disregarding your preconcieved notions. You have an impact in the world by just existing, and only by opening yourself to the impossible can you begin to see true reality and reach your own enlightenment.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Space Weather'
            },
            {
                type: 'date',
                value: 'September 25th, 2009'
            },
            {
                type: 'presenter',
                value: 'Bryan Scherrer'
            }
        ],
        desc: 'It\'s not often that we think of the Sun as a violent ball of nuclear fusion. In our everyday lives, it gives us the light and warmth we use to stay alive. Yet, our technology is incredibly vulnerable to solar fury. Invisible clouds of ions float towards us, interacting with out magnetic field, and wrecking havoc on electronics. The radiation of a solar flare is capable of killing astronauts in an instant. On the ground, power grids and oil lines face degeneration and destruction when the Sun strikes. We\'re entering the next solar cycle, and unless we prepare for it, the Sun will annihilate our technology and livelihoods as it sees fit.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'This is NOT Your Parents\' Solar System...'
            },
            {
                type: 'date',
                value: 'September 18th, 2009'
            },
            {
                type: 'presenter',
                value: 'Art Samplaski'
            }
        ],
        desc: 'Dwarf planets, Kuiper Belt Objects, chaotic orbits, the Crater of Doom, and now hot Jupiters around other stars... Many people long for The Good Old Days(TM) when solar system astronomy was simple: nine planets going around the Sun like clockwork, with just a couple of comets and some asteroids being untidy. Well, how about the REALLY good old days, when there were only seven movable things and a bunch of stars all going around the Earth? The history of planetary astronomy encapsulates the scientific process: as we get new data, we have to revise how we think about things--and our place in the universe. And despite being literally "pie in the sky," it _does_ impact policy. (Can you say, "dinosaur killer?") Join us for a quick tour of how we learned about the solar system, why the last 50 years has truly been _the_ Golden Age of planetary science, and a bit about where current research is heading.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'It\'s Not Easy Being Blue - How Space Has, and Will, Continue To Pummel Earth'
            },
            {
                type: 'date',
                value: 'September 11th, 2009'
            },
            {
                type: 'presenter',
                value: 'Stephen Demjanenko'
            }
        ],
        desc: 'Ever turn on the News only to be shocked by how brutal the weather on Earth can be? Well, space is even less forgiving, since the forces involved with the more dramatic, but also more rare, events of our galaxy are much much greater - our existence on Earth is but a frail one. Recent (and not so recent) evidence suggests that life on Earth has long battled against comets, meteors, and even Supernovae...our own life giving Sun has been known to cause problems in paradise on occasion. If one needs more evidence as to what can happen to a planet, one need only turn to our neighbor Mars which is thought to once have supported an atmosphere much like our own, and maybe even life! Come be terrified and awed at what could happen!'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Stars: An Inside Story'
            },
            {
                type: 'date',
                value: 'April 24th, 2009'
            },
            {
                type: 'presenter',
                value: 'Russell Reinhart'
            }
        ],
        desc: 'Imagine yourself laying outside on a clear night 2,000 years ago, and someone next to you told you the tiny flecks of light you saw were actually balls of gas, larger and hotter than you could comprehend. You, and most everybody else would probably would have dismissed such ideas as nonsense. I will explain the sequence of key events that has led to our current understanding of what the stars are made of, and how they work.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Reaching for the Stars: A Brief Introduction to Spaceflight'
            },
            {
                type: 'date',
                value: 'April 17th, 2009'
            },
            {
                type: 'presenter',
                value: 'Russell Wolf'
            }
        ],
        desc: 'We spend lots of time at Fuertes looking up into space. Ever wonder how to get there? Launching man-made objects into orbit is an enormously difficult task, and one of the most difficult engineering feats ever accomplished. Come learn about some of the rockets that lift satellites and people into space - including how they work, their history, and their future.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Astrophotography: How to create beautiful pictures of heavenly bodies'
            },
            {
                type: 'date',
                value: 'April 10th, 2009'
            },
            {
                type: 'presenter',
                value: 'Richard Hennig'
            }
        ],
        desc: 'Ever wondered how you can create such beautiful pictures of the moon, planets, star clusters, galaxies and nebulae as you can find in books, magazines and on the web? Come and learn how to simply use your digital or film camera to capture the motion of the stars throughout the night sky and how to use mounts and telescopes for long time exposures of faint galaxy clusters and colorful nebulae and solar system objects. We will delve into the various photography techniques and discover what equipment you need for the pictures of various celestial objects.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'It\'s Not Easy Being Blue - How Space Has, and Will, Continue To Pummel Earth'
            },
            {
                type: 'date',
                value: 'April 3rd, 2009'
            },
            {
                type: 'presenter',
                value: 'Samuel Johnson Stoever'
            }
        ],
        desc: 'Ever turn on the News only to be shocked by how brutal the weather on Earth can be? Well, space is even less forgiving, since the forces involved with the more dramatic, but also more rare, events of our galaxy are much much greater - our existence on Earth is but a frail one. Recent (and not so recent) evidence suggests that life on Earth has long battled against comets, meteors, and even Supernovae...our own life giving Sun has been known to cause problems in paradise on occasion. If one needs more evidence as to what can happen to a planet, one need only turn to our neighbor Mars which is thought to once have supported an atmosphere much like our own, and maybe even life! Come be terrified and awed at what could happen!'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Titan'
            },
            {
                type: 'date',
                value: 'March 27th, 2009'
            },
            {
                type: 'presenter',
                value: 'Brian Crandall'
            }
        ],
        desc: 'The solar system is a very intriguing place. Perhaps one of the most amazing worlds that comprise our little pit stop in the universe is Titan, a Saturnian moon where the smog is so thick and filthy it makes our dirtiest cities look like a refreshing paradise. This little ball of rock and sewer gas changes weather enough to make the local weatherman employed if he could tolerate the -300 F degree temperatures, icy continents, methane downpours and the possibility the whole thing might roast into a cinder if the conditions are right. And you thought our air was bad. Join us this Friday at Fuertes Observatory for a tour of our solar system\'s of Titan, the powder keg of the solar system.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Space Weather'
            },
            {
                type: 'date',
                value: 'March 6th, 2009'
            },
            {
                type: 'presenter',
                value: 'Bryan Scherrer'
            }
        ],
        desc: 'It\'s not often that we think of the Sun as a violent ball of nuclear fusion. In our everyday lives, it gives us the light and warmth we use to stay alive. Yet, our technology is incredibly vulnerable to solar fury. Invisible clouds of ions float towards us, interacting with out magnetic field, and wrecking havoc on electronics. The radiation of a solar flare is capable of killing astronauts in an instant. On the ground, power grids and oil lines face degeneration and destruction when the Sun strikes. We\'re entering the next solar cycle, and unless we prepare for it, the Sun will annihilate our technology and livelihoods as it sees fit.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Infinite Worlds, Infinite Possibilities'
            },
            {
                type: 'date',
                value: 'February 27th, 2009'
            },
            {
                type: 'presenter',
                value: 'Lisa Bacis'
            }
        ],
        desc: 'Have you ever imagined worlds outside of our own? That there is the possiblity of another Earth, dimension, or universe? Scientists have pondered the idea of parallel universes for some time now. But where did these thoughts begin? What possible evidence is there to support this hypothesis? The answers to those questions and more will be explained and shall soon open your mind to some extraordinary possibilities.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Understanding the Heaven'
            },
            {
                type: 'date',
                value: 'February 13th, 2009'
            },
            {
                type: 'presenter',
                value: 'Matipon Tangmatitham'
            }
        ],
        desc: 'Understanding the motion of heaven has always been a great puzzle to humanity since the ancient times. This CAS lecture series will explore the motion of the planets and how it appears to us. One of the greatest mysteries about planetary motion was the retrograde motion. Understand the motivation behind the ancient astronomers. Follow the evolution of astronomy from the signs of zodiacs, astrology, geocentric model, epicycles and deferents, Copernican revolution, or how Galileo\'s discovery was frowned upon by the Catholic Church. Understanding the past will allow to understand how we came to realize the heavens above as we know it today.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Navigating the Night Sky, or "I _Knew_ I Shoulda\' Taken That Left Turn at Albireo!"'
            },
            {
                type: 'date',
                value: 'February 6th, 2009'
            },
            {
                type: 'presenter',
                value: 'Art Samplaski'
            }
        ],
        desc: 'Bugs Bunny\'s navigational difficulties with respect to Albuquerque and Pismo Beach are legendary. How much greater, then, might your problems be in moving around the entire night sky? While you wouldn\'t be burdened by "tunnel vision" like Bugs, the sheer scope of things might seem daunting. Fortunately, a few easily-learnable constellations provide guideposts for each season. We will learn how to recognize these star patterns as seen from Ithaca, and how to use them to find less obvious constellations elsewhere in the sky; we will also briefly discuss celestial coordinate systems for use in binocular or telescope observing. In the (alas, unlikely) event of clear skies that evening, we will immediately follow the talk with a "lab practical" out on the observatory deck.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Many Moons of Jupiter'
            },
            {
                type: 'date',
                value: 'November 14th, 2008'
            },
            {
                type: 'presenter',
                value: 'Richard Gustavson'
            }
        ],
        desc: 'Come explore the many moons of Jupiter, with 62 (and counting!) moons to choose from. The three main groups of moons, the Amalthea Group, the Galilean Moons, and the irregular satellites, each have unique characteristics, with each individual moon a world of its own. Learn how the moons were formed, their interactions with Jupiter and each other, and whether we might one day find life in their midst.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Astronomical Tests of General Relativity'
            },
            {
                type: 'date',
                value: 'November 7th, 2008'
            },
            {
                type: 'presenter',
                value: 'Hong Yu Xiao'
            }
        ],
        desc: 'Since the late 1600s, Newton has reigned supreme in the universe with his universal law of gravitation that binds planets, stars and galaxies together. More than two centuries later, Einstein puts forward his theory of general relativity to explain gravity in a wholly new way. Who is right in this battle of titans?'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Facts and Myths of the LHC, and the consequences for Astronomy'
            },
            {
                type: 'date',
                value: 'October 24th, 2008'
            },
            {
                type: 'presenter',
                value: 'Stephen Demjanenko'
            }
        ],
        desc: 'The Large Hadron Collider (LHC) has been greatly publicized in recent news, and as such, many myths and unwarranted fears have cropped up. The idea, for example, that the LHC could create black holes and be the cause of Earth\'s Doomsday have been spread around by the press. However, this is not the case; the LHC is safe. Moreover, the scientific community has great anticipation for this machine to advance the boundaries of particle physics. Come to Fuertes on Friday to learn about the real science behind the LHC, and why, among other things, it will not create a black hole to devour the Earth!'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'An Introduction to the Science of the Early Universe'
            },
            {
                type: 'date',
                value: 'October 17th, 2008'
            },
            {
                type: 'presenter',
                value: 'Samuel Johnson Stoever'
            }
        ],
        desc: 'We all know that the famous Large Hadron Collider will be called upon (when operational) to study, among other areas, conditions seen in the early universe. But, what are these conditions? What was the early universe like, and what were the intermediate stages between then and now? Perhaps most interestingly, how can astronomer see what happened and how it looked? Come to Fuertes on Friday night to learn more about many aspects of the early universe, and a little bit about my research over the last summer at the UCLA Physics/Astronomy REU.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Climate Catastrophes in the Solar System'
            },
            {
                type: 'date',
                value: 'October 10th, 2008'
            },
            {
                type: 'presenter',
                value: 'David Grinspoon'
            }
        ],
        desc: 'David Grinspoon, Curator of Astrobiology at the Denver Museum of Nature & Science, will provide an interplanetary perspective on climate change. What happened to the lost oceans of Venus and Mars? How did these worlds go wrong, and could this happen to our planet? Venus, Mars, and Saturn\'s moon Titan each have complex climate systems, and each has experienced radical climate changes. We will journey through the solar system and deep time, discovering runaway greenhouses, snowball planets, and the long-term fate of Earth.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Light Fantastic, or, a Guided Tour of the Electromagnetic Spectrum'
            },
            {
                type: 'date',
                value: 'October 3rd, 2008'
            },
            {
                type: 'presenter',
                value: 'Anthony Milano'
            }
        ],
        desc: 'The icon of the astronomer is the telescope, and rightfully so. From the illumination of the Moon to the whispers of the Big Bang itself, practically all our knowledge of the Cosmos comes from light in one of its many guises. And light does so much more for us! Come learn about the electromagnetic spectrum: its history, its manifold uses in the terrestrial realm, and its starring role in the heavens.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The 10 Most EXTREME Sights in Naked-Eye Astronomy'
            },
            {
                type: 'date',
                value: 'September 26th, 2008'
            },
            {
                type: 'presenter',
                value: 'Brandon Aldinger'
            }
        ],
        desc: 'Only the rarest, the most spectacular, the most bizarre astronomical sights are worthy to be called EXTREME. This talk takes a whirlwind tour through 10 heavenly wonders, all visible without a telescope, complete with tips to maximize your chances of seeing the extreme. Ranging from exploding space junk to the far-away edge of the universe, you\'ll learn how naked-eye astronomy is much more exciting than just playing constellation connect-the-dots.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Your Place in the Universe'
            },
            {
                type: 'date',
                value: 'September 19th, 2008'
            },
            {
                type: 'presenter',
                value: 'Matipon Tangmatitham'
            }
        ],
        desc: 'Join our beautiful voyage around the place we call "home". If you think you know your neighborhood well, think again. This CAS lecture will explore the neighborhood around at which we live in. What kind of neighborhood are we living in? Know some of your neighbors: the hot young open cluster, the cool and old globular cluster, the devastating binary twins, all the way out to our nearest island galaxy: the Andromeda. The voyage will take you out further to the local group, virgo supercluster to the edge of the observable universe and our current understanding of the cosmos.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: '"At the Tone, the Time Will Be Precisely..." (not)'
            },
            {
                type: 'date',
                value: 'September 12th, 2008'
            },
            {
                type: 'presenter',
                value: 'Art Samplaski'
            }
        ],
        desc: 'If you find the change to Daylight Savings Time confusing and have trouble with "30 days hath September...", you haven\'t seen anything yet: Universal Coordinated Time, Sidereal Time, International Atomic Time, leap seconds, Julian Date, Gregorian Calendar, lunar year, Mayan Long Count... and don\'t forget relativistic time dilation! In this talk we\'ll look at calendars and clock time, how astronomy is intimately tied to both--and why things will *ALWAYS* be a mess.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'How to Become and Astronaut'
            },
            {
                type: 'date',
                value: 'April 25th, 2008'
            },
            {
                type: 'presenter',
                value: 'Elise Christensen'
            },
            {
                type: 'presenter',
                value: 'Kim Nguyen'
            }
        ],
        desc: 'Step 1: Dress up as astronaut<br>Step 2: Get into spaceship<br>Step 3: Launch into outer space<br>Step 4: Voilà! You are an astronaut! Space sailor!<br>Ever wonder what it really takes to become an astronaut? No? We\'ll tell you anyway! And more!'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Planetary Weather - When Mother Nature Really Doesn\'t Like You'
            },
            {
                type: 'date',
                value: 'April 18th, 2008'
            },
            {
                type: 'presenter',
                value: 'Brian Crandall'
            },
            {
                type: 'presenter',
                value: 'Lisa Bacis'
            }
        ],
        desc: '"It\'s cold. It\'s snowy. It\'s windy. The weather in Ithaca is terrible!" Quit your complaining. You think winter is bad? Mother Nature has spared you because you haven\'t seen anything yet. Try winds faster than a jetliner, with temperatures able to freeze your blood solid or a trip to a place where it\'s hot enough to melt lead and a "rain" shower might burn holes through your flesh. Or perhaps you\'d like a taste of both where the daily high is hundreds of degrees warmer than the nighttime low. Join us for a tour of the weather of the solar system in all of its furious, chaotic glory.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Death of a Star: Supernovae Explained'
            },
            {
                type: 'date',
                value: 'November 30th, 2007'
            },
            {
                type: 'presenter',
                value: 'Avinash Balachandran'
            }
        ],
        desc: 'Ever wonder what happens when a star dies out? Would it merely disappear quietly into the darkness or would it explode with the luminosity of an entire galaxy? Come learn more about a phenomenon that was first recorded by Chinese astronomers in AD 185 and continues to fascinate many. We will delve into the causes of supernovae and their different models of creation. We will also cover how discovery of these magnificent sights can be made by you! No talk about the death of stars would be complete without touching on the formation of black holes and neutron stars and we will explore this area briefly as well.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Cannonballs to Chaos: A Tour of Celestial Mechanics'
            },
            {
                type: 'date',
                value: 'November 16th, 2007'
            },
            {
                type: 'presenter',
                value: 'Anthony Milano'
            }
        ],
        desc: 'From the Scientific Revolution to the present day, astronomy, physics, and mathematics have enjoyed a fruitful and exciting relationship. I will present a non-technical overview of the fascinating subject of celestial mechanics, starting with Newton\'s brilliant work and ending with modern space mission design and computer simulations.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Astro-bio'
            },
            {
                type: 'date',
                value: 'November 9th, 2007'
            },
            {
                type: 'presenter',
                value: 'Bernadette Pang'
            }
        ],
        desc: 'What is life? How did simple chemistry bring about life on Earth? How would the planet from which it arose affect life on a molecular and physiological level? If there is life beyond the earth, how would it be different from ours, and how would it be the same? In what way can life expand beyond its planet of origin, and how can we detect it? Astrobiology is the branch of science dedicated to finding answers to these and other questions about Life, the Universe (if not quite Everything).'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Big Bang'
            },
            {
                type: 'date',
                value: 'November 2nd, 2007'
            },
            {
                type: 'presenter',
                value: 'Jenn Bailard'
            }
        ],
        desc: 'Many people have opinions about the Big Bang, but what exactly is this theory, and what are its origins? The lecture will address evidence in favor of the Big Bang as well as some of the unanswered questions. In seeking to understand this theory, we will also discover how we can look back in time to see the early universe and why it is often said that we are made of stardust.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Death of the Universe'
            },
            {
                type: 'date',
                value: 'October 26th, 2007'
            },
            {
                type: 'presenter',
                value: 'Jimmy Hartzel'
            }
        ],
        desc: 'Some say the universe will end in a catastrophic collapse, while others believe in a less dramatic gradual aging into an empty chaos. Either way, the universe and any intelligent life in it seem doomed to come to an end. This talk will discuss the possible fates of the universe, and what it means for any (if there will be any) remaining inhabitants.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Meteor Showers: The Rise and Fall of Shooting Stars; Historic Happenings and How to Catch the Action Today'
            },
            {
                type: 'date',
                value: 'October 19th, 2007'
            },
            {
                type: 'presenter',
                value: 'Bari Greenfeld'
            },
            {
                type: 'presenter',
                value: 'Laura Hart'
            }
        ],
        desc: 'Have you ever wished upon a falling star?<br><br>Come join us on a journey through the cosmic dust to explore the true nature of these spectacular celestial events! Discover an intriguing scientific basis for the existence of meteor showers, and unravel the multitude of mythological significance associated with these shooting stars across the ages. We will also demonstrate when, where, and how to locate meteor showers throughout the year - so you too can observe the delicate lightshows which, over time, have been imbued with the desires of thousands.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Comets: We All Love a Dirty Snowball'
            },
            {
                type: 'date',
                value: 'October 12th, 2007'
            },
            {
                type: 'presenter',
                value: 'Lisa Bacis'
            },
            {
                type: 'presenter',
                value: 'Brian Crandall'
            }
        ],
        desc: 'The universe has a whole lot of stuff floating around in it, and some of it is right in our galactic backyard. Take the comet, for example: with the same consistency of snow and ice scraped off of a driveway, these periodic visitors were once thought to be harbingers of doom. Our modern minds, however, now know better, and we can enjoy the comets\' dazzling displays in the night sky--although if one were to ever impact us, it could actually bring doom. This Friday, come visit the CAS lecture series at Fuertes for an entertaining and educating discussion about nature\'s dirty snowball.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Johannes Kepler: Harmony, Faith, and Original Though'
            },
            {
                type: 'date',
                value: 'October 5th, 2007'
            },
            {
                type: 'presenter',
                value: 'Samuel Johnson Stoever'
            }
        ],
        desc: 'There is hardly a person who doesn\'t know of the Genius that was Isaac Newton, but, as he confessed, he merely stood on the shoulders of giants. Kepler\'s scientific rigor revolutionized astronomy and mathematical physics, paving the way for the giants of the 17th and 18th centuries. This talk will focus on the fascinating life of the man who defied the church to reach higher understanding of god - the man who is credited as being one of the most revolutionary thinkers of the last millennium.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Alchemy, Astrology, and Celebrity: Tycho Brahe'
            },
            {
                type: 'date',
                value: 'September 28th, 2007'
            },
            {
                type: 'presenter',
                value: 'Ken Ferguson'
            }
        ],
        desc: 'Learn about the man behind the Golden Nose for which he is so infamously remembered. We will discuss what made him popular in the social realm and what made him popular in the scientific realm. From his strange parties, to awkward pet animals, to astounding astrological findings, join us as we delve into the personal and scientific life that is Tycho Brahe.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Planetary Imaging with a Web Cam'
            },
            {
                type: 'date',
                value: 'September 21st, 2007'
            },
            {
                type: 'presenter',
                value: 'Rob West'
            }
        ],
        desc: 'An introduction to how you can use an inexpensive web cam to obtain hi-resolution images of Solar System objects. From data acquisition to image processing using freeware, The tools, steps, and methods used will be presented along with examples of the speakers\' own work.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Mars: Not Just the Fourth Rock from the Sun'
            },
            {
                type: 'date',
                value: 'September 14th, 2007'
            },
            {
                type: 'presenter',
                value: 'Sarah Morrison'
            }
        ],
        desc: 'Most of us know Mars to be the Red Planet, but so what? What is so interesting about it that has attracted geologists, physicists, and biologists alike? I will seek to address this as we delve into the history of Mars and what it may mean for the Earth as well as other terrestrial bodies. The Earth can only show us so much about the distant past (such as the period right after it formed), but Mars can act as our time capsule. Join us as we explore everything from possible life on Mars to Mars\' traumatic past (which may also indicate something about Earth\'s).'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Cosmology 101: Expanding Universe'
            },
            {
                type: 'date',
                value: 'September 7th, 2007'
            },
            {
                type: 'presenter',
                value: 'Matipon Tangmatitham'
            }
        ],
        desc: 'In this first CAS lecture of the semester, we invite you to explore the very nature of the cosmos. How did the universe come to be? How does the universe function? Is the universe for forever, or does it evolve with time? What is the mechanism that "drives" everything around us? The main focus of this lecture will be on the expansion of the universe.<br><br>We have known for some time now that the universe is expanding. But what does that mean? Discover the remarkable facts for yourself. Expand your intuition and visualize what it is like to live in a higher-dimension universe. Explore the evolution of the universe. Learn the forces that shape the cosmos. Understand how the mysterious dark matter and dark energy will ultimately deliver the universe to its ultimate fate.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Science of Star Wars'
            },
            {
                type: 'date',
                value: 'April 27th, 2007'
            },
            {
                type: 'presenter',
                value: 'Brandon Aldinger'
            }
        ],
        desc: 'Learn about a galaxy long ago and far, far away at the close by Fuertes Observatory in the near, near future. Star Wars is undoubtedly one of the most popular science fiction series ever produced. But what is science and what is fiction? Could hyperspace, turbolasers, or Yoda actually exist? How does Apollo 10 stack up against an X-Wing fighter? Explore these and other icons of the saga, discovering the technological hurdles keeping you from ruling the galaxy, in "The Science of Star Wars"!'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Things That Go Bump in the Dark'
            },
            {
                type: 'date',
                value: 'April 20th, 2007'
            },
            {
                type: 'presenter',
                value: 'Krzysztof Findeisen'
            }
        ],
        desc: 'Dark matter and dark energy are two phrases that have come up ever more often in science news. These terms come with an astonishing claim: 96% of our universe is made of something we can\'t see. In fact, most astronomers say, most of the universe isn\'t even matter, and most of the matter isn\'t anything like the stuff we find in stars, planets, plants, and people. Why should we think dark matter exists if we can\'t see it? For that matter, what are dark matter and dark energy? What\'s the difference? In this talk, we will explore discoveries on the cutting edge of cosmology and try to make sense of a universe well beyond our everyday experience.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Giant Sundials in India'
            },
            {
                type: 'date',
                value: 'April 6th, 2007'
            },
            {
                type: 'presenter',
                value: 'Barry Perlus'
            }
        ],
        desc: 'Between 1727 and 1734 Maharajah Jai Singh II of Jaipur constructed five astronomical observatories in west central India. The observatories, or "Jantar Mantars" as they are commonly known, incorporate multiple buildings of unique form, each with a specialized function for astronomical measurement. In this presentation we will look at these fascinating structures with the help of interactive panoramas and other multimedia - and learn how the astronomers of Jai Singh\'s court measured time on their great sundial to an accuracy of 2 seconds! For more information about the Jantar Mantar see <a target="_blank" href="http://www.jantarmantar.org/">http://www.jantarmantar.org/</a>.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Ancient G(r)eeks'
            },
            {
                type: 'date',
                value: 'March 30th, 2007'
            },
            {
                type: 'presenter',
                value: 'Lisa Bacis'
            },
            {
                type: 'presenter',
                value: 'Elise Christensen'
            }
        ],
        desc: 'This lecture will be a light-hearted exploration of some of the ancient Greek philosophies regarding the composition of the Earth and the universe beyond. From the genius ideas to the more obscure theories, we will delve into the diverse astronomical insights of Grecian antiquity.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Astronomy in Popular Culture'
            },
            {
                type: 'date',
                value: 'March 9th, 2007'
            },
            {
                type: 'presenter',
                value: 'Bernadette Pang'
            }
        ],
        desc: 'Star Wars. Star Trek. Men in Black. The Greek constellation myths. Popular culture has long counted astronomy as one of its biggest inspirations. Less obvious is the impact popular culture has on astronomy. This lecture focuses on how astronomical advances and popular culture, specifically science fiction, have influenced each other and society at large throughout the ages.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Eclipses'
            },
            {
                type: 'date',
                value: 'March 2nd, 2007'
            },
            {
                type: 'presenter',
                value: 'Shianne Beer'
            },
            {
                type: 'presenter',
                value: 'Kim-Yen Nguyen'
            }
        ],
        desc: 'In light of the impending lunar eclipse on March 3, CAS will be giving a lecture explaining the nature of these enchanting phenomena. We will provide a general overview of the topic, describing what eclipses are, why, how, and when they occur, and how to view them so that you may more fully understand and appreciate the nature of the fantastic sight in store for you!'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Extraterrestrial Life'
            },
            {
                type: 'date',
                value: 'February 16th, 2007'
            },
            {
                type: 'presenter',
                value: 'Brian Crandall'
            },
            {
                type: 'presenter',
                value: 'Kim-Yen Nguyen'
            }
        ],
        desc: 'The idea of extraterrestrial life has haunted the human imagination for thousands of years. We have fantasized about finding innumerable alien races in the depths of the universe, stretching the realm of life as far as our imaginations permitted. But today\'s science fiction is tomorrow\'s scientific fact. The history of science undeniably corroborates this statement. Therefore, though many may scoff at the current absurdity of the prospect, there may be other sentient and intelligent beings in space beyond Earth. How would such life arise? How likely is an alien existence? Though the idea of extraterrestrials seems strange, who is to say that these eternal figments of science fiction imagination do not exist? Join us at Fuertes Observatory as we explore the possibility of life beyond our globe in the vastness of space.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Navigating the Night Sky, or "I Knew I Shoulda\' Taken That Left Turn at Albireo!"'
            },
            {
                type: 'date',
                value: 'February 9th, 2007'
            },
            {
                type: 'presenter',
                value: 'Art Samplaski'
            }
        ],
        desc: 'Bugs Bunny\'s navigational difficulties with respect to Albuquerque and Pismo Beach are legendary. How much greater, then, might your problems be in moving around the entire night sky? While you wouldn\'t be burdened by "tunnel vision" like Bugs, the sheer scope of things might seem daunting. Fortunately, a few easily-learnable constellations provide guideposts for each season. We will learn how to recognize these star patterns as seen from Ithaca, and how to use them to find less obvious constellations elsewhere in the sky; we will also briefly discuss celestial coordinate systems for use in binocular or telescope observing. In the (alas, unlikely) event of clear skies that evening, we will immediately follow the talk with a "lab practical" out on the observatory deck.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Mythology of Southern Constellations'
            },
            {
                type: 'date',
                value: 'December 1st, 2006'
            },
            {
                type: 'presenter',
                value: 'Lisa Bacis'
            },
            {
                type: 'presenter',
                value: 'Elise Christensen'
            }
        ],
        desc: 'The Southern hemisphere... What is out there? As Northern hemisphere natives, we have an absent-minded disregard for the skies in the Land Down Under. In our narcissistic and egocentric tendencies, we have no idea what constellations grace the southern skies. What fantastic stories limn their forgotten and forlorn skies? We hope to uncover some of the many foggy mysteries of this foreign place.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Stories of the Stars: Mythology and the Night Sky'
            },
            {
                type: 'date',
                value: 'November 17th, 2006'
            },
            {
                type: 'presenter',
                value: 'Brian Crandall'
            }
        ],
        desc: 'The night sky has mystified and inspired us since the dawn of civilization. As man has gazed into the vast unknown, creative minds have conjured stories of fantastic creatures, amazing figures and prodigious events to try and explain the stars, the planets and the glorious reaches of space. Come join us for a recollection of these colorful and entrancing tales, and discover how our celestial sphere is as much a storybook as it is an awesome view.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Shedding Light on Black Holes'
            },
            {
                type: 'date',
                value: 'November 3rd, 2006'
            },
            {
                type: 'presenter',
                value: 'Adam Kolozetti'
            }
        ],
        desc: 'Interested in our galaxy and beyond? Ever wonder about just what extraordinary mysteries the universe holds in store for us? Come find out about one such mystery, the infamous Black Hole. Do black holes exist? If yes, where do they come from? What happens if you fall in one? What would that look like? Included, a discussion of wormholes, and a closer look at exactly what is gravity and its relationship to black holes. If you feel that Star Trek is not giving you satisfactory answers on these topics, come find out the real details about one of the most fascinating wonders of science.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Ancient Astronomy'
            },
            {
                type: 'date',
                value: 'October 20th, 2007'
            },
            {
                type: 'presenter',
                value: 'Christie Gibson'
            },
            {
                type: 'presenter',
                value: 'Ishan Sharma'
            }
        ],
        desc: 'We may sometimes like to think that today we\'ve made great leaps in the field of astronomy only in the last few hundred years, but our ancestors weren\'t clueless. From the megalithic stones at Stonehenge to Mayan observatories, ancient ruins can help us discover how our ancestors appreciated the heavens. We\'ll explore some of these ancient ruins (through photography, of course!) and see how these ruins give us an insight into astronomy in the past.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Telescopes Throughout the Ages, with a focus on the James Webb Space Telescope'
            },
            {
                type: 'date',
                value: 'September 29th, 2006'
            },
            {
                type: 'presenter',
                value: 'Kim-Yen Nguyen'
            }
        ],
        desc: 'The Hubble Space Telescope is quite possibly the most famous astronomical instrument that has been in operation within the past fifty years. It has sent home innumerable breathtaking and highly informative images of what has not heretofore been possible to see from the ground. However, having been launched in 1990, the Hubble Space Telescope is beginning to get a bit old. The field of astronomy needs a new toy. Enter the James Webb Space Telescope (JWST), previously known as the New Generation Space Telescope. What can JWST do? How does it compare with Hubble? Spitzer? Other telescopes on the ground? What will we find in the Great Beyond with this newfangled toy?'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Pluto Pink-Slip Controversy'
            },
            {
                type: 'date',
                value: 'September 15th, 2006'
            },
            {
                type: 'presenter',
                value: 'Art Samplaski'
            }
        ],
        desc: 'The recent demotion of Pluto to "dwarf planet" upset many people (and not just Disney fans). However, such downsizing has happened in the past, to the asteroids. In fact, the whole process is a good example of science in action, where old theories need to be altered (sometimes with controversy) as new empirical data come in. In order to understand the background of the International Astronomical Union\'s decision process for Pluto, we will look at the history of planetary discovery from William Herschel\'s 1781 finding of Uranus onwards. (And if we somehow have clear skies, after the talk we\'ll try to observe some of the suspects involved: Uranus, Neptune, and Ceres.)'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Where Did We Come From? What we Know of the Origins of Stars and Planets'
            },
            {
                type: 'datetime',
                value: 'April 28th, 2006%8:00 PM'
            },
            {
                type: 'presenter',
                value: 'Krzysztof Findeisen'
            }
        ],
        desc: 'How do scientists know about the formation of the Earth and the solar system? How complete is that knowledge? In this talk we will explore both the standard model of solar system formation and the process of scientific inquiry that led to it. We will finish off with a look at how recent observations are putting pressure on star formation theory, and what it all means for the existence of Earthlike planets elsewhere in the universe.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The History of Fuertes Observatory'
            },
            {
                type: 'date',
                value: 'April 14th, 2006'
            },
            {
                type: 'presenter',
                value: 'Jennifer Bailard'
            },
            {
                type: 'presenter',
                value: 'Shianne Beer'
            }
        ],
        desc: 'Everyone knows how fascinating planets, stars, and galaxies can be, but what of the building and telescope used to view these astronomical wonders? Jennifer Bailard and Shianne Beer will discuss the history of observatories at Cornell University, especially the history behind the curious yet beloved Fuertes Observatory. If you love Fuertes half as much as Jennifer and Shianne, this is a lecture you\'ll not want to miss!'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Running the Messier Marathon, or, the Fun of Pulling an All-Nighter on a School/Work Night to Look for Faint, Fuzzy Blobs of Light in the Sky'
            },
            {
                type: 'date',
                value: 'March 31st, 2006'
            },
            {
                type: 'presenter',
                value: 'Mike Roman'
            },
            {
                type: 'presenter',
                value: 'Art Samplaski'
            },
            {
                type: 'presenter',
                value: 'Matipon Tangmatitham'
            }
        ],
        desc: 'In the 18th century, Charles Messier compiled a list of over 100 deep-sky objects to help comet hunters avoid false alarms. In the late 1970s, it was realized that there is a window in late March when it is possible to view (nearly) all the Messier objects in a single dusk-to-dawn marathon. Several CAS members will hold a panel discussion about Messier, the types of objects in his catalogue, and how you too can partake in this very different type of marathon.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Space: The Really, Really, Really, Really, Really, Really, REALLY Big Picture'
            },
            {
                type: 'date',
                value: 'March 3rd, 2006'
            },
            {
                type: 'presenter',
                value: 'Art Samplaski'
            }
        ],
        desc: 'As Bill Bryson has written, "Space is extremely well named." Astronomical distances are completely beyond our human experience; in this talk we will try, however inadequately, to put some personal sense of perspective back in the picture. To do so, audience members are requested to time themselves on one or both of the following beforehand: 1) run 100 meters (the length of an American football field plus one endzone); 2) on the Sagan Memorial Planet Walk on the Commons, walk from the Sun stele to the Earth stele. (Walking the entire 1.2 km out to the Pluto stele and visiting the Sciencecenter would also be a good thing!) We will run some numbers --anonymously!!!-- vis-a-vis various distances to see how long it would take us to actually get anywhere in the universe. As a followup, we will examine some ways astronomers have measured any of these distances, given that we are (for any real purpose) stuck in one spot.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Death of Stars'
            },
            {
                type: 'date',
                value: 'February 10th, 2006'
            },
            {
                type: 'presenter',
                value: 'Matipon Tangmatitham'
            }
        ],
        desc: 'All stars must come to an end. However, the death of a star is often a beginning for new stars, planets, and (in at least one case) even life. This lecture explores the last step of the stellar life cycle and the fate of different types of stars in the universe. What causes a star to blow up? What happens afterwards? Find out about types of supernovae, white dwarfs, brown dwarfs, neutron stars, and black holes. How is the end of the stellar life cycle crucial for the genesis of life? Are we really made of stardust? Finally, take yourself five billion years into the future when the sun will expand, ending all life on Earth.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Big Bang Was Only the Beginning: An Overview of the Largest Explosions in the Universe Today'
            },
            {
                type: 'date',
                value: 'December 2nd, 2005'
            },
            {
                type: 'presenter',
                value: 'Richard "Doc" Kinne'
            }
        ],
        desc: 'The Universe remains an energetic place. Come take a look at some of the latest information on such high energy objects as Gamma Ray Bursters (why they were a military secret years before the astronomers found out about them!), Cataclysmic Variables (stars that just keep on exploding!), and Supernova (the stepchildren of the Big Bang).<br><br>It\'ll make Atom Bombs look like firecrackers!'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Near Earth Objects: Separating Fact from Fiction'
            },
            {
                type: 'date',
                value: 'November 11th, 2005'
            },
            {
                type: 'presenter',
                value: 'Krzysztof Findeisen'
            }
        ],
        desc: 'It seems you can\'t pick up the newspaper or turn on the TV without running across a story about a "killer asteroid" endangering civilization. So far all these reports have been false alarms. But why do we keep seeing these stories? Is there really a threat? And, if so, what can we do about it?'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Origins of the Universe'
            },
            {
                type: 'date',
                value: 'October 28th, 2005'
            },
            {
                type: 'presenter',
                value: 'David Eisler'
            }
        ],
        desc: 'One of the most fundamental questions in astronomy is how the universe began. Did it just magically appear? Has it always existed? I will give a brief overview of the main theories about the origins of the universe and discuss their implications, from the scientific to the philosophical and even theological.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Kepler and the Music of the Spheres'
            },
            {
                type: 'date',
                value: 'October 14th, 2005'
            },
            {
                type: 'presenter',
                value: 'Art Samplaski'
            }
        ],
        desc: 'In Antiquity, the Middle Ages, and the Renaissance, music and astronomy were connected disciplines, part of the search for aspects of a single universal principle of "harmoniousness." The Renaissance astronomer Johannes Kepler was the last person to look seriously for such a "Grand Unified Theory;" in failing, he laid the foundations for Newtonian mechanics. This talk will look at some of those ancient connections and Kepler\'s search.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Looking for Aliens'
            },
            {
                type: 'date',
                value: 'September 30th, 2005'
            },
            {
                type: 'presenter',
                value: 'Larry Klaes'
            }
        ],
        desc: 'Does life exist beyond our planet Earth? Come see what aliens may look like, how we are searching for them, and what may happen when we do find each other!'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Expanding Universe'
            },
            {
                type: 'date',
                value: 'April 8th, 2005'
            },
            {
                type: 'presenter',
                value: 'Matipon Tangmatitham'
            }
        ],
        desc: 'How does the universe "work"? What is the true nature and mechanism behind everything? While no one can really know for certain, modern cosmology proposes some interesting answers to such fundamental questions. This lecture will present a brief introduction to some cosmological theories that might explain the expansive nature of the universe.<br><br> So how do we know that the universe is expanding? What is meant by "expanding universe"? And simply, How does that work? Come to the Fuertes Observatory this Friday evening to find out.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Galaxies'
            },
            {
                type: 'date',
                value: 'March 11th, 2005'
            },
            {
                type: 'presenter',
                value: 'David Eisler'
            }
        ],
        desc: 'From our own Milky Way to distant systems, the talk will present an overview on galaxies, their evolution, and topics of current research.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Light Pollution'
            },
            {
                type: 'date',
                value: 'February 11th, 2005'
            },
            {
                type: 'presenter',
                value: 'Debbie Audus'
            }
        ],
        desc: 'What exactly is light pollution? How does artificial lighting pollute the earth? How does it affect us? How can we still have the lighting that we need? And what can we do about it?'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Huygens Mission to Titan'
            },
            {
                type: 'date',
                value: 'January 28th, 2005'
            },
            {
                type: 'presenter',
                value: 'Richard "Doc" Kinne'
            }
        ],
        desc: 'On January 14th, just a fortnight ago, humanity claimed yet another new world as Huygens landed on Saturn\'s moon, Titan. From this frigid and distant satellite, Earth\'s robotic emissary radioed its findings back home.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Stars: Their Birth, Life, and Death'
            },
            {
                type: 'date',
                value: 'November 19th, 2004'
            },
            {
                type: 'presenter',
                value: 'Jagadheep Pandian'
            }
        ],
        desc: 'The lecture will illustrate how stars are born, how they live, and how they die. Cool pictures of star forming nebulae, planetary nebulae and supernovae are guaranteed!'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Unsteady Lights in the Heavens: A Talk on Variable Stars'
            },
            {
                type: 'date',
                value: 'November 5th, 2004'
            },
            {
                type: 'presenter',
                value: 'Richard "Doc" Kinne'
            }
        ],
        desc: 'Kinne will go over the history of variable star astronomy, the different types of variable stars that inhabit the universe, and how you can observe these performers of the stellar sphere and have your observations used by professional astronomers across the world.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Extrasolar Planets'
            },
            {
                type: 'date',
                value: 'October 22nd, 2004'
            },
            {
                type: 'presenter',
                value: 'Krzysztof Findeisen'
            }
        ],
        desc: 'The lecture will cover how these new worlds are discovered, what is known about them, and the exciting new directions this field is expected to take in coming decades. worlds are discovered, what is known about them, and the exciting new directions this field is expected to take in coming decades.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Solar System Ambassador Talk: Cassini Around Saturn'
            },
            {
                type: 'date',
                value: 'September 17th, 2004'
            },
            {
                type: 'presenter',
                value: 'Tony Pilato'
            }
        ],
        desc: 'Mr. Pilato is a science educator and a Solar System Ambassador with extensive knowledge in astronomy and astrophotography. He will speak on the latest results from the Cassini Mission around Saturn and the future of the mission, including the Huygen\'s probe that will explore Saturn\'s moon, Titan.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Accessibility of Amateur Astronomy: How You Can Contribute and Have Fun in the Organized Amateur Astronomy Community'
            },
            {
                type: 'date',
                value: 'April 30th, 2004'
            }
        ],
        desc: 'It is said that Astronomy is one of the last sciences where the amateur can continue to make significant contributions. It\'s true! Tonight learn how to take your stargazing to the next level by making and reporting observations - sometimes with instruments as simple as the naked eye - that will be used by scholars and scientists around the world. Join us tonight as we give an introduction to some of the amateur organizations that help out the professional astronomers!'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'History of Constellations'
            },
            {
                type: 'date',
                value: 'April 16th, 2004'
            },
            {
                type: 'presenter',
                value: 'Debbie Audus'
            },
            {
                type: 'presenter',
                value: 'J.R. Skok'
            }
        ],
        desc: 'Constellations are used to identify areas of the sky, learn where the names for these familiar figures come from and the mythology that goes along with them. The lecture will be followed by viewing of the visible constellations (weather permitting).'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Astrobiology'
            },
            {
                type: 'date',
                value: 'April 2nd, 2004'
            },
            {
                type: 'presenter',
                value: 'Larry Klaes'
            }
        ],
        desc: 'An examination of the possibility of life beyond Earth. What it may be like, where is it, why we haven\'t found any yet, and why humanity is so fascinated with the subject.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'The Motions of Stars and Planets in the Night Sky'
            },
            {
                type: 'date',
                value: 'March 12th, 2004'
            },
            {
                type: 'presenter',
                value: 'Jagadheep Pandian'
            }
        ],
        desc: 'Learn how the planets and stars move across the sky on a daily and yearly basis. The topic will also include the use of astronomy for timekeeping and the cause of the seasons.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Telescope Basics'
            },
            {
                type: 'date',
                value: 'March 5th, 2004'
            },
            {
                type: 'presenter',
                value: 'Tanja Bode'
            },
            {
                type: 'presenter',
                value: 'Daniel Shapiro'
            }
        ],
        desc: 'Extensions of the eye, telescopes come in many different forms, shapes and sizes. Come and discover how they work. Cool pictures guaranteed!'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Introduction to the Night Sky'
            },
            {
                type: 'date',
                value: 'February 20th, 2004'
            },
            {
                type: 'presenter',
                value: 'Krzysztof Findeisen'
            },
            {
                type: 'presenter',
                value: 'J.R. Skok'
            }
        ],
        desc: 'A tour of the solar system and beyond, examining the major features of our universe with exquisite images and a broad array of topics. The lecture is designed to supplement our Friday evening viewing by explaining the different types of objects typically seen at night.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'How to be an Astronomer'
            },
            {
                type: 'presenter',
                value: 'Prof. Carl Sagan'
            },
            {
                type: 'datetime',
                value: 'March 22nd, 1974%7:00 PM'
            },
            {
                type: 'loc',
                value: 'Clark Hall 700'
            }
        ],
        desc: 'We have no further details to include about this lecture, but thought its mention in the Daily Sun was cool enough to include here. Please contact us if you know anything about this lecture!'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Interstellar Dust and Gas'
            },
            {
                type: 'presenter',
                value: 'Prof. Martin O. Harwit'
            },
            {
                type: 'date',
                value: 'April 6th, 1973'
            },
            {
                type: 'loc',
                value: 'Fuertes Observatory'
            }
        ],
        desc: 'Prof. Martin O. Harwit, chairman of the astronomy department spoke at the observatory on "Interstellar Dust and Gas". He explained the astronomers\' attempts to learn the process by which stars are born. Although they believe that the compression of the interstellar dust is responsible for the beginnings of a star, "just how they formed is a real puzzle", said Harwit.\n\nThe talk was sponsored by the Cornell Astronomical Society, a recently formed club of Cornell Students. According to the president of the club Lou Yurek \'75, in addition to inviting guest speakers the club is planning other activities including a field trip to the Danby Radio Telescope and amateur telescope making class. "Although we only get an average of one good observing day every two weeks, the club meets every Friday night, clear sky or no," said Kathy Hodges \'75, CAS secretary.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Comets and Meteors'
            },
            {
                type: 'presenter',
                value: 'Prof. S. L. Boothroyd'
            },
            {
                type: 'datetime',
                value: 'March 30th, 1923%7:30 PM'
            },
            {
                type: 'loc',
                value: 'Fuertes Observatory'
            }
        ],
        desc: '"Comets and Meteors" was the subject covered by Prof. S. L. Boothroyd \'08 in his weekly lecture on astronomy in the Fuertes Observatory last night before the largest audience yet assembled to hear him talk. The sky was clear and favorable for the use of the telescope, and views of the moon and Mars were taken, after which the lecture proceeded, illustrated by numerous slides of comets and views of the Mount Wilson Observatory. The different comets which have appeared since early in the last century were discussed as to their orbits, shapes and future returns. Professor Boothroyd then explained the construction of the great telescope used at the Mount Wilson Observatory, the finest plant for astronomical purposes in the world.'
    },
    {
        attributes: [
            {
                type: 'title',
                value: 'Our World and Other Worlds'
            },
            {
                type: 'presenter',
                value: 'Prof. S. L. Boothroyd'
            },
            {
                type: 'datetime',
                value: 'March 16th, 1923%7:30 PM'
            },
            {
                type: 'loc',
                value: 'Fuertes Observatory'
            }
        ],
        desc: 'Prof. S. L. Boothroyd \'08 gave his third lecture at the Fuertes Observatory on "Our World and Other Worlds." As the sky was not clear, it was impossible to observe the planets, but by means of lantern slides a general description of the planets and their orbits was presented. Probably the most interesting phase of the lecture to those not versed in the more mathematical problems of the planetary system was a discussion of the probability of higher life on Mars and Venus. A hypothesis of the existence of intelligent beings on Mars has been forwarded by Lowell, who studied that planet under the best conditions possible. The possibility of life on Venus [is] not nearly so probable as on Mars, despite recent newspaper articles to the contrary, as venus moves about the sun with one side always facing it, and as a result, one side must be very hot and the other an ice sheet. Thus the only portion that could even be imagined to support life is a narrow margin between the two expanses of desert and ice, and conditions there would not be likely to be favorable, due to extremes of hot and cold winds.'
    },
    {
        attributes: [
            {
                type: 'specialtitle',
                value: 'Movements of the Earth and Moon'
            },
            {
                type: 'presenter',
                value: 'Prof. S. L. Boothroyd'
            },
            {
                type: 'datetime',
                value: 'March 2nd, 1923%7:30 PM'
            },
            {
                type: 'loc',
                value: 'Fuertes Observatory'
            }
        ],
        desc: 'Prof. S. L. Boothroyd \'08 will deliver a public lecture at the Fuertes Observatory from 7:30 until 10 o\'clock this evening. Professor Boothroyd\'s talk will be non-technical, being chiefly designed to arouse the interest of the public in astronomy. If the sky is clear, the lecture will be illustrated by views of the moon, stars, planets and nebulae. A feature of especial interest will be an eclipse of the moon which begins at 9:27 o\'clock and lasts until 11:30 o\'clock. Should the weather permit, the moon will be shown through the telescope. If the sky is overcast, lantern slides and plantetarium will be employed to demonstrate the various points of interest brought out during the lecture.'
    }
]

var datetime_tmp = m => `<div class="lecture_datetime">${m.split(/%/g)[0]}<span class="datetime_sep">, </span>
    <div class="datetime_break"></div>${m.split(/%/g)[1]}
</div>`;

var date_tmp = m => `<div class="lecture_datetime">${m}</div>`;

var det_tmp = m => `<div class="lecture_detail">${m}</div>`;
var det_comb_tmp = m => `<div class="lecture_detail" style="margin-bottom: 0 !important;">${m}</div>`;

var img_tmp = (m, attr, unbounded) => `<div class="main_group img_contain${unbounded ? '_unbounded' : ''}">
    <img class="img${unbounded ? '_unbounded' : ''}" src="/data/img/lecture/${m}.jpg">
    ${attr ? `<span class="img_credit">${attr}</span>` : ``}
</div>`;

var vid_tmp = m => `<iframe src="https://www.youtube-nocookie.com/embed/${m}" loading="lazy" class="lecture_media main_group" title="YouTube video player" allowfullscreen></iframe>`;

var vid_ph = (m, attr) => `<div data-ytsrc="${m.split(/%%%/g)[1]}">
    <div class="main_group img_contain">
        <img class="img" src="/data/img/lecture/${m.split(/%%%/g)[0]}.jpg" style="cursor: pointer;" onclick="vid_replace(this.parentElement.parentElement)">
        ${attr ? `<span class="img_credit">${attr}</span><br>` : ``}<span class="img_credit">Click image to load video</span>
    </div>
</div>`

var limg_tmp = m => `<div class="main_group img_contain">
    <a target="_blank" href="${m.split(/%%%/g)[1]}">
        <img class="img" src="/data/img/lecture/${m.split(/%%%/g)[0]}.jpg">
    </a>
    <span class="img_credit">Click image to view video</span>
</div>`


var limg_tmp_exec = m => `<div class="main_group img_contain">
    <a href="javascript:void('Irv');" onclick="openlink('${m.split(/%%%/g)[1]}', '${m.split(/%%%/g)[2]}')">
        <img class="img" src="/data/img/lecture/${m.split(/%%%/g)[0]}.jpg">
    </a>
    <span class="img_credit">Click image to view video (password-protected)</span>
</div>`

var el_tmp = (id, title, attr, desc, media, special, yuri, type) => `<div class="main_content ${type}">
    <div class="lecture_data main_group"${id ? ` id="${id}"` : ''}>
        <div class="lecture_title${special ? ` special` : ``}${yuri ? ` yuri` : ``}">${title}</div>
        ${attr}
    </div>
    <div></div>
    <div class="lecture_desc main_group">
        ${desc}
    </div>
    <div></div>
    ${media}
</div>
`

var vid_replace = el => {
    el.innerHTML = vid_tmp(el.getAttribute('data-ytsrc'));
}

var vid_ids = [];
const build = lecs => {
    var builder = [];
    for (var lec of lecs) {
        var title = '';
        var special = false;
        var yuri = false;
        var attrs = [];
        var presenters = [];
        for (var attr of lec.attributes) {
            switch (attr.type) {
                case 'title':
                case 'specialtitle':
                case 'yurititle':
                    title = attr.value;
                    special = attr.type == 'specialtitle';
                    yuri = attr.type == 'yurititle';
                    break;
                case 'presenter':
                    presenters.push(attr.value);
                    break;
                case 'loc':
                    attrs.push(det_tmp(attr.value));
                    break;
                case 'date':
                    attrs.push(date_tmp(attr.value));
                    break;
                case 'datetime':
                    attrs.push(datetime_tmp(attr.value));
                    break;
            }
        }
        for (var i = 0; i < presenters.length - 1; i++) {
            attrs.push(det_comb_tmp(presenters[i]));
        }
        if (presenters.length) attrs.push(det_tmp(presenters[presenters.length - 1]));
        var desc = lec.desc ?? '';
        var media = '<div></div>';
        if (lec.media) {
            switch (lec.media.type) {
                case 'photo':
                    media = img_tmp(lec.media.ref, lec.media.attr, lec.media.unbounded);
                    break;
                case 'video':
                    media = vid_ph(lec.media.ref, lec.media.attr);
                    break;
                case 'lphoto':
                    media = limg_tmp(lec.media.ref);
                    break;
                case 'encphoto':
                    media = limg_tmp_exec(lec.media.ref);
                    break;
            }
        }
        builder.push(el_tmp(lec.id, title, attrs.join('\n'), desc, media, special, yuri, lec.media ? 'lecture' : 'lecture_nomedia'));
    }
    return builder;
}

document.getElementById('main_box_1').innerHTML = build(cur_lecs).join('\n<hr>\n');
document.getElementById('main_box_2').innerHTML = build(past_lecs).join('\n<hr>\n');
