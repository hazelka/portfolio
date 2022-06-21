import { Fade, Bounce } from 'react-reveal';
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import TwoToneBg from "../../components/TwoToneBg/TwoToneBg";
import './About.css';

const About = () => {
  return (
    <div id="about-container">        
      <TwoToneBg 
        bg1="var(--dark)" 
        bg2="white" 
        ratio="40%" 
        height="100%" 
        width="100%"
      />
      <div id="about">
        <Card />
        <div className="intro">
          <Bounce right>
            <div className="hello">Hello</div>
          </Bounce>
          <Fade top cascade big delay={500}>
            <div>
              <div className="desc">My name is Hazel</div>
              <div className="desc">A full-stack developer</div>
            </div>
          </Fade>
          <Fade right delay={2000}>
              <div className="about-ref-btn">
                <Button value="resume" href="#resume"/>
                <Button value="projects" href="#projects"/>
              </div>
              <p>
                Building websites and applications that strikes a balance between 
                funcionality and aesthetic design. 
              </p>
          </Fade>
        </div>

      </div>
    </div>
  );
};

export default About;