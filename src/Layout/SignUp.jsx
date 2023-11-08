import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
    const { creatUser, updateUser, logOut } = useContext(AuthContext);
    const naviGate = useNavigate();
    const handelSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const fullName = form.fullname.value;
        const imgUrl = form.imgUrl.value;
        console.log(email, password)
        if (!/[A-Z]/.test(password)) {
            return toast.error("Password should contain at least one capital later")
        } else if (!/[!@#$%^&*]/.test(password)) {
            return toast.error("One special character is required")
        } else if (password.length < 6) {
            return toast.error("Password must be at least 6 characters long")
        }
        creatUser(email, password)
            .then(result => {
                updateUser(fullName, imgUrl)
                logOut()
                .then(result =>{
                    console.log(result)
                })
                .catch(error => console.error(error))
                toast.success("Registration Successfull");
                toast.warning("Login to continue");
                console.log(result.user)
                e.target.reset();
                naviGate("/login");
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Helmet>
                <title>SignUp</title>
            </Helmet>
            {/* component */}
            <div className="bg-grey-lighter flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <form onSubmit={handelSignUp}>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                placeholder="Full Name"
                            />

                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="imgUrl"
                                placeholder="Image Url"
                            />

                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"

                            />
                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                            />
                            {/* <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password"
                        /> */}
                            <button
                                type="submit"
                                className="w-full btn btn-outline btn-md"
                            >
                                Create Account
                            </button>
                        </form>
                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <a
                                className="no-underline border-b border-grey-dark text-grey-dark"
                                href="#"
                            >
                                Terms of Service
                            </a>{" "}
                            and
                            <a
                                className="no-underline border-b border-grey-dark text-grey-dark"
                                href="#"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <Link to="/register"
                            className="no-underline border-b border-blue text-blue"
                            
                        >
                            Log in
                        </Link>
                        .
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;