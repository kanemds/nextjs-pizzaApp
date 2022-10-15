import Image from "next/image"
import Link from "next/link"
import { useSelector } from 'react-redux'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity)

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/images/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>604 444 4444</div>
        </div>
      </div>
      
      
      <div className={styles.item}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" alt="logo" width="100px" height="70px" />
          <h1>Pizza Time</h1>
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
        
      </div>
      <Link href='/cart' >
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/images/cart.png" alt="logo" width="40px" height="35px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>

    </div>
  )
}

export default Navbar