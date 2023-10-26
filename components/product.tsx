import styles from '../src/app/page.module.css';
import {Products} from '../src/app/product/page';
interface IProductProps {
  data: Products
}

const Product: React.FC<IProductProps> =  ({ data }) => {
  
  return (
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={data.image} alt={data.title} />
        </div>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <span>Price: <p>{data.price}</p>$</span>
      </div>
  )
}

export default Product;