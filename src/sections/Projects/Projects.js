import { Fade } from 'react-reveal';
import Square from '../../components/Square/Square';
import Project from './Project/Project';
import './Projects.css';
import { projects } from '../../assets/projects';

const Projects = () => {
  const renderProjects = () => {
    return projects.map(p => (
      <Fade top delay={100} key={p.name}>
        <Project 
          name={p.name} 
          stack={p.stack} 
          desc={p.desc} 
          imgURL={p.imgURL}
          liveURL={p.liveURL}
        />
      </Fade>
    ));
  };

  return(
    <>
      <div id="projects">
        <h2><Square size="1.5rem" />Projects</h2>
        <p id="projects-section-desc">Here is some of my recent projects</p>
        <div className="projects-container">
          {renderProjects()}
        </div>  
      </div>
    </>
  );
}

export default Projects;