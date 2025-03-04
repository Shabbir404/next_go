import React from 'react';
import { IoIosAirplane } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const TravelCard = ({ trip }) => {
    const { duration, location, title, stops, currentPrice, originalPrice } = trip;

    return (
        <div className="bg-white rounded hover:scale-105 duration-300 p-5 shadow-md h-full flex flex-col">
            {/*  Image Area start */}
            <div className="bg-[#C4C4C4]  rounded-md md:w-[376px] h-[260px] relative">

                <div className="absolute top-3  scale-115 bg-black text-white text-xs px-2 py-1">
                    {duration}
                </div>

                <div className="absolute flex border scale-110 border-[#63AB4580] gap-2 top-10  bg-white text-black
                 text-xs px-2 py-1">
                    <FaLocationDot className='text-[#63AB45]'></FaLocationDot>
                    {location}
                </div>
            </div>
            {/*  Image Area start */}

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-xl md:w-[371px] mb-2">{title}</h3>

                {/* map section */}
                <div className="text-[#888888]  text-xs  mb-4 flex flex-wrap">
                    {stops.map((stop, index) => (
                        <React.Fragment key={index}>
                            <span>{stop}</span>
                            {index < stops.length - 1 && <span className="mx-1">→</span>}
                        </React.Fragment>
                    ))}
                </div>

                {/* Price Section */}
                <div className="mt-auto border-t border-[#100C0833]">
                    <p className="text-gray-500 mt-2 text-sm">Starting From:</p>
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-[#63AB45] font-semibold text-xl">${currentPrice}</span>
                            {originalPrice && (
                                <span className="text-[#787878] line-through text-sm ml-1">${originalPrice}</span>
                            )}
                            <div className="text-xs text-[#787878]">TAXES INCL/PERS</div>
                        </div>

                        <button className="flex gap-3 cursor-pointer hover:bg-green-700 bg-[#63AB45] text-white px-3 py-2 rounded">
                            Book A Trip
                            <IoIosAirplane className='text-xl mt-0.5'></IoIosAirplane>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TravelCardGrid = () => {
    const trips = [
        {
            id: 1,
            duration: '1 WEEK',
            location: 'EGYPT',
            title: 'Discover Serenity, Exploration, And Enlightenment.',
            stops: ['SAINT MARTIN', 'KHAOSANDHI', 'COX\'S BAZAR'],
            currentPrice: 340,
            originalPrice: 450
        },
        {
            id: 2,
            duration: '3 DAYS / 4 NIGHT',
            location: 'INDONESIA',
            title: 'Embracing City Lights, Landm, And Iconic Culture.',
            stops: ['BANDAR BAN', 'COX\'S BAZAR', 'SAINT MARTIN'],
            currentPrice: 240,
            originalPrice: 380
        },
        {
            id: 3,
            duration: '10 DAYS / 11 NIGHT',
            location: 'NEW YORK',
            title: 'Immersive Cultural Expirees, Local Cuisine.',
            stops: ['SASER VALLY', 'SEA BEACH', 'BANDAR BAN', 'COX\'S'],
            currentPrice: 500,
            originalPrice: 680
        },
        {
            id: 4,
            duration: '5 DAYS / 6 NIGHT',
            location: 'SAUDI ARAB',
            title: 'Exploring Ancient Ruins, Histor Landmarks, And Cultural.',
            stops: ['BANDAR BAN', 'COX\'S BAZAR', 'KHAOSANDHI'],
            currentPrice: 760,
            originalPrice: 860
        },
        {
            id: 5,
            duration: '4 DAYS / 5 NIGHT',
            location: 'BRAZIL + SWEDEN + EGYPT',
            title: 'Adventure Art, Architecture, And Mediterranean.',
            stops: ['SASER VALLY', 'SEA BEACH', 'BANDAR BAN', 'KHADI'],
            currentPrice: 170,
            originalPrice: 230
        },
        {
            id: 6,
            duration: '7 DAYS / 8 NIGHT',
            location: 'AUSTRALIA + SWEDEN',
            title: 'A Journey Of Tour Beauty And Inspiration.',
            stops: ['BANDAR BAN', 'COX\'S BAZAR', 'KHAOSANDHI'],
            currentPrice: 160,
            originalPrice: 180
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {trips.map(trip => (
                    <TravelCard key={trip.id} trip={trip} />
                ))}
            </div>
        </div>
    );
};

export default TravelCardGrid;