export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Wooden Coffee Table",
    description: "Elegant coffee table with solid oak construction and minimalist design. Perfect for modern living rooms.",
    price: 249.99,
    category: "living-room",
    image: "/images/coffee-table.jpg",
    featured: true,
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: "2",
    name: "Scandinavian Accent Chair",
    description: "Comfortable accent chair with Scandinavian-inspired design, featuring natural wood legs and soft fabric upholstery.",
    price: 329.99,
    category: "living-room",
    image: "/images/accent-chair.jpg",
    featured: true,
    inStock: true,
    rating: 4.7,
    reviews: 98
  },
  {
    id: "3",
    name: "Modern Sectional Sofa",
    description: "Spacious sectional sofa with modular design, perfect for family gatherings and entertaining guests.",
    price: 1299.99,
    category: "living-room",
    image: "/images/sectional-sofa.jpg",
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 215
  },
  {
    id: "4",
    name: "Industrial Bookshelf",
    description: "Industrial-style bookshelf with metal frame and wooden shelves, providing ample storage for books and decorative items.",
    price: 189.99,
    category: "storage",
    image: "/images/bookshelf.jpg",
    featured: false,
    inStock: true,
    rating: 4.6,
    reviews: 87
  },
  {
    id: "5",
    name: "King Size Platform Bed",
    description: "Modern king-size platform bed with integrated storage drawers and upholstered headboard.",
    price: 899.99,
    category: "bedroom",
    image: "/images/platform-bed.jpg",
    featured: true,
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: "6",
    name: "Velvet Dining Chairs (Set of 4)",
    description: "Luxurious velvet dining chairs with gold-finished metal legs, adding elegance to any dining room.",
    price: 599.99,
    category: "dining-room",
    image: "/images/dining-chairs.jpg",
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 112
  },
  {
    id: "7",
    name: "Marble Dining Table",
    description: "Stunning dining table with marble top and sturdy metal base, comfortably seating 6 people.",
    price: 1499.99,
    category: "dining-room",
    image: "/images/dining-table.jpg",
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 78
  },
  {
    id: "8",
    name: "Rattan Bedside Table",
    description: "Handcrafted rattan bedside table with drawer, blending natural materials with contemporary design.",
    price: 149.99,
    category: "bedroom",
    image: "/images/bedside-table.jpg",
    featured: false,
    inStock: true,
    rating: 4.5,
    reviews: 64
  },
  {
    id: "9",
    name: "Linen Bedding Set",
    description: "Premium linen bedding set including duvet cover and pillowcases, available in various muted colors.",
    price: 199.99,
    category: "bedroom",
    image: "/images/bedding-set.jpg",
    featured: false,
    inStock: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: "10",
    name: "Decorative Wall Mirror",
    description: "Round decorative mirror with thin gold frame, perfect for enhancing space and light in any room.",
    price: 129.99,
    category: "decor",
    image: "/images/wall-mirror.jpg",
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 93
  },
  {
    id: "11",
    name: "Ceramic Table Lamp",
    description: "Elegant ceramic table lamp with textured base and linen shade, creating a warm ambiance.",
    price: 89.99,
    category: "lighting",
    image: "/images/table-lamp.jpg",
    featured: false,
    inStock: true,
    rating: 4.6,
    reviews: 76
  },
  {
    id: "12",
    name: "Woven Storage Baskets (Set of 3)",
    description: "Handwoven storage baskets in different sizes, perfect for organizing items throughout your home.",
    price: 59.99,
    category: "storage",
    image: "/images/storage-baskets.jpg",
    featured: false,
    inStock: true,
    rating: 4.5,
    reviews: 108
  }
];

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const categories = [
  { name: "Living Room", slug: "living-room" },
  { name: "Bedroom", slug: "bedroom" },
  { name: "Dining Room", slug: "dining-room" },
  { name: "Storage", slug: "storage" },
  { name: "Lighting", slug: "lighting" },
  { name: "Decor", slug: "decor" }
]; 