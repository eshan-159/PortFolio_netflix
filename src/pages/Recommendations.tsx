import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/chris.jpg'; // Adjust the path based on your directory structure

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chrisProfilePic} alt="Chris Smith" className="profile-pic" />
          <div>
            <h3>Chris Smith</h3>
            <p>Head of Kajima Community</p>
            <p className="date">October 24, 2024</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "It is with great pleasure that I write this reference for Eshan, who worked for us as a software developer at Kajima from June 2023. Unfortunately, due to a change in the company’s structure, we have made the difficult decision to make their position redundant. This in no way reflects on their performance, which was consistently excellent.</p>
          <p>During their time with us, Eshan demonstrated strong technical expertise, a passion for problem-solving, a willingness to learn, and a collaborative spirit that greatly contributed to our team’s success. They played a pivotal role in developing and maintaining key features of our software <strong>BookingsPlus</strong> and <strong>NHS Open Space</strong>, consistently delivering high-quality code while meeting project deadlines. Their ability to quickly adapt to new technologies and their proactive approach to finding innovative solutions set them apart."</p>
          <p>💼 "Eshan also showed exceptional teamwork and communication skills, effectively collaborating with cross-functional teams, including product managers, designers, and QA. Their professionalism, positive attitude, and dedication to their work made them an asset to the team."</p>
          <p>🌟 "I have no doubt that Eshan will be a valuable addition to any organization, and I wholeheartedly recommend them for any future opportunities."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
