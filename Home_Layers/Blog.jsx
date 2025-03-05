import resultPng from '../src/assets/result.svg'
import '../style.css'
import { BsArrowUpRightCircle } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import VisaProssesing from './VisaProssesing';

const Blog = () => {

    const posts = [
        {
            category: "Adventure Safari",
            title: "Wine Country Escapes: Vineyard Tours For Connoisseurs",
        },
        {
            category: "Cruise Voyage",
            title: "Thrills & Chills: Extreme Sports Tours For Adrenaline Junkies",
        },
        {
            category: "Cruise Voyage",
            title: "Urban Wanderlust: City Walking Tours For Street Savvy",
        },
    ];


    return (
        <div>
            <div className="md:w-10/12 w-11/12 mx-auto">
                <div className='flex gap-2 justify-center mt-20'>
                    <img className='w-4 h-5' src={resultPng} alt="" />
                    <h1 className='satisfy text-2xl text-[#63AB45]'>Latest Blog</h1>
                    <img className='w-4 h-5 rotate-180' src={resultPng} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-center mt-3 text-4xl md:text-5xl'>
                        Latest Travel Blog</h1>
                </div>
                <div>
                    <div className="flex gap-4 p-6 flex-col md:flex-row">
                        <div className="w-full md:w-2/3 bg-white p-4 hover:scale-105 duration-200 rounded-lg shadow-lg">
                            <div className="bg-[#C4C4C4] rounded-sm h-[250px] md:h-[400px]"></div>
                            <p className="text-sm text-gray-500 mt-3 flex gap-1">By Shafiqul
                                <GoDotFill className='mt-0.5 text-[#63AB45]'></GoDotFill> Feb 6, 2024
                                <GoDotFill className='mt-0.5 text-[#63AB45]'></GoDotFill> 0 Comment</p>
                            <h2 className="font-semibold text-2xl mt-2">
                                Spiritual Sojourn: Pilgrimage Tours For Soul Seekers
                            </h2>
                            <div className='flex gap-2'>
                                <a href="#" className="underline text-[#63AB45] mt-5 font-semibold mt-1 inline-block">
                                    View Post
                                </a>
                                <BsArrowUpRightCircle className='mt-6 text-[#64ab45a8] text-xl'></BsArrowUpRightCircle>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 flex flex-col gap-4">
                            {posts.map((post, index) => (
                                <div key={index} className="hover:scale-105 duration-200 bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4">
                                    <div className="bg-[#C4C4C4] rounded-sm h-[150px] w-full md:w-[261px] flex items-center justify-center">
                                        <span className="text-sm font-bold">6 Feb</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#100C0880] flex gap-1">By Shafiqul
                                            <GoDotFill className='mt-0.5 text-[#63AB45]'></GoDotFill> {post.category}</p>
                                        <h2 className="font-semibold text-2xl mt-4">{post.title}</h2>
                                        <div className='flex gap-2'>
                                            <a href="#" className="underline text-[#63AB45] mt-5 font-semibold mt-1 inline-block">
                                                View Post
                                            </a>
                                            <BsArrowUpRightCircle className='mt-6 text-[#64ab45a8] text-xl'></BsArrowUpRightCircle>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <VisaProssesing></VisaProssesing>
        </div>
    );
};

export default Blog;