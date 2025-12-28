export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
}


export const products: Product[] = [
  {
    id: 1,
    name: "Raw Makhana – 200g Pouch",
    slug: "raw-makhana-200g",
    price: 265,
    originalPrice: 298,
    image: "/images/products/raw-makhana.jpg",
    description: "Premium quality raw makhana sourced naturally..."
  },
  {
    id: 2,
    name: "Water Chestnut Flour – 200gm Pouch",
    slug: "water-chestnut-flour-200g",
    price: 535,
    originalPrice: 595,
    image: "/images/products/water-chestnut-flour.jpg",
    description: "Premium quality water chestnut flour sourced naturally..."
  }
];
