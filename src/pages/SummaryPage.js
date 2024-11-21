import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/SummaryPage.css';

const SummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { date, restaurant, movie } = location.state || {};

  // ฟังก์ชันสำหรับสร้างพลุ
  const createFireworks = () => {
    const container = document.querySelector('.message-container');
    for (let i = 0; i < 10; i++) {
      const firework = document.createElement('div');
      firework.classList.add('firework');
      container.appendChild(firework);

      // กำหนดตำแหน่งให้พลุระเบิดในแต่ละจุด
      firework.style.left = `${Math.random() * 100}vw`;
      firework.style.top = `${Math.random() * 100}vh`;
    }
  };

  useEffect(() => {
    createFireworks();
  }, []);

  return (
    <div className="message-container">
      <h1 className="message-text">See you on</h1>
      <p className="message-date">
        {date ? new Date(date).toLocaleDateString() : 'No date selected'}
      </p>
      <p className="message-other">
        <strong>at:</strong> {restaurant || 'No restaurant selected'}
      </p>
      <p className="message-other">
        <strong>to see:</strong> {movie || 'No movie selected'}
      </p>
    </div>
  );
};

export default SummaryPage;
