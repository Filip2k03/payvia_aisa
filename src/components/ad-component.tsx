// Ad Component
export default function AdComponent() {
  return (
    <div className="bg-gray-800 border border-blue-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md text-center">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Advertisement</h2>
        
        {/* The clickable ad link. It wraps the SVG logo. */}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="group block cursor-pointer" aria-label="Visit Next.js to learn more">
            
            {/* Custom SVG Logo for WhisperX */}
            <svg width="100%" height="auto" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 ease-in-out group-hover:scale-105">
                {/* Define the gradient for the icon */}
                <defs>
                    <linearGradient id="logoGradient" x1="0" y1="60" x2="80" y2="60" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#38bdf8"/> {/* Light Blue */}
                        <stop offset="1" stopColor="#818cf8"/> {/* Indigo */}
                    </linearGradient>
                </defs>

                {/* Icon: A combination of a sound wave and an 'X' */}
                <g>
                    <path d="M10 60 L20 45 L30 75 L40 50 L50 70 L60 40 L70 80" stroke="url(#logoGradient)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M45 50 L75 80 M75 50 L45 80" stroke="#f0f0f0" strokeWidth="5" strokeLinecap="round"/>
                </g>

                {/* Main Brand Name */}
                <text x="100" y="65" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="bold" fill="white">WhisperX</text>
                
                {/* Slogan Text */}
                <text x="100" y="95" fontFamily="Inter, sans-serif" fontSize="14" fill="#a0aec0">
                    <tspan fontWeight="500">Earn to Learn</tspan>
                    <tspan dx="10" fill="#6b7280">|</tspan>
                    <tspan dx="10">Improve with Ads</tspan>
                </text>
            </svg>
            
        </a>

        <p className="mt-4 text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
            Click the logo to discover the power of Next.js
        </p>
    </div>
  );
}
