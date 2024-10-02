function toggleMenu() {
    const menu = document.getElementById('menu');
    const bars = document.querySelectorAll('.bar');
    menu.classList.toggle('mobile-menu');

    bars.forEach(bar => bar.classList.toggle('open'));
}
