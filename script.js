const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank You! Your message has been sent successfully.");

    form.reset();

});

const profile = document.querySelector(".hero-image img");

profile.addEventListener("click", function () {

    alert("Welcome to My Portfolio!");

});

profile.style.transition = "0.5s";

profile.addEventListener("mouseover", function () {

    profile.style.transform = "rotate(6deg) translateY(-10px)";

});

profile.addEventListener("mouseout", function () {

    profile.style.transform = "rotate(0deg) translateY(0)";

});

const heading = document.querySelector(".hero-text h1");

setInterval(function () {

    if (heading.style.color === "tomato") {
        heading.style.color = "#333";
    } else {
        heading.style.color = "tomato";
    }

}, 1100);

const buttons = document.querySelectorAll(".button, form button");

buttons.forEach(function (button) {

    button.addEventListener("mouseover", function () {

        button.style.transform = "scale(1.08)";

    });

    button.addEventListener("mouseout", function () {

        button.style.transform = "scale(1)";

    });

});
const links = document.querySelectorAll("#navbar a");
const indicator = document.querySelector(".nav-move");

links.forEach(function(link){

    link.addEventListener("click", function(){

        indicator.style.width = this.offsetWidth + "px";
        indicator.style.left = this.parentElement.offsetLeft + "px";

    });

});

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {

    card.addEventListener("mouseover", function () {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseout", function () {

        card.style.transform = "translateY(0)";

    });

});

const projects = document.querySelectorAll(".project");

projects.forEach(function (project) {

    project.addEventListener("mouseover", function () {

        project.style.transform = "scale(1.03)";

    });

    project.addEventListener("mouseout", function () {

        project.style.transform = "scale(1)";

    });

});

const logo = document.querySelector(".logo");

logo.addEventListener("click", function () {

    alert("Hello! I'm Tanvir.");

});