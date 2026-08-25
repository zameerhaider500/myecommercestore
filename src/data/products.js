export const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    slug: "premium-wireless-headphones", // MUST be unique, no spaces!
    price: 149.99,
    oldPrice: 199.99,
    description: "Immerse yourself in pure audio perfection. Our flagship wireless headphones feature industry-leading noise cancellation, 40-hour battery life, and ultra-plush memory foam ear cushions.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80"
    ],
    rating: 4.9,
    reviewCount: 145,
    stock: 20,
    features: ["Active Noise Cancellation", "40-Hour Battery Life", "Bluetooth 5.3"]
  },
  {
    id: 2, // Always increase the ID by 1
    name: "Minimalist Fitness Watch",
    slug: "minimalist-fitness-watch", // This becomes the URL: /product/minimalist-fitness-watch
    price: 89.99,
    oldPrice: 119.99,
    description: "Track your health and fitness goals with style. Features heart rate monitoring, sleep tracking, and a 7-day battery life in a sleek design.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
    ],
    rating: 4.5,
    reviewCount: 89,
    stock: 35,
    features: ["Heart Rate Monitor", "Sleep Tracking", "Water Resistant"]
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    slug: "portable-bluetooth-speaker",
    price: 59.99,
    oldPrice: null, // No discount for this one
    description: "Take your music anywhere. This rugged, waterproof speaker delivers 360-degree sound with a 12-hour battery life.",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80"
    ],
    rating: 4.7,
    reviewCount: 212,
    stock: 50,
    features: ["360° Sound", "IPX7 Waterproof", "12-Hour Battery"]
  }
];