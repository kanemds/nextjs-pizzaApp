import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
    
      
      <div className={styles.item}>
        <h1 className={styles.title}>
            Restaurants Location
        </h1>
        <p className={styles.text}>
          5661 Victoria Dr
          <br />
          Vancouver, BC V5P 3W2
          <br />
          604-444-4443
        </p>
        <p className={styles.text}>
          4445 Main St
          <br />
          Vancouver, BC V5V 3R2
          <br />
          604-444-4442
        </p>
        <p className={styles.text}>
          830 SW Marine Dr
          <br />
          Vancouver, BC V6P 5Y8
          <br />
          604-444-4441
        </p>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>
            HOURS
        </h1>
        <p className={styles.text}>
            Sunday - Saturday
          <br />
            9:00AM - 9:00PM
          
        </p>
      </div>
    </div>
   
  )
}

export default Footer