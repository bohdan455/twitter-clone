import { useLocation } from "react-router-dom";
import { useState } from "react";
import Search from "./Search";
import Trends from "./Trends";
import Users from "./Users";

const RightBar = () => {
    const location = useLocation();
    let search;
    let trends;
    const [searchValue, setSearchValue] = useState('');
    const searchHandler = (e) =>{
        e.preventDefault();
    }
    if(location.pathname !== "/Explore"){
        search = <Search searchHandler ={searchHandler} searchValue={searchValue} setSearchValue = {setSearchValue}/>;
        trends = <Trends />;
    }
    return ( 
        
        <div className="rightBar">
            {search}
            {trends}
            <Users />
        </div>
     );
}
 
export default RightBar;