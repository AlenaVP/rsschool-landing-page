export const toCents = (value) => Math.round(Number.parseFloat(value) * 100);
export const formatPrice = (cents) => `$${(cents / 100).toFixed(2)}`;
