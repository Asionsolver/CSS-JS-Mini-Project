const body = document.querySelector('body');
    sideBar = body.querySelector('.sidebar');
    toggle = body.querySelector('.toggle');
    searchBtn = body.querySelector('.search-box');
    modeSwtich = body.querySelector('.toggle-switch');
    modeText = body.querySelector('.mode-text');

// Toggle Sidebar
modeSwtich.addEventListener('click', function () {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        modeText.innerHTML = 'Light Mode';
    } else {
        modeText.innerHTML = 'Dark Mode';
    }

});


toggle.addEventListener('click', function () {
    sideBar.classList.toggle('close');
});

searchBtn.addEventListener('click', function () {
    sideBar.classList.remove('close');
});

