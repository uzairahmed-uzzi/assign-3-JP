import React,{useState} from "react";
import {useFireBase} from '../../Context/FireBaseContext'
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const firebase=useFireBase();
const navigate = useNavigate();
  const { createUser } = firebase;
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigateToLogin = () => {
    navigate("/");
  };

  const submitHandler = async(e) => {
    e.preventDefault();
   try{
    const res= await createUser(inputs.email, inputs.password);
    console.log(res)
    setInputs({
      email: "",
      password: "",
    });
    navigateToLogin();
   }catch(err){
     console.log(err);
   }
  //  console.log("-->",res.status);
  };

  const changeHandler = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return <>
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitHandler} >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={inputs.email}
                  onChange={changeHandler}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={inputs.password}
                  onChange={changeHandler}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
              <p onClick={navigateToLogin} className="text-sm text-right w-full text-gray-500 underline hover:cursor-pointer font-thin font-mono ">already exists?</p>

            </div>
          </form>


        </div>
      </div>
  </>;
};

export default Signup;
