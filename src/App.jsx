
import './App.css'
import background from './assets/background.jpg';
import logo from './assets/logo.png'

import Mobile from './devices/Mobile';

function App() {
    return (
        // <div className="h-screen relative" id='container'>
        //     <div className=' w-[80rem] h-[86.25rem] bg-white absolute z-[0] rotate-[60deg] top-[-75rem] left-[-25.5rem]'>
        //     </div>
        //     <img src={background} className=' w-full h-full object-cover object-[60%] absolute z-[-1]' alt="" />
        //     <div className='w-full h-full bg-black absolute opacity-50  z-[-1]'></div>
        //     <div className=' flex flex-col items-center px-4 h-[25vh] z-10'>
        //         <div className='bg-white m-4 rounded-xl z-10'>
        //             <img src={logo} className='w-32 h-auto m-4' alt="" />
        //         </div>
        //     </div>

        //     <div className='z-10 mb-0'>
        //         <h3 className='font-jetbrains rotate-[-30deg] text-gray-800 stroke-slate-800 text-2xl font-black uppercase text-center mt-[16px] mr-4'>
        //             full stack <span className='text-[#F7941D]'>DEVELOPPER</span>
        //         </h3>
        //         <h3 className='font-jetbrains rotate-[-30deg] text-gray-200 stroke-slate-800 text-2xl font-black uppercase text-center ml-4'>
        //             <span className='text-[#F7941D]'>Portfolio in</span> progress
        //         </h3>
        //     </div>

        //     <div className=' px-4 h-[40vh] items-start flex flex-col justify-center'>
        //         <p className=' text-slate-200 text-[2.5rem] font-jetbrains font-black leading-10'>
        //             FULL STACK <br />
        //             DEVELOPPER
        //         </p>

        //         <div className='flex space-x-4'>
        //             <button className=' bg-white px-10 py-2 rounded-3xl mt-8'>
        //                 <span className='flex space-x-3 font-jetbrains text-[#F7941D] text-xl'>
        //                     <span>Resume</span>
        //                 </span>
        //             </button>
        //             <div className='mt-[2.2rem]'>
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 stroke-slate-100 opacity-50">
        //                     <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
        //                 </svg>
        //             </div>
        //         </div>




        //         <div className='flex flex-col space-y-5 absolute bottom-5'>
        //             <svg width="32" height="32" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <path d="M5 0C2.23858 0 0 2.23858 0 5V24.5C0 27.2614 2.23858 29.5 5 29.5H24.5C27.2614 29.5 29.5 27.2614 29.5 24.5V5C29.5 2.23858 27.2614 0 24.5 0H5ZM24.5834 3.27778C25.488 3.27778 26.2222 4.012 26.2222 4.91667C26.2222 5.82134 25.488 6.55556 24.5834 6.55556C23.6787 6.55556 22.9445 5.82134 22.9445 4.91667C22.9445 4.012 23.6787 3.27778 24.5834 3.27778ZM14.75 6.55556C19.275 6.55556 22.9445 10.225 22.9445 14.75C22.9445 19.275 19.275 22.9445 14.75 22.9445C10.225 22.9445 6.55556 19.275 6.55556 14.75C6.55556 10.225 10.225 6.55556 14.75 6.55556ZM14.75 9.83334C12.0346 9.83334 9.83334 12.0346 9.83334 14.75C9.83334 17.4654 12.0346 19.6667 14.75 19.6667C17.4654 19.6667 19.6667 17.4654 19.6667 14.75C19.6667 12.0346 17.4654 9.83334 14.75 9.83334Z" fill="white"/>
        //             </svg>

        //             <svg width="32" className='ml-[-1px]' height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <path d="M27.52 0.880005H4.48C2.4928 0.880005 0.879997 2.49281 0.879997 4.48001V27.52C0.879997 29.5072 2.4928 31.12 4.48 31.12H27.52C29.5072 31.12 31.12 29.5072 31.12 27.52V4.48001C31.12 2.49281 29.5072 0.880005 27.52 0.880005ZM10.24 12.4V26.08H5.92V12.4H10.24ZM5.92 8.41841C5.92 7.41041 6.784 6.64001 8.08 6.64001C9.376 6.64001 10.1896 7.41041 10.24 8.41841C10.24 9.4264 9.4336 10.24 8.08 10.24C6.784 10.24 5.92 9.4264 5.92 8.41841ZM26.08 26.08H21.76C21.76 26.08 21.76 19.4128 21.76 18.88C21.76 17.44 21.04 16 19.24 15.9712H19.1824C17.44 15.9712 16.72 17.4544 16.72 18.88C16.72 19.5352 16.72 26.08 16.72 26.08H12.4V12.4H16.72V14.2432C16.72 14.2432 18.1096 12.4 20.9032 12.4C23.7616 12.4 26.08 14.3656 26.08 18.3472V26.08Z" fill="white"/>
        //             </svg>

        //             <svg width="31" height="31" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <g clip-path="url(#clip0_5_75)">
        //                 <path d="M0 29V0H30V29H0Z" fill="white"/>
        //                 <path d="M15 2.71875C8.26922 2.71875 2.8125 7.99358 2.8125 14.5C2.8125 20.063 6.8025 24.7225 12.1664 25.9577C11.8889 25.8938 11.6138 25.8222 11.3438 25.7407V23.0414C11.3438 23.0414 10.8867 23.1887 10.2773 23.1887C8.5725 23.1887 7.86422 21.7183 7.6875 20.9797C7.58016 20.5297 7.29984 20.1033 6.99891 19.8428C6.63937 19.5329 6.47109 19.532 6.46875 19.4259C6.46406 19.2034 6.77719 19.2125 6.92578 19.2125C7.6875 19.2125 8.265 19.996 8.53313 20.401C9.19734 21.4011 9.91031 21.5687 10.2773 21.5687C10.7344 21.5687 11.1291 21.5026 11.4009 21.3757C11.5266 20.5202 11.9203 19.7581 12.5625 19.2125C9.70453 18.6601 7.6875 17.0756 7.6875 14.5C7.6875 13.1733 8.23828 11.9539 9.15609 10.9692C9.06234 10.7123 8.90625 10.1926 8.90625 9.3457C8.90625 8.78609 8.94656 8.09916 9.21094 7.43125C9.21094 7.43125 10.9491 7.44303 12.5883 8.94378C13.3448 8.73081 14.1544 8.60938 15 8.60938C15.8456 8.60938 16.6552 8.73081 17.4117 8.94378C19.0509 7.44303 20.7891 7.43125 20.7891 7.43125C21.0548 8.09916 21.0938 8.78609 21.0938 9.3457C21.0938 10.2587 20.9681 10.7912 20.8913 11.0209C21.7809 11.9965 22.3125 13.1968 22.3125 14.5C22.3125 17.0756 20.2955 18.6601 17.4375 19.2125C18.2006 19.8605 18.6562 20.8043 18.6562 21.8633V25.7407C18.3862 25.8227 18.1116 25.8938 17.8336 25.9577C23.1975 24.7225 27.1875 20.063 27.1875 14.5C27.1875 7.99358 21.7308 2.71875 15 2.71875ZM15.8498 26.2495C15.5691 26.2686 15.2859 26.2812 15 26.2812C15.2859 26.2812 15.5686 26.2681 15.8498 26.2495ZM15 26.2812C14.7141 26.2812 14.4309 26.2686 14.1502 26.2495C14.4314 26.2681 14.7141 26.2812 15 26.2812ZM13.9631 26.2359C13.3927 26.1893 12.833 26.105 12.2878 25.9849C12.8334 26.1045 13.3927 26.1893 13.9631 26.2359Z" fill="black"/>
        //                 </g>
        //                 <defs>
        //                 <clipPath id="clip0_5_75">
        //                 <rect width="30" height="29" rx="3" fill="white"/>
        //                 </clipPath>
        //                 </defs>
        //             </svg>
        //         </div>
        //     </div>
        // </div>

        <Mobile />
    )
}

export default App
