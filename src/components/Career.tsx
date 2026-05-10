import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship</h4>
                <h5>Ybi Foundation</h5>
              </div>
              <h3>1 Month</h3>
            </div>
            <p>
              Strengthen my understanding of AI/ML concepts.
Tackle challenging projects with dedication and enthusiasm.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship</h4>
                <h5>Codtech IT Solutions</h5>
              </div>
              <h3>1 Month</h3>
            </div>
            <p>
              Gained work on real-time projects, and gain valuable industry
experience.
Enhanced my problem-solving ability, creativity, and technical
proficiency.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship</h4>
                <h5>EliteTech Intern</h5>
              </div>
              <h3>1 Month</h3>
            </div>
            <p>
              Enhanced my skills in web development and tackled complex
projects.
Gained hands-on experience in solving real-world challenges.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
