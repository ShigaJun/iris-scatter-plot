export default function Points({ data, xScale, yScale, color }) {
    return(
        <g>
            {data.map((d, i) => (
                <circle
                    key={d.id}
                    cx={xScale(d.x)}
                    cy={yScale(d.y)}
                    r={5}
                    fill={color(d.species)}
                    opacity={1}
                />
            ))}
        </g>
    );
}