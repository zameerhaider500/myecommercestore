export const products = [
  {
    id: 1,
    name: "The Classic Bifold - Jet Black",
    slug: "the-classic-black", // MUST be unique, no spaces!
    price: 1199,
    oldPrice: 1899.99,
    description: "Experience timeless sophistication with our flagship black bifold wallet. Handcrafted from top-grain leather, it combines a sleek, ultra-slim profile with generous storage for cash and cards. Built to age gracefully and fit comfortably in your pocket without creating bulk.",
    images: [
      "/img/black-wallet.png",
      "/img/black-wallet.png"
    ],
    rating: 4.9,
    reviewCount: 145,
    stock: 20,
    features: ["100% Genuine Top-Grain Leather", "Ultra-Slim Profile & 6 Card Slots", "Reinforced Edge Stitching for Durability"]
  },
  {
    id: 2, // Always increase the ID by 1
    name: "The Heritage - Vintage Tan",
    slug: "the-heritage-tan", // This becomes the URL: /product/minimalist-fitness-watch
    price: 1199,
    oldPrice: 1899.99,
    description: "Elevate your daily carry with classic warmth and timeless style. Handcrafted from premium tan leather, this wallet is designed to develop a rich, personal patina over time. Features a slim profile, precision stitching, and organized compartments for all your essentials.",
    images: [
      "/img/brown-wallet.png"
    ],
    rating: 4.5,
    reviewCount: 89,
    stock: 35,
    features: ["100% Full-Grain Vintage Leather", "Rich Natural Patina Development", "6 Card Slots & Cash Compartment"]
  },
  {
    id: 3,
    name: "The Minimalist - Slim Card Holder",
    slug: "card-holder-slim-bifold",
    price: 899,
    oldPrice: 1799, // No discount for this one
    description: "Designed for total bulk elimination. Crafted from premium top-grain leather with precision perimeter stitching, this ultra-slim card holder keeps your daily cards and folded cash organized in a sleek, front-pocket profile.",
    images: [
      "/img/card-holder-wallet.png"
    ],
    rating: 4.7,
    reviewCount: 212,
    stock: 50,
    features: ["Ultra-Slim Front Pocket Profile", "Quick-Access External Card Slots", "100% Genuine Top-Grain Leather"]
  }
];