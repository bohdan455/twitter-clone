import { useContext } from "react";
import { useState } from "react";
import { AccountContext } from "./AccountContext";

const Login = () => {
    const [username,setUsername] = useState('');
    const [,setAccount] = useContext(AccountContext);
    const submitHandler = (e) => {
        e.preventDefault();
        if(username){
            setAccount({name: username});
        }
    }
    return (
        <div className="login">
            <div className="login-content" onSubmit={submitHandler}>
                Login
                <form action="">
                    <input type="text" className="login-content-input" value={username} onChange = {(e) => setUsername(e.target.value)} placeholder="Username"/>
                    <input type="submit" className="login-content-submit"/>
                </form>
            </div>
        </div> 
    );
}
 
export default Login;