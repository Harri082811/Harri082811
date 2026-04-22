function goBack() {
    try {
        const iframe = document.getElementById('iframe');
        if (iframe && iframe.contentWindow && iframe.contentWindow.history.length > 1) {
            iframe.contentWindow.history.back();
        } else {
            window.history.back();
        }
    } catch (e) {
        window.history.back();
    }
}

function toggleFullscreen() {
    const iframe = document.getElementById('iframe');
    if (!iframe) return;

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
    
    window.location.href = mapping[type] || 'home.html';
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

document.addEventListener('DOMContentLoaded', () => {
    const appName = localStorage.getItem('app-name');
    const appImage = localStorage.getItem('app-image');
    const showNameAndImg = localStorage.getItem('shownameandimg');
    const iframeUrl = localStorage.getItem('storedURL');

    const appNameElem = document.getElementById('app-name');
    const appImgElem = document.getElementById('app-image');
    const iframeElement = document.getElementById('iframe');

    if (appNameElem) appNameElem.textContent = appName || "Game";
    if (appImgElem) appImgElem.src = appImage || "";

    if (iframeElement && iframeUrl) {
        iframeElement.src = iframeUrl;
    } else if (iframeElement) {
        console.error("No URL found in localStorage for the iframe");
    }

    if (showNameAndImg === 'true' && appNameElem && appImgElem) {
        appNameElem.style.display = 'inline';
        appImgElem.style.display = 'inline';
    } else if (appNameElem && appImgElem) {
        appNameElem.style.display = 'none';
        appImgElem.style.display = 'none';
    }
});
