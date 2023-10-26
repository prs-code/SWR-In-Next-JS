"use client"

import useSWR from 'swr';
import styles from '../../page.module.css';
import Product from '../../../../components/product';
import {Products} from '../../product/page';

interface ISwrProduct extends Products{
  id: number,
  title: string,
  description: string,
  image: string,
  price: number
}

const fetchHandler = async (input: RequestInfo, init?: RequestInit) => {
  const data = await fetch(input, init).then(res => res.json());
  return data;
};

const SWR = () => {
  const URL = 'https://fakestoreapi.com/products?limit=4';
  const {data, error} = useSWR(URL, fetchHandler);

  if (error) return <div>oops! We have an error</div>
  if (!data) return <div>Loading ...</div>
  

  return (
    <div className={styles.main}>
      {
        data.map((product: ISwrProduct) => (
            <Product key={product.id} data={product}/>
        ))
      }            
    </div>
  )
}



export default SWR;