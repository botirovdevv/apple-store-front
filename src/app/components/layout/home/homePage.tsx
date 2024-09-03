import React from 'react';
import Collections from '../main/collections';
import Subscribe from '../main/subscribe';
import Iphones from '../main/iphones';
import Watches from '../main/watches';
import ProductSlider from '../../product/productSlider';
import Head from 'next/head';

const HomePage: React.FC = () => {
  return (
    <>
    <Head>
      <title>Apple Store Uz</title>
    </Head>
      <Collections />
      <Iphones />
      <ProductSlider />
      <Watches />
      <Subscribe />
    </>
  );
};

export default HomePage;
