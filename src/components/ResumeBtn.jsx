import React from 'react'



export default function ResumeBtn() {
    return (
        <>
            <a href="../assets/AbdelhalimLAKFIFI_English.pdf" target='_blank' download>
                <div className='flex space-x-4'>
                    <div className=' text-slate-200 bg-main-orange px-10 py-2 font-jetbrains text-lg rounded-3xl border-2 border-main-orange flex space-x-2'>
                        <span>Resume</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 opacity-70">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
                        </svg>

                    </div>
                </div>
            </a>
            
        </>
    )
}
