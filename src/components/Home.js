import { useState, useContext } from "react";
import {TweetsContext} from "./TweetsContext";
import CommentsBlock from "./CommentsBlock";
import ProfilePhoto from "../images/profile-logo.jpg";
import Stars from "../images/icons/stars.png";
import { AccountContext } from "./AccountContext";


const Home = () => {
    const [tweetText, setTweetText] = useState('');
    const [tweetsList ,setTweetsList] = useContext(TweetsContext);
    const [account,] = useContext(AccountContext);
    function PostTweet(event){
        event.preventDefault();
        if(tweetText){
            setTweetsList(previousValue => [...previousValue,{text: tweetText, name: account.name ,likes: []}]);
            setTweetText('')
            console.log("tweet added");

        }
    }
    function TextHandler(event){
        setTweetText(event.target.value);
    }
    return ( 
        <div className="home">
            <div className="top-section">
                Home
                <img src={Stars} alt="stars" />
            </div>
            <div className="comment-container">
                <form onSubmit={PostTweet}>
                    <div className="input-area">
                        <img src={ProfilePhoto} alt ="profile" className="profile-picture" />
                        <input 
                        type="text" 
                        placeholder="What's happening?"
                        onChange={TextHandler} 
                        value = {tweetText}/>
                    </div>
                    <input type="submit" className="comment-btn" value="Tweet"/>
                </form>
            </div>
            <CommentsBlock tweetsList = {tweetsList} showButtons/>
        </div>
     );
}
 
export default Home;
