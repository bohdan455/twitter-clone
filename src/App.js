import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import RightBar from "./components/RightBar.js";
import Explore from "./components/Explore";
import { useState } from "react";
import Bookmarks from "./components/Bookmarks";


function App() {
  const [tweetsList, setTweetsList] = useState([]);
  return (
    <div className="app">
      <BrowserRouter>
      <Header />
      <div className="content">
      <Routes>
          <Route path="/" element={<Navigate to="/Home"/>}/>
          <Route path="/Home" element = {<Home tweetsList={tweetsList} setTweetsList = {setTweetsList} />} />
          <Route path="/Explore" element = {<Explore tweetsList={tweetsList} />} />
          <Route path="/Bookmarks" element = {<Bookmarks tweetsList={tweetsList} />} />
      </Routes>
      </div>
      <RightBar />
    </BrowserRouter>

    </div>
  );
}

export default App;
