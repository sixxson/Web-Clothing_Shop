import { useState } from "react";
import InputForm from "./InputForm";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/features/auths/AuthApi";

export default function Register() {
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [registerUser, { isLoading }] = useRegisterMutation();
  const navigator = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      phone,
      email,
      password,
    };
    try {
      const response = await registerUser(data).unwrap();
      alert("Register Successfully", response);
      navigator("/login");
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="md:pt-20 pt-40">
      <div
        className="lg:min-w-[1200px] grid md:grid-cols-2 grid-cols-1 w-full gap-5 p-5
    max-w-5xl md:mx-auto"
      >
        <div className="hidden md:flex inline__bg rounded-lg">
          {/* image */}
        </div>
        <div>
          {/* form */}
          <form
            onSubmit={handleRegister}
            className="space-y-6 grid grid-rows-2 w-full md:p-3 p-5 "
            action="POST"
          >
            <div className="nav__logo text-center">
              <a href="/">
                {" "}
                Something <span>Same</span>
              </a>
              <h1 className="mt-2 text-3xl font-bold font-serif">
                Please <span className="text-red-500">Register</span>{" "}
              </h1>
            </div>
            <div className="flex lg:flex-row flex-col gap-4">
              <InputForm
                required={true}
                label="First Name"
                type="text"
                name="firstName"
                placeholder="John"
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full"
              />
              <InputForm
                required
                label="Last Name"
                type="text"
                name="lastName"
                placeholder="Doe"
                onChange={(e) => setLastName(e.target.value)}
                className="w-full"
              />
            </div>
            <InputForm
              required
              label="Email"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputForm
              required
              label="Phone"
              type="text"
              name="phone"
              placeholder="09012345678"
              onChange={(e) => setPhone(e.target.value)}
            />
            <InputForm
              required
              label="Password"
              type="password"
              name="password"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputForm
              required
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {message && <p className="text-red-500">{message}</p>}
            <button
              type="submit"
              disabled={password !== confirmPassword} // Nút bị vô hiệu hóa nếu password không trùng confirmPassword
              className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                password !== confirmPassword
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
              }`}
            >
              {isLoading ? "Loading..." : "Create Account"}
            </button>
            <div className="text-sm font-medium">
              Have an account?{" "}
              <Link to="/login" className="text-red-700 hover:underline">
                Login Here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
