import React, { useState } from "react";
import profilePic from "../images/img1.JPG";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaSpotify,
  FaPython,
  FaArrowUp,
  FaTools,
  FaCogs,
  FaExclamationTriangle,
  FaBuilding,
  FaBolt,
} from "react-icons/fa";
import {
  SiJira,
  SiCplusplus,
  SiAutodesk,
  SiAnsys,
  SiSap,
  SiScrumalliance,
} from "react-icons/si";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <h2 className="logo">SACHIN VIJAY</h2>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          {/* <li>
            <a href="#certificates">Certificates</a>
          </li> */}
          <li>
            <a href="/resume.pdf" download="resume.pdf">
              Get Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="hero-section">
        <div className="hero-text">
          <h1>Hey, I'm Sachin.</h1>
          <p>
            A curious project and risk engineer who loves tackling high-stakes
            challenges. When I’m not deep in spreadsheets and strategies, you’ll
            find me traveling, exploring new places, or crossing countries off
            the map one by one. Adventure, new experiences, and continuous
            learning—that’s what keeps me going!
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/sachin-vijaysvj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/_svj97_?igsh=bTRydXZlZW9uem8="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/Tonyhawk.sachinvijay1997"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://open.spotify.com/user/240pq6k706l19tpoc5ltxg913?si=Z7RSRYMqTAC_OZFVrYKcww"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify />
            </a>
          </div>
        </div>
      </div>
      <section id="about-me" className="about-section">
        <img src={profilePic} alt="Gopika Gopakumar" className="about-avatar" />
        <h2>About Me</h2>
        <p>
          Hey, I’m Sachin! I’m a Project & Risk Engineer who’s all about pushing
          boundaries and keeping things on point. With a&nbsp;
          <strong>Master’s in Automotive Engineering</strong> from the{" "}
          <a
            href="https://www.leeds.ac.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="college-name"
          >
            <strong> University of Leeds</strong>{" "}
          </a>{" "}
          and a <strong> Bachelor’s in Mechanical Engineering</strong> from the{" "}
          <a
            href="https://www.keralauniversity.ac.in/home"
            target="_blank"
            rel="noopener noreferrer"
            className="college-name"
          >
            <strong> University of Kerala</strong>
          </a>
          , I’ve worked across mechanical, electrical, infrastructure, and
          energy projects, making sure everything runs smoothly, efficiently,
          and sustainably. I’ve stacked up certifications in{" "}
          <strong>HSE compliance</strong>,<strong>Valves & CIP systems</strong>{" "}
          , and I’m on my way to earning my{" "}
          <strong>Chartered Engineer (CEng) accreditation</strong>. Also, I’ve
          got a <strong>drone pilot license</strong>. Outside of work, you’ll
          catch me exploring new places, crossing another country off my list,
          or just vibing to some good music. Whether it’s hopping on a flight,
          getting lost in a new city, I’m all about the experience. Let’s
          connect and make something happen!
        </p>
      </section>
      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-categories">
          <h3>Software</h3>
          <div className="skills-content">
            <div className="skills-category">Power BI</div>
            <div className="skills-category">
              <SiAutodesk /> AutoCAD
            </div>
            <div className="skills-category">
              <SiAnsys /> ANSYS
            </div>
            <div className="skills-category">
              <FaTools /> SCADA
            </div>
            <div className="skills-category">
              <FaCogs /> Primavera P6
            </div>
            <div className="skills-category">
              <FaCogs /> SolidWorks
            </div>
            <div className="skills-category">
              <FaCogs /> CATIA V5/V6
            </div>
          </div>
          <h3>Tools</h3>
          <div className="skills-content">
            <div className="skills-category">
              <SiJira /> JIRA
            </div>
            <div className="skills-category">
              <SiSap /> SAP
            </div>
            <div className="skills-category">MS Office (Word, Excel, PP)</div>
            <div className="skills-category">Ansys Fluent</div>
            <div className="skills-category">Mainsaver</div>
            <div className="skills-category">Qperm</div>
          </div>
          <h3>Programming Languages</h3>
          <div className="skills-content">
            <div className="skills-category">MATLAB</div>
            <div className="skills-category">
              <SiCplusplus /> C++
            </div>
            <div className="skills-category">Java</div>
            <div className="skills-category">
              <FaPython /> Python
            </div>
          </div>
          <h3>Technical Skills</h3>
          <div className="skills-content">
            <div className="skills-category">NEC CM</div>
            <div className="skills-category">DFMEA</div>
            <div className="skills-category">
              Technical & Cost Data Analysis
            </div>
            <div className="skills-category">PUWER</div>
            <div className="skills-category">DSEAR</div>
            <div className="skills-category">SAP ERP</div>
          </div>
          <h3>Methodologies</h3>
          <div className="skills-content">
            <div className="skills-category">
              <SiScrumalliance /> Prince2®
            </div>
            <div className="skills-category">Lean</div>
            <div className="skills-category">Agile</div>
            <div className="skills-category">Six Sigma</div>
            <div className="skills-category">Scrum</div>
            <div className="skills-category">Adaptive Planning</div>
          </div>
          <h3>Risk Management</h3>
          <div className="skills-content">
            <div className="skills-category">
              <FaExclamationTriangle /> RAMS
            </div>
            <div className="skills-category">LOPA</div>
            <div className="skills-category">Risk Profiling</div>
            <div className="skills-category">HAZID</div>
            <div className="skills-category">HAZOP</div>
            <div className="skills-category">HAZCON</div>
          </div>
        </div>
      </section>
      <section id="experience" className="experience-section">
        <h2>Experience</h2>
        <div className="experience-card">
          <p className="experience-date">April 2023 – Present</p>
          <a
            href="https://www.greencore.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-title"
          >
            Project Engineer [End-End PM] · Greencore (Northern sites-Leeds,
            Selby, Consett)
          </a>
          <p>
            Managing and mitigating risks in large-scale engineering projects,
            ensuring compliance with safety and regulatory standards.
          </p>
          <p>
            Implemented cost-saving strategies, reducing project expenses by
            20%.
          </p>
          <p>
            Collaborated with cross-functional teams to optimize workflow
            efficiency.
          </p>
        </div>
        <div className="experience-card">
          <p className="experience-date">October 2019 – August 2021</p>
          <a
            href="https://carestack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-title"
          >
            Senior Claims/Improvement Specialist (SME) · Good Methods Global
            (Carestack)-Trivandrum, India
          </a>
          <p>
            Led cross-functional risk management sessions to identify and
            mitigate potential failure modes, ensuring project integrity.
          </p>
          <p>
            Coordinated Agile sprints and cross-functional teams, improving
            communication and reducing project delays.
          </p>
          <p>
            Utilized digital project management tools like JIRA and Power BI to
            enhance collaboration, streamline tracking, and cut delays by 40%.
          </p>
        </div>
      </section>
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-container">
          {/* Mechanical Projects */}
          <div className="project-card">
            <h3>Transmission Gear Design for Formula E Vehicle</h3>
            <p>
              Designed and optimized a high-performance transmission gear system
              for Formula E vehicles.
            </p>
            <div className="tech-stack">
              <FaCogs /> <SiAutodesk />
            </div>
          </div>
          <div className="project-card">
            <h3>Mechanical Design for Connected Autonomous Pod</h3>
            <p>
              Engineered a robust and lightweight mechanical design for
              autonomous mobility solutions.
            </p>
            <div className="tech-stack">
              <FaCogs /> <SiAutodesk />
            </div>
          </div>
          <div className="project-card">
            <h3>High-Speed Rail Track Structure Characterization</h3>
            <p>
              Conducted structural analysis of high-speed rail tracks using
              MATLAB for improved durability.
            </p>
            <div className="tech-stack"></div>
          </div>
          <div className="project-card">
            <h3>Fabrication of Aluminium Metal Matrix Composites</h3>
            <p>
              Developed and analyzed metal matrix composites for enhanced
              mechanical properties.
            </p>
            <div className="tech-stack">
              <FaCogs />
            </div>
          </div>
          <div className="project-card">
            <h3>Factory Ventilation System</h3>
            <p>
              Designed and optimized an efficient ventilation system for
              industrial use.
            </p>
            <div className="tech-stack">
              <FaCogs />
            </div>
          </div>
          <div className="project-card">
            <h3>Boiler Optimisation</h3>
            <p>Enhanced boiler performance for improved energy efficiency.</p>
            <div className="tech-stack">
              <FaCogs />
            </div>
          </div>
          <div className="project-card">
            <h3>HVAC System Upgrades</h3>
            <p>Upgraded HVAC systems for better thermal management.</p>
            <div className="tech-stack">
              <FaCogs />
            </div>
          </div>
          <div className="project-card">
            <h3>Machinery Overhaul</h3>
            <p>
              Refurbished industrial machinery to extend operational lifespan.
            </p>
            <div className="tech-stack">
              <FaCogs />
            </div>
          </div>

          {/* Electrical Projects */}
          <div className="project-card">
            <h3>Electrical Panel Upgrade</h3>
            <p>
              Upgraded electrical panels for enhanced safety and efficiency.
            </p>
            <div className="tech-stack">
              <FaBolt />
            </div>
          </div>
          <div className="project-card">
            <h3>Component Obsolescence</h3>
            <p>
              Replaced outdated electrical components to improve reliability.
            </p>
            <div className="tech-stack">
              <FaBolt />
            </div>
          </div>
          <div className="project-card">
            <h3>Transformer Upgrade</h3>
            <p>Optimized transformer performance for power stability.</p>
            <div className="tech-stack">
              <FaBolt />
            </div>
          </div>
          <div className="project-card">
            <h3>Safety and Reliability Enhancement</h3>
            <p>Implemented safety improvements in electrical systems.</p>
            <div className="tech-stack">
              <FaBolt />
            </div>
          </div>

          {/* Infrastructure/Civils Projects */}
          <div className="project-card">
            <h3>Ammonia Building Refurbishment</h3>
            <p>
              Refurbished ammonia storage facilities for safety and compliance.
            </p>
            <div className="tech-stack">
              <FaBuilding />
            </div>
          </div>
          <div className="project-card">
            <h3>Cross-line Interconnection</h3>
            <p>
              Developed interconnection solutions for seamless data and power
              flow.
            </p>
            <div className="tech-stack">
              <FaBuilding />
            </div>
          </div>
          <div className="project-card">
            <h3>Capacity Enhancement Upgrade</h3>
            <p>
              Increased production line capacity through infrastructure
              upgrades.
            </p>
            <div className="tech-stack">
              <FaBuilding />
            </div>
          </div>
          <div className="project-card">
            <h3>Pipework for Production Line</h3>
            <p>
              Designed and installed optimized pipework for production
              efficiency.
            </p>
            <div className="tech-stack">
              <FaBuilding />
            </div>
          </div>

          {/* ESOS (Energy Saving Opportunities Scheme) Projects */}
          <div className="project-card">
            <h3>Energy Monitoring System</h3>
            <p>
              Implemented real-time energy monitoring for industrial plants.
            </p>
            <div className="tech-stack">
              <FaTools />
            </div>
          </div>
          <div className="project-card">
            <h3>Site Lagging Upgrade</h3>
            <p>Enhanced site insulation to improve energy efficiency.</p>
            <div className="tech-stack">
              <FaTools />
            </div>
          </div>
          <div className="project-card">
            <h3>Energy Efficient Motors</h3>
            <p>
              Installed energy-efficient motors to reduce operational costs.
            </p>
            <div className="tech-stack">
              <FaTools />
            </div>
          </div>
          <div className="project-card">
            <h3>Auto-coding Improvement</h3>
            <p>Optimized automated coding processes for higher productivity.</p>
            <div className="tech-stack">
              <FaTools />
            </div>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} Sachin Vijay. All rights reserved.</p>
        <div className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp size={20} /> Back to Top
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
