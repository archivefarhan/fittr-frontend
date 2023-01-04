import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="text-center w-screen h-screen">
      <br />
      <h1 className="pl-2 text-center text-2xl	font-bold	">Signup</h1>
      <br />
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="mt-8 pl-5 grid grid-cols-1 gap-6 place-content-center" onSubmit={handleSubmit}>
        <div>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="pl-1 mt-1 w-2/5 rounded-md border-gray-200 bg-white text-center text-lg text-gray-700 shadow-sm shadow-black outline-black	"
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="pl-1 mt-1 w-2/5 rounded-md border-gray-200 bg-white text-center text-lg text-gray-700 shadow-sm shadow-black outline-black	"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="pl-1 mt-1 w-2/5 rounded-md border-gray-200 bg-white text-center text-lg text-gray-700 shadow-sm shadow-black outline-black	"
          />
        </div>
        <div>
          <input
            name="password_confirmation"
            type="password"
            placeholder="Password confirmation"
            className="pl-1 mt-1 w-2/5 rounded-md border-gray-200 bg-white text-center text-lg text-gray-700 shadow-sm shadow-black outline-black	"
          />
        </div>
        <div>
          <button
            type="submit"
            className="mx-auto ml-3 inline-block w-36 rounded-full bg-black px-5 py-3 text-base font-medium text-white "
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}
