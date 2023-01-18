import React from "react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import withAuth from "../components/withAuth";
function LoginPage() {
  async function login(username, password) {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (response.status === 200) {
        const data = await response.json();
        return data.token;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    const token = await login(username, password);
    if (token) {
      // Save the JWT token in local storage
      localStorage.setItem("token", token);
      // Redirect to the protected page
      Router.push("/protected");
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <div>
      <section class="bg-red-50 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
          >
            <img class="w-8 h-8 mr-2" src="/Logo.png" alt="logo" />
            BAZAR ADMIN PANEL
          </a>
          <div class="w-full bg-orange-50 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    for="username"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    id="username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter your username here"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="text-gray-500 ">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-medium text- hover:underline "
                  >
                    Forgot password?
                  </a>
                </div>
                {/* <Link href="/"> */}
                <button
                  type="submit"
                  class="w-full text-white bg-black mt-2 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign in
                </button>
                {/* </Link> */}

                <p class="text-sm font-light text-gray-500 ">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline "
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default withAuth(LoginPage);
