import { getImageUrl } from "../../utils"
import styles from './Hero.module.css'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I`m Biruk Tafese</h1>
            <p className={styles.description}> 
              <div>
     <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      1000,
      'I AM',
      500,
      'FRONTEND DEVELOPER ,', 
      1000,
      'BACKEND DEVELOPER, ',
      1000,
      'FULLSTACK DEVELOPER',
      1000,
      'AND',
      500,
      'MOBILE APPLICATION DEVELOPER',
      500,
    ]}
    speed={50}
    className={styles.multicolortext}
     repeat={Infinity}
     />
          </div>
             with experience in MERN STACK, Django as well as  Flutter. Reach out me for more
            </p>
            
            <a 
                target="blank"  
                href="mailto:cstafesebiruk23@gmail.com"
                className={styles.contactBtn}
                >Hire Me</a>
        </div>
        <img 
           src={getImageUrl('hero/coderImage.png')}
           alt="hero image of me" 
           className={styles.heroImg}

         />
         <div className={styles.topBlur}></div>
         <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
