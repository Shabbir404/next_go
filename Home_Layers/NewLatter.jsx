import image1 from '../src/images/1xt.png'
import image2 from '../src/images/2xt.png'
import { BsArrowRightSquareFill } from "react-icons/bs";

const NewLatter = () => {
    return (
        <div>
            <div>
                <div className='relative h-[309px] shadow-md bg-[#F7F0EC] rounded-4xl'>
                    <div className='flex justify-end'>
                        <img className='rounded-4xl' src={image1} alt="" />
                    </div>
                    <div className=' flex justify-start'>
                        <img className='rounded-4xl absolute top-0 ' src={image2} alt="" />
                    </div>
                    <div className='text-center left-2/12 md:left-4/12  absolute top-2/6 md:top-1/5'>
                        <h1 className='text-3xl font-semibold ml-2 md:text-5xl'> Join The Newsletter</h1>
                        <p className='tracking-wider mt-4'>To receive our bes
                            t monthly deals</p>
                        <div className=' flex absolute mt-4 left-1/12'>
                            <input type="text" placeholder="Enter your email address..."
                                className="input input-neutral md:w-[400px] border-[#63AB45]" />
                            <BsArrowRightSquareFill className='text-4xl mt-0.5 text-[#63AB45]' ></BsArrowRightSquareFill>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewLatter;