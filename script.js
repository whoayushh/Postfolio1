function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");  
    icon.classList.toggle("open");
}
function toggleMode(){
    const body=document.body;
    body.classList.toggle("dark-mode");
}
let isDragging = false;
let offsetX, offsetY;

function startDrag(e) {
    isDragging = true;
    offsetX = e.clientX - parseFloat(getComputedStyle(document.getElementById('mode-toggle')).left);
    offsetY = e.clientY - parseFloat(getComputedStyle(document.getElementById('mode-toggle')).top);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
    document.getElementById('mode-toggle').style.cursor = 'grabbing';
}

function drag(e) {
    if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        document.getElementById('mode-toggle').style.left = x + 'px';
        document.getElementById('mode-toggle').style.top = y + 'px';
    }
}

function stopDrag() {
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
    document.getElementById('mode-toggle').style.cursor = 'grab';
}
// back to top button
document.addEventListener('DOMContentLoaded', function () {
    var backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function () {
        var scrollStep = -window.scrollY / (500 / 15);
        function scrollAnimation() {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
                requestAnimationFrame(scrollAnimation);
            }
        }

        // Start the smooth scroll animation
        scrollAnimation();
    });
});
