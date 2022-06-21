import Square from '../Square/Square';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <div className=''>
        <Square size="16px" />
        <span className="nav-name">Hazel Feng</span>
        <span className="nav-seperator">/</span>
        <span className="nav-title">FULL STACK DEVELOPER</span>
      </div>
      <ul>
        <li><a href="#top">ABOUT ME</a></li>
        <li><a href="#resume">RESUME</a></li>
        <li><a href="#projects">PROJECTS</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;