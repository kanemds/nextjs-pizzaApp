import styles from '../styles/ProductList.module.css'
import PizzaCard from './PizzaCard'

const ProductList = ({productList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Always Fresh
      </h1>
      <p className={styles.desc}>
      Fresh ingredients with lots of varieties.
      </p>
      <div className={styles.wrapper}>
        {productList.map(product =>
          <PizzaCard key={product._id} product={product}/>
        )}
      </div>
    </div>
  )
}

export default ProductList