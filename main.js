document.addEventListener('DOMContentLoaded', function() {
    const mainMenu = document.getElementById('main-menu');
    const startSection = document.getElementById('start-section');
    const infoSection = document.getElementById('info-section');
    const startBtn = document.getElementById('start-btn');
    const infoBtn = document.getElementById('info-btn');
    const backToMenuStart = document.getElementById('back-to-menu');
    const backToMenuInfo = document.getElementById('back-to-menu-info');

    function showSection(section) {
        mainMenu.classList.remove('active');
        mainMenu.classList.add('hidden');
        startSection.classList.add('hidden');
        infoSection.classList.add('hidden');
        section.classList.remove('hidden');
    }

    function hideSections() {
        startSection.classList.add('hidden');
        infoSection.classList.add('hidden');
        mainMenu.classList.remove('hidden');
        mainMenu.classList.add('active');
    }

    startBtn.addEventListener('click', function() {
        showSection(startSection);
    });

    infoBtn.addEventListener('click', function() {
        showSection(infoSection);
    });

    backToMenuStart.addEventListener('click', hideSections);
    backToMenuInfo.addEventListener('click', hideSections);
});
