import { useState } from "react";

const Login=()=>{
    const [newUser,setNewUser]=useState(false);
    return(
        <div className="w-10/12 mx-auto font-poppins">
            <div className="flex flex-wrap">
                <div className="w-1/2 flex justify-center items-center">
                    {
                        newUser===true?

                        (<div className="w-3/4 h-3/4 my-2">
                        <p className="text-3xl font-bold my-4">Create account!</p>
                        <p className="my-2 text-gray-400">Sign up for the best prices, offers and rewards</p>
                        <form className="flex flex-col gap-4 mt-4">
                            <label className="font-semibold">Full Name *</label>
                            <input className="border border-gray-400 bg-gray-50 py-1"
                                type="email"></input>
                            <label className="font-semibold">Email *</label>
                            <input className="border border-gray-400 bg-gray-50 py-1"
                                type="email"></input>
                            <label className="font-semibold">Phone Number *</label>
                            <input className="border border-gray-400 bg-gray-50 py-1"></input>

                            <label className="font-semibold">Password *</label>
                            <input className="border border-gray-400 bg-gray-50 py-1"></input>
                            <p className="text-blue-500 text-right hover:cursor-pointer">Forgot password?</p>
                            <button className="bg-[#FFE700] text-black font-semibold py-2 shadow-md
                            hover:bg-ht-100 hover:shadow-lg focus:bg-ht-100 focus:shadow-lg focus:outline-none
                            focus:ring-0 active:bg-ht-100 active:shadow-lg transition duration-150 ease-in-out">SiGN UP</button>
                        </form>
                        <p className="text-center my-4"><span className="text-gray-400">Already have an account? </span> <span className="hover:cursor-pointer"
                                onClick={()=>(setNewUser(false))}>Login</span></p>
                    </div>)
                    :
                        (<div className="w-3/4 h-3/4 my-2">
                        <p className="text-3xl font-bold my-4">Welcome Back!</p>
                        <p className="my-2">Hi travller, great to see you again</p>
                        <form className="flex flex-col gap-4 mt-4">
                            <label className="font-semibold">Email</label>
                            <input className="border border-gray-400 bg-gray-50 py-1"
                                type="email"></input>
                            <label className="font-semibold">Password</label>
                            <input className="border border-gray-400 bg-gray-50 py-1"></input>
                            <p className="text-blue-500 text-right hover:cursor-pointer">Forgot password?</p>
                            <button className="bg-[#FFE700] text-black font-semibold py-2 shadow-md
                            hover:bg-ht-100 hover:shadow-lg focus:bg-ht-100 focus:shadow-lg focus:outline-none
                            focus:ring-0 active:bg-ht-100 active:shadow-lg transition duration-150 ease-in-out">Login</button>
                        </form>
                        <p className="text-center my-4"><span className="text-gray-400">Don't have an account? </span> <span className="hover:cursor-pointer"
                                    onClick={()=>(setNewUser(true))}>Create account</span></p>
                    </div>)

                    }
                </div>
                <div className="w-1/2 ">
                    <img src="./Images/img3.jpg" className="rounded-md" alt=""></img>
                </div>
            </div>

        </div>
    );
};

export default Login;