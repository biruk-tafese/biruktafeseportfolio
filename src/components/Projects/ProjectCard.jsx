import PropTypes from 'prop-types';
import { getImageUrl } from '../../utils';

 const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
  return (
    <div>
      <div>
        <img src={getImageUrl(imageSrc)} alt={`${title} Logo`} />
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <div>
          <a href={demo} target="_blank" rel="noreferrer">Demo</a>
          <a href={source} target="_blank" rel="noreferrer">Source</a>
        </div>
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