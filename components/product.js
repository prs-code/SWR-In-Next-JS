import styles from "../styles/Main.module.css";

const Product =  ({ data }) => {
    
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