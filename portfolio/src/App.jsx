import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./components/Work/Work";
import Navbar from "./components/Navigationbar/Navbar";
import picture from '../public/Image/my-self.jpg'
import AboutMe from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import skill1 from '../public/Image/JavaScript.png'
import skill2 from '../public/Image/git.png'
import skill3 from '../public/Image/React.png'
import { useTheme } from "./components/Toggle/Toggle";
import Toggle from "./components/Navigationbar/ThemeIcon";


function App() {
  
  
  const Home = () => {
    return( 
      <>
      <div className="intro" >
        <div className="curiuos-img">
        <h1>Hi, I'm Kombou Daniel✋</h1>
        <p className="incard">I'm a Full Stark Developer(React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing and responsive. Even though I have been creating web applications for over 2 months now, I still love it as if it was something new.</p>
        </div>
        <div className="curiuos-note">
          <img src={picture} />
        </div>
      </div>
      <p style={{color: 'white', textAlign: 'center', fontSize: '20px', margin: '40px 0'}}>These  are skills, technologies I'm really good at:</p>
      <div className="skills">
        <img src={skill1} className="spinning" />
        <img src={skill2} />
        <img src={skill3} />
      </div>
      </>
    )
  }
  
  const {theme} = useTheme()
  return(
    <div className={` app theme-${theme}`}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/test" element={<Testimonials/>}/>
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/download"/>
      </Routes>
      </BrowserRouter>
        {/* <Toggle/> */}
      <div>

      </div>
    </div>
  )
}

export default App;