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
    price: 599,
    originalPrice: 650,
    image: "/images/products/raw-makhana.jpg",
    description: "Premium quality raw makhana sourced naturally..."
  },
  {
    id: 2,
    name: "Water Chestnut Flour – 200gm Pouch",
    slug: "water-chestnut-flour-200g",
    price: 399,
    originalPrice: 450,
    image: "/images/products/water-chestnut-flour.jpg",
    description: "Premium quality water chestnut flour sourced naturally..."
  },
   {
    id: 3,
    name: "Raw Makhana – 200g Pouch",
    slug: "raw-makhana-200g",
    price: 599,
    originalPrice: 650,
    image: "/images/products/raw-makhana.jpg",
    description: "Premium quality raw makhana sourced naturally..."
  },
  {
    id: 4,
    name: "Water Chestnut Flour – 200gm Pouch",
    slug: "water-chestnut-flour-200g",
    price: 399,
    originalPrice: 450,
    image: "/images/products/water-chestnut-flour.jpg",
    description: "Premium quality water chestnut flour sourced naturally..."
  },
   {
    id: 5,
    name: "Raw Makhana – 200g Pouch",
    slug: "raw-makhana-200g",
    price: 599,
    originalPrice: 650,
    image: "/images/products/raw-makhana.jpg",
    description: "Premium quality raw makhana sourced naturally..."
  },
  {
    id: 6,
    name: "Water Chestnut Flour – 200gm Pouch",
    slug: "water-chestnut-flour-200g",
    price: 399,
    originalPrice: 450,
    image: "/images/products/water-chestnut-flour.jpg",
    description: "Premium quality water chestnut flour sourced naturally..."
  }
];
