document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('languageToggle');
    const englishTexts = document.querySelectorAll('.en');
    const tamilTexts = document.querySelectorAll('.ta');

    function toggleLanguage() {
        const isTamil = languageToggle.checked;
        englishTexts.forEach(text => {
            text.style.display = isTamil ? 'none' : 'block';
        });
        tamilTexts.forEach(text => {
            text.style.display = isTamil ? 'block' : 'none';
        });
    }

    languageToggle.addEventListener('change', toggleLanguage);
    toggleLanguage();
});

function playVideo(video1) {
    var video = document.getElementById(video1);
    video.play();
    video.removeAttribute('controls');
}
function playVideo(video2) {
    var video = document.getElementById(video2);
    video.play();
    video.removeAttribute('controls');
}
function playVideo(video3) {
    var video = document.getElementById(video3);
    video.play();
    video.removeAttribute('controls');
}

document.querySelectorAll('.food').forEach(item => {
    item.addEventListener('click', function() {
        this.nextElementSibling.style.display = 'block'; 
    });
});