import { useState } from "react";
import InputForm from "./InputForm";
import { Link } from "react-router-dom";

export default function Register() {
  const [message, setMessage] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const handleRegister = async (e) => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      phone,
      email,
      password,

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
            onSubmit={handleRegister}
            className="space-y-6 grid grid-rows-2 w-2/3 mx-auto" action="POST">
            <div className="nav__logo text-center ">
              <a href="/"> Something <span>Same</span></a>
              <h1 className="mt-2 text-3xl font-bold font-serif">Please <span className="text-red-500">Register</span> </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputForm required={true} label="First Name" type="text" name="firstName"
                placeholder="John" onChange={(e) => setFirstName(e.target.value)} />
              <InputForm required={true} label="Last Name" type="text" name="lastName"
                placeholder="Doe" onChange={(e) => setLastName(e.target.value)} />
            </div>
            <InputForm required={true} label="Email" type="email" name="email"
              placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} />
            <InputForm required={true} label="Phone" type="text" name="phone"
              placeholder="09012345678" onChange={(e) => setPhone(e.target.value)} />

            <InputForm required={true} label="Password" type="password" name="password"
              placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} />
            <InputForm required={true} label="Confirm Password" type="password" name="confirmPassword"
              placeholder="••••••••" onChange={(e) => setConfirmPassword(e.target.value)} />
              {
                message && <p className="text-red-500">{message}</p>
              }
            <button type="submit"
              className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login
              to your account</button>
            <div className="text-sm font-medium ">
            Have a account ?<Link to="/login" className="text-red-700 hover:underline "> Login Here</Link>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
