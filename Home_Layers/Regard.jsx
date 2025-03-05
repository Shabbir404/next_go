import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
            text: "Incredible craftsmanship! Egens Lab’s web development services surpassed my expectations at every turn. Highly recommended!",
            date: "May 9, 2023",
            time: "10:30 PM",
        },
        {
            name: "Mateo Daniel",
            country: "Australia",
            text: "Absolute perfection! Egens Lab’s web development services left me completely satisfied and eager to recommend them to others.",
            date: "May 9, 2023",
            time: "10:30 PM",
        },
        {
            name: "Lucas Mora",
            country: "France",
            text: "Exemplary service! Egens Lab’s Figma, web design and development team went above and beyond, leaving me thoroughly impressed and grateful.",
            date: "May 9, 2023",
            time: "10:30 PM",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (

        <div>
            <div className='bg-[#F3EEEA] h-[834px]'>

                <div className='flex pt-20 gap-2 justify-center mt-20'>
                    <img className='w-4 h-5' src={resultPng} alt="" />
                    <h1 className='satisfy text-2xl text-[#63AB45]'>Testimonial</h1>
                    <img className='w-4 h-5 rotate-180' src={resultPng} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-center mt-3 text-4xl md:text-5xl'>
                        Regards From Travelers</h1>
                </div>

                <div className='md:w-9/12 mx-auto md:h-[44px] mt-10 bg-white rounded-md'>
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
                    <div className=' grid gap-4 grid-cols-3'>
                        {
                            testimonials.map((rev, i) => {
                                return (
                                    <div className='bg-red-500' key={i}>
                                        <div className=''>
                                            {rev.text}
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>


    );
};

export default Regard;