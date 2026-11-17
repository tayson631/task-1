const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

const visitorForm = document.getElementById("visitor-form");
const greetingMsg = document.getElementById("greeting-msg");

visitorForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.getElementById("visitor-name").value.trim();
    const emailInput = document.getElementById("email").value.trim();

    if (nameInput !== "" && emailInput !== "") {
        greetingMsg.textContent = "Hello, " + nameInput + "! Thanks for visiting.";
        visitorForm.reset();
    }
});