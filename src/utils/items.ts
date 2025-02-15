export const ITEMS: string[] = (
  typeof import.meta.env.VITE_ITEMS === 'string' ? import.meta.env.VITE_ITEMS.split(',') : []
).map((item) => item.trim());
