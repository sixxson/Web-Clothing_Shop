import { useState } from "react";
import InputForm from "./InputForm";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../redux/features/auths/AuthApi";
import { setUser } from "../redux/features/auths/authSlice";

export default function Login() {

    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginUser] = useLoginMutation()
    const navigator = useNavigate()
    const dispatch = useDispatch()

    // handle Login
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        };
        try {
            const reponese = await loginUser(data).unwrap();
            const { token, user } = reponese
            dispatch(setUser({ token, user }));
            alert("Login Successfully");
            navigator("/");

        } catch (error) {
            console.error(error);
            setMessage("Something went wrong");
        }

    }
    return (
        <div className="pt-20 ">
            <div className="lg:min-w-[1200px] md:px-5 grid md:grid-cols-2 grid-cols-1 w-full gap-5
    max-w-5xl md:mx-auto">
                <div className='hidden md:flex inline__bg rounded-lg'>
                    {/* image */}
                </div>
                <div>
                    {/* form */}
                    <form
                        onSubmit={handleLogin}
                        className="space-y-6 grid grid-rows-2 p-8 w-full sm:p-4 pt-20 " action="POST">
                        <div className="nav__logo text-center">
                            <a href="/"> Something <span>Same</span></a>
                            <h1 className="mt-2 text-3xl font-bold font-serif">Please <span className="text-red-500">Login</span> </h1>

                        </div>
                        <InputForm required={true} label="Email" type="email" name="email"
                            placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                        <InputForm
                            required={true}
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            onChange={(e) => setPassword(e.target.value)} />
                        {message && <p className="text-red-500">{message}</p>}
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value=""
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300   ring-offset-gray-800 focus:ring-offset-gray-800"
                                    />
                                </div>
                                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 ">Remember
                                    me</label>
                            </div>
                            <a href="#" className="ms-auto text-sm text-red-700 hover:underline ">Lost Password?</a>
                        </div>
                        <button type="submit"
                            className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login
                            to your account</button>
                        <div className="text-sm font-medium ">
                            Not registered? <Link to="/register" className="text-red-700 hover:underline ">Create account</Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
