import sliderTemplate from './slider.html?raw';
import './slider.scss';
import { createElementFromTemplate } from '../../shared/lib/dom';
import { createSlideCard } from '../../entities/slide-card/slide-card.template';
import { coffeeSlides } from '../../shared/data/coffee-slides';

export function createSlider() {
  const sliderElement = createElementFromTemplate(sliderTemplate);
  const track = sliderElement.querySelector('.slider__track');
  const dotsContainer = sliderElement.querySelector('.slider__dots');
  const prevBtn = sliderElement.querySelector('.slider__btn--prev');
  const nextBtn = sliderElement.querySelector('.slider__btn--next');

  let currentIndex = 0;
  const total = coffeeSlides.length;

  coffeeSlides.forEach((slide) => track.append(createSlideCard(slide)));

  const dots = coffeeSlides.map((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'slider__dot';
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.append(dot);
    return dot;
  });

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.removeAttribute('aria-current');
      }
    });
  }

  function goToSlide(index) {
    currentIndex = (index + total) % total;
    updateSlider();
  }

  prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

  updateSlider();

  return sliderElement;
}
