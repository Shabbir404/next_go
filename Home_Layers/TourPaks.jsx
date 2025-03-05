import React from 'react';

const WaveBackground = ({ fromColor, toColor, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className={`absolute inset-0 w-full h-full ${className}`}
            preserveAspectRatio="none"
        >
            <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={fromColor} />
                    <stop offset="100%" stopColor={toColor} />
                </linearGradient>
            </defs>
            <path
                fill="url(#waveGradient)"
                fillOpacity="0.6"
                className="animate-wave"
                d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320L192,320L96,320L0,320Z"
            ></path>
            <path
                fill="url(#waveGradient)"
                fillOpacity="0.4"
                className="animate-wave-slow"
                d="M0,256L48,250.7C96,245,192,235,288,229.3C384,224,480,224,576,208C672,192,768,160,864,154.7C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320L192,320L96,320L0,320Z"
            ></path>
        </svg>
    );
};

const TravelDealsLayout = () => {
    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4 p-4 md:h-[572.5599975585938px]">
            {/* First Vertical Box - 20% Off */}
            <div className="md:row-span-2 relative rounded-lg overflow-hidden h-[250px] md:h-auto">
                <WaveBackground
                    fromColor="#34D399"
                    toColor="#10B981"
                    className="bg-gradient-to-br from-green-400 to-green-600"
                />
                <div className="relative z-10 absolute top-4 left-4 text-white">
                    <div className="text-xl font-bold">Savings worldwide</div>
                    <div className="text-3xl font-extrabold">20% Off</div>
                    <div className="text-sm mt-2">Discover Great Deal</div>
                </div>
                <div className="relative z-10 absolute bottom-4 right-4">
                    <button className="bg-white text-green-600 px-4 py-2 rounded-full">
                        Book Now
                    </button>
                </div>
            </div>

            {/* Second Horizontal Box - Couple Tour and Honeymoon */}
            <div className="md:col-span-2 grid md:mt-4 md:h-[572px] grid-rows-1 md:grid-rows-2 gap-4">
                {/* Couple Tour */}
                <div className="relative rounded-lg overflow-hidden h-[250px] md:h-auto">
                    <WaveBackground
                        fromColor="#F97316"
                        toColor="#EA580C"
                        className="bg-gradient-to-br from-orange-500 to-orange-700"
                    />
                    <div className="relative z-10 absolute top-4 left-4 text-white">
                        <div className="text-xl font-bold">Couple Tour</div>
                        <div className="text-lg">4 Days In Switzerland</div>
                    </div>
                    <div className="relative z-10 absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full">
                        50% Off
                    </div>
                    <div className="relative z-10 absolute bottom-4 right-4">
                        <button className="bg-white text-orange-600 px-4 py-2 rounded-full">
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Honeymoon Tour */}
                <div className="relative rounded-lg overflow-hidden h-[250px] md:h-auto">
                    <WaveBackground
                        fromColor="#16A34A"
                        toColor="#15803D"
                        className="bg-gradient-to-br from-green-600 to-green-800"
                    />
                    <div className="relative z-10 absolute top-4 left-4 text-white">
                        <div className="text-xl font-bold">Honeymoon Tour</div>
                        <div className="text-lg">Enjoy 40% Off</div>
                        <div className="text-sm">2 Country & 15 Location</div>
                    </div>
                    <div className="relative z-10 absolute bottom-4 right-4">
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-full">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Third Vertical Box - Savings Worldwide */}
            <div className="md:row-span-2 relative rounded-lg overflow-hidden h-[250px] md:h-auto">
                <WaveBackground
                    fromColor="#FBBF24"
                    toColor="#F59E0B"
                    className="bg-gradient-to-br from-yellow-500 to-yellow-700"
                />
                <div className="relative z-10 absolute top-4 left-4 text-white">
                    <div className="text-xl font-bold">Savings worldwide</div>
                    <div className="text-3xl font-extrabold">50% Off</div>
                    <div className="text-sm mt-2">For Your First Book</div>
                </div>
                <div className="relative z-10 absolute bottom-4 right-4">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-full">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TravelDealsLayout;