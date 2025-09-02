import Hero from  './HomePage/Hero'
import About from './HomePage/About'

const HomePage = () => {
  return (
    
    <div className="bg-gradient-to-r from-black via-gray-900 to-black pt-12 mt-12">
        <Hero />
        <About />
    </div>
  )
}

export default HomePage