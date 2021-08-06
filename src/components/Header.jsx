import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/Header.css';

const Header=()=>(
        <div className="Header">
            <h1 className="Header-title">
                <Link to="/">Platzi Conf Merch</Link>
            </h1>
            
            <div className="Header-checkout">
                <Link to="/checkout">
                Carrito de compras
                </Link>
            </div>
        </div>
    )
        
    

export default Header