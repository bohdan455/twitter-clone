import {useContext} from "react";
import {TweetsContext} from "./TweetsContext";
import Comment from "./Comment";

const Bookmarks = () => {
    const [tweetsList] = useContext(TweetsContext);
    return ( 
        <div className="bookmarks">
            <div className="top-section">
                Bookmarks
                <div className="user-id">@lol</div>
            </div>
            {tweetsList.reverse().map(item =>(
                <Comment text = {item} />

            ))}
        </div>
     );
}
 
export default Bookmarks
