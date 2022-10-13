import Image from 'next/image'
import styles from '../styles/Featured.module.css'

const Featured = () => {

  const images = [
    '/images/featured.jpg',
    '/images/featured2.jpg',
    '/images/featured3.jpg'
  ]

  return (
    <div className={styles.container}>
      <Image src='/images/arrowl.png' alt='left' layout='fill'/>
      <div  className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {images.map((image, index) =>
            <Image src={image} key={index} alt='' layout='fill' />
          )}
        </div>

      </div>
      <Image src='/images/arrowr.png' alt='right' layout='fill'/>
      
    </div>
  )
}

export default Featured