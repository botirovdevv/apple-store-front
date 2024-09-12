"use client"
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { allProducts } from '@/app/constants/product';
import { Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import { FaRegHeart } from "react-icons/fa6";

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === Number(id));

  const [selectedRam, setSelectedRam] = useState<string>('8GB');
  const [selectedSsd, setSelectedSsd] = useState<string>('256GB');
  const [selectedSize, setSelectedSize] = useState<string>('14-inch Liquid Retina XDR Display');

  if (!product) {
    return <p>Product not found.</p>;
  }

  const ramOptions = ['8GB', '16GB', '32GB'];
  const ssdOptions = ['256GB', '512GB', '1TB'];
  const sizeOptions = ['14-inch Liquid Retina XDR Display', '16-inch Liquid Retina XDR Display', '24-inch Liquid Retina XDR Display'];

  const handleRamChange = (event: SelectChangeEvent) => {
    setSelectedRam(event.target.value);
  };

  const handleSsdChange = (event: SelectChangeEvent) => {
    setSelectedSize(event.target.value);
  };

  const handleSizeChange = (event: SelectChangeEvent) => {
    setSelectedRam(event.target.value);
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

  return (
    <div className="product">
      <div className="container">
        <div className="product-content">
          <div className="product-image">
            <Image src={product.img} alt={product.name} width={400} height={500} className='product-img' />
          </div>
          <div className="product-info">
            <p className='product-rate'>{renderRating(product.rating)}</p>
            <h1 className='product-name'>{product.name}</h1>
            <div className="product-price_items">
              <h2 className='product-price'>Price: {product.price} $</h2>
              {product.oldprice && <p className='product-old_price'>Old Price: {product.oldprice} $</p>}
            </div>
            <p className="product-desc">Description: {product.description}</p>
            <hr />

            <div className="product-selections">
              <FormControl fullWidth>
                <InputLabel id="ram-select-label">Memory</InputLabel>
                <Select
                  labelId="ram-select-label"
                  value={selectedRam}
                  onChange={handleRamChange}
                  label="Memory"
                >
                  {ramOptions.map(ram => (
                    <MenuItem key={ram} value={ram}>
                      {ram}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth style={{ marginTop: '16px' }}>
                <InputLabel id="ssd-select-label">Size</InputLabel>
                <Select
                  labelId="ssd-select-label"
                  value={selectedSize}
                  onChange={handleSizeChange}
                  label="Size"
                >
                  {sizeOptions.map(size => (
                    <MenuItem key={size} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth style={{ marginTop: '16px' }}>
                <InputLabel id="ssd-select-label">Storage</InputLabel>
                <Select
                  labelId="ssd-select-label"
                  value={selectedSsd}
                  onChange={handleSsdChange}
                  label="Storage"
                >
                  {ssdOptions.map(ssd => (
                    <MenuItem key={ssd} value={ssd}>
                      {ssd}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="product-buttons">
                <div className="product-counter">
                  <button className='product-counter_btn'>-</button>
                  <span className="product-number">1</span>
                  <button className='product-counter_btn'>+</button>
                </div>
                <button className="product-add_btn">Add To Cart</button>
              </div>

              <div className="product-buy">
                <button className="product-buy_btn">Buy Now</button>
                <button className="product-heart_btn">
                  <FaRegHeart color='#8b8e99' fontSize={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
