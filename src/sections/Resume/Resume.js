import { Fade } from 'react-reveal';
import TwoToneBg from '../../components/TwoToneBg/TwoToneBg';
import Square from '../../components/Square/Square';
import './Resume.css';

const Resume = () => {
  return (
    <div id="resume-container">
      <TwoToneBg 
        bg1="white" 
        bg2="var(--light)" 
        ratio="60%" 
        height="100%"
        width="100%" 
      />
      <div id="resume">
        <h2><Square size="1.5rem" />Resume</h2>

        {/* Key Competency */}
        <Fade top>
          <div className="resume-section">
            <h3>KEY COMPETENCY</h3>
            <div className="resume-section-detail">
              <p>
                <Square size="0.5rem" />
                Full stack web developer passion for crafting exceptional user experience
              </p>
              <p>
                <Square size="0.5rem" />
                In depth understanding of algorithm and data structure
              </p>
              <p>
                <Square size="0.5rem" />
                Excellent teamwork and communication skill thrive in agile development environment
              </p>
              <p>
                <Square size="0.5rem" />
                Interdisciplinary background who understands importance of SEO
              </p>
            </div>
          </div>
        </Fade>
        

        {/* Education */}
        <Fade top delay={100}>
          <div className="resume-section">
            <h3>EDUCATION</h3>
            <div className="resume-section-detail">
              <p><strong>Bachelor of Science</strong></p>
              <p>Combined Major in Computer Science and Statistic</p>
              <p><em>University of British Columbia – Vancouver, BC</em></p>
            </div>
          </div>
        </Fade>
      

        {/* Web Development SkillS */}
        <Fade top delay={200}>
          <div className="resume-section">
            <h3>WEB DEVELOPMENT SKILLS</h3>
            <div className="resume-section-detail">
              <p>
                <Square size="0.5rem" />
                <strong>Frontend</strong> - HTML5, CSS3, JavaScript, TypeScript, 
                React.js, Redux.js, Bootstrap
              </p>
              <p>
                <Square size="0.5rem" />
                <strong>Backend</strong> - Node.js, Express.js, WebSocket
              </p>
              <p>
                <Square size="0.5rem" />
                <strong>Database</strong> - PostgreSQL, Knex.js
              </p>
              <p>
                <Square size="0.5rem" />
                <strong>Other</strong> - Git, NPM, Command Line, Heroku
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Resume;