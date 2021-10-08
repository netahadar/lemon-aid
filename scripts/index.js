const mainButton = document.querySelector(".main__button");
const cards = document.querySelector(".cards");

mainButton.addEventListener("click", () => {
    cards.classList.add("cards_active");
    window.scrollTo(0,document.querySelector(".main").scrollHeight);
});

const helpCard = document.querySelector(".cards__paragraph_place_second");

helpCard.addEventListener("click", () => {
 open("https://edisonsc.github.io/lemon-aid/support.html", "_blank")
})
