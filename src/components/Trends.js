import TrendsItem from "./TrendsItem";

const Trends = () => {
    return ( 
        <div className="trends">
            <h5>
                Trends for you
            </h5>
            <TrendsItem country="Ukraine" hashtag="Elon_Mask" number = "87546"/>
            <TrendsItem country="Ukraine" hashtag="War" number = "5455"/>
            <TrendsItem country="Ukraine" hashtag="Coronavirus" number = "88453"/>
            <TrendsItem country="Ukraine" hashtag="Putin" number = "8754"/>
        </div>
     );
}
 
export default Trends;