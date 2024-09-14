export type Product = {
    id: number;
    img: string;
    name: string;
    price: number;
    oldprice?: number;
    category: string;
    rating: number;
    description: string;
    quantity: number;
  };
  
  export const allProducts: Product[] = [
    {
      id: 1,
      img: "/images/iphone13.png",
      name: "iPhone 12",
      price: 999,
      oldprice: 1350,
      category: "iphone",
      rating: 3,
      description: "Apple's iPhone 12 with the latest features.",
      quantity: 8,
    },
    {
      id: 2,
      img: "/images/macbook.png",
      name: "MacBook Pro",
      price: 1299,
      oldprice: 1350,
      category: "mac",
      rating: 5,
      description:
        "2020 Apple MacBook Pro with Apple M1 Chip (14-inch, 16GB RAM, 1TB SSD Storage) - Space Gray",
      quantity: 8,
    },
    {
      id: 3,
      img: "/images/iphone13.png",
      name: "AirPods Pro",
      price: 199,
      oldprice: 1350,
      category: "accessories",
      rating: 4,
      description: "AirPods Pro with active noise cancellation.",
      quantity: 8,
    },
    {
      id: 4,
      img: "/images/iphone13.png",
      name: "iPad",
      price: 799,
      oldprice: 1350,
      category: "ipad",
      rating: 4,
      description: "iPad with stunning display and powerful A14 chip.",
      quantity: 8,
    },
    {
      id: 5,
      img: "/images/macbook.png",
      name: "MacBook Air M2",
      price: 1399,
      oldprice: 1450,
      category: "mac",
      rating: 5,
      description: "MacBook Air M2 with exceptional battery life.",
      quantity: 8,
    },
    {
      id: 6,
      img: "/images/applewatchultra.png",
      name: "Apple Watch",
      price: 1099,
      oldprice: 1350,
      category: "applewatch",
      rating: 2,
      description: "Apple Watch with fitness and health features.",
      quantity: 8,
    },
  ];
  