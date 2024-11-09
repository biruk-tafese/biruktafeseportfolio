import PropTypes from 'prop-types';
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';

 const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
  return (
    <div className={styles.container} id="projects">
        <img className={styles.image} src={getImageUrl(imageSrc)} alt={`${title} Logo`} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, index) =>
           (
             <li key={index}  className={styles.skill}>{skill}</li>
          ))}
        </ul>
        <div className={styles.links}>
          <a className={styles.link} href={demo} target="_blank" rel="noreferrer">Demo</a>
          <a className={styles.link} href={source} target="_blank" rel="noreferrer">Source</a>
        </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
};


export default ProjectCard;