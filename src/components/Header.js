import { Link } from "react-router-dom";
const Header = () => {
    const navText = ["Home","Explore", "Notifications", "Messages","Bookmarks","Lists","More"];
    return ( 
        <header>
            <ul>
                <li> <Link to = '/'><img src = {require("../images/logo.png")} alt="" className="logo" /></Link></li>
                {navText.map(item =>(
                    <li key={item}><Link to={`/${item}`} className ="nav-item"><img  src={require(`../images/icons/${item.toLowerCase()}.png`)} alt= {item.toLowerCase()} /> <span className="nav-text">{item} </span></Link></li>
                ))}
                <li><input type="button" className="tweet-btn" value="Tweet"/></li>
            </ul>

        </header>
     );
}
 
export default Header;


