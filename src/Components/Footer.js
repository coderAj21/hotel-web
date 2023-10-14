import React from "react";

const Footer=()=>{
    return(
        <div className="bg-gray-50 w-full mt-[5%] font-poppins">
            <div className="flex justify-between w-10/12 mx-auto py-[1%]">
                <div className="flex flex-col gap-1">
                    <p className="text-2xl font-bold">Raddison</p>
                    <p className="text-xs">Your favourite hotel booking experience</p>
                    <p className="text-xs">since © 2005</p>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-sm">Help</p>
                    <p className="text-xs ">FAQ</p>
                    <p className="text-xs">Customer service</p>
                    <p className="text-xs">How to guide</p>
                    <p className="text-xs">Contact us</p>
                </div>
            </div>
        </div>
    )

}
export default Footer;