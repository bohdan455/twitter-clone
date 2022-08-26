import {useContext} from "react";
import {TweetsContext} from "./TweetsContext";
import CommentsBlock from "./CommentsBlock";
import { AccountContext } from "./AccountContext";

const Bookmarks = () => {
    const [tweetsList] = useContext(TweetsContext);
    const [account,] = useContext(AccountContext)
    return ( 
        <div className="bookmarks">
            <div className="top-section">
                Bookmarks
                <div className="user-id">@{account.name}</div>
            </div>
            <CommentsBlock tweetsList = {tweetsList.filter(item => item.likes.length > 0)}/>
        </div>
     );
}
 
export default Bookmarks
