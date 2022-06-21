import Button from '../../../components/Button/Button';
import './Project.css';

const Project = ({ name, stack, desc, imgURL, liveURL, sourceURL }) => {
  return (
    <div className="project">
      <img className="project-img" src={imgURL} alt="project screenshot"/>
      <div className="project-detail">
        <div className="project-title">
          <div className="project-name">{name}</div>
          <div className="project-stack">{stack}</div>
        </div>
        <p className="project-desc" src="imgURL">{desc}</p>
        <div className="ref-container">
          <Button value="view live" href={liveURL} newTab={true} />
        </div>
      </div>
    </div>
  );
};

export default Project;