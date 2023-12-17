import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import { headergradient } from "./assets";
import Work from "./components/Work/Work";
import HIW from "./components/HIW";
import Sisyphus from "./components/Sisyphus";
import Pricing from "./components/Pricing";
import FAQSection from "./components/FAQ";
import Footer from "./components/Footer";

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
      <Pricing></Pricing>
      <FAQSection></FAQSection>
      <Footer></Footer>
     </div>
     </BrowserRouter>
    </>
  )
}

export default App
