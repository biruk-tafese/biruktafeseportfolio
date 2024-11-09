
import projects from '../../data/projects';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.container} >
        <h1 className={styles.title}>{" <"}Projects{"/>"}</h1>
        <div className={styles.projects}>
          {
            projects.map((project, index) => (
               <ProjectCard key={index} project={project} />
            ))
          }
         </div>
    </section>
  )
}

export default Projects
