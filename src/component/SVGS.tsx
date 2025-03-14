export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="330"
      height="28"
      viewBox="45 28 330 28"
    >
      <style>{`
          .logo-text {
            font-family: 'Cinzel', serif;
            font-size: 32px;
            fill: none;
            stroke: #ffffff;
            stroke-width: 0.5;
            letter-spacing: 2px;
            line-height: 1;
            text-anchor: middle;
            dominant-baseline: middle;
          }
        `}</style>
      <text x="210" y="45" className="logo-text">
        KABOUL GOURMET
      </text>
    </svg>
  );
};
 

export const HamburgerMenu = ({ color }: { color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="24"
      viewBox="0 0 35 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-align-justify"
    >
      <path d="M3 10h30" />
      <path d="M3 16h30" />
      <path d="M3 4h30" />
      <path d="M3 22h30" />
    </svg>
  );
};
