"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Search from '../../components/product/search';
import Filter from '../../components/product/filter';
import { useAuth } from '@/app/contexts/AuthContext';

type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
};

const allProducts: Product[] = [
    { id: 1, name: 'iPhone 12', price: 999, category: 'iphone' },
    { id: 2, name: 'MacBook Pro', price: 1299, category: 'mac' },
    { id: 3, name: 'AirPods Pro', price: 199, category: 'accessories' },
    { id: 4, name: 'iPad', price: 799, category: 'ipad' },
    { id: 5, name: 'MacBook air m1', price: 1199, category: 'mac' },
    { id: 6, name: 'Apple Watch', price: 299, category: 'applewatch' },
];

const ProductsPage: React.FC = () => {
    const { category } = useParams();
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (category) {
            const filtered = allProducts.filter(product => product.category === category);
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

    const { isAuthenticated, logout, login } = useAuth();


    if (!category) {
        return <p>Loading...</p>;
    }

    return (
        <div className="products-page">
            <Search onSearch={handleSearch} />
            <Filter products={products} setFilteredProducts={setFilteredProducts} />
            <div className="products-list">
                {filteredProducts.length ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <h3>{product.name}</h3>
                            <p>{product.price} $</p>
                        </div>
                    ))
                ) : (
                    <p>No products found in this category.</p>
                )}
            </div>
            <>

                {
                    isAuthenticated ? (
                        <button onClick={logout}>Logout</button>
                    ) : (
                        <button onClick={login}>Login</button>
                    )
                }
            </>
        </div>
    );
};

export default ProductsPage;
