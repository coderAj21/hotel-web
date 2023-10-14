import React from "react";
import {AiOutlineArrowRight}from 'react-icons/ai';
import Card1 from "./Card1";
import Card from "./Card";
const Main=()=>{
    return (
        <div className="">
            <div className="my-4 w-10/12 mx-auto">
                <img className="w-full h-72 rounded-xl object-cover relative bg-blend-darken brightness-75" src='./Images/Img1.jpg' alt=""></img>
                <p className="absolute left-[35%] right-[30%] top-[25%] text-white text-4xl font-bold mb-4
                            ">Book your stay with Raddison</p>
                <p className="absolute left-[23%] right-[20%] top-[32%] text-white text-4xl">1,480,086 rooms around world are waiting for you!</p>
                <div className="absolute flex justify-between left-[26%] right-[20%] top-[45%]
                                rounded-full bg-white w-[52%] shadow-md py-3 px-4">
                    <div className="flex">
                        <div className="flex flex-col border-r-2 border-gray-200 mr-2">
                            <p className="font-bold text-sm">Location</p>
                            <input className="w-full"placeholder="Where are you going?"></input>
                        </div>
                        <div className="flex flex-col border-r-2 border-gray-200 mr-2 mx-2">
                            <p className="font-bold text-sm">Check in</p>
                            <input className="w-9/12" placeholder="Add date"></input>
                        </div>
                        <div className="flex flex-col border-r-2 border-gray-200 mr-2">
                            <p className="font-bold text-sm">Check Out</p>
                            <input className="w-9/12" placeholder="Add date"></input>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-sm">Guest</p>
                            <input className="w-9/12" placeholder="Number of Guest"></input>
                        </div>

                    </div>
                    <button className="bg-blue-500 rounded-full">
                        <AiOutlineArrowRight className="text-white font-bold m-2 text-3xl "></AiOutlineArrowRight>
                    </button>
                </div>
            </div>
            <div className="w-10/12 mx-auto mt-[5%]">
                <p className="capitalize text-lg font-poppins mb-2">popular Destination</p>
                {
                    <Card1></Card1>
                }
            </div>
            <div className="w-10/12 mx-auto mt-[3%]">
                <p className="capitalize text-lg font-poppins font-medium mb-2">Hotel loved by Guests</p>
                <div>
                    <Card></Card>
                </div>
            </div>
        </div>
    );
};
export default Main;