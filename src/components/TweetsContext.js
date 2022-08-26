import {createContext,useState} from "react";

export const TweetsContext = createContext();

export const TweetsRouter = props =>{
    const [tweetsList, setTweetsList] = useState([]);
    return(
        <TweetsContext.Provider value={[tweetsList, setTweetsList]}>
            {props.children}
        </TweetsContext.Provider>
    )
}