import rawProducts from './products.json';
import { toCents } from '@/shared/lib/money';

const slugify = (text) => text.trim().toLowerCase().replace(/\s+/g, '-');
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

function toProduct(dto) {
  const id = slugify(dto.name);

  return Object.freeze({
    id,
    category: dto.category,
    title: dto.name,
    description: dto.description,
    priceCents: toCents(dto.price),
    image: assetUrl(`img/catalog/${dto.category}/${id}.jpg`),
    sizes: Object.entries(dto.sizes).map(([key, { size, 'add-price': addPrice }]) => ({
      key,
      label: size,
      addPriceCents: toCents(addPrice),
    })),
    additives: dto.additives.map(({ name, 'add-price': addPrice }) => ({
      id: slugify(name),
      label: name,
      addPriceCents: toCents(addPrice),
    })),
  });
}

export const PRODUCTS = rawProducts.map(toProduct);

const productsById = new Map(PRODUCTS.map((product) => [product.id, product]));

export const getProductById = (id) => productsById.get(id);
export const getProductsByCategory = (category) => PRODUCTS.filter((p) => p.category === category);
