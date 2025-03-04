import '../style.css'
import bg from '../src/assets/bgPlane.png'
import leaf from '../src/assets/result.svg'
import { GoDotFill } from "react-icons/go";
import TravelCardGrid from './GridBox';
import FifthLayer from './FifthLayer';
import TravelFeatures from './FifthLayer';

const ForthLayer = () => {

    const newFacilities = [
        {
            "name": "Travel Alerts and Registration",
            "category": "Travel Support",
            "description": "Stay informed about travel alerts and register for important updates."
        },
        {
            "name": "Health and Medical Security",
            "category": "Health Services",
            "description": "Access to medical assistance and security services during travel."
        },
        {
            "name": "Travel Documentation",
            "category": "Documentation",
            "description": "Assistance with travel documents like passports, visas, and insurance."
        },
        {
            "name": "Money and Payment",
            "category": "Financial Services",
            "description": "Support with currency exchange, payments, and budgeting while traveling."
        },
        {
            "name": "Transportation Security",
            "category": "Security",
            "description": "Ensure your safety during transportation by providing up-to-date security information."
        },
        {
            "name": "Local Knowledge Guide",
            "category": "Local Information",
            "description": "Guide to local culture, attractions, restaurants, and emergency contacts."
        }
    ];


    return (
        <div>
            <div className='mt-20'>
                <div className='flex justify-center'>
                    <div className='absolute md:h-[400px] md:w-[200px] mt-20
            bg-[#D0D0D0] w-48 rounded-xl'>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div className="w-full md:w-6/12 h-[600px] md:h-[582px] relative">
                        <div className='p-8 md:p-20 absolute'>
                            <div className='flex gap-3 justify-center md:justify-start text-[#63AB45]'>
                                <img className='w-[15px] h-[20px]' src={leaf} alt="" />
                                <h1 className='satisfy text-lg md:text-xl'>
                                    Our Facility
                                </h1>
                                <img className='rotate-180 w-[15px] h-[20px]' src={leaf} alt="" />
                            </div>
                            <div>
                                <h1 className='md:text-5xl text-center md:text-start text-3xl mt-4 text-black font-semibold'>Finest Safety Systems</h1>
                                <p className='mt-4 text-center md:text-start text-[#787878] tracking-widest md:w-[548px]'>
                                    Curabitur convallis enim at orci ullamcorper sagittis. Morbi porand gon
                                    nullalacu scelerisque in aliquam vitae, aliquam ut lectus. Nam utte mink
                                    Phasellus magna, efficitur finibus dictum auctor, volutpat gonet torrend
                                    accumsan purusDon luctus nunc non dapibus volutpat.
                                </p>
                                <div className='grid grid-cols-1 md:grid-cols-2 mt-4'>
                                    {
                                        newFacilities.map((facility, i) => {
                                            return (
                                                <div className='mt-4 flex gap-2 font-semibold' key={i}>
                                                    <GoDotFill className='mt-0.5 text-[#63AB45]'></GoDotFill>
                                                    <h1 className='tracking-wider'>{facility.name}</h1>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-[#EAEAEA] opacity-10"></div>
                        <img src={bg} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='bg-[#C4C4C4] hidden md:flex justify-center md:block w-full md:w-6/12 h-screen md:h-[582px] relative'>
                        <div className='w-28 h-28 border mt-64 rounded-full bg-white border-[#63AB45]'>
                            <h1 className='text-black text-center mt-10'>Your logo</h1>
                        </div>
                    </div>
                </div>

                <div className='mt-10 md:mt-20'>
                    <div className='flex gap-3 justify-center text-[#63AB45]'>
                        <img className='w-[15px] h-[20px]' src={leaf} alt="" />
                        <h1 className='satisfy text-lg md:text-xl'>
                            Our Facility
                        </h1>
                        <img className='rotate-180 w-[15px] h-[20px]' src={leaf} alt="" />
                    </div>
                    <div className='flex justify-center'>
                        <h1 className='md:text-5xl text-center md:text-start
                         text-3xl mt-4 text-black font-semibold'>
                            Affordable Vacation Bundles</h1>

                    </div>
                </div>
                <div className='w-11/12 md:w-10/12 mx-auto mt-10'>
                    <TravelCardGrid></TravelCardGrid>
                </div>
                <div className='flex justify-center mt-16'>
                    <button className='btn bg-[#FBB03B] text-black rounded-full text-center'>
                        View All Package
                    </button>
                </div>
            </div>
        
            <FifthLayer></FifthLayer>
        </div>
    );
};

export default ForthLayer;