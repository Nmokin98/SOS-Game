//Swiper
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  sliderPerView: 1,
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
  },
});

// Scroll to anchors
(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();

//Accordeon

const accordeonItem = document.querySelector(".accordeon");
const itemText = document.querySelectorAll(".item-text");

accordeonItem.addEventListener("click", (e) => {
  const indexItem = e.target.dataset.title;
  for (let i = 0; i < itemText.length; i++) {
    itemText[i].classList.remove("active");
    if (itemText[i].dataset.text === indexItem) {
      itemText[i].classList.add("active");
    }
  }
});
