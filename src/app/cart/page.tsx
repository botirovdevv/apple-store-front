"use client";
import { useEffect, useState } from "react";
import { Product } from "../constants/product";
import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Cart = () => {
  const [total, setTotal] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("carts") as string) || [];
    setProducts(savedProducts);
  }, []);

  const removeProduct = (id: number) => {
    const updatedCart = products.filter((product) => product.id !== id);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setProducts(updatedCart);
  };

  const handleIncrement = (id: number) => {
    const updatedCart = products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setProducts(updatedCart);
  };

  const handleDecrement = (id: number) => {
    const existProduct = products.find((product) => product.id === id);
    if (existProduct?.quantity === 1) {
      removeProduct(existProduct.id);
    } else {
      const updatedCart = products.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      localStorage.setItem("carts", JSON.stringify(updatedCart));
      setProducts(updatedCart);
    }
  };

  useEffect(() => {
    const total = products.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(total);
  }, [products]);

  return (
    <section className="cart">
      <div className="container">
        <div className="cart-content">
          <div className="cart-card">
            <h1 className="cart-title">Shopping Card</h1>
            <div className="cart-cards">
              {products.map((product) => (
                <div className="cart-product_card">
                  <button className="cart-delete_btn" onClick={() => removeProduct(product.id)}>
                    <IoMdCloseCircleOutline color="#8b8e99" fontSize={24} />
                  </button>
                  <Image src={product.img} alt={product?.name} objectFit="contain" className="cart-img" width={72} height={71} />
                  <h3 className="cart-product_name">{product?.name}</h3>
                  <p className="cart-subtitle">{product?.description.substring(0, 100)}...</p>
                  <span className="cart-old_price">${product?.oldprice}</span>
                  <span className="cart-price">${product?.price}</span>
                  <div className="product-counter cart-counter">
                    <button className='product-counter_btn' onClick={() => handleDecrement(product.id)}>-</button>
                    <span className="product-number">{product.quantity}</span>
                    <button className='product-counter_btn' onClick={() => handleIncrement(product.id)}>+</button>
                  </div>
                </div>
              ))}

            </div>
          </div>
          <div className="cart-total_card">
            <h1 className="cart-total_title">Card Total</h1>

            <div className="cart-info_numbers">
              <div className="cart-info_number">
                <h1 className="cart-info_title">Sub-total: </h1>
                <span className="cart-total_price">${total}</span>
              </div>

              <div className="cart-info_number">
                <h1 className="cart-info_title">Shipping: </h1>
                <span className="cart-total_price">Free</span>
              </div>

              <div className="cart-info_number">
                <h1 className="cart-info_title">Discount: </h1>
                <span className="cart-total_price">Not</span>
              </div>
            </div>
            <hr />
            <div className="cart-items">
              <h1 className="cart-total">Total: </h1>
              <span className="cart-total_price">${total}</span>
            </div>
            <button className="cart-checkout_btn">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
