import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'; // นำเข้า DatePicker
import 'react-datepicker/dist/react-datepicker.css';
import '../style/DatePage.css'; // ใช้ไฟล์ CSS หรือ styled-components แทน

const Datepage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleNext = () => {
    if (selectedDate) {
      navigate('/food', { state: { date: selectedDate } });
    } else {
      alert('Please select a date!');
    }
  };

  return (
    <div className="hero-container">
      <h1 className="hero-text">
        Appointment date
      </h1>

      {/* ปฏิทิน */}
      <div className="date-picker-container">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)} // กำหนดฟังก์ชันเมื่อเลือกวันที่
        dateFormat="dd/MM/yyyy" // กำหนดรูปแบบวันที่
        placeholderText="Click to select a date"
      />
      </div>

        <button className="date-button" onClick={handleNext}>Next</button>
      
    </div>
  );
};

export default Datepage;
