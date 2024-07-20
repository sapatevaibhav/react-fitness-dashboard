import React from "react";
import TotalWorkoutChart from "./TotalWorkoutChart";
import CaloriesBurnedChart from "./CaloriesBurnedChart";
import HeartRateChart from "./HeartRateChart";
import FitnessGoalsChart from "./FitnessGoalsChart";
import CustomCalendar from "./Calendar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "react-calendar/dist/Calendar.css";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="chart-wrapper">
        <div className="top-charts">
          <TotalWorkoutChart />
          <CaloriesBurnedChart />
          <HeartRateChart />
        </div>
      </div>
      <div className="chart-wrapper">
        <div className="middle-charts">
          <FitnessGoalsChart />
          <div className="calendar-wrapper">
            <CustomCalendar />
          </div>
        </div>
      </div>
      <div className="chart-wrapper">
        <div className="bottom-map">
          <MapContainer
            center={[18.5204, 73.8567]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[18.5204, 73.8567]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
