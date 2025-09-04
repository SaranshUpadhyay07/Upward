import Hero from  './HomePage/Hero'
import About from './HomePage/About'
import Disclaimer from './HomePage/Disclaimer'

const HomePage = () => {
  return (
    
    <div className="bg-gradient-to-r from-black via-gray-900 to-black HomePage">
        <Hero />
        <About />
        <Disclaimer />
        <a href="#disclaimer" className="text-white disclaimer" >Disclaimer</a>
    </div>
  )
}

export default HomePage