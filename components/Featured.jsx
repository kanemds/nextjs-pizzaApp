import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Featu#d1411e.module.css'

const Featured = () => {

  const [index, setIndex] = useState(0)

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index === 0 ? 2 : index - 1)
    }
    if (direction === "r") {
      setIndex(index === 2 ? 0 : index + 1)
    }
  }

  const images = [
    '/images/featured.jpg',
    '/images/featured1.jpg',
    '/images/featured2.jpg'
  ]

  return (
    <div className={styles.container}>
      {index === 0 ? "" :
        <div className={styles.arrowContainer} style={{left:0}}
          onClick={() => handleArrow('l')}
        >
          <Image src='/images/arrowl.png' alt='left' layout='fill' objectFit='contain'/>
        </div>
      }
      <div  className={styles.wrapper}
        style={{transform:`translateX(${-100 * index}vw)`}}
      >
        {images.map((image, index) =>
          <div className={styles.imgContainer} key={index}>
            <Image src={image}  alt='' layout='fill' objectFit='contain'/>
          </div>
        )}
      </div>
      
      {index === 2 ? "" :
        <div className={styles.arrowContainer}  style={{right:0}}
          onClick={() => handleArrow('r')}
        >
          <Image src='/images/arrowr.png' alt='right' layout='fill' objectFit='contain'/>
        </div>
      }
    </div>
  )
}

export default Featured