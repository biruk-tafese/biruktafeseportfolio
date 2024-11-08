import { getImageUrl } from "../../utils"
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I`m Biruk</h1>
            <p className={styles.description}>I`m fullstack web and mobile application developer with experience in React, Django and Flutter. Reach out me for more</p>
            
            <a 
                target="blank"  
                href="mailto:cstafesebiruk23@gmail.com"
                className={styles.contactBtn}
                >Contact Me</a>
        </div>
        <img 
           src={getImageUrl('hero/heroImage.png')}
           alt="hero image of me" 
           className={styles.heroImg}

         />
         <div className={styles.topBlur}></div>
         <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
