function goBack() {
    try {
        const iframe = document.getElementById('iframe');
        if (iframe.contentWindow && iframe.contentWindow.history.length > 1) {
            iframe.contentWindow.history.back();
        } else {
            window.history.back();
        }
    } catch (e) {
        // Fallback for cross-origin iframes
        window.history.back();
    }
}

function toggleFullscreen() {
    const iframe = document.getElementById('iframe');
    const container = document.body; // Try to fullscreen the whole page or container

    if (!document.fullscreenElement) {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
        } else if (iframe.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

// Retrieve the app name and image from local storage
const appName = localStorage.getItem('app-name');
const appImage = localStorage.getItem('app-image');
const showNameAndImg = localStorage.getItem('shownameandimg');

// Set the content and src attribute
const appNameElem = document.getElementById('app-name');
const appImgElem = document.getElementById('app-image');

if (appNameElem) appNameElem.textContent = appName || "Loading...";
if (appImgElem) appImgElem.src = appImage || "";

function backtopage() {
    const type = localStorage.getItem('iframe-type');
    const mapping = {
        'apps': 'apps.html',
        'games': 'games.html',
        'credits': 'credits.html',
        'links': 'links.html',
        'info': 'index.html',
        'home': 'home.html',
        'settings': 'settings.html',
        'websites': 'websites.html',
        'vpns': 'vpns.html',
        'games-no-nav': 'games-no-nav.html'
    };
    
    if (mapping[type]) {
        window.location.href = mapping[type];
    } else {
        window.location.href = 'home.html';
    }
}

var iframeUrl = localStorage.getItem('storedURL');
var iframeElement = document.getElementById('iframe');
if (iframeUrl && iframeElement) {
    iframeElement.src = iframeUrl;
} else {
    console.error("No URL found in localStorage for the iframe");
}

function reload() {
    const iframe = document.getElementById('iframe');
    if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        setTimeout(() => {
            iframe.src = currentSrc;
        }, 10);
    }
}

if (showNameAndImg === 'true' && appNameElem && appImgElem) {
    appNameElem.style.display = 'inline';
    appImgElem.style.display = 'inline';
} else if (appNameElem && appImgElem) {
    appNameElem.style.display = 'none';
    appImgElem.style.display = 'none';
}
