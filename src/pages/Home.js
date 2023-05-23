import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Profile from "../assets/JobFairUpdated.jpeg";
import "../styles/Home.css";

function Home() {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/rohithreddygouni/", "_blank");
  };

  const handleEmailClick = () => {
    const email = "rgouni1@stevens.edu";
    const subject = "Enquiry of Portfolio";
    const body = "Hello, I wanted to reach out...";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const handleGithubClick = () => {
    window.open("https://github.com/RohithReddyGouni", "_blank");
  };

  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Rohith</h2>
        <img src={Profile} alt="Rohith" height={"250px"} width={"200px"} />
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="#" onClick={handleLinkedInClick}>
            <LinkedInIcon />
          </a>
          <a href="#" onClick={handleEmailClick}>
            <EmailIcon />
          </a>
          <a href="#" onClick={handleGithubClick}>
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Next JS, Vue JS, Redux, HTML, CSS, NPM,
              BootStrap, MaterialUI, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, ExpressJS, GraphQL, ApolloServer, MySQL,
              MongoDB, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python,TypeScript</span>
          </li>
          <li className="item">
            <h2>Knowledge Areas</h2>
            <span>
              Jenkins, Docker, Kubernetes, Agile, Scrum, Jira, ServiceNow, JDA,
              Redpriairie
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
