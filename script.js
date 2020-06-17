const marker = document.getElementById('marker');
const item = document.querySelectorAll('.box');

function indicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.top = e.offsetTop + 'px';
    marker.style.width = e.offsetWidth + 'px';
    marker.style.height = e.offsetHeight + 'px';
}

item.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        indicator(e.currentTarget)
    })
})