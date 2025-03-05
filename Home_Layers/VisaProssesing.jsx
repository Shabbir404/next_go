import resultPng from '../src/assets/result.svg'
import '../style.css'
import CountryPriceCardContainer from './VisaCard';

const VisaProssesing = () => {


    return (
        <div>
            <div>
                <div className='w-11/12 md:w-10/12 mx-auto '>
                    <div className='flex gap-2 md:justify-start justify-center mt-20'>
                        <img className='w-4 h-5' src={resultPng} alt="" />
                        <h1 className='satisfy text-2xl text-[#63AB45]'>Visa Services</h1>
                        <img className='w-4 h-5 rotate-180' src={resultPng} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold md:text-start text-center mt-3 text-4xl md:text-5xl'>
                            Visa Processing</h1>
                    </div>

                    <div>
                        <CountryPriceCardContainer></CountryPriceCardContainer>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaProssesing;