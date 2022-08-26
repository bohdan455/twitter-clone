import { useContext } from "react";
import { TweetsContext } from "./TweetsContext";
const Comment = ({ text, id, likes, showButtons,name }) => {
  const [tweetsList, setTweetsList] = useContext(TweetsContext);

  const likeHandler = (e) => {
    let tweets = [...tweetsList];
    if(tweets[id].likes.indexOf(name) === -1){
      tweets[id].likes.push(name)
    }
    else{
      tweets[id].likes = tweets[id].likes.filter(tweet => tweet !== name)
    }
    setTweetsList(() => {
      return tweets;
    });
    console.log(tweets[id].likes)
  };
  return (
    <div className="comment">
      <img
        src={require("../images/profile-logo.jpg")}
        alt="profile"
        className="profile-picture"
      />
      <div className="comment-value">
        <div className="comment-info">
          <span className="user-name">{name}</span>
          <span className="user-id">@{name} · 5m</span>
        </div>
        <div className="comment-text">{text}</div>
        {showButtons && (
          <ul className="comment-actions">
            <li onClick={likeHandler}>
              <img src={require("../images/comment-btn/Like.png")} alt="like" />
              {likes.length}
            </li>
            {/* <li><img src={require('../images/comment-btn/Retweet.png')} alt="retweet" />0</li>
                <li><img src={require("../images/comment-btn/Share.png")} alt="share" /></li> */}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Comment;
