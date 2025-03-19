import { useState } from "react";
import styles from "yet-another-react-lightbox/styles.css";

export const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="330"
      height="28"
      viewBox="45 28 330 28"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
          .logo-text {
            font-family: 'Cormorant Garamond', serif;
            font-size: 32px;
            fill: none;
            letter-spacing: 2px;
            line-height: 1;
            text-anchor: middle;
            dominant-baseline: middle;
            transition: stroke 0.4s ease;
          }
        `}</style>
      <text 
        x="210" 
        y="45" 
        className="logo-text"
        style={{
          stroke: isHovered ? "#ac8d5b" : "#ffffff",
          strokeWidth: 0.5
        }}
      >
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

export const CalendarIcon = ({ color = "#ac8d5b" }: { color: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="b" viewBox="0 0 37.79 37.79">
      <g id="c">
        <g id="d">
          <path
            id="e"
            fill={color}
            d="M35.9 3.78h-3.78v-.94c0-1.57-1.27-2.84-2.84-2.84s-2.83 1.27-2.84 2.83v.95H11.33v-.94C11.33 1.27 10.06 0 8.5 0S5.67 1.27 5.67 2.83v.94H1.89C.85 3.77 0 4.62 0 5.66v30.23c0 1.04.85 1.89 1.89 1.89H35.9c1.04 0 1.89-.85 1.89-1.89V5.67c0-1.04-.84-1.89-1.89-1.89Zm-7.56-.94c-.02-.52.39-.96.91-.98s.96.39.98.91v1h-1.89v-.94Zm-20.78 0c-.02-.52.39-.96.91-.98.52-.02.96.39.98.91v1H7.56v-.94ZM8.98 35.9H1.89v-6.3h7.08v6.3h.01Zm0-8.19H1.89v-6.3h7.08v6.3h.01Zm0-8.19H1.89v-6.3h7.08v6.3h.01Zm8.97 16.37h-7.09V29.6h7.08v6.29h.01Zm0-8.19h-7.09v-6.3h7.08v6.3h.01Zm0-8.19h-7.09v-6.3h7.08v6.3h.01Zm8.97 16.37h-7.09v-6.29h7.08v6.29h.01Zm0-8.19h-7.09v-6.3h7.08v6.3h.01Zm0-8.19h-7.09v-6.3h7.08v6.3h.01Zm8.97 16.37H28.8v-6.29h7.08v6.29Zm0-8.19H28.8v-6.3h7.08v6.3Zm0-8.19H28.8v-6.3h7.08v6.3Zm0-8.19h-34V5.63H35.9v5.67Z"
          />
        </g>
      </g>
    </svg>
  );
};

export const KFooterLogoSVG = ({
  color = "#ac8d5b",
  width = "650",
  height = "650",
}: {
  color: string;
  width: string;
  height: string;
}) => {

  const [isHovered, setIsHovered] = useState(false);
  
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="13 13 65 65"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <text
      x="50"
      y="55"
      style={{
        fontFamily: "Cormorant Garamond, serif",
        fontSize: "68px",
        fill: "none",
        stroke: isHovered ? "#ffffff" : color,
        strokeWidth: "1.1",
        textAnchor: "middle",
        dominantBaseline: "middle",
        transition: "stroke 0.3s ease",
      }}
    >
      K
    </text>
  </svg>
)}
