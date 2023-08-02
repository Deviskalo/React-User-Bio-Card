import React from 'react';
import './style.css';

function Button({ text, icon, link }) {
  return (
    <>
      <a href={link} link="_blank">
        <div className="btn-container">
          <div className="icon-container">
            <img width="20%" src={icon} />
          </div>
          <div className="content-container">
            <h3>{text}</h3>
          </div>
        </div>
      </a>
    </>
  );
}

function Profile() {
  return (
    <div id="profile-container">
      <div id="profile-avatar">
        <h3>DS</h3>
      </div>
      <div id="profile-title">
        <h2>Dev Iskalo</h2>
        <small>UI/UX Designer, Python Programmer.</small>
      </div>
      <div id="profile-bio">
        <p>
          Hi, Dev Iskalo and am currently enrolled at ALX Software Engineering
          School as a Software Engineer. I am The Miraculous Tech Enthusiast
          with a passion for coding and problem-solving. I enjoy exploring new
          technologies and constantly seeking to expand my knowledge in the
          field of software development. My goal is to contribute to innovative
          projects and make a positive impact in the tech industry. Outside of
          coding, I love reading books, listening to music, and spending time in
          nature. With a strong determination and a growth mindset, I'm excited
          to embark on a journey of continuous learning and professional growth.
          Let's build a better tomorrow through technology by getting in touch!
        </p>
      </div>
      <div className="btns">
        <Button
          icon={'./assets/facebook.png'}
          text="Facebook"
          link="https://facebook.com/iskalo.00"
        />
        <Button
          icon={'./assets/github.png'}
          text="Github"
          link="https://github.com/Deviskalo"
        />
        <Button
          icon={'./assets/instagram.png'}
          text="Instagram"
          link="https://instagram.com/dev_iskalo"
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Profile />
    </>
  );
}
