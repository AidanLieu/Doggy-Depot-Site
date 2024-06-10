document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
        <div class="carousel__nav">
            <p id="carouselCaption">Our wonderful customers!</p>
            ${buttonsHtml.join("")}
        </div>
    `
  );

  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");

  let currentIndex = 0;
  const changeItem = () => {
    items[currentIndex].classList.remove("carousel__item--selected");
    buttons[currentIndex].classList.remove("carousel__button--selected");
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add("carousel__item--selected");
    buttons[currentIndex].classList.add("carousel__button--selected");
  };

  // Change item every 3 seconds
  setInterval(changeItem, 3000);
});
