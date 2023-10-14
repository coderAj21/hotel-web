
const Header=(props)=>{
    const setIsLogin=props.setIsLogin;
    return(
        <div className="w-10/12 mx-auto my-4">
            <div className="flex justify-between">
                <div className="flex gap-x-6">
                    <p className="text-2xl font-bold font-poppins hover:cursor-pointer"
                        onClick={()=>(setIsLogin(false))}>Raddison</p>
                    <p className="my-1">Properties</p>
                    <p className="my-1">Attractions</p>
                    <p className="my-1 capitalize">popular</p>
                </div>
                <div className="flex gap-x-6">
                    <button className="bg-[#FFE700] text-black shadow-3xl font-semibold py-1 px-6 rounded-3xl text-sm
                                       hover:bg-black hover:text-white hover:shadow-lg focus:bg-ht-100 focus:shadow-lg focus:outline-none
                                       focus:ring-0 active:bg-ht-100 active:shadow-lg transition duration-150 ease-in-out"
                                     onClick={()=>(setIsLogin(true))}>Log in</button>
                </div>
            </div>

        </div>
    );
};

export default Header;