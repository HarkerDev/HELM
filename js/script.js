var NUM_PAGES = 7;

var KEY_LEFT = 37;
var KEY_RIGHT = 39;

var PAGE_MATCHER = /p\d{1,2}/
document.addEventListener("keydown", function(event) {
	switch(event.keyCode) {
		case KEY_LEFT: 
			if (pageNumberCurr != 1) {
				pageNumberNew = pageNumberCurr - 1;
				pageNumberNewStr = ((pageNumberNew < 10) ? "0" : "") + pageNumberNew;
				window.location.href = "https://harkerdev.github.io/helm/pages/p" + pageNumberNewStr + ".html";
			}
		break;
		case KEY_RIGHT:
			pageNumberCurr = getPageNumber(window.location.href);
			if (pageNumberCurr != NUM_PAGES) {
				pageNumberNew = pageNumberCurr + 1;
				pageNumberNewStr = ((pageNumberNew < 10) ? "0" : "") + pageNumberNew;
				window.location.href = "https://harkerdev.github.io/helm/pages/p" + pageNumberNewStr + ".html";
			}
		break;
	}
});

getPageNumber(href) {
	return parseInt(PAGE_MATCHER.exec(href)[0].substring(1));
}