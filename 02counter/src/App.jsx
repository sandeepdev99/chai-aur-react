import { useState } from "react";


function App() {

  const [counter, setCounter] = useState(15);
  //let counter = 15;
  const addValue = () =>{
    if(counter < 30){
    //console.log(counter, "value added", Math.random());
    setCounter((prevCounter)=>{
      return prevCounter + 1; // preCounter is not fixed name, can be any
    });
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1); ////counter += 1; setState runs in batches so same work done again and again only does once

    //console.log(counter + 3 , "value added", Math.random());
    }
    
  }

  const subValue = () =>{

    if(counter <= 0) 
      return
    console.log(counter, "value added", Math.random());
    setCounter(counter - 2); //counter -= 1;
    console.log(counter - 2, "value added", Math.random());
    
  }
  return (
    <>
    <h1>Chai aur React {counter}</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={subValue}>subtract value</button>

    <footer>this is footer {counter}</footer>
    </> 
  )
}

export default App
