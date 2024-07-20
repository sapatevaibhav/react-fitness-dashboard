import React, { useState } from "react";

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getMonthDays = (date) => {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const days = [];
    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      days.push(new Date(date.getFullYear(), date.getMonth(), i));
    }

    const firstDayIndex = startOfMonth.getDay();
    for (let i = 0; i < firstDayIndex; i++) {
      days.unshift(null);
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const markedDates = [
    new Date(2024, 6, 4),
    new Date(2024, 6, 5),
    new Date(2024, 6, 6),
    new Date(2024, 6, 7),
    new Date(2024, 6, 8),
    new Date(2024, 6, 15),
    new Date(2024, 6, 16),
    new Date(2024, 6, 17),
  ];

  const isMarked = (date) => {
    return markedDates.some((d) => d.toDateString() === date.toDateString());
  };

  const days = getMonthDays(currentDate);

  return (
    <div>
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index} className="calendar-day-name">
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <div key={index} className={`calendar-day ${day ? "" : "empty"}`}>
            {day && (
              <div className={`calendar-date ${isMarked(day) ? "marked" : ""}`}>
                {day.getDate()}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCalendar;
