import React from 'react'
import background from '../assets/background.jpg';
import logo from '../assets/logo.png'
import ResumeBtn from '../components/ResumeBtn'
export default function Mobile() {
    return (
        // transform: translate(40%);
        // font-size: 27px;
        // font-weight: 700;
        <>
            <div className=' h-screen relative'>

                <img src={background} className=' w-full h-full object-cover object-[60%] absolute z-[-1]' alt="" />
                <div className='w-full h-full bg-black absolute opacity-50  z-[-1]'></div>
                <div className=' flex flex-col items-center px-4 h-[25vh] z-10'>
                    <div className='bg-white m-4 rounded-xl z-10'>
                        <img src={logo} className='w-32 h-auto m-4' alt="" />
                    </div>
                </div>


                <div className="absolute h-[13rem] inset-0 bg-white transform -skew-y-[30deg]">
                    <div className='relative skew-y-[30deg] w-full h-full'>
                        <div className='w-1/2 h-[100%] bg-white absolute top-0'>
                        </div>
                    </div>
                </div>

                <div className='z-10 absolute top-[10rem] left-0 mx-auto w-full'>
                    <h3 className='font-jetbrains rotate-[-30deg] text-gray-800 stroke-slate-800 text-2xl font-black uppercase text-center mt-[16px] mr-4'>
                        full stack <span className='text-[#F7941D]'>DEVELOPPER</span>
                    </h3>
                    <h3 className='font-jetbrains rotate-[-30deg] text-gray-200 stroke-slate-800 text-2xl font-black uppercase text-center ml-4'>
                        <span className='text-[#F7941D]'>Portfolio in</span> progress
                    </h3>
                </div>
                <div className=' flex items-center h-[60vh] ml-[10%]'>
                    <ResumeBtn />
                </div>
            </div>


        </>
    )
}
