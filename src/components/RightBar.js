import { useLocation } from "react-router-dom";
import Search from "./Search";
import Trends from "./Trends";
import Users from "./Users";

const RightBar = () => {
    const location = useLocation();
    let search;
    let trends;
    if(location.pathname !== "/Explore"){
        search = <Search />;
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