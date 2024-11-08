import { getImageUrl } from "../../utils"
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id="about">
       <h1 className={styles.title}>About</h1>
        <img 
           src={getImageUrl("about/aboutImage.png")} 
           alt="About Image" 
           className={styles.aboutImage}
           />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Image" />
                <div className={styles.aboutItemText}>
                 <h3>Frontend Developer</h3>
                    <p>Creating responsive and interactive websites using modern technologies like React, Next.js, and Tailwind CSS.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server Image" />
                <div className={styles.aboutItemText}>
                 <h3>Backend Developer</h3>
                    <p>I am Backend Developer using modern technologies like Nodejs, Mongodb and fastAPI</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="Cursor Image" />
                <div className={styles.aboutItemText}>
                 <h3>Mobile App Developer</h3>
                    <p>Creating mobile applications using React Native and Flutter.</p>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default About
