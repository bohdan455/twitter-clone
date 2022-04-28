import UsersItem from "./UsersItem";

const Users = () => {
    return ( 
        <div className="users">
            <h5>Who to follow</h5>
            <UsersItem />
            <UsersItem />
            <UsersItem />
        </div>
     );
}
 
export default Users;