document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! We will get back to you soon.");
        form.reset();
    });
});
