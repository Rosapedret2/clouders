document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("galeria");
    const button = document.querySelector(".custom-button a");

    button.addEventListener("click", function (e) {
        e.preventDefault();
        if (gallery.style.display === "none" || gallery.style.display === "") {
            gallery.style.display = "block";
        } else {
            gallery.style.display = "none";
        }
    });
});
