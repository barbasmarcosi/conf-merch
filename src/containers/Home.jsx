import React from 'react';
import '../styles/components/Layout.css';
import initialState from '../initialState';
import Products from '../components/Products';

const Home = () => (
  <div className="Home">
    <Products products={initialState.products} />
  </div>
);
export default Home;
