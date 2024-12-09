import React from "react";
import WeatherCard from "../pages/WheatherCard.jsx";
import UserInfo from "../components/UserInfo.jsx";
import Notes from "./Notes.jsx";
import News from "../components/news.jsx";
import "../pages/Widgets.css";
import Timer from "./Timer.jsx";
import BrowseBtn from "../components/browse-button.jsx";


export default function Widgets() {
  return (
    <div className="home-page">
      <div className="left-column">
        <div className="user-notes-wrapper">
          <UserInfo />
          <Notes />
        </div>
        <WeatherCard />
        <Timer />
      </div>
      <div className="right-column">
        <div className="news">
          <News />
        </div>
        <BrowseBtn/>
      </div>
    </div>
  );
}
