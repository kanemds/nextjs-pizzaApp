import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Product.module.css'

const  Product = ({pizza}) => {

  const [price, setPrice] = useState(pizza.prices[0])
  const [size, setSize] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [addOn, setAddOn] = useState([])

  console.log(price)

  const changePrice = (number) => {
    setPrice(price + number)
  }

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size]
    setSize(sizeIndex)
    changePrice(difference)
  }

  const handleChange = (e, option) => {
    const checked = e.target.checked

    if (checked) {
      changePrice(option.price)
      setAddOn(prev => [...prev, option])
    } else {
      changePrice(-option.price)
      setAddOn(addOn.filter(item => item._id !== option._id))
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.image} objectFit='contain' alt="" layout='fill'/>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>${pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>

        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/images/size.png" alt='' layout='fill' />
            <span className={styles.number}>Small</span>
          </div>
     
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/images/size.png" alt='' layout='fill' />
            <span className={styles.number}>Medium</span>
          </div>
     
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/images/size.png" alt='' layout='fill' />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>

          {pizza.extraOptions.map(option => (
            <div key={option._id} className={styles.option}>
              <input
                type='checkbox'
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={e => handleChange(e, option)}
              />
              <label htmlFor={option.text}>{option.text}</label>
            </div>
          )
          )
          }
        </div>
        <div className={styles.add}>
          <input
            type='number'
            defaultValue={1}
            className={styles.quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

// params: object {id:...}
export const getServerSideProps = async({params}) => {

  console.log(params)
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
  return {
    
    props:{
      pizza:res.data
    }
  }
}


export default Product