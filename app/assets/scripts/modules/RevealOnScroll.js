import { last, throttle } from "lodash";
import debounce from "lodash/debounce";

class RevealOnScroll {
  constructor(els, revealPoint) {
    this.revealPoint = revealPoint;
    this.ItemsToReveal = els;
    this.browserHeight = window.innerHeight;
    this.hideInitially();
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.events();
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle);
    window.addEventListener(
      "resize",
      debounce(() => {
        console.log("browseroog resize hiigdlee");
        this.browserHeight = window.innerHeight;
      }, 333)
    );
  }

  calcCaller() {
    this.ItemsToReveal.forEach((el) => {
      if (el.isReaveled == false) {
        this.calculateIfScrolledTo(el);
      }
    });
  }

  calculateIfScrolledTo(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      console.log("tootsoolol hiigdej bna");
      let scrollPercent =
        (el.getBoundingClientRect().y / this.browserHeight) * 100;
      if (scrollPercent < this.revealPoint) {
        el.classList.add("reveal-item--is-visible");
        el.isReaveled = true;
        if (el.isLastItem) {
          window.removeEventListener("scroll", this.scrollThrottle);
        }
      }
    }
  }
  hideInitially() {
    this.ItemsToReveal.forEach((el) => {
      el.classList.add("reveal-item");
      el.isReaveled = false;
    });
    this.ItemsToReveal[this.ItemsToReveal.length - 1].isLastItem = true;
  }
}

export default RevealOnScroll;
