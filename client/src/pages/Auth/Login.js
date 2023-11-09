import React, { useState } from "react";
import Layout from "./../../components/layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
import { toast } from 'react-toastify';
import "../../styles/AuthStyles.css";
import { useAuth } from "../../components/context/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth()

    const navigate = useNavigate();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password });
            // const res = await axios.post("api/v1/auth/login", { email, password });
            //     if (res.data.success) {
            //         toast.success(res.data.message)

            //         navigate('/');
            //     } else {
            //         toast.error(res.data.message)
            //     }
            // } catch (error) {
            //     console.log(error)
            //     toast.error("Something went wrong!")
            // }

            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                })
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate("/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
        // try {
        //     // const res = await axios.post("/api/v1/auth/login", {
        //     //     email,
        //     //     password,
        //     // });
        //     const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password });
        //     if (res.data.success) {
        //         toast.success("Login successfully done!");
        //         toast.success(res.data.message);
        //         navigate("/Contact");
        //     } else {
        //         toast.error("Galat ho gaya sahi se kar!");
        //         toast.error(res.data.message);
        //     }
        // } catch (error) {
        //     console.log(error);
        //     toast.error("Something went wrong");
        // }
    };
    return (
        <Layout title="Register - Ecommer App">
            <div className="form-container  register">
                <form onSubmit={handleSubmit}>
                    <h1 className="title">LogIn</h1>

                    <div className="col-md-6 hi">
                        {/* <label classname='username' id="email" placeholder="Enter You Email">UserName</label> */}
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Email"
                            required
                        />

                    </div>
                    <div className="col-md-6 hi">
                        {/* <label classname='password' id="password" placeholder="Enter You Password">Password</label> */}
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter Your Password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        LOGIN
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Login;