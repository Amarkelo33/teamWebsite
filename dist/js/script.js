  const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        specialDiv = document.querySelector("#main_header"),
        venmoBtn = document.querySelector("#venmo");

hamburger.addEventListener('click', () => {
menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
menu.classList.remove('active');
});

//HEADER TRANSITION
specialDiv.addEventListener("click", () => {
window.location.href = "index.html";
});

//VENMO DONATION LINK
venmoBtn.addEventListener('click', () => {
location.href = "https://account.venmo.com/u/artemka";
});

