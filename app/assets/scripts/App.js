import "../styles/style.css";
import "lazysizes";
import MobileMenu from "./modules/mobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

new StickyHeader();

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 50);

new MobileMenu();
let modal;

document
  .querySelectorAll(/* webpackChunkName: "ryabmooo" */ ".open-modal")
  .forEach((el) => {
    el.addEventListener("click", (el) => {
      el.preventDefault();
      if (typeof modal == "undefined") {
        import("./modules/Modal")
          .then((x) => {
            modal = new x.default();
            setTimeout(() => modal.openModal(), 20);
          })
          .catch(() => console.log("aldaa garlaa"));
      } else {
        modal.openModal();
      }
    });
  });
