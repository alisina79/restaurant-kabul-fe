const Logo = ({ className = "", color = "#af905c" }) => {
  return (
    <h1
      className={`text-4xl md:text-5xl lg:text-6xl tracking-wide text-center ${className}`}
      style={{ fontFamily: "Imprint MT Shadow", color: color }}
    >
      K
    </h1>
  );
};

export default Logo;
