const CurvedLineOutline = () => {
  return (
    <div className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2 z-0">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Define the filter inside the <defs> block */}
        <defs>
          <filter id="line-blur">
            {/* The feGaussianBlur primitive blurs the line.
                stdDeviation="1.5" applies a mild blur. Adjust this value as needed. */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.7" />
          </filter>
        </defs>

        <path
          d="M -7 20 Q 75 0, 75 50 T 3 80"
          stroke="rgba(14, 133, 245, 0.88)"
          strokeWidth="1"
          fill="none"
          // Apply the filter to the path using its ID
          filter="url(#line-blur)"
        />
      </svg>
    </div>
  );
};

export default CurvedLineOutline;