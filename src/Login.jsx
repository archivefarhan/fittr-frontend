import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login" className="w-screen h-screen">
      <br />
      <ul className="text-center">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="h-1/2 flex flex-col items-center justify-center rounded">
        <h1 className="text-center mt-10 font-bold text-2xl">Login</h1>
        <hr className="w-1/3 h-1 my-2 bg-black" />
        <br />
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="mt-2 w-full rounded-xl border-black shadow-sm sm:text-sm"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="mt-2 w-full rounded-xl border-black shadow-sm sm:text-sm"
          />
        </div>
        <button type="submit" className="bg-black w-20 px-4 py-2 text-white rounded-lg mt-4">
          Login
        </button>
      </form>
    </div>
  );
}
