function toggleNavbar() {
    var navLinks = document.getElementById("navLinks");
    var bars = document.querySelectorAll(".bar");

    navLinks.classList.toggle("show");

    bars.forEach(bar => {
        bar.classList.toggle("active");
    });
}