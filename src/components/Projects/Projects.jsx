
import projects from '../../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section>
        <h1>Projects</h1>
        <div>
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
