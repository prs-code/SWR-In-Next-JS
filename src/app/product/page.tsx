"use client"

import React,{ useState, useEffect } from 'react';
import styles from '../page.module.css';
import Product from '../../../components/product';

const page = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const URL = 'https://fakestoreapi.com/products?limit=5';

            const data = await fetch(URL).then(result => result.json());

            setProducts(data);
        };

        fetchProducts();

    },[]);
    
    if (products.length == 0) return <div>Loading ...</div>
    if (error) return <div>Error</div>

    return (
        <div className={styles.main}>
            {/* {
                products.map(product => (
                    <Product key={product.id} data={product}/>
                ))
            } */}
        </div>
    )
}

export default page;