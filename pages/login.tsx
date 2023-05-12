import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import logo from "../public/images/logo.svg";
import Image from "next/image";
const LoginPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const callbackUrl = (router.query?.callbackUrl as string) ?? "/";
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const _target = e.target as any;
    const username = _target.username.value;
    const password = _target.password.value;
    const result = await signIn("credentials", {
        username,
        password,
        redirect: false,
    });
    if (result?.error) {
      setError(result.error);
    } else {
      router.push(callbackUrl);
    }
  };
  return (    
    // <form onSubmit={handleSubmit} className="">
  //   <h1>Login</h1>
  //   {!!error && <p>{error}</p>}
  //   <input type="text" placeholder="username" name="username" />
  //   <input type="password" placeholder="password" name="password" />
  //   <button type="submit">Sign In</button>
  // </form>
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <Image width={100} height={100} src={logo} alt="logoDark" />    
          </a>
          {!!error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative sm:max-w-md w-full mb-4" role="alert">{error}</div>}
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                      <div>
                          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                          <input type="text" placeholder="username" name="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                      </div>
                      <button type="submit" className="w-full text-white bg-slate-900 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:className=-700 dark:focus:ring-primary-800">Sign in</button>
                  </form>
              </div>
          </div>
      </div>
    </section>
  );
};
export default LoginPage;