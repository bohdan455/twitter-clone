import {useContext} from "react";
import {TweetsContext} from "./TweetsContext";
import Search from "./Search";
import Trends from "./Trends";
import CommentsBlock from "./CommentsBlock";
import { useState } from "react";



const Explore = () => {
    const [tweetsList] = useContext(TweetsContext);
    const [searchValue, setSearchValue] = useState('');
    const searchHandler = (e) =>{
        e.preventDefault();
    }
    return ( 
        <div className="explore">
            <Search searchHandler ={searchHandler} searchValue = {searchValue} setSearchValue={setSearchValue}/>
            {searchValue ? null : <Trends />}
            <CommentsBlock tweetsList={tweetsList.filter(tweet => tweet.text.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)} showButtons = {false}/> 
        </div>
     );
}
 
export default Explore;
