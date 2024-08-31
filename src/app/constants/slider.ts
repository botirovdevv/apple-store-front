type sliderType = {
    id: number;
    title: string;
    price: string;
    image: string;
    colors: string[];
};

export const products: sliderType[] = [
    {
        id: 1,
        title: 'iPhone SE',
        price: 'From ₹30,000',
        image: '/images/iphone13.png',
        colors: ['Black', 'Green', 'Red'],
    },
    {
        id: 2,
        title: 'iPhone 13',
        price: 'From ₹59,000',
        image: '/images/iphone13.png',
        colors: ['Blue', 'Green', 'Pink'],
    },
    {
        id: 3,
        title: 'iPhone 14 Pro',
        price: 'From ₹75,000',
        image: '/images/iphone13.png',
        colors: ['Silver', 'Gold', 'Space Gray'],
    },
    {
        id: 4,
        title: 'iPhone 14',
        price: 'From ₹69,000',
        image: '/images/iphone13.png',
        colors: ['Purple', '#9FB5C8', 'Starlight'],
    },
    {
        id: 5,
        title: 'iPhone SE',
        price: 'From ₹30,000',
        image: '/images/iphone13.png',
        colors: ['Black', '9FB5C8', 'Red', 'Blue', 'Green', 'Yellow'],
    },
];
