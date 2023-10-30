import React,{ useState, useEffect } from 'react';
import Product from "../components/product";
import styles from "../styles/Main.module.css";

const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            setError(null);

            const URL = 'https://fakestoreapi.com/products?limit=4';

            const result = await fetch(URL).then(res => res.json());

            setData(result);
        };

        fetchProducts()
            .catch(setError)
            .finally(setLoading(false));
            
    },[]);
    
    if (loading || data.length == 0) return <div className={styles.container}>Loading ...</div>
    if (error) return <div className={styles.container}>we have an error ...</div>

  return (
    <div className={styles.container}>
      {
        data.map((item, index) => {
          return <Product key={index} data={item} />
        })
      }
    </div>
  )
}

export default Products;