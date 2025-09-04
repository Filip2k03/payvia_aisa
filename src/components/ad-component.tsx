
// Ad Component
export default function AdComponent() {
  return (
    <div className="relative overflow-hidden bg-card border border-primary/20 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md text-center">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[10px_10px] [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-400/[0.05]"></div>
        <div className="relative">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Advertisement</h2>
            
            {/* The clickable ad link. It wraps the SVG logo. */}
            <a href="https://whisperx.site" target="_blank" rel="noopener noreferrer" className="group block cursor-pointer" aria-label="Visit WhisperX to learn more">
                
                {/* Custom SVG Logo for WhisperX */}
                <svg width="100%" height="auto" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 ease-in-out group-hover:scale-105">
                    {/* Define the gradient for the icon */}
                    <defs>
                        <linearGradient id="logoGradient" x1="0" y1="60" x2="80" y2="60" gradientUnits="userSpaceOnUse">
                            <stop stopColor="hsl(var(--accent))"/>
                            <stop offset="1" stopColor="hsl(var(--primary))"/>
                        </linearGradient>
                    </defs>

                    {/* Icon: A combination of a sound wave and an 'X' */}
                    <g>
                        <path d="M10 60 L20 45 L30 75 L40 50 L50 70 L60 40 L70 80" stroke="url(#logoGradient)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M45 50 L75 80 M75 50 L45 80" stroke="hsl(var(--foreground))" strokeWidth="5" strokeLinecap="round"/>
                    </g>

                    {/* Main Brand Name */}
                    <text x="100" y="65" fontFamily="Poppins, sans-serif" fontSize="36" fontWeight="bold" fill="hsl(var(--foreground))">WhisperX</text>
                    
                    {/* Slogan Text */}
                    <text x="100" y="95" fontFamily="Inter, sans-serif" fontSize="14" fill="hsl(var(--muted-foreground))">
                        <tspan fontWeight="500">Earn to Learn</tspan>
                        <tspan dx="10" fill="hsl(var(--border))">|</tspan>
                        <tspan dx="10">Improve with Ads</tspan>
                    </text>
                </svg>
                
            </a>

            <p className="mt-4 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Click the logo to start earning while you learn.
            </p>
        </div>
    </div>
  );
}
