import './slide-card.scss';
import { formatPrice } from '@/shared/lib/money';

export function createSlideCard({ image, title, description, priceCents }) {
  const card = document.createElement('article');
  card.className = 'slide-card';
  card.innerHTML = `
    <img src="${image}" alt="${title}" class="slide-card__image" />
    <h3 class="slide-card__title">${title}</h3>
    <p class="slide-card__description">${description}</p>
    <p class="slide-card__price">${formatPrice(priceCents)}</p>
  `;
  return card;
}
