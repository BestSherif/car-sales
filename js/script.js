// "use strict";

// бургер меню
function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById("myDropdown").classList.toggle("show");
}

// бургер меню, смещение вверху при начале скрола
window.onscroll = function () {
  let scrollPosition = window.scrollY;
  let burgerElement = document.getElementById("container");
  let myDropdownElement = document.getElementById("myDropdown");
  if (scrollPosition > 0) {
    burgerElement.style.top = "2rem";
    burgerElement.style.display = "inline-block";
    myDropdownElement.style.top = "8rem";
  } else {
    burgerElement.style.top = "11rem";
    myDropdownElement.style.top = "17rem";
    burgerElement.style.display = "none";
  }
};

let expandables = document.getElementsByClassName("faq-expandable");
console.log(expandables);
for (let i = 0; i < expandables.length; i++) {
  expandables[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// <!-- Google tag (gtag.js) from google Analitics --> */

let script = document.createElement("script");
script.src = "https://www.googletagmanager.com/gtag/js?id=G-8M4LQ21M2W";
document.head.appendChild(script);

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-8M4LQ21M2W");

// Function to run when user accepts cookies and privacy policy
function acceptCookiesAndPrivacyPolicy() {
  // Hide the banner
  document.getElementById("consent-banner").style.display = "none";

  // Set a cookie to remember the user's choice for 30 days
  let date = new Date();
  date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days in milliseconds
  let expires = "; expires=" + date.toGMTString();

  document.cookie = "consentGiven=true" + expires + "; path=/";
}

// Show the banner when the page loads, if the user hasn't accepted yet
window.onload = function () {
  // Check if the user has already accepted
  let consentGiven = document.cookie
    .split("; ")
    .find((row) => row.startsWith("consentGiven="));

  if (!consentGiven) {
    document.getElementById("consent-banner").style.display = "block";
  }
};
