const CurvedLineOutline = () => {
  return (
    <div className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2 z-0">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="glow-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
            <feFlood floodColor="rgba(0, 255, 191, 1)" result="flood" />
            <feComposite in="flood" in2="blur" operator="in" result="colored-blur" />
            <feMerge>
              <feMergeNode in="colored-blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M -7 20 Q 80 0, 77 50 T 3 80"
          stroke="rgba(255, 255, 255, 1)"
          strokeWidth="0.3" // Increased from 0.6 to make the line more prominent
          fill="none"
          filter="url(#glow-effect)" // Apply the new glowing filter
        />
      </svg>
    </div>
  );
};

export default CurvedLineOutline;