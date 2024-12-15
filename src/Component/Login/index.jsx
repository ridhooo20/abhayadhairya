import React, { useRef, useState } from "react";
import "./login.css";

const Login = () => {
  // const emailInputRef = useRef(null);
  // const passwordInputRef = useRef(null);

  // const [credentials, setCredentials] = useState({
  //   username: "",
  //   password: "",
  // });

  // const dataBase = [
  //   {
  //     username: "ridhomulya",
  //     password: "mulya123",
  //   },
  // ];

  // const handleInputChange = (e) => {
  //   const { id, value } = e.target;
  //   setCredentials((prev) => ({
  //     ...prev,
  //     [id]: value,
  //   }));
  // };

  // const handleLogin = () => {
  //   const foundUser = dataBase.find(
  //     (user) =>
  //       user.username === credentials.username &&
  //       user.password === credentials.password
  //   );

  //   if (foundUser) {
  //     document.location.href = "/Dashboard"
  //   } else {
  //     alert("Username atau password salah.");
  //   }
  // };

  return (
    <div className="relative login bg-black flex justify-center items-center flex-col overflow-hidden mx-auto pt-48">
      <h1 className="text-2xl font-semibold text-center">Maintance</h1>
      {/* <h1 className="text-center text-2xl font-bold text-lime-600 sm:text-3xl">
        Login To Owner Web
      </h1>

      <p className="mx-auto mt-4 max-w-md text-center text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
        dolores deleniti inventore quaerat mollitia?
      </p>

      <label
        htmlFor="Username"
        className="mt-5 relative block rounded-md border border-gray-200 shadow-sm focus-within:border-lime-600 focus-within:ring-1 focus-within:ring-lime-600"
      >
        <input
          type="text"
          id="username"
          value={credentials.username}
          onChange={handleInputChange}
          ref={emailInputRef}
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
          placeholder="Username"
        />
        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          username
        </span>
      </label>

      <label
        htmlFor="Password"
        className="mt-2 relative block rounded-md border border-gray-200 shadow-sm focus-within:border-lime-600 focus-within:ring-1 focus-within:ring-lime-600"
      >
        <input
          type="password"
          id="password"
          value={credentials.password}
          onChange={handleInputChange}
          ref={passwordInputRef}
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
          placeholder="Password"
        />
        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          password
        </span>
      </label>

      <button
        onClick={handleLogin}
        id="Loginowner"
        className="inline-block mt-3 cursor-pointer rounded bg-lime-600 px-20 py-2 text-sm font-medium text-white transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:bg-lime-500"
      >
        Login
      </button> */}

      <a
        className="inline-block mt-3 cursor-pointer rounded bg-lime-600 px-11 py-2 text-sm font-medium text-white transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:bg-lime-500"
        href="/Abhaya"
      >
        Back To Website
      </a> 
    </div>
  );
};

export default Login;
