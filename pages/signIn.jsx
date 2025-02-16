import React from "react";
import SignUp from "./signUp";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/");
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Welcome
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label className="block text-sm/6 font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base border text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                required
                className="block w-full rounded-md bg-white border px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-50 rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-opacity-10 shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border"
              onClick={() => handleSignIn()}>
              Sign in
            </button>
          </div>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?
            <button
              className="font-semibold text-indigo-600 hover:text-indigo-500"
              onClick={() => router.push("/signUp")}
            >
              <SignUp />
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
