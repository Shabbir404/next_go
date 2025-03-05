import blubg from '../src/images/blurbg.png'
import resultPng from '../src/assets/result.svg'
import mainBg from '../src/images/colorBg.jpg'
import '../style.css'
import GridBoxThreeItems from './GridBoxThreeLayer'
import AdventurePage from './SaventhLayer'


const SixthLayer = () => {

    const countries = ['Sweden', 'Japan', 'Australia', 'New York', 'Egypt'];

    return (
        <div>
            <div>
                <div className='relative'>
                    <img src={mainBg} alt="" className='w-full h-auto' />
                    <div className='absolute top-0 left-0 w-full'>
                        <div className='mt-10 flex gap-2 justify-center'>
                            <img className='w-4 h-5' src={resultPng} alt="" />
                            <h1 className='satisfy text-2xl text-[#63AB45]'>Popular Tour</h1>
                            <img className='w-4 h-5 rotate-180' src={resultPng} alt="" />
                        </div>
                        <div>
                            <h1 className='font-bold text-black text-center mt-3 md:text-4xl'>
                                Elite Tourist Attractions
                            </h1>
                        </div>
                        <div className='w-full mt-10 md:mb-0 mb-5'>
                            <div className='md:w-10/12 w-11/12 mx-auto border border-[#63AB4533] rounded-lg'>
                                <div className="md:mt-0 mt-6 grid grid-cols-1 md:grid-cols-5 md:h-[70px] w-full">
                                    {countries.map((country, index) => (
                                        <div
                                            key={`${country}-${index}`}
                                            className={`${index === 0 ? 'bg-[#C4C4C4]' : 'bg-white'} 
                                        text-center py-2 px-4 font-medium text-gray-700 
                                        border-l border-[#63AB4533] hover:bg-gray-300 
                                        transition-colors duration-200`}
                                        >
                                            {country}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='hidden  md:flex justify-center mt-4'>
                            <div className='w-10/12'>
                                <GridBoxThreeItems />
                            </div>
                        </div>
                        <div className='flex justify-center mt-6 h-[50px]'>
                            <button className='bg-[#FBB03B] md:w-[198.33px] w-11/12 btn rounded-full'>
                                View all packages
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' '>

            </div>
        </div>



    );
};

export default SixthLayer;