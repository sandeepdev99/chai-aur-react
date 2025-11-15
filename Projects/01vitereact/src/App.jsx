import Chai from "./chai"

function App() {
  
  const username = 'sandy';

  return (
    <>
    <Chai />
    <h1>react heading with value {username? username + '123': 'null'}</h1></>

  )
}

export default App
