import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import { headergradient } from "./assets";
import Work from "./components/Work/Work";
import HIW from "./components/HIW";
import Sisyphus from "./components/Sisyphus";

function App() {

  const bgStyle = {
    backgroundImage: `url(${headergradient})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
  };

  return (
    <>
     <BrowserRouter>
     <div className="max-w-8xl">
      <div style={bgStyle} >
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <Work></Work>
      <HIW></HIW>
      <Sisyphus></Sisyphus>
     </div>
     </BrowserRouter>
    </>
  )
}

export default App
