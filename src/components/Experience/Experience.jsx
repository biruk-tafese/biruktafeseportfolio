import skills from '../../data/skills.json'
import { getImageUrl } from '../../utils'
import history from '../../data/history.json'
import styles from './Experience.module.css'


const Experience = () => {
  return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
               
                    {
                        skills.map((skills, index) => {
                            return (
                                <div key={index} className={styles.skill}>
                                  <div className={styles.skillImageContainer}>
                                  <img src={getImageUrl(skills.imageSrc)} alt={skills.title} />
                                  <p>{skills.title}</p>
                                  </div>
                                </div>
                            )
                        })
                    }
              
            </div>
            <ul className={styles.history}>
                {
                 history.map((history, index) => {
                        return (
                            <li key={index} className={styles.historyItem}>
                             <img src={getImageUrl(history.imageSrc)} alt={history.title} />
                             <div className={styles.historyItemDetails}>
                                <h1> {history.role} at {history.organisation} </h1>
                            
                                <p>{history.startDate} - {history.endDate}</p>
                              <ul>
                                { 
                                    history.experiences.map((experience, index) => {
                                        return (
                                            <li key={index}>{experience}</li>
                                        )
                                    })
                                }
                              </ul>
                                </div>
                            </li>
                           
                        )
                    })
                    
                }
            </ul>
        </div>
    </section>
  )
}

export default Experience
