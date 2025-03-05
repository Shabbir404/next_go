import React from 'react';

const CountryPriceCard = ({ country, price, subPrice, type }) => {
    return (
        <div className="w-full mt-10 hover:scale-105 duration-200 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative h-40  md:h-[350px] bg-[#B2B2B1]
             flex items-center justify-center">
                <div className="absolute z-10 top-60  bg-[#63AB45] cursor-pointer hover:bg-green-500 px-30 py-2 rounded-full">
                    <span className="text-white  font-semibold text-base">{country}</span>
                </div>
            </div>
            <div className="h-20 flex  bg-linear-65 from-[#9D7176] via-[#B54A62]  to-[#9c1a52]  py-4 px-6 text-center">
                <div className="text-white text-xl mt-2 mb-1 px-6 md:px-10 border-r-2">{type}</div>
                <div className="text-white text-2xl px-4 md:px-8 mt-2 font-bold">
                    {price}
                    {subPrice && (
                        <span className="text-sm line-through ml-2 opacity-75">
                            {subPrice}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

const CountryPriceCardContainer = () => {
    const cardsData = [
        { country: 'Nepal', price: '$4,690', type: 'Electronic' },
        { country: 'India', price: '$6,790', subPrice: '$7,836', type: 'B2B Visa' },
        { country: 'Turkey', price: '$4,800', type: 'Electronic' }
    ];

    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4 w-full">
            {cardsData.map((card, index) => (
                <CountryPriceCard
                    key={index}
                    country={card.country}
                    price={card.price}
                    subPrice={card.subPrice}
                    type={card.type}
                />
            ))}
        </div>
    );
};

export default CountryPriceCardContainer;