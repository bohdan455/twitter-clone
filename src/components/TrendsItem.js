const TrendsItem = ({country, hashtag, number}) => {
    return ( 
        <p>
            Trending in {country} <br />
            <span className="hashtag">#{hashtag}</span> <br/>
            {number >= 1000 ? `${Math.floor(number/1000)},${number % 1000}` : number } tweets
        </p>
     );
}
 
export default TrendsItem;