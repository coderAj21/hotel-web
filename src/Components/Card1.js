import React from "react";

const Card1=()=>{
    return (
        <div className="flex flex-wrap gap-5">
            <div className="relative">
                <img className="w-[300px] aspect-square object-cover rounded-3xl" src="./Images/Img6.jpg" alt=""></img>
                <p className="absolute bottom-[5%] left-2 bg-white p-1 px-4 rounded-full font-bold">Spain</p>
            </div>
            <div className="relative">
                <img className="w-[300px] aspect-square rounded-3xl" src="./Images/Img5.jpg" alt=""></img>
                <p className="absolute bottom-[5%] left-2 bg-white p-1 px-4 rounded-full font-bold">Scotland</p>
            </div>
            <div className="relative">
                <img className="w-[300px] aspect-square rounded-3xl" src="./Images/Img4.jpg" alt=""></img>
                <p className="absolute bottom-[5%] left-2 bg-white p-1 px-4 rounded-full font-bold">Newyork</p>
            </div>
            <div className="relative">
                <img className="w-[300px] aspect-square rounded-3xl" src="./Images/Img3.jpg" alt=""></img>
                <p className="absolute bottom-[5%] left-2 bg-white p-1 px-4 rounded-full font-bold">Bali</p>
            </div>
        </div>
    );
};

export default Card1;