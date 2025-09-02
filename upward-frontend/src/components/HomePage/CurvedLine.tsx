const CurvedLine = () => {
  return (
    <div className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2 z-10">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M -7 20 Q 75 0, 75 50 T 3 80"
          stroke="#ffffffff" // A nice blue color to match the text
          strokeWidth="0.3"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default CurvedLine;