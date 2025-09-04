
const Disclaimer = () => {
  return (
    <div className="about  flex flex-col items-center min-h-[95vh] w-[90vw] max-w-7xl ml-auto mr-auto " id="disclaimer">
      <h1 className="text-5xl md:text-7xl mb-12 text-white shadowing text-center flex items-center gap-4 mt-10">
        Disclaimer
      </h1>

      <div className="text-lg text-gray-300 md:text-xl grid grid-cols-3 gap-11">
        <div>
            <h2 className="text-3xl text-white font-semibold shadowing-green mb-4">Educational and Simulated Trading</h2>
            <p className="mb-6 para text-justify">
            Welcome to <span className="text-emerald-500 font-bold">Upward</span>. Please note that this is a <span className="font-bold text-white">demo and simulated trading platform</span>, designed exclusively for educational and learning purposes. All trades on this platform are hypothetical and involve <span className="font-bold text-white">virtual money; no real funds are at risk</span>.
            </p>
            <hr className="my-10 border-gray-700 w-1/4 mx-auto" />
        </div>
        <div>
        <h2 className="text-3xl text-white font-semibold shadowing-red mb-4">No Regulatory Approval or Financial Advice</h2>
        <p className="mb-6 para text-justify">
          <span className="font-bold text-white">Upward is not a certified trading platform and is not regulated by SEBI</span> or any other financial authority. We are not a broker or financial advisor and do not provide any form of financial, investment, or trading advice. While our platform attempts to simulate real market conditions, the data, charts, and simulated outcomes are for demonstration only and may not reflect actual market performance.
        </p>
        <hr className="my-10 border-gray-700 w-1/4 mx-auto" />
        </div>

        <div>
        <h2 className="text-3xl text-white font-semibold shadowing mb-4">Your Due Diligence</h2>
        <p className="mb-6 para text-justify">
          <span className="font-bold text-white">You must not rely on any information or simulated results from this platform to make real-world investment decisions.</span> Always perform your own thorough research and consult with a SEBI-registered professional or financial advisor before investing.
        </p>
        <hr className="my-10 border-gray-700 w-1/4 mx-auto" />
        </div>
      </div>
      <p className="text-gray-400 ml-auto mr-auto text-xl ">By using this platform, you acknowledge it is a simulation and accept full responsibility for your investment decisions.</p>
    </div>
  );
};

export default Disclaimer;