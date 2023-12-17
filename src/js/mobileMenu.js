document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('.toggler');
    if (checkbox && localStorage.getItem('checkboxState')) {
        checkbox.checked = localStorage.getItem('checkboxState') === 'true';
    }
    checkbox.addEventListener('change', function () {
    
        localStorage.setItem('checkboxState', checkbox.checked);
    });

    var links = document.querySelectorAll('a');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            checkbox.checked = false;
            localStorage.setItem('checkboxState', checkbox.checked);
        });
    });
});