export const KPatternBackground = ({
  strokeColor = "#645741",
  fillColor = "rgba(211, 162, 77, 0.8)",
  strokeWidth = "10",
  backgroundColor = "bg-[#F5DEB3]",
  patternSize = "100px",
  spacing = "400",
  children = null, // Default to null if not provided
  className = "",
  ...props
}: {
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: string;
  backgroundColor?: string;
  patternSize?: string;
  spacing?: string;
  children?: React.ReactNode; // Make it optional
  className?: string;
  [x: string]: unknown;
}) => {
  const kSvgPath = `
    M909 1356V1411H1507V1356Q1440 1347 1370.5 1316.0Q1301 1285 1233.0 1236.5Q1165 1188 1079 1114L838 901L1368 238Q1427 164 1462.0 130.0Q1497 96 1533.5 78.5Q1570 61 1618 55V0H946V55Q1106 55 1106 127Q1106 152 1090.0 178.5Q1074 205 1047 238L651 733L526 621V238Q526 156 550.5 113.0Q575 70 639 63Q672 61 693.5 58.5Q715 56 731 55V0H49V55H80Q168 55 210.0 76.0Q252 97 264.0 136.5Q276 176 276 242V1182Q276 1249 261.0 1284.5Q246 1320 197.5 1338.0Q149 1356 49 1356V1411H731V1356H717Q600 1356 563.0 1319.0Q526 1282 526 1194V696L932 1059Q1000 1120 1034.5 1166.5Q1069 1213 1069 1255Q1069 1300 1037.5 1328.0Q1006 1356 948 1356ZM1290 1356H1055Q1102 1317 1102 1270Q1102 1240 1087 1208Q1155 1270 1194.0 1300.5Q1233 1331 1290 1356ZM1128 289 723 797 678 756 1055 276Q1098 224 1118.5 190.0Q1139 156 1139 123Q1139 80 1090 55H1116Q1156 55 1181.0 79.0Q1206 103 1206 135Q1206 192 1128 289ZM373 229V1174Q373 1284 349.0 1320.5Q325 1357 233 1356Q282 1334 295.5 1302.0Q309 1270 309 1157V213Q309 138 292.5 107.0Q276 76 225 55H250Q311 55 337.0 74.5Q363 94 368.0 127.5Q373 161 373 229Z
  `.trim();

  const kWidth = 1500;
  const kHeight = 1400;
  const spacingNum = parseInt(spacing);

  const totalWidth = kWidth * 2 + spacingNum * 2.5;
  const totalHeight = kHeight * 2 + spacingNum * 2;

  const encodedSvg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${totalHeight}" viewBox="0 0 ${totalWidth} ${totalHeight}">
      <rect x="0" y="0" width="${totalWidth}" height="${totalHeight}" fill="none" />
      
      <g transform="translate(${spacingNum},${spacingNum}) scale(-1,1) translate(-${kWidth},0)">
        <path d="${kSvgPath}" fill="${fillColor}" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
      </g>
      
      <g transform="translate(${kWidth + spacingNum * 2 + kWidth / 2},${
    spacingNum + kHeight / 2
  })  translate(-${kWidth / 2},-${kHeight / 2})">
        <path d="${kSvgPath}" fill="${fillColor}" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
      </g>
      
      <g transform="translate(${spacingNum},${
    kHeight + spacingNum * 2
  }) scale(-1,-1) translate(-${kWidth},-${kHeight})">
        <path d="${kSvgPath}" fill="${fillColor}" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
      </g>
      
      <g transform="translate(${kWidth + spacingNum * 2},${
    kHeight + spacingNum * 2
  }) scale(1,-1) translate(0,-${kHeight})">
        <path d="${kSvgPath}" fill="${fillColor}" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
      </g>
    </svg>
  `);

  return (
    <div
      className={`relative ${backgroundColor} ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodedSvg}")`,
        backgroundRepeat: "repeat",
        backgroundSize: patternSize,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
