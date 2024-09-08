export interface Product {
    img: string;
    id: number;
    name: string;
    price: number;
    category: string;
    oldprice: number;
    rating: number;
};

export const allProducts: Product[] = [
    { id: 1, img: "/images/iphone13.png", name: 'iPhone 12', oldprice: 1350, price: 999, category: 'iphone', rating: 3 },
    { id: 2, img: "/images/iphone13.png", name: 'MacBook Pro', oldprice: 1350, price: 1299, category: 'mac', rating: 5 },
    { id: 3, img: "/images/iphone13.png", name: 'AirPods Pro', oldprice: 1350, price: 199, category: 'accessories', rating: 4 },
    { id: 4, img: "/images/iphone13.png", name: 'iPad', oldprice: 1350, price: 799, category: 'ipad', rating: 4 },
    { id: 5, img: "/images/iphone13.png", name: 'MacBook air m1', oldprice: 1350, price: 1199, category: 'mac', rating: 5 },
    { id: 6, img: "/images/iphone13.png", name: 'Apple Watch', oldprice: 1350, price: 299, category: 'applewatch', rating: 2 },
];