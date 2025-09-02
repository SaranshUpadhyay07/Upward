const About = () => {
  return (
    <div className="about text-white flex flex-col items-center px-9 pb-12 min-h-[95vh] w-[90vw] max-w-7xl ml-auto mr-auto">
      <h1 className="text-5xl md:text-7xl mb-12 text-white shadowing-green">About</h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
        UPWARD is built to simplify trading and investing. Whether you’re a beginner or a pro,
        our tools help you track, analyze, and grow your portfolio — all in one place.
      </p>

      {/* Grid Container */}
      <div className="relative w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        {/* Feature 1 */}
        <div className="p-9 bg-gray-900 rounded-2xl  shadow-md flex flex-col gap-5 boxing">
          <h3 className="text-2xl font-semibold text-blue-500">📊 See Stocks at Ease</h3>
          <p className="text-gray-400 text-md">
            Browse market trends, monitor your favorite companies, and never miss a trading opportunity.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-9 bg-gray-900  rounded-2xl shadow-md flex flex-col gap-5 boxing">
          <h3 className="text-2xl font-semibold text-blue-500">⚡ Real-Time Insights</h3>
          <p className="text-gray-400 text-md">
            Get instant updates, real-time charts, and market signals to stay ahead in the game.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-9 bg-gray-900 rounded-2xl  shadow-md flex flex-col gap-5 boxing">
          <h3 className="text-2xl font-semibold text-blue-500">📈 Grow Your Portfolio</h3>
          <p className="text-gray-400 text-md">
            Track performance, manage risks, and make smarter investment decisions with powerful analytics.
          </p>
        </div> 

        {/* Feature 4 */}
        <div className="p-9 bg-gray-900 rounded-2xl  shadow-md flex flex-col gap-5 boxing">
          <h3 className="text-2xl font-semibold text-blue-500">🔔 Smart Alerts</h3>
          <p className="text-gray-400 text-md">
            Stay informed with personalized alerts on price changes, news, and market updates that matter to you.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="p-9 bg-gray-900 rounded-2xl  shadow-md flex flex-col gap-5 boxing">
          <h3 className="text-2xl font-semibold text-blue-500">🤝 Community Driven</h3>
          <p className="text-gray-400 text-md">
            Join a growing network of investors, share insights, and learn from the community.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="p-9 bg-gray-900 rounded-2xl  shadow-md flex flex-col gap-5 boxing">
          <h3 className="text-2xl font-semibold text-blue-500">🛡️ Secure & Reliable</h3>
          <p className="text-gray-400 text-md">
            Your data and investments are safe with enterprise-grade encryption and security protocols.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
