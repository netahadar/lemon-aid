const mainButton = document.querySelector(".main__button");
const cards = document.querySelector(".cards");

mainButton.addEventListener("click", () => {
    cards.classList.add("cards_active");
    window.scrollTo(0,document.querySelector(".main").scrollHeight);
});


