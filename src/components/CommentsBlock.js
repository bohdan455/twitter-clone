import Comment from "./Comment";


const CommentsBlock = ({tweetsList}) => {
    let id = 0;
    return ( 
        <div className="comments-block">
            {tweetsList.map(item =>(
                <Comment key = {++id} id = {id} text={item} />
            )).reverse()}
        </div>
     );
}
 
export default CommentsBlock;