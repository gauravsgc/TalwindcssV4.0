import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyGrid from './Components/grid-container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h1 className=' text-red-600 text-am'>goodmorning</h1>
        <p>goodmrong</p>
        <p className='bgdeepblue'>Lorem, ipsum.</p>
        <button className='text-green-500  rounded bg-amber-200 mt-2 px-6 py-4 text-2xl my-2 border-4 '>
        
          click me</button>
        {/* border :automaticaly as text color */}
        <input type="text" className='customcolor bg-white text-xl border-2 
        mt-2
        roundedp-2'placeholder='enter name' />
        {/* placeholder :automaticaly as text color with 50% opacity*/}
        <button type="button" className="bg-indigo-500 text-white px-4 py-2 rounded flex items-center disabled:opacity-50" disabled>
  <svg className="mr-3 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" ></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
  </svg>
  Processing…
</button>

<div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      </div>
      <MyGrid/>
    </>
  )
}

export default App
