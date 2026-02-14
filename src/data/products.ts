export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  colors?: string[];
  description: string;
  badge?: string;
};

export const categories = [
  "All",
  "Hair Clips",
  "Headbands",
  "Scrunchies",
  "Hair Bows",
  "Luxury Collection",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    id: "1",
    name: "Pearl Blossom Hair Clip",
    price: 24.99,
    category: "Hair Clips",
    image: "product-1",
    rating: 4.8,
    reviews: 124,
    colors: ["Gold", "Silver", "Rose Gold"],
    description: "A stunning pearl cluster hair clip that adds instant elegance to any hairstyle. Crafted with hand-selected freshwater pearls on a gold-plated base.",
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Velvet Knotted Headband",
    price: 18.99,
    originalPrice: 24.99,
    category: "Headbands",
    image: "product-2",
    rating: 4.6,
    reviews: 89,
    colors: ["Blush Pink", "Burgundy", "Black"],
    description: "Luxuriously soft velvet headband with an elegant knot detail. Comfortable enough for all-day wear while keeping your hair perfectly in place.",
  },
  {
    id: "3",
    name: "Silk Scrunchie Set",
    price: 29.99,
    category: "Scrunchies",
    image: "product-3",
    rating: 4.9,
    reviews: 203,
    colors: ["Pastel Set", "Neutral Set", "Jewel Set"],
    description: "Set of 5 pure silk scrunchies that are gentle on your hair, reducing breakage and frizz. Each set features a curated palette of complementary colors.",
    badge: "Best Seller",
  },
  {
    id: "4",
    name: "Satin Oversized Bow",
    price: 15.99,
    category: "Hair Bows",
    image: "product-4",
    rating: 4.7,
    reviews: 67,
    colors: ["Champagne", "Ivory", "Blush"],
    description: "A beautiful oversized satin bow that makes a statement. Perfect for adding a touch of feminine charm to your everyday look.",
  },
  {
    id: "5",
    name: "Crystal Floral Hair Comb",
    price: 42.99,
    category: "Luxury Collection",
    image: "product-5",
    rating: 5.0,
    reviews: 45,
    colors: ["Gold", "Silver"],
    description: "An exquisite hand-crafted hair comb featuring crystal-encrusted leaves and freshwater pearls. Perfect for special occasions and bridal styling.",
    badge: "New",
  },
  {
    id: "6",
    name: "Gold Chain Hair Piece",
    price: 34.99,
    category: "Luxury Collection",
    image: "product-6",
    rating: 4.8,
    reviews: 31,
    colors: ["Gold"],
    description: "Delicate gold chain hair jewelry with pearl drop accents. A unique and ethereal addition to your hair accessory collection.",
    badge: "New",
  },
];
