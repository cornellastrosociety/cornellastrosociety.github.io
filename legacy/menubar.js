// menubar.js
// by Krzysztof Findeisen
// Last modified 04/23/2007
// Represents the site-wide menu

function writeMenu(level)
{
	prefix = '';
	for(i=0; i<level; i++)
		prefix += '../'

    document.writeln('<div id="navigation">');
    writeMainMenuRelative(prefix, 'index.html', 'CAS Home');
    writeMainMenuRelative(prefix, 'events.html', 'Events');
    writeMainMenuRelative(prefix, 'lectures.html', 'Lecture Series');
    document.write('<br>')
    writeMainMenuRelative(prefix, 'asphotos/index.html', 'Astro Photos');
    writeMainMenuRelative(prefix, 'log.html', 'Observation Log');
    document.write('<br>');
    writeMainMenuRelative(prefix, 'faq.html', 'FAQs');
    writeMainMenuRelative(prefix, 'fuertes.html', 'About Fuertes');
    writeMainMenuRelative(prefix, 'observing.html', 'Observing at Fuertes');
    document.write('<br>');
    writeMainMenuRelative(prefix, 'ccd.html', 'CCD camera project');
    writeMainMenuRelative(prefix, 'messier.html', 'Messier Marathon');
    writeMainMenuAbsolute('http://htmlgear.tripod.com/guest/control.guest?u=cassite&i=1&a=view', 'Guestbook');
    writeMainMenuRelative(prefix, 'links.html', 'Useful Links');
    writeMainMenuAbsoluteExt('https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment', 'Equal Education and Employment');
    document.writeln('</div>');
}

function writeMainMenuRelative(prefix, link, label)
{
	document.writeln('<a href="' + prefix + link + '">' + label + '</a>');
}

function writeMainMenuAbsolute(link, label)
{
	document.writeln('<a href="' + link + '">' + label + '</a>');
}

function writeMainMenuAbsoluteExt(link, label)
{
	document.writeln('<a target="_blank" href="' + link + '">' + label + '</a>');
}