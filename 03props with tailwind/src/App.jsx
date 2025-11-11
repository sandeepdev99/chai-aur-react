import { useState } from 'react'
import './App.css'
import Card from "./components/Card";

function App() {

  let someObj = {
    type :'a',
    href: 'google'
  }
  return (
    <>
    <Card username = "sandy" newObj = {someObj}/>


    </>
  )
}

export default App
