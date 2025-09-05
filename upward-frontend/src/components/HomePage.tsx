import Hero from './HomePage/Hero';
import About from './HomePage/About';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white">
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-6 pb-10">
        <Hero />
      </section>

      {/* Divider */}
      <hr className="w-1/2 mx-auto border-t border-gray-600" />

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <About />
      </section>
    </div>
  );
};

export default HomePage;