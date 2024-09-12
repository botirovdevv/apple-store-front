"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Search from '../components/product/search';
import Filter from '../components/product/filter';
import Image from 'next/image';
import Link from 'next/link';
import { FaFilter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { allProducts, Product } from '@/app/constants/product';

const ProductsPage: React.FC = () => {
    const { category } = useParams();
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (typeof category === 'string') {
            const filtered = allProducts.filter(product =>
                product.category.toLowerCase() === category.toLowerCase()
            );
            setProducts(filtered);
            setFilteredProducts(filtered);
        }
    }, [category]);

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        if (term) {
            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    };

    const renderRating = (rating: number) => {
        const fullStars = '★'.repeat(rating);
        const emptyStars = '☆'.repeat(5 - rating);
        return (
            <span style={{ color: '#fa8232' }}>
                {fullStars}{emptyStars}
            </span>
        );
    };

    if (!category) {
        return <p>Loading...</p>;
    }

    return (
        <div className="products">
            <div className={isOpen ? "products-bg show" : "products-bg"} onClick={() => setIsOpen(false)}></div>
            <div className="container">
                <div className="products-content">
                    <div className={isOpen ? "products-filter show" : "products-filter"}>
                        <button className='products-close_btn' onClick={() => setIsOpen(false)}>
                            <IoClose fontSize={25} />
                        </button>
                        <ul className="products-categories">
                            <Link className='products-link' href={'/products/mac'}>iMac</Link>
                            <Link className='products-link' href={'/products/macbook'}>Macbook</Link>
                            <Link className='products-link' href={'/products/airpods'}>AirPods</Link>
                            <Link className='products-link' href={'/products/apple-watch'}>Apple Watch</Link>
                        </ul>
                        <Filter products={products} setFilteredProducts={setFilteredProducts} />
                    </div>
                    <div className="products-cards">
                        <div className="products-items">
                            <button className="products-filter_btn" onClick={() => setIsOpen(true)}>
                                <FaFilter color="#8b8e99" fontSize={21} />
                            </button>
                            <Search onSearch={handleSearch} />
                        </div>
                        <div className="products-list">
                            {filteredProducts.length ? (
                                filteredProducts.map(product => (
                                    <Link href={`/product/${product.id}`} key={product.id} className="products-card">
                                        <div className="products-image">
                                            <Image src={product.img} alt={product.name} className='products-img' width={120} height={161} />
                                        </div>
                                        <div className="products-info">
                                            <p>{renderRating(product.rating)}</p>
                                            <h3 className='products-name'>{product.name}</h3>
                                            <div className="products-product_price">
                                                {product.oldprice && <h2 className="products-old_price">{product.oldprice} $</h2>}
                                                <p className='products-price'>{product.price} $</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p>No products found in this category.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
