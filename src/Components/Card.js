import {AiOutlineArrowRight, AiTwotoneHeart} from 'react-icons/ai';
const Card=()=>{
    return (
        <div className='flex flex-wrap gap-4'>
            <div className="w-[240px] h-[220px] shadow-3xl rounded-xl relative">
                <p className='absolute left-[5%] top-[4%] bg-emerald-50 font-semibold px-2 rounded-full text-green-700'>9.6</p>
                <div className='absolute right-[5%] top-[4%] '><AiTwotoneHeart className='text-red-500 text-3xl'></AiTwotoneHeart></div>
                <img src="/Images/hotel1.jpg" alt='' className="w-[230px] h-[60%] my-1 object-cover rounded-xl mx-auto"></img>
                <p className='font-medium mx-2 font-poppins'>Soho Hotel London</p>
                <p className='text-sm text-gray-700 mx-2 font-poppins '>London</p>
                <div className='flex justify-between'>
                    <p className='font-semibold m-2'>from $130/night</p>
                    <AiOutlineArrowRight className='my-3 mx-4 text-xl'></AiOutlineArrowRight>
                </div>
            </div>
            <div className="w-[240px] h-[220px] shadow-3xl rounded-xl relative">
                <p className='absolute left-[5%] top-[4%] bg-emerald-50 font-semibold px-2 rounded-full text-green-700'>9.6</p>
                <div className='absolute right-[5%] top-[4%] '><AiTwotoneHeart className='text-red-500 text-3xl'></AiTwotoneHeart></div>
                <img src="/Images/hotel2.jpeg" alt='' className="w-[230px] h-[60%] my-1 object-cover rounded-xl mx-auto"></img>
                <p className='font-medium mx-2 font-poppins'>Rizzz Motel</p>
                <p className='text-sm text-gray-700 mx-2 font-poppins '>LA</p>
                <div className='flex justify-between'>
                    <p className='font-semibold m-2'>from $150/night</p>
                    <AiOutlineArrowRight className='my-3 mx-4 text-xl'></AiOutlineArrowRight>
                </div>
            </div>
            <div className="w-[240px] h-[220px] shadow-3xl rounded-xl relative">
                <p className='absolute left-[5%] top-[4%] bg-emerald-50 font-semibold px-2 rounded-full text-green-700'>9.6</p>
                <div className='absolute right-[5%] top-[4%] '><AiTwotoneHeart className='text-red-500 text-3xl'></AiTwotoneHeart></div>
                <img src="/Images/hotel3.jpg" alt='' className="w-[230px] h-[60%] my-1 object-cover rounded-xl mx-auto"></img>
                <p className='font-medium mx-2 font-poppins'>Three Quarter Hotel </p>
                <p className='text-sm text-gray-700 mx-2 font-poppins '>Stockholm</p>
                <div className='flex justify-between'>
                    <p className='font-semibold m-2'>from $130/night</p>
                    <AiOutlineArrowRight className='my-3 mx-4 text-xl'></AiOutlineArrowRight>
                </div>
            </div>
            <div className="w-[240px] h-[220px] shadow-3xl rounded-xl relative">
                <p className='absolute left-[5%] top-[4%] bg-emerald-50 font-semibold px-2 rounded-full text-green-700'>9.6</p>
                <div className='absolute right-[5%] top-[4%] '><AiTwotoneHeart className='text-red-500 text-3xl'></AiTwotoneHeart></div>
                <img src="/Images/hotel4.jpg" alt='' className="w-[230px] h-[60%] my-1 object-cover rounded-xl mx-auto"></img>
                <p className='font-medium mx-2 font-poppins'>Sunset Plaza Hotel</p>
                <p className='text-sm text-gray-700 mx-2 font-poppins '>Barcelona</p>
                <div className='flex justify-between'>
                    <p className='font-semibold m-2'>from $210/night</p>
                    <AiOutlineArrowRight className='my-3 mx-4 text-xl'></AiOutlineArrowRight>
                </div>
            </div>
            <div className="w-[240px] h-[220px] shadow-3xl rounded-xl relative">
                <p className='absolute left-[5%] top-[4%] bg-emerald-50 font-semibold px-2 rounded-full text-green-700'>9.6</p>
                <div className='absolute right-[5%] top-[4%] '><AiTwotoneHeart className='text-red-500 text-3xl'></AiTwotoneHeart></div>
                <img src="/Images/hotel5.jpg" alt='' className="w-[230px] h-[60%] my-1 object-cover rounded-xl mx-auto"></img>
                <p className='font-medium mx-2 font-poppins'>Hotel Norrebro</p>
                <p className='text-sm text-gray-700 mx-2 font-poppins '>Copenahgen</p>
                <div className='flex justify-between'>
                    <p className='font-semibold m-2'>from $180/night</p>
                    <AiOutlineArrowRight className='my-3 mx-4 text-xl'></AiOutlineArrowRight>
                </div>
            </div>
        </div>
    )
}
export default Card;