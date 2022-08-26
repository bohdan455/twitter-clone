import Comment from "./Comment";
const CommentsBlock = ({tweetsList, showButtons}) => {
    let id = 0;
    return ( 
        <div className="comments-block">
            {tweetsList.map(item =>(
                <Comment key = {id++} id = {id} {...item} showButtons = {showButtons}/>
            )).reverse()}
        </div>
     );
}
 
export default CommentsBlock;