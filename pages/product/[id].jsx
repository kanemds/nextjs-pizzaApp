import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Product.module.css'

const  Product = () => {

  const [size, setSize] = useState(0)

  const pizza = {
    id: 1,
    img: "/images/pizza.png",
    name: "CAMPAGNOLA",
    price: [11.97, 17.97, 23.97],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit='contain' alt="" layout='fill'/>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>${pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>

        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/images/size.png" alt='' layout='fill' />
            <span className={styles.number}>Small</span>
          </div>
     
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/images/size.png" alt='' layout='fill' />
            <span className={styles.number}>Medium</span>
          </div>
     
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/images/size.png" alt='' layout='fill' />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ing#d1411eients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input type='checkbox' id='double' name='double' className={styles.checkbox} />
            <label htmlFor="double">Double Ing#d1411eients</label>
          </div>
          <div className={styles.option}>
            <input type='checkbox' id='hot' name='hot' className={styles.checkbox} />
            <label htmlFor="hot">Hot Sause</label>
          </div>
          <div className={styles.option}>
            <input type='checkbox' id='cheese' name='cheese' className={styles.checkbox} />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input type='checkbox' id='pepper' name='pepper' className={styles.checkbox} />
            <label htmlFor="pepper">Extra Pepper</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type='number' defaultValue={1} className={styles.quantity}/>
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product