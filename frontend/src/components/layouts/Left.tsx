import React, { useEffect, useState } from 'react';

const quotes = [
  "Track every rupee, save every day.",
  "Let your money tell a story.",
  "Budget today, freedom tomorrow.",
  "Small savings, big future.",
  "Expense tracking = Financial winning."
];

export const Left = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 3000); // Change quote every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='hidden md:flex w-[50vw] h-screen bg-cover bg-center items-center justify-center p-8'
      style={{
        backgroundImage: `url('/gradii-1920x1080.png')`,  // Place image in public folder
      }}
    >
      <div className='text-center text-white transition-all duration-500 ease-in-out'>
        <h1 className='text-2xl md:text-3xl font-semibold font-mono animate-fade'>
          {quotes[quoteIndex]}
        </h1>
        
      </div>
      <h4 className='text-slate-300 text-sm mt-[90px] items-end '>~ by NK</h4>
    </div>
  );
};
