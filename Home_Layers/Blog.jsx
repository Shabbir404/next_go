import resultPng from '../src/assets/result.svg'
import '../style.css'


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
                    <div className="flex gap-4 p-6 ">
                        {/* Left Large Card */}
                        <div className="w-2/3 bg-white p-4  rounded-lg shadow-lg">
                            <div className="bg-[#C4C4C4] md:h-[500px] "></div>
                            <p className="text-sm text-gray-500 mt-3">By Shafiqul • Feb 6, 2024 • 0 Comment</p>
                            <h2 className="font-bold text-lg mt-1">
                                Spiritual Sojourn: Pilgrimage Tours For Soul Seekers
                            </h2>
                            <a href="#" className="text-green-600 font-semibold mt-2 inline-block">
                                View Post
                            </a>
                        </div>

                        {/* Right Small Cards */}
                        <div className="w-2/3 flex flex-col gap-4">
                            {posts.map((post, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex gap-4">
                                    <div className="bg-[#C4C4C4] md:h-[150px] md:w-[261px] flex items-center justify-center ">
                                        <span className="text-sm font-bold">6 Feb</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">By Shafiqul • {post.category}</p>
                                        <h2 className="font-bold text-md">{post.title}</h2>
                                        <a href="#" className="text-green-600 font-semibold mt-1 inline-block">
                                            View Post
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;