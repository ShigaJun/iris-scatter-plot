export default function Legend({ species, color, hiddenSpecies, toggleSpecies }) {
  const spacing = 100;
  const margin =  300;
  const rectSize = 16;

  return (
    <g>
      {species.map((sp, i) => (
        <g
          key={sp}
          transform={`translate(${margin + i * spacing}, 0)`}
          onClick={() => toggleSpecies(sp)}
          style={{ cursor: "pointer", userSelect: "none", opacity: hiddenSpecies.has(sp) ? 0.3 : 1 }}
        >
          <rect
            width={rectSize}
            height={rectSize}
            fill={color(sp)}
            stroke="#000"
            strokeWidth={1}
          />
          <text
            x={rectSize + 5}
            y={rectSize * 0.75}
            fontSize="14"
            fill="#000"
          >
            {sp}
          </text>
        </g>
      ))}
    </g>
  );
}
