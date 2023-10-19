
import './App.css'
import background from './assets/background.jpg';
import logo from './assets/logo.png'
function App() {
    return (
        <div className="h-screen relative" id='container'>
            <img src={background} className=' w-full h-full object-cover object-[60%] absolute z-[-1]' alt="" />
            <div className='w-full h-full bg-black absolute opacity-50  z-[-1]'></div>

            <div className=' flex justify-center flex-col items-center'>
                <div className='bg-white m-4 rounded-xl'>
                    <img src={logo} className='w-28 h-auto m-4' alt="" />
                </div>

                <h3 className=' font-jetbrains text-slate-200'>Portfolio in progress</h3>
            </div>
        </div>
    )
}

export default App
