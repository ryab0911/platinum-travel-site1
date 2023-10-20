import "../styles/style.css";
import MobileMenu from "./modules/mobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 50);

let mobileMenu = new MobileMenu();
