import resultPng from '../src/assets/result.svg'
import '../style.css'
import carSvg from '../src/assets/car.svg'
import loacationSvg from '../src/assets/location.svg'
import hotelSvg from '../src/assets/hotel.svg'
import TravelCardGrid from './GridBox'

const ThirdLayer = () => {

    const destinations = [
        { name: 'Sweden', span: 'md:col-span-1' },
        { name: 'Japan', span: 'md:col-span-2' },
        { name: 'India', span: 'md:col-span-1' },
        { name: 'Brazil', span: 'md:col-span-2' },
        { name: 'Australia', span: 'md:col-span-1' },
    ];

    return (
        <div>
            <div className='w-11/12 md:w-10/12 mx-auto mt-16'>
                <div className='flex gap-2 justify-center'>
                    <img className='w-4 h-5' src={resultPng} alt="" />
                    <h1 className='satisfy text-2xl text-[#63AB45]'>Journey to the</h1>
                    <img className='w-4 h-5 rotate-180' src={resultPng} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-center mt-3 text-4xl'>Desired Vacation Spots</h1>
                </div>
                <div>
                    <div className="max-w-6xl mx-auto p-4 mt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                            {destinations.map((destination, index) => (
                                <div
                                    key={index}
                                    className={`${destination.span} col-span-1 h-36 md:h-[306px] bg-[#7c7a79] rounded-md flex items-end justify-center p-3`}
                                >
                                    <span className="text-white font-medium">{destination.name}</span>
                                </div>
                            ))}

                            {/* Featured Destination Box */}
                            <div className="col-span-1 h-36 md:h-[306px] bg-gray-200 rounded-xl flex flex-col items-center justify-center p-3">
                                <div className="bg-yellow-400 text-xs px-2 py-1 rounded-md mb-2">Go with us</div>
                                <h3 className="font-bold text-xl md:text-3xl text-center pt-2 mb-2">Of Our All Destination</h3>
                                <button className="bg-green-500 text-white mt-2 hover:bg-green-600 text-xs px-4 py-2 rounded">View All Destination</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-11/12 md:w-10/12 mx-auto mt-16'>
                <div className='flex gap-2 justify-center'>
                    <img className='w-4 h-5' src={resultPng} alt="" />
                    <h1 className='satisfy text-2xl text-[#63AB45]'>Tour Experience</h1>
                    <img className='w-4 h-5 rotate-180' src={resultPng} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-center mt-3 text-4xl md:text-5xl'>
                        Ultimate Travel Experience</h1>
                </div>
                <div className=' flex md:gap-10 gap-5 justify-center mt-10'>
                    <div className='text-[#63AB45] text-xl font-semibold flex gap-2 md:gap-4'>
                        <img className='w-[28px] h-[28px]' src={loacationSvg} alt="" />
                        Tour Package
                    </div>
                    <div className=' text-xl font-semibold flex gap-2 md:gap-4'>
                        <img className='w-[28px] h-[28px]' src={hotelSvg} alt="" />
                        Hotel
                    </div>
                    <div className=' text-xl font-semibold flex gap-2 md:gap-4'>
                        <img className='w-[28px] h-[28px]' src={carSvg} alt="" />
                        Transport
                    </div>
                </div>

                <div className='mt-10'>
                    <TravelCardGrid></TravelCardGrid>
                </div>
            </div>
        </div>
    );
};

export default ThirdLayer;