import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import Portfolio from "./components/Portfolio";
import Watchlist from "./components/Watchlist";
import Disclaimer from "./components/Disclaimer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="hero bg-gradient-to-r from-black via-gray-900 to-black">
        <Header />
        <Routes>
          <Route path="/" element ={<HomePage />}/>
          <Route path="/explore" element ={<Explore />}/>
          <Route path="/your-watchlist" element ={<Watchlist />}/>
          <Route path="/your-portfolio" element ={<Portfolio/>}/>
          <Route path="/more" element ={<div className="text-white text-4xl flex justify-center items-center h-[80vh]">More Page Coming Soon!</div>}/>
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
         <Footer />
      </div>
    </Router>
  )
}

export default App
