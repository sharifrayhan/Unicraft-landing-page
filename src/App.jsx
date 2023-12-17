import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {


  return (
    <>
     <BrowserRouter>
     <div className="max-w-8xl">
      <Navbar></Navbar>
     </div>
     </BrowserRouter>
    </>
  )
}

export default App
