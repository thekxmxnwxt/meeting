import React from 'react';
import { Link } from 'react-router-dom';
import '../style/HomePage.css'; // ใช้ไฟล์ CSS หรือ styled-components แทน

const Home = () => {

  return (
    <div className="hero-container">
      <h1 className="hero-text">
        Let meet up <br />
        the Merry Christmas Day.
      </h1>

      <Link to="/date">
        <button className="hero-button">Let's got it</button>
      </Link>
    </div>
  );
};

export default Home;
