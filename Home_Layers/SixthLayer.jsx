import resultPng from '../src/assets/result.svg'
import mainBg from '../src/images/colorBg.jpg'
import '../style.css'
import GridBoxThreeItems from './GridBoxThreeLayer'
import SaventhLayer from './SaventhLayer'
import AdventurePage from './SaventhLayer'


const SixthLayer = () => {

    const countries = ['Sweden', 'Japan', 'Australia', 'New York', 'Egypt'];

    return (
        <div>
            <div>
                <div className='relative w-full'>
                    <img src={mainBg} alt="" className='w-full h-auto' />
                    <div className='absolute top-0 left-0 w-full px-4 md:px-0'>
                        {/* Title Section */}
                        <div className='mt-10 flex gap-2 justify-center items-center'>
                            <img className='w-4 h-5' src={resultPng} alt="" />
                            <h1 className='satisfy text-2xl text-[#63AB45]'>Popular Tour</h1>
                            <img className='w-4 h-5 rotate-180' src={resultPng} alt="" />
                        </div>

                        <h1 className='font-bold text-black text-center mt-3 text-xl md:text-4xl'>
                            Elite Tourist Attractions
                        </h1>

                        {/* Country Selection */}
                        <div className='w-full mt-6 md:mt-10 mb-5'>
                            <div className='md:w-10/12 w-11/12 mx-auto border border-[#63AB4533] rounded-lg overflow-hidden'>
                                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 w-full">
                                    {countries.map((country, index) => (
                                        <div
                                            key={`${country}-${index}`}
                                            className={`${index === 0 ? 'bg-[#C4C4C4]' : 'bg-white'}
                                text-center py-3 md:py-5 px-4 font-medium text-gray-700 
                                border-l border-[#63AB4533] hover:bg-gray-300 
                                transition-colors duration-200`}
                                        >
                                            {country}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Grid Section */}
                        <div className='hidden md:flex justify-center mt-4'>
                            <div className='w-10/12'>
                                <GridBoxThreeItems />
                            </div>
                        </div>

                        {/* Button */}
                        <div className='flex justify-center mt-5 h-[50px]'>
                            <button className='bg-[#FBB03B] w-10/12  md:w-[198.33px] btn rounded-full py-2 md:py-3 text-white font-medium'>
                                View all packages
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <SaventhLayer></SaventhLayer>
        </div>



    );
};

export default SixthLayer;