// pagemenus.js
// by Krzysztof Findeisen
// Allows menus for the observation logs, lecture series, and 
// messier marathon to be defined without editing a dozen files

// To update:
// Add a new writePageMenuItem call to the appropriate function. 
// The first argument is the link url and the second is the link text.
// The menu items will automatically be de-linked if the user is on the 
//	same page as where the link points to.
// The optional third argument specifies an alternate URL from which 
//	the item should be de-linked -- in particular, the "latest version 
//	of" URL
//	So for example writePageMenuItem('lecturesFA2006.html', 'Fall 2006', 'lectures.html')
//	will show up as a link unless the page's URL is EITHER 
//	lecturesFA2006.html OR lectures.html. This ensures that the user sees 
//	the same thing no matter how he/she got to the page.


function writeLectureMenu()
{
	document.writeln('<p>More lectures:</p>');
	document.writeln('<ul>');
        writePageMenuItem('lecturesSP2013.html', 'Spring 2013', 'lectures.html');
        writePageMenuItem('lecturesFA2012.html', 'Fall 2012');
	writePageMenuItem('lecturesSP2012.html', 'Spring 2012');
        writePageMenuItem('lecturesFA2011.html', 'Fall 2011');
	writePageMenuItem('lecturesSP2010.html', 'Spring 2010');
	writePageMenuItem('lecturesFA2009.html', 'Fall 2009');
	writePageMenuItem('lecturesSP2009.html', 'Spring 2009');
	writePageMenuItem('lecturesFA2008.html', 'Fall 2008');
	writePageMenuItem('lecturesSP2008.html', 'Spring 2008');
	writePageMenuItem('lecturesFA2007.html', 'Fall 2007');
	writePageMenuItem('lecturesSP2007.html', 'Spring 2007');
	writePageMenuItem('lecturesFA2006.html', 'Fall 2006');
	writePageMenuItem('lecturesSP2006.html', 'Spring 2006');
	writePageMenuItem('lecturesFA2005.html', 'Fall 2005');
	writePageMenuItem('lecturesSP2005.html', 'Spring 2005');
	writePageMenuItem('lecturesFA2004.html', 'Fall 2004');
	writePageMenuItem('lecturesSP2004.html', 'Spring 2004');
	document.writeln('</ul>');
}

function writeLogMenu()
{
	document.writeln('<p>Logs from other years:</p>');
	document.writeln('<ul>');
	writePageMenuItem('log2009.html', '2009-10', 'log.html');
	writePageMenuItem('log2008.html', '2008-9');
	writePageMenuItem('log2007.html', '2007-8');
	
	writePageMenuItem('log2006.html', '2006-7');
	writePageMenuItem('log2005.html', '2005-6');
	writePageMenuItem('log2004.html', '2004-5');
	writePageMenuFiller('No log entries available for 2003-4');
	writePageMenuItem('log2002.html', '2002-3');
	writePageMenuItem('log2001.html', '2001-2');
	document.writeln('</ul>');
}

function writeMessierMenu()
{
	document.writeln('<p>Other Marathons:</p>');
	document.writeln('<ul>');
	writePageMenuItem('messier10.html', '2010', 'messier.html');
	writePageMenuItem('messier08.html', '2008');
	writePageMenuItem('messier07.html', '2007');
	writePageMenuItem('messier06.html', '2006');
	writePageMenuItem('messier04.html', '2004');
	document.writeln('</ul>');
}

function writePageMenuItem(url, label, alternate)
{
	// Check if the link text is a suffix to the current URL
	if(document.URL.lastIndexOf(url) + url.length == document.URL.length)
		document.writeln('<li><a>' + label + '</a></li>');
	// Using the symbolic links?
	else if(alternate != undefined && document.URL.lastIndexOf(alternate) + alternate.length == document.URL.length)
		document.writeln('<li><a>' + label + '</a></li>');
	// Guess it's a different page...
	else
		document.writeln('<li><a href="' + url + '">' + label + '</a></li>');
}

function writePageMenuFiller(label)
{
	document.writeln('<li>' + label + '</li>');
}