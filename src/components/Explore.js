import {useContext} from "react";
import {TweetsContext} from "./TweetsContext";
import Search from "./Search";
import Trends from "./Trends";
import CommentsBlock from "./CommentsBlock";



const Explore = () => {
    const [tweetsList] = useContext(TweetsContext);
    return ( 
        <div className="explore">
            <Search />
            <Trends />
            <CommentsBlock tweetsList={tweetsList} />
        </div>
     );
}
 
export default Explore;
