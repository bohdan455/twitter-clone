import ProfilePhoto from "../images/profile-logo.jpg";

const UsersItem = () => {
    return ( 
        <div className="user">
            <img src={ProfilePhoto} alt="" className="profile-picture"/>
            <div className="user-information">
                <p className="user-name">Hello world</p>
                <p className="user-id">@lol</p>
            </div>
            <input type="button" className="follow-btn"  value="Follow"/>
        </div>
     );
}
 
export default UsersItem;
