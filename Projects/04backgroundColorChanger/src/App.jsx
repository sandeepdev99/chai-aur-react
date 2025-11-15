import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("");
  return (
    <>
    <div className='w-full h-screen' 
      style={{backgroundColor: color}}>
        <div className='p-2 bg-emerald-100 w-3xl rounded-4xl justify-center flex gap-1.5'>
          <button className='bg-green-500 px-3 py-1 rounded-4xl'
          style={{backgroundColor: "green"}}
          onClick={() => setColor("green")}>Green</button>

          <button className='bg-amber-300 px-3 py-1 rounded-4xl' 
          style={{backgroundColor: "yellow"}}
          onClick={() => setColor("yellow")}>Yellow</button>
          
          <button className='bg-orange-500 px-3 py-1 rounded-4xl' 
          style={{backgroundColor: "orange"}}
          onClick={() => setColor("orange")}>Orange</button>
          
          <button className='bg-blue-500 px-3 py-1 rounded-4xl' 
          style={{backgroundColor: "blue"}}
          onClick={() => setColor("blue")}>Blue</button>
          
          <button className='bg-red-500 px-3 py-1 rounded-4xl' 
          style={{backgroundColor: "red"}}
          onClick={() => setColor("red")}>red</button>
          
          <button className='bg-fuchsia-600 px-3 py-1 rounded-4xl' 
          style={{backgroundColor: "purple"}}
          onClick={() => setColor("purple")}>purple</button>
          
          <button className='bg-amber-700 px-3 py-1 rounded-4xl' 
          style={{backgroundColor: "indigo"}}
          onClick={() => setColor("indigo")}>indigo</button>
          
          <button className='bg-white text-black text-shadow-2xs px-3 py-1 rounded-4xl'
          style={{backgroundColor: "white"}}
          onClick={() => setColor("White")}>white</button>

          <button className='bg-black text-amber-50 px-3 py-1 rounded-4xl' 
          style={{backgroundColor: "black"}}
          onClick={() => setColor("black")}>Black</button>

        </div>
    </div>

    </>
  )
}

export default App
