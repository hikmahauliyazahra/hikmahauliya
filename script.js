// Menampilkan pesan ketika website selesai dimuat
document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio Hikmah berhasil dimuat!");

});


// Efek fade-in ketika section masuk ke layar
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    },
    {
        threshold: 0.15
    }
);


// Memberikan efek awal pada setiap section
sections.forEach(function (section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});
