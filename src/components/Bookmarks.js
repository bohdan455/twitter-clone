import Comment from "./Comment";

const Bookmarks = ({tweetsList}) => {
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
