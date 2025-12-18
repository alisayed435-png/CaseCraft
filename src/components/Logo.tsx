interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo = ({ className = '', size = 'md', showText = true }: LogoProps) => {
  const sizes = {
    sm: { icon: 32, text: 'text-lg' },
    md: { icon: 40, text: 'text-xl' },
    lg: { icon: 52, text: 'text-2xl' },
  };

  const { icon, text } = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* New Logo Mark - Abstract scales/balance with modern geometric design */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Background - rounded square with gradient */}
        <rect
          x="2"
          y="2"
          width="48"
          height="48"
          rx="14"
          fill="url(#caseCraftGradient)"
        />
        
        {/* Abstract C shape representing Case */}
        <path
          d="M32 14C32 14 22 14 18 18C14 22 14 30 18 34C22 38 32 38 32 38"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Inner geometric element - representing precision/craft */}
        <path
          d="M24 22L30 26L24 30"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />
        
        {/* Accent dot */}
        <circle cx="36" cy="26" r="3" fill="#FFFFFF" opacity="0.9" />
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient
            id="caseCraftGradient"
            x1="2"
            y1="2"
            x2="50"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5C7C89" />
            <stop offset="0.5" stopColor="#1F4959" />
            <stop offset="1" stopColor="#011425" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wordmark - New branding */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold text-white tracking-tight ${text}`}>
            Case<span className="text-primary-400">Craft</span>
          </span>
          <span className="text-[10px] text-primary-400/60 tracking-widest uppercase mt-0.5">
            by Aly Hamad
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
