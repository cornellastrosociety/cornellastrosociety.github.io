/*
=~=~=~=~=~=~=~=~=
Adding a lecture:
Add the YouTube video ID to the end of the `ids` list below.

=~=~=~=~=~=~=~=~=
*/
var ids = ['9WqaUSiB76k', 'dFpkdy4J43Q', 'Mn_lIMv8KCM', 'YG3vfEI_Loo', 'J4kRIdGJUco', 'BdOLtSz99Aw', 'ct9PMMnYkpM', 'dSt0EE6suQA', 'U7-tVG1SUFw', '_1tdOcud7F8', 'kjH2Tt7rgIM', 'YTSHpk7JPCI', 'jzy7t3nIxD8', 'nQ-kMP00Q08', 'H08XRPi0DP4', 'ZgY4K0plnhY', '4AXuRbtHvBE', 'lO2UUDqPGbQ', 'MkBb9lhTr1s', 'za9UFwB1cKI', 'zV6DL-EHSUQ', 'S6AxTlTcx3g', 'JVuZ8vnSuuw', '-e6ZgK-Yptg', 'eNr5pcTNrv0', 'TL3KomLeIiE', 'ZpTgXP5tYUQ'];

var iframes = document.getElementsByTagName('iframe');
ids.reverse();

for (let i = ids.length; i > 0; i--) {
    setTimeout(() => {
        iframes[i - 1].src = `https://www.youtube-nocookie.com/embed/${ids[i - 1]}`;
    }, i * (6000 / ids.length));
}
// Load time fixed at 6 seconds, loading each iframe at a separate instant, as to improve overall page loading time