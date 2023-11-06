import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const axiosSeceure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut }= useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() =>{
        axiosSeceure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response)
            if(error.response.status === 401 || error.response.status === 403){
                console.log('logout the user')
            }
        }
        )
    }, [])
};

export default useAxiosSecure;