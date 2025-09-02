const About = () => {
  return (
    <div className="about text-white flex flex-col items-center  px-9 py-12 min-h-[70vh]">
      <h1 className="text-5xl md:text-6xl  mb-6 text-white">About</h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
        UPWARD is built to simplify trading and investing. Whether you’re a beginner or a pro,
        our tools help you track, analyze, and grow your portfolio — all in one place.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl w-full">
        {/* Feature 1 */}
        <div className="p-6 bg-gray-900 rounded-2xl border-gray border  shadow-md ">
          <h3 className="text-xl font-semibold mb-3 text-blue-500">📊 See Stocks at Ease</h3>
          <p className="text-gray-400 text-sm">
            Browse market trends, monitor your favorite companies, and never miss a trading opportunity.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-gray-900 border-gray border rounded-2xl shadow-md ">
          <h3 className="text-xl font-semibold mb-3 text-blue-500">⚡ Real-Time Insights</h3>
          <p className="text-gray-400 text-sm">
            Get instant updates, real-time charts, and market signals to stay ahead in the game.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-gray-900 rounded-2xl border-gray border  shadow-md ">
          <h3 className="text-xl font-semibold mb-3 text-blue-500">📈 Grow Your Portfolio</h3>
          <p className="text-gray-400 text-sm">
            Track performance, manage risks, and make smarter investment decisions with powerful analytics.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
