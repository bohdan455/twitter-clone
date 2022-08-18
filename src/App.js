import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import RightBar from "./components/RightBar.js";
import Explore from "./components/Explore";
import {useState} from "react";
import Bookmarks from "./components/Bookmarks";
import {TweetsRouter} from "./components/TweetsContext";

function App() {
    const [tweetsList, setTweetsList] = useState([]);
    return (
        <TweetsRouter>
            <div className="app">
                <BrowserRouter>
                    <Header/>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Navigate to="/Home"/>}/>
                            <Route path="/Home" element={<Home />}/>
                            <Route path="/Explore" element={<Explore />}/>
                            <Route path="/Bookmarks" element={<Bookmarks />}/>
                        </Routes>
                    </div>
                    <RightBar/>
                </BrowserRouter>

            </div>
        </TweetsRouter>
    );
}

export default App;
