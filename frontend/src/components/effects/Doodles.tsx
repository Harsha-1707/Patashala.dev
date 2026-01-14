export const Doodles = () => {
  return (
    <>
      <div 
        className="fixed top-[10%] left-[5%] text-8xl pointer-events-none z-[5] hidden md:block animate-float"
        style={{ fontSize: '100px' }}
      >
        ✏️
      </div>
      
      <div 
        className="fixed bottom-[15%] right-[8%] text-7xl pointer-events-none z-[5] hidden md:block animate-float"
        style={{ 
          fontSize: '80px',
          animationDelay: '2s',
        }}
      >
        📚
      </div>
      
      <div 
        className="fixed top-1/2 right-[3%] text-6xl pointer-events-none z-[5] hidden md:block animate-spin-slow"
        style={{ fontSize: '60px' }}
      >
        ⚡
      </div>
    </>
  );
};
