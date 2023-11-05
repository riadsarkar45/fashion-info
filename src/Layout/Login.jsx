import { useContext } from 'react';
import '../assets/Login.css'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
const Login = () => {
    const { SignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        //const user = { email, password }

        SignIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                const user = { email }
                console.log(result);
                //get access token
                // axios.post('http://localhost:5000/jwt', user, {withCredentials:true})
                //     .then(res => {
                //         console.log(res.data)
                // })
                toast.success("Login Sucessfull");
                //navigate("/");
            })
            .catch(error => {
                toast(error.message)
            })
    }
    return (
        <div>
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="user-box">
                        <input type="text" name="email" required="" />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="password" required="" />
                        <label>Password</label>
                    </div>
                    <a>
                        <button type='submit'>
                            <span />
                            <span />
                            <span />
                            <span />
                            Login
                        </button>
                    </a>
                </form>
            </div>

        </div>
    );
};

export default Login;