export type Product = {
    id: number;
    img: string;
    name: string;
    price: number;
    oldprice?: number;
    category: string;
    rating: number;
    description: string;
};

export const allProducts: Product[] = [
    { id: 1, img: "/images/iphone13.png", name: 'iPhone 12', price: 999, oldprice: 1350, category: 'iphone', rating: 3, description: "Apple's iPhone 12 with the latest features." },
    { id: 2, img: "/images/macbook.png", name: 'MacBook Pro', price: 1299, oldprice: 1350, category: 'mac', rating: 5, description: "2020 Apple MacBook Pro with Apple M1 Chip (14-inch, 16GB RAM, 1TB SSD Storage) - Space Gray" },
    { id: 3, img: "/images/iphone13.png", name: 'AirPods Pro', price: 199, oldprice: 1350, category: 'accessories', rating: 4, description: "AirPods Pro with active noise cancellation." },
    { id: 4, img: "/images/iphone13.png", name: 'iPad', price: 799, oldprice: 1350, category: 'ipad', rating: 4, description: "iPad with stunning display and powerful A14 chip." },
    { id: 5, img: "/images/macbook.png", name: 'MacBook Air m2', price: 1399, oldprice: 1450, category: 'mac', rating: 5, description: "MacBook Air M2 with exceptional battery life." },
    { id: 6, img: "/images/macbook.png", name: 'Apple Watch', price: 299, oldprice: 1350, category: 'applewatch', rating: 2, description: "Apple Watch with fitness and health features." },
];
