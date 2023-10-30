import useSWR from "swr";
import styles from "../styles/Main.module.css";
import Product from "../components/product";

const fetchHandler = (...args) => fetch(...args).then(res => res.json());

const Swr = () => {
  const URL = 'https://fakestoreapi.com/products?limit=4';

  const {data, error} = useSWR(URL, fetchHandler);
  
  if (!data) return <div className={styles.container}>Loading ...</div>
  if (error) return <div className={styles.container}>we have an error ...</div>

  return (
    <div className={styles.container}>
      {data.map((item, index) => (
          <Product key={index} data={item} />
      ))}
    </div>
  )
}

export default Swr;