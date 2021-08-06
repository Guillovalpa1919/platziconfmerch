import React from 'react';
import initialState from '../intitalState';
import Products from '../components/Products';

const Home = () => (
        <Products products={initialState.products} />
        );      
    
export default Home;