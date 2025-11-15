import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("re");

  //useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  const refPass = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzlkjhgfdsapoiuytrewq";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()<>?";

    let slength = str.length;
    
    for (let i = 0; i < length; i++) {
       let char = Math.floor(Math.random() * slength + 1);
       pass += str.charAt(char);
    }
    setPassword(pass)}, [length,numberAllowed, charAllowed, setPassword]);

  //useEffect is a React Hook that lets you synchronize a component with an external system.
  useEffect(() => { passwordGenerator() },[length, numberAllowed,charAllowed, passwordGenerator])
  console.log(password);

  const copyPasswordToClipboard = useCallback(()=> {
    refPass.current?.select();
    refPass.current?.setSelectionRange(0,27);
    window.navigator.clipboard.writeText(password);

  },[password])
  

  return (
      <>
        <div className='w-full max-w-md mx-auto my-8 shadow-md rounded-xl text-center bg-gray-700  text-orange-500 '><h1 className='py-2'>password Generator</h1>
          <div className='flex w-full bg-amber-400 rounded-2xl mb-5'>
            <input type="text" value={password} className='outline-none ml-5 w-4/5 text-amber-50' readOnly
            ref={refPass}/>
            <button className='text-center bg-blue-500 flex-1/5 rounded-r-2xl cursor-pointer'
            onClick={
              copyPasswordToClipboard
              
              }>copy</button>
          </div>

          <div className='flex'>
            <div className='w-2/4 flex gap-2 justify-evenly'>
              <input type="range" name="slider" id="slider" className='w-1/2'
              min={8}
              max={30}

              onChange={(e) =>{setLength(e.target.value)}}/>
            <span>length({length})</span>
            </div>
            

            <div className='w-1/4'>
              <input type="checkbox" name="numbers" id="numbers" 
              onChange={(e)=>{
                setNumberAllowed((prev) => !prev)
                console.log("numberchange", numberAllowed);
                
              }}/>Numbers
            </div>

            <div className='w-1/4'>
              <input type="checkbox" name="characters" id="characters" 
              onChange={(e)=>{
                setCharAllowed((prev) => !prev)
                console.log("charchange", charAllowed);
                
              }}/>Charcters
            </div>


          </div>
        </div>
      </>
  )
}

export default App
