export const SketchLines = () => {
  return (
    <svg 
      className="absolute w-full h-full pointer-events-none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ zIndex: 5 }}
    >
      <path 
        d="M 100 100 Q 200 50 300 100" 
        stroke="#ff6b6b" 
        strokeWidth="3" 
        fill="none" 
        opacity="0.3"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        className="animate-sketch-draw"
      />
      <path 
        d="M 700 200 Q 800 150 900 200" 
        stroke="#4ecdc4" 
        strokeWidth="3" 
        fill="none" 
        opacity="0.3"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        className="animate-sketch-draw"
        style={{ animationDelay: '0.5s' }}
      />
    </svg>
  );
};
