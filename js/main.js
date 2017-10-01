
$(function () {
	var unsupportedBrowser = navigator.userAgent.indexOf('MSIE') !== -1;
	if (unsupportedBrowser) {
		$(document.body).addClass('unsupported-browser');
	}
	$(document.body).removeClass('loading');
})