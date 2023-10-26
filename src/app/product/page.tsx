"use client"

import React,{ useState, useEffect } from 'react';
import styles from '../page.module.css';
import Product from '../../../components/product';

export interface Products {
    id: number,
    title: string,
    description: string,
    image: string,
    price: number
};

const page = () => {
    const [products, setProducts] = useState<Products[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);

            const URL = 'https://fakestoreapi.com/products?limit=4';

            const data = await fetch(URL).then(result => result.json());

            setProducts(data);
        };

        fetchProducts()
            .catch(setError)
            .finally(() => setLoading(false));

    },[]);
    
    if (loading || products.length == 0) return <div className={styles.main}>Loading ...</div>
    if (error) return <div>oops! We Have An Error</div>

    return (
        <div className={styles.main}>
            {
                products.map((product) => (
                    <Product key={product.id} data={product}/>
                ))
            }
        </div>
    )
}

export default page;