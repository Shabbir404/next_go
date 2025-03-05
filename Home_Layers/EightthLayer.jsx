import resultPng from '../src/assets/result.svg'
import '../style.css'
import Regard from './Regard';
import TravelDealsLayout from './TourPaks';

const EightthLayer = () => {
    return (
        <div>
            <div className="md:w-10/12 mx-auto">
                <div className='flex gap-2 justify-center mt-20'>
                    <img className='w-4 h-5' src={resultPng} alt="" />
                    <h1 className='satisfy text-2xl text-[#63AB45]'>Are you ready to travel?</h1>
                    <img className='w-4 h-5 rotate-180' src={resultPng} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-center mt-3 text-4xl md:text-5xl'>
                        Explore Your Activities</h1>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4 p-4 md:h-[572.5599975585938px]">

                    <div className="md:row-span-2 bg-gradient-to-br from-green-500 to-green-700 relative rounded-lg overflow-hidden h-[250px] md:h-auto">
                        <div className="absolute top-4 left-4 text-white">
                            <div className="text-xl font-semibold satisfy">Savings worldwide</div>
                            <div className="text-3xl font-extrabold text-[#FBB03B]">20% Off</div>
                            <div className="text-sm mt-2">Discover Great Deal</div>
                        </div>
                        <div className="absolute bottom-4 right-4">
                            <button className="bg-white hover:bg-green-200 cursor-pointer text-green-600 px-4 py-2 rounded-md">
                                Book Now
                            </button>
                        </div>
                    </div>

                    <div className="md:col-span-2 grid md:mt-4 md:h-[572px] grid-rows-1 md:grid-rows-2 gap-4">

                        <div className="bg-gradient-to-br from-orange-500 to-orange-700 relative rounded-lg overflow-hidden h-[250px] md:h-auto">
                            <div className="absolute top-4 left-4 text-white">
                                <div className="text-xl font-semibold satisfy">Couple Tour</div>
                                <div className="text-lg">4 Days In Switzerland</div>
                            </div>
                            <div className="absolute mt-36 h-[10] w-[10] right-4 bg-green-500 text-white p-5 rounded-full">
                                50% Off
                            </div>
                            <div className="absolute bottom-4 right-4">
                                <button className="bg-white hover:bg-green-200 cursor-pointer text-orange-600 px-4 py-2 rounded-md">
                                    Book Now
                                </button>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-600 to-green-800 relative rounded-lg overflow-hidden h-[250px] md:h-auto">
                            <div className="absolute top-4 left-4 text-white">
                                <div className="text-xl font-semibold satisfy">Honeymoon Tour</div>
                                <div className="text-lg">Enjoy 40% Off</div>
                                <div className="text-sm">2 Country & 15 Location</div>
                            </div>
                            <div className="absolute bottom-4 right-4">
                                <button className="bg-[#FBB03B] hover:bg-yellow-700 cursor-pointer text-white px-4 py-2 rounded-md">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="md:row-span-2 bg-gradient-to-br from-yellow-500 to-yellow-700 relative rounded-lg overflow-hidden h-[250px] md:h-auto">
                        <div className="absolute top-4 left-4 text-white">
                            <div className="text-xl font-semibold satisfy">Savings worldwide</div>
                            <div className="text-3xl font-extrabold">50% Off</div>
                            <div className="text-sm mt-2">For Your First Book</div>
                        </div>
                        <div className="absolute bottom-4 right-4">
                            <button className="bg-green-600 hover:bg-green-700 cursor-pointer  text-white px-4 py-2 rounded-md">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <Regard></Regard>
        </div>
    );
};

export default EightthLayer;