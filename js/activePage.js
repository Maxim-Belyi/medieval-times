export function activePage() {
    document.addEventListener("DOMContentLoaded", function () {
        const currentPage = window.location.pathname;
        const navLinks = document.querySelectorAll("nav a");
        navLinks.forEach(link => {

            if (new URL(link.href).pathname === currentPage) {
                link.classList.add("active");
            }
        });
    });
};