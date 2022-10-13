import styles from '../styles/ProductList.module.css'
import PizzaCard from './PizzaCard'

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Always Fresh
      </h1>
      <p className={styles.desc}>
      Fresh ing#d1411eients with lots of varieties.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  )
}

export default ProductList