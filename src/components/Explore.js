import Search from "./Search";
import Trends from "./Trends";

import CommentsBlock from "./CommentsBlock";



const Explore = ({tweetsList}) => {
    return ( 
        <div className="explore">
            <Search />
            <Trends />
            <CommentsBlock tweetsList={tweetsList} />
        </div>
     );
}
 
export default Explore;
