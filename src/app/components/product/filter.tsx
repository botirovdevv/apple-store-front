import React, { useState } from 'react';

const Filter: React.FC<{ products: any[], setFilteredProducts: (products: any[]) => void }> = ({ products, setFilteredProducts }) => {
  const [priceRange, setPriceRange] = useState<number | null>(null);

  const handleFilter = () => {
    let filtered = products;
    if (priceRange) {
      filtered = products.filter(product => product.price <= priceRange);
    }
    setFilteredProducts(filtered);
  };

  return (
    <div className="filter">
      <label>Price Range:</label>
      <input
        type="number"
        value={priceRange || ''}
        onChange={(e) => setPriceRange(Number(e.target.value))}
        placeholder="Enter max price"
      />
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default Filter;
