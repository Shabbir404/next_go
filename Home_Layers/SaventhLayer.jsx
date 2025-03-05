import React from 'react';

const AdventurePage = () => {
    const activities = [
        { icon: '🏂', name: 'Zip Lining', color: 'bg-orange-400' },
        { icon: '🪂', name: 'Paragliding', color: 'bg-green-100' },
        { icon: '🦘', name: 'Bungee Jumping', color: 'bg-green-100' },
        { icon: '⛷️', name: 'Ski Touring', color: 'bg-green-100' },
        { icon: '🛶', name: 'Rafting', color: 'bg-green-100' },
        { icon: '🏄', name: 'Surfing', color: 'bg-green-100' }
    ];

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="grid grid-cols-3 gap-4">
                {/* Activities Grid */}
                <div className="grid grid-cols-2 gap-4 col-span-1">
                    {activities.map((activity, index) => (
                        <div
                            key={index}
                            className={`${activity.color} flex items-center justify-center p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform`}
                        >
                            <div className="text-4xl mr-2">{activity.icon}</div>
                            <span className="text-sm font-medium">{activity.name}</span>
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="col-span-2 bg-white rounded-lg p-6 shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Thrill Above Ground: The Zip Line Adventure</h2>
                    <p className="text-gray-600 mb-4">
                        Embark on an adrenaline-fueled journey, zipping through lush landscapes, feeling the wild rush, and experiencing nature from breathtaking heights. Unleash your inner adventurer today.
                    </p>

                    <div className="flex items-center space-x-4 mb-6">
                        <div className="flex items-center space-x-2">
                            <span className="text-green-500">●</span>
                            <span>Treetop Views</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-red-500">●</span>
                            <span>Adrenaline Rush</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-blue-500">●</span>
                            <span>Safety Measures</span>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                            Check Availability
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                            Watch Adventure
                        </button>
                    </div>
                </div>

                {/* Placeholder for Images */}
                <div className="col-span-3 grid grid-cols-2 gap-4">
                    <div className="bg-gray-200 h-64 rounded-lg"></div>
                    <div className="bg-gray-200 h-64 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default AdventurePage;