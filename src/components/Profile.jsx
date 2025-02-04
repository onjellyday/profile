import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import './Profile.css';

const Profile = () => {
  let splineObject = null;

  function onLoad(spline) {
    splineObject = spline;
    const object = splineObject.findObjectByName('Little');
    if (object) {
      object.position.set(0, 0, 0);
      object.rotation.set(0, 0, 0);
      object.scale.set(3, 3, 3);
    }
  }

  function handleMouseMove(e) {
    if (splineObject) {
      const object = splineObject.findObjectByName('Little');
      if (object) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        
        const rotationY = (deltaX / window.innerWidth) * Math.PI;
        const rotationX = (deltaY / window.innerHeight) * Math.PI;
        
        object.rotation.y += (rotationY - object.rotation.y) * 0.1;
        object.rotation.x += (rotationX - object.rotation.x) * 0.1;
      }
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const onError = (error) => {
    console.error('Spline Error:', error);
  };

  return (
    <div className="profile-container">
      <header className="hero-section">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <div className="spline-container">
            <Spline 
              scene="https://prod.spline.design/L-ZSbqtN9kY4ecJe/scene.splinecode"
              onLoad={onLoad}
              onError={onError}
              style={{ 
                background: 'transparent',
                backgroundColor: 'transparent',
                backgroundImage: 'none'
              }}
            />
          </div>
          <h1 className="hero-title">Kihoon Kim</h1>
          <p className="hero-subtitle">Software Developer</p>
          <a href="#portfolio" className="hero-button">Portfolio</a>
        </div>
      </header>

      <section id="portfolio" className="gallery-section">
        <h2 className="section-title">Portfolio</h2>
        <div className="gallery-grid">
          <a href="https://www.rootin.me/" target="_blank" rel="noopener noreferrer" className="gallery-item">
            <img src="/project1.jpg" alt="Rootin" />
            <div className="gallery-overlay">
              <h3>Rootin</h3>
              <p>AI-powered plant care application</p>
            </div>
          </a>
          <a href="https://duel.work/" target="_blank" rel="noopener noreferrer" className="gallery-item">
            <img src="/project2.jpg" alt="Duel" />
            <div className="gallery-overlay">
              <h3>Duel</h3>
              <p>LLM-powered flashcard generation system</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/posts/kihoon-noah-kim_llm-ai-news-activity-7282302976239550465-qGyQ?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="gallery-item">
            <img src="/project3.jpg" alt="Ankimozzi" />
            <div className="gallery-overlay">
              <h3>NewsExplorer</h3>
              <p>AI-driven news aggregation and analysis service</p>
            </div>
          </a>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/profile-image.jpeg"
              alt="프로필 사진"
              className="profile-image"
            />
          </div>
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="bio">
            Software Developer with experience in automating CI/CD pipelines, managing cloud-native applications, and
improving system scalability and reliability. Proficient in AWS, Kubernetes, Docker, and Terraform, with hands-
on experience in optimizing deployment processes and maintaining high system availability. Skilled in designing
secure and cost-effective cloud infrastructure for scalable environments.
            </p>
            <div className="about-buttons">
              <a href="/my-resume.pdf" download className="download-button">
                Download Resume
              </a>
              <a href="#contact" className="contact-button">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" className="contact-section">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>kihoon.kim1220@gmail.com</p>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <p>github.com/onjellyday</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>657-248-5564</p>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="이름" />
            <input type="email" placeholder="이메일" />
            <textarea placeholder="메시지"></textarea>
            <button type="submit">보내기</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Profile;
