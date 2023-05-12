let IsMobile = false;
function checkPortrait() {
    if (checkMobile()) {
        IsMobile = true;
        console.log('Mobile')
    } else {
        console.log('No Mobile')

        IsMobile = false;
    }
}

$(document).ready(function () {
    checkPortrait()
    $(window).resize(checkPortrait)
})

function checkMobile() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return true;
    }

    if (/android/i.test(userAgent)) {
        return true;
    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return true;
    }

    if($(window).width() < 800)
        return true
    return false;
}