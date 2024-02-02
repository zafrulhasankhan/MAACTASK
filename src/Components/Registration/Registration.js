import * as React from "react";
import  { useState } from 'react';
import axios from 'axios';

function Registration(props) {
  const [newUser, setNewUser] = useState({})


  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value
    const newData = { ...newUser };
    newData[field] = value

    setNewUser(newData)


  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newUser)

    if (newUser.password !== newUser.passwordConfirm) {
      alert("Your password did not match!!")
      return;
    }
    const body = {
      name: newUser.name,
      email: newUser.email,
      employeeId: newUser.employeeId,
      password: newUser.password,
      passwordConfirm: newUser.passwordConfirm,
      role: newUser.role,
      phoneNumber: newUser.phoneNumber
    };
    console.log(newUser);
    axios.post('https://staging-api.erpxbd.com/api/v1/users/signup', body)
      .then(res => console.log(res.data))
      .catch(err => {
        console.error("Error:", err.response.data);
        if (err.response.status === 500) {
          console.error("Internal Server Error. Please try again later.");
        } else {
          console.error("An error occurred:", err.message);
        }
      });

  }
  return (
    <div className="flex flex-col bg-white">
      <div className="flex overflow-hidden relative flex-col items-center pt-5 pb-12 w-full font-medium leading-[150%] min-h-[1569px] max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="..."
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 justify-between w-full text-sm whitespace-nowrap max-w-[1216px] max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5373fc16df16badd4fb3f1ce7a8a4a301f17a9613a521325a7067a3f9d25cd3?"
            className="max-w-full aspect-[2.13] w-[102px]"
          />
          <div className="flex gap-4 items-start self-start">
            <div className="grow justify-center px-6 py-3 text-white bg-blue-700 rounded-lg max-md:px-5">
              Login
            </div>
            <div className="flex flex-col flex-1 justify-center py-px text-blue-700 bg-blue-700 rounded-lg">
              <div className="z-10 justify-center px-6 py-3 bg-sky-50 rounded-lg border border-blue-700 border-solid max-md:px-5">
                Registration
              </div>
            </div>
          </div>
        </div>
        <div className="relative self-stretch mt-5 w-full bg-slate-300 min-h-[1px] max-md:max-w-full" />
        <div className="flex relative justify-center items-center px-16 py-12 mt-28 mb-10 w-full max-w-screen-lg text-xl bg-white rounded-[32px] text-zinc-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mt-12 mb-8 max-w-full w-[609px] max-md:mt-10">
            <div className="self-center text-5xl font-bold text-center text-gray-900 whitespace-nowrap max-md:text-4xl">
              Create Account
            </div>
            <div className="self-center mt-11 text-2xl font-light text-center text-neutral-600 max-md:mt-10 max-md:max-w-full">
              Fill in the details below to create an account
            </div>
            <div className="mt-16 max-md:mt-10 max-md:max-w-full">
              Enter Your Full Name
              <input name="name" onChange={handleChange} type="text" className="form-control" placeholder="Enter Your Full Name" />
            </div>
            <div className="shrink-0 mt-8 h-0.5 bg-neutral-200 max-md:max-w-full" />
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
              Enter Your Email
              <input name="email" onChange={handleChange} type="text" className="form-control" placeholder="Enter Your Email" />
            </div>
            <div className="shrink-0 mt-8 h-0.5 bg-neutral-200 max-md:max-w-full" />
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
              Your ID
              <input name="employeeId" onChange={handleChange} type="text" className="form-control" placeholder="Enter Your Id" />
              </div>
            <div className="shrink-0 mt-8 h-0.5 bg-neutral-200 max-md:max-w-full" />
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
              Your Mobile Number
              <input name="phoneNumber" onChange={handleChange} type="text" className="form-control" placeholder="Enter Your Mobile Number" />
            </div>
            <div className="shrink-0 mt-8 h-0.5 bg-neutral-200 max-md:max-w-full" />
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
              Password
            <input name="password" onChange={handleChange} type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="shrink-0 mt-8 h-0.5 bg-neutral-200 max-md:max-w-full" />
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
              Confirm Password
              <input name="passwordConfirm" onChange={handleChange} type="password" className="form-control" placeholder="Confirm Password" />
            </div>
            <div className="shrink-0 mt-8 h-0.5 bg-neutral-200 max-md:max-w-full" />
            <div className="flex gap-5 justify-between px-px mt-11 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto self-start mt-2">Select Your Role</div>
              <input name="role" onChange={handleChange} type="text" className="form-control" placeholder="Enter Your Role" />
            
            </div>
            <div className="shrink-0 mt-7 h-0.5 bg-neutral-200 max-md:max-w-full" />
            <div className="flex gap-4 justify-between mt-10 text-blue-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="w-7 h-7 bg-white rounded border border-black border-solid" />
              <div className="flex-auto max-md:max-w-full">
  
                I read and agree to the{" "}
                <span className="text-blue-700">Terms & Conditions</span>
              </div>
            </div>
            <button type="submit" className="justify-center items-center px-16 py-6 mt-12 font-extrabold text-center text-white whitespace-nowrap bg-blue-700 rounded-lg leading-[130%] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              Create Account
            </button>
            <div className="self-center mt-20 text-2xl text-blue-700 whitespace-nowrap max-md:mt-10">
              Already have an account?{" "}
              <span className="text-blue-700">Sign In</span>
            </div>
          </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-12 w-full text-center bg-slate-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mt-10 mb-5 w-full max-w-[1216px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed6f25358084947c54dbee38e0f4dda6938766f7e297809ba5b5ddd6fbc6b96c?"
            className="max-w-full aspect-[2.13] w-[136px]"
          />
          <div className="mt-10 text-base font-medium leading-6 text-white w-[516px] max-md:max-w-full">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque.
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/25a48ab51b096cd2ef27f57a10e84a791a10b0d80a18297d168f0beff7005c28?"
            className="mt-9 max-w-full aspect-[5] w-[200px]"
          />
          <div className="shrink-0 self-stretch mt-24 h-px bg-blue-950 max-md:mt-10 max-md:max-w-full" />
          <div className="mt-12 text-lg font-bold leading-7 text-red-600 whitespace-nowrap max-md:mt-10">
            � All rights reserve by <span className="text-red-600">MAAC</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;