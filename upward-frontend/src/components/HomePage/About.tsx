import CurvedLine from './CurvedLine'; // Import the new component
import CurvedLineOutline from './CurvedLineOutline'; // Import the new component

const About = () => {
  return (
    <div className="about text-white flex flex-col items-center px-9 pb-12 min-h-[70vh] w-[70vw] ml-auto mr-auto">
      <h1 className="text-5xl md:text-7xl mb-12 text-white shadowing-green">About</h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
        UPWARD is built to simplify trading and investing. Whether you’re a beginner or a pro,
        our tools help you track, analyze, and grow your portfolio — all in one place.
      </p>

      {/* Add a relative container to position the line inside */}
      <div className="relative flex flex-col gap-12 max-w-7xl w-full mt-12">
        <CurvedLine /> {/* Place the line here, before your feature sections */}
        <CurvedLineOutline />
        {/* Feature 1 */}
        <div className="p-3 bg-gray-900 rounded-2xl border-gray border-2 shadow-md w-1/2 flex flex-col gap-5 z-10">
          <h3 className="text-2xl font-semibold text-blue-500">📊 See Stocks at Ease</h3>
          <p className="text-gray-400 text-md">
            Browse market trends, monitor your favorite companies, and never miss a trading opportunity.
          </p>
          <img src="/hero.svg" className="mt-12" alt="Stocks at Ease illustration" />
        </div>

        {/* Feature 2 */}
        <div className="p-3 bg-gray-900 border-gray border-2 rounded-2xl shadow-md w-1/2 ml-[50%] flex flex-col gap-5 z-10">
          <h3 className="text-2xl font-semibold text-blue-500">⚡ Real-Time Insights</h3>
          <p className="text-gray-400 text-md">
            Get instant updates, real-time charts, and market signals to stay ahead in the game.
          </p>
          <img src="/hero.svg" className="mt-12" alt="Real-Time Insights illustration" />
        </div>

        {/* Feature 3 */}
        <div className="p-3 bg-gray-900 rounded-2xl border-gray border-2 shadow-md w-1/2 flex flex-col gap-5 z-10">
          <h3 className="text-2xl font-semibold text-blue-500">📈 Grow Your Portfolio</h3>
          <p className="text-gray-400 text-md">
            Track performance, manage risks, and make smarter investment decisions with powerful analytics.
          </p>
          <img src="/hero.svg" className="mt-12" alt="Grow Your Portfolio illustration" />
        </div>

        
      </div>
    </div>
  );
};

export default About;