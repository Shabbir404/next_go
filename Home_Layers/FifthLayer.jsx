import resultPng from '../src/assets/result.svg'
import '../style.css'
import ylGr from '../src/assets/gradingYl.png'
import grGr from '../src/assets/greadingGr.png'
import plane from '../src/assets/plane.svg'
import electro from '../src/assets/electro.svg'
import calander from '../src/assets/calender.svg'
import timehand from '../src/assets/timehand.svg'
import timer from '../src/assets/timer.svg'
import guide from '../src/assets/guide.svg'
import SixthLayer from './SixthLayer'

const FifthLayer = () => {

    const features = [
        { img: plane, title: "Worldwide Coverage", text: "Cras facilisis fermentum ex seda ullamcorper odio rutrum accoun Phasellus auctor", bg: grGr },
        { img: electro, title: "Competitive Pricing", text: "Burabitur convallis enim athora ullamcorper sagittis. Morbi nug scelerisque for thana.", bg: grGr },
        { img: calander, title: "Fast Booking", text: "Fermentum etiorx quis maximum Etiam luctus erat vulputate urnan posuere convallis.", bg: ylGr },
        { img: guide, title: "Guided Tours", text: "Pellentesque venenatis egestasio diam Proin velgorat elit porttitor metus convallis.", bg: ylGr },
        { img: timehand, title: "Best Support 24/7", text: "Sed venenatis mauris nec nulla euismod, accoun varius lectus viverra oncen.", bg: ylGr },
        { img: timer, title: "Ultimate Flexibility", text: "Duis leo sapien, lacinia utorrent efficitur utom suscipit quis nulla Sed auctor eu", bg: ylGr },
    ];

    return (
        <div>
            <div className='mt-16 flex gap-2 justify-center'>
                <img className='w-4 h-5' src={resultPng} alt="" />
                <h1 className='satisfy text-2xl text-[#63AB45]'>Our Success</h1>
                <img className='w-4 h-5 rotate-180' src={resultPng} alt="" />
            </div>
            <div>
                <h1 className='font-bold text-center mt-3 text-4xl'>Why Choose TripRex</h1>
            </div>
            <div className='md:w-10/12 w-11/12 mx-auto mt-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-lg shadow-sm flex items-start space-x-4 bg-cover bg-center"
                            style={{ backgroundImage: `url(${feature.bg})` }}
                        >
                            <div className="text-green-600">
                                <img className='w-[100px] h-[100px]' src={feature.img} alt="" />
                            </div>
                            <div>
                                <h3 className="mt-3 font-semibold text-lg">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <SixthLayer></SixthLayer>
        </div>
    );
};

export default FifthLayer;