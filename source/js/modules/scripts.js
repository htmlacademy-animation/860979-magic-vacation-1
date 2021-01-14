import {
  TypographyBuilder
}
  from './typography-builder';

export
default () => document.addEventListener(`DOMContentLoaded`, () => {
  document.body.classList.add(`endLoad`);

  // module 2 task 2
  const animationTopScreenTextLine = new TypographyBuilder({
    elementSelector: `.intro__title`,
  });

  const animationTopScreenDateLine = new TypographyBuilder({
    elementSelector: `.intro__date`,
    delay: 1500,
  });

  const animationTopScreenHistoryItemLine = new TypographyBuilder({
    elementSelector: `.slider__item-title`,
  });


  const animationTopScreenPrizesLine = new TypographyBuilder({
    elementSelector: `.prizes__title`,
    delay: 1200,
  });


  const animationTopScreenRulesLine = new TypographyBuilder({
    elementSelector: `.rules__title`,
  });


  const animationTopScreenGameLine = new TypographyBuilder({
    elementSelector: `.game__title`,
  });


  animationTopScreenTextLine.run();
  animationTopScreenDateLine.run();
  animationTopScreenHistoryItemLine.run();
  animationTopScreenPrizesLine.run();
  animationTopScreenRulesLine.run();
  animationTopScreenGameLine.run();
});
