import './product.scss';
import { createElementFromTemplate } from '../../shared/lib/dom';

function productCardTemplate({ id, title, description, price, image }) {
  return `
    <li class="product-card-item">
      <article class="product-card" data-product-id="${id}">
        <img class="product-card__image" src="${image}" alt="${title}" loading="lazy" />
        <div class="product-card__info">
          <h3 class="product-card__title">${title}</h3>
          <p class="product-card__description">${description}</p>
          <p class="product-card__price">$${price.toFixed(2)}</p>
        </div>
      </article>
    </li>
  `;
}

export function createProductCard(product) {
  return createElementFromTemplate(productCardTemplate(product));
}
