// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import scripts from './modules/scripts.js';
import FullPageScroll from './modules/full-page-scroll';
import prizes from "./modules/prizes";
import AnimationLauncher from './modules/animation-launcher';

// init modules
scripts();
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();

document.addEventListener(`DOMContentLoaded`, () => {
  fullPageScroll.init();
  prizes();
});


// animationend

const lastItem = document.querySelector(`.rules__list > :last-child`);
const rulesScreen = document.querySelector(`.screen--rules`);

lastItem.onanimationend = () => {
  rulesScreen.classList.add(`animated`);
};

// animationend Flamingo

const flamingoImage = document.querySelector(`.result__flamingo`);

flamingoImage.onanimationend = () => {
  flamingoImage.classList.add(`rotate`);
};

const animationLauncher = new AnimationLauncher();
animationLauncher.init();
