import { useState } from 'react';
import resultPng from '../src/assets/result.svg'
import '../style.css'
import { IoIosTime } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Regard = () => {
    const testimonials = [
        {
            name: "Liam Nohkan",
            country: "Italy",
            text: "Incredible craftsmanship! Egens Lab's web development services surpassed my expectations at every turn. Highly recommended!",
            date: "May 9, 2023",
            time: "10:30 PM",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            name: "Mateo Daniel",
            country: "Australia",
            text: "Absolute perfection! Egens Lab's web development services left me completely satisfied and eager to recommend them to others.",
            date: "May 9, 2023",
            time: "10:30 PM",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
            name: "Lucas Mora",
            country: "France",
            text: "Exemplary service! Egens Lab's Figma, web design and development team went above and beyond, leaving me thoroughly impressed and grateful.",
            date: "May 9, 2023",
            time: "10:30 PM",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
            name: "Emma Rodriguez",
            country: "Spain",
            text: "A game-changing experience! Egens Lab transformed our digital presence with their innovative approach and exceptional attention to detail.",
            date: "June 15, 2023",
            time: "3:45 PM",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            name: "Alex Chen",
            country: "Canada",
            text: "Working with Egens Lab was a breath of fresh air. Their creativity and technical expertise brought our vision to life seamlessly.",
            date: "July 22, 2023",
            time: "11:20 AM",
            avatar: "https://randomuser.me/api/portraits/men/4.jpg"
        }
    ];


    const [startIndex, setStartIndex] = useState(0);

    const handlePrevious = () => {
        setStartIndex(prevIndex =>
            prevIndex > 0 ? prevIndex - 1 : testimonials.length - 3
        );
    };

    const handleNext = () => {
        setStartIndex(prevIndex =>
            prevIndex < testimonials.length - 3 ? prevIndex + 1 : 0
        );
    };
    return (

        <div>
            <div className='bg-[#F3EEEA] md:h-[834px]'>

                <div className='flex pt-20 gap-2 justify-center md:mt-20'>
                    <img className='w-4 h-5' src={resultPng} alt="" />
                    <h1 className='satisfy text-2xl text-[#63AB45]'>Testimonial</h1>
                    <img className='w-4 h-5 rotate-180' src={resultPng} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-center mt-3 text-4xl md:text-5xl'>
                        Regards From Travelers</h1>
                </div>

                <div className='w-11/12 md:w-9/12 mx-auto md:h-[44px] mt-10 bg-white rounded-md'>
                    <div className='flex gap-4'>
                        <div className='ml-4 border-b-2 flex gap-2 p-2 cursor-default text-md text-[#63AB45]'>
                            <IoIosTime className='text-[#878583] text-2xl'></IoIosTime>
                            Next go
                        </div>
                        <div className=' flex gap-2 p-2 text-md hover:text-[#63AB45] cursor-default text-black] '>
                            <FaFacebook className='text-[#878583] text-2xl'></FaFacebook>
                            Facebook
                        </div>
                        <div className='flex gap-2 p-2 text-md hover:text-[#63AB45] cursor-default text-black'>
                            <FaGoogle className='text-[#878583] text-2xl'></FaGoogle>
                            Google
                        </div>
                    </div>

                </div>

                <div className=' mt-5 md:mt-10'>
                    <div className="py-5 px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex items-center justify-center">
                                <button
                                    onClick={handlePrevious}
                                    className="cursor-pointer border-[#63AB45] border mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {testimonials.slice(startIndex, startIndex + 3).map((testimonial, index) => (
                                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                            <div className="w-30 h-20 mx-auto rounded-full bg-gray-300 flex items-center justify-center">
                                                <span className="text-3xl text-gray-600">👤</span>
                                            </div>
                                            <p className="text-gray-600 mt-4 jost">"{testimonial.text}"</p>
                                            <h3 className="font-bold text-lg mt-4">{testimonial.name}</h3>
                                            <p className="text-sm text-gray-500">{testimonial.country}</p>
                                            <p className="text-xs text-gray-400 mt-1">
                                                {testimonial.date} | {testimonial.time}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={handleNext}
                                    className="ml-4 p-2 border-[#63AB45] border cursor-pointer rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>


    );
};

export default Regard;