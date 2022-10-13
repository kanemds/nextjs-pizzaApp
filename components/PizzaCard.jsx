import Image from 'next/image'
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src='/images/pizza.png' alt='' width='500' height='500' />
      <h1 className={styles.title}>Pizza</h1>
      <span className={styles.price}>$19.97</span>
      <p className={styles.desc}>
        Freah made Pizza
      </p>
    </div>
  )
}

export default PizzaCard