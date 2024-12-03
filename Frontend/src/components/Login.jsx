import { useState } from "react";
import InputForm from "./InputForm";
import { Link } from "react-router-dom";

export default function Login() {

    const [message] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        };
        console.log(data);

        // try {
        //     const response = await fetch("http://localhost:3000/login", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             email,
        //             password,
        //         }),
        //     });
        //     const data = await response.json();
        //     if (data.error) {
        //         setMessage(data.error);
        //     } else {
        //         setMessage(data.message);
        //     }
        // } catch (error) {
        //     console.log(
        //         "Error:",
        //         error
        //     );
        // }
    }
    return (
        <div className="pt-20 ">
            <div className="min-w-[1200px] grid md:grid-cols-2 grid-cols-1 w-full gap-5
            max-w-5xl mx-auto p-4 border border-gray-200 rounded-lg shadow sm:p-6
            md:p-8">
                <div className='hidden md:flex inline__bg rounded-lg'>
                    {/* image */}
                </div>
                <div>
                    {/* form */}
                    <form
                        onSubmit={handleLogin}
                        className="space-y-6 grid grid-rows-2 w-2/3 mx-auto" action="POST">
                        <div className="nav__logo text-center">
                            <a href="/"> Something <span>Same</span></a>
                            <h1 className="mt-2 text-3xl font-bold font-serif">Please <span className="text-red-500">Login</span> </h1>

                        </div>
                        <InputForm required={true} label="Email" type="email" name="email"
                            placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                        <InputForm required={true} label="Password" type="password" name="password"
                            placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} />
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
