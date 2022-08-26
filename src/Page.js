import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import RightBar from "./components/RightBar.js";
import Explore from "./components/Explore";
import Bookmarks from "./components/Bookmarks";
import Login from "./components/Login";
import { useContext } from "react";
import { AccountContext } from "./components/AccountContext";
const Page = () => {
  const [account] = useContext(AccountContext);
  return (
    <>
      {account ? (
        <div className="page">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Navigate to="/Home" />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Explore" element={<Explore />} />
              <Route path="/Bookmarks" element={<Bookmarks />} />
            </Routes>
          </div>
          <RightBar />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Page;
