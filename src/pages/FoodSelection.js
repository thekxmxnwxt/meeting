import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/FoodSelection.css';
import foodData from '../data/FoodData';

const FoodSelection = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const location = useLocation();
  const { date } = location.state || {}; // รับค่าจากหน้า HeroSection
  const navigate = useNavigate();

  const handleSelection = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNext = () => {
    if (selectedOption) {
      navigate('/movie', {
        state: { date, restaurant: selectedOption }, // ส่ง date และ restaurant ไปยัง MoviePage
      });
    } else {
      alert('Please select a restaurant!');
    }
  };

  return (
    <div className="food-selection-container">
      <h1 className="title">The Food We Will Eat</h1>

      <div className="food-options">
        {foodData.map((restaurant) => (
          <div className="food-item" key={restaurant.id}>
            <img
              src={restaurant.image}  // แสดงรูปภาพจาก API
              alt={restaurant.name}
              className="food-image"
            />
            <label>
              <input
                type="radio"
                name="food"
                value={restaurant.description}  // ใช้ชื่อร้านจาก API เป็นค่าของ radio
                checked={selectedOption === restaurant.description}
                onChange={handleSelection}
              />
              {restaurant.name} - {restaurant.description}
            </label>
          </div>
        ))}
      </div>

      <button className="date-button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default FoodSelection;
