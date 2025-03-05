import resultPng from '../src/assets/result.svg'
import '../style.css'
import zip from '../src/images/zip-line.png'
import paragliding from '../src/images/paragliding.png'
import buggy from '../src/images/travel.png'
import skip from '../src/images/skiing.png'
import rafting from '../src/images/rafting.png'
import surfing from '../src/images/surfing.png'
import { GoDotFill } from "react-icons/go";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import EightthLayer from './EightthLayer'


const SaventhLayer = () => {


    const facilitys = [
        { img: zip, title: "Zip lining", },
        { img: paragliding, title: "Paragliding", },
        { img: buggy, title: "Bungee Jumping", },
        { img: skip, title: "Ski touring", },
        { img: rafting, title: "Rafting", },
        { img: surfing, title: "Surfing", },
    ];


    const newFacilities = [
        {
            "name": "Treetop Views",
        },
        {
            "name": "Adrenaline Rush",
        },
        {
            "name": "Safety Measures",
        },
        {
            "name": "Nature Immersion",
        },
    ];

    return (
        <div>
            <div className='w-11/12 md:w-10/12 mx-auto mt-50 md:mt-10 '>
                <div>
                    <div className='flex gap-2 justify-center'>
                        <img className='w-4 h-5' src={resultPng} alt="" />
                        <h1 className='satisfy text-2xl text-[#63AB45]'>Are you ready to travel?</h1>
                        <img className='w-4 h-5 rotate-180' src={resultPng} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-center mt-3 text-4xl md:text-5xl'>
                            Explore Your Activities</h1>
                    </div>

                    <div className="mt-16 flex flex-wrap md:flex-nowrap gap-6 justify-center">

                        <div className="md:w-[511px] grid grid-cols-2 gap-5 mt-10">
                            {facilitys.map((facility, i) => (
                                <div
                                    key={i}
                                    className={`p-4 flex flex-col items-center justify-center rounded-md ${i === 0 ? "bg-[#FBB03B] text-white" : "bg-[#63AB451A] text-black"
                                        }`}
                                >
                                    <img className="w-[54px] h-[54px]" src={facility.img} alt={facility.title} />
                                    <h1 className="mt-2 text-lg font-semibold">{facility.title}</h1>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex-1">
                            <div>
                                <div className="bg-[#FBB03B] w-[166px] h-[34px] rounded-xl text-white flex items-center justify-center">
                                    <h1 className="satisfy text-md">Zip lining</h1>
                                </div>
                                <h1 className="mt-4 font-semibold text-center md:text-left md:w-[500px] text-4xl">
                                    Thrill Above Ground: The Zip Line Adventure
                                </h1>
                                <p className="mt-4 jost tracking-wider text-[#787878] text-center md:text-left md:w-[500px]">
                                    Embark on an adrenaline-fueled journey, zipping through lush landscapes, feeling the wind rush past,
                                    and experiencing nature from breathtaking heights. Unleash your inner adventurer today.
                                </p>

                                <div className="md:w-[500px]">
                                    <div className="grid grid-cols-1 md:grid-cols-3 mt-4">
                                        {newFacilities.map((facility, i) => (
                                            <div className="mt-4 flex  font-semibold" key={i}>
                                                <GoDotFill className="mt-1 text-[#63AB45]" />
                                                <h1 className="tracking-wide">{facility.name}</h1>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap md:flex-nowrap mt-8 gap-4 justify-center md:justify-between md:w-[500px]">
                                    <button className="btn w-full md:w-[197px] text-white bg-[#63AB45] rounded-sm">
                                        Check Availability
                                    </button>
                                    <button className="btn w-full md:w-[197px] flex gap-4 items-center justify-center border border-[#63AB45] text-[#63AB45] rounded-sm">
                                        <SiGoogledisplayandvideo360 />
                                        Watch Adventure
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col mt-10 gap-5">
                            <div className="w-[246px] h-[180px] bg-[#C4C4C4]" />
                            <div className="w-[246px] h-[180px] bg-[#C4C4C4]" />
                            <div className=" mt-5 md:hidden w-[246px] h-[280px] bg-[#C4C4C4]" />

                        </div>
                    </div>


                </div>
            </div>

            <EightthLayer></EightthLayer>
        </div>
    );
};

export default SaventhLayer;