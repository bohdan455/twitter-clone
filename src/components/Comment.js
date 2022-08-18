
const Comment = ({text,}) => {
    return ( 
    <div className="comment">
        <img src= {require('../images/profile-logo.jpg')} alt ="profile" className='profile-picture' />
        <div className="comment-value">
            <div className="comment-info">
                <span className="user-name">
                    Lol
                </span>
                <span className="user-id">
                    @lol · 5m
                </span>
            </div>
            <div className="comment-text">
            {text}
            </div>
            <ul className="comment-actions">
                <li><img src={require('../images/comment-btn/Comment.png')} alt="comment" />0</li>
                <li><img src={require('../images/comment-btn/Retweet.png')} alt="retweet" />0</li>
                <li><img src={require('../images/comment-btn/Like.png')} alt="like" />0</li>
                <li><img src={require("../images/comment-btn/Share.png")} alt="share" /></li>
            </ul>
        </div>
    </div> 
    );
}

export default Comment;