export default function Points({ data, hiddenSpecies, xScale, yScale, color }) {
    function isHidden(data) {
        if (hiddenSpecies.has(data)) {
            return 0;
        } else {
            return 1;
        }
    }

    return(
        <g>
            {data.map((d, i) => (   
                <circle
                    key={i}
                    cx={xScale(d.x)}
                    cy={yScale(d.y)}
                    r={5}
                    fill={color(d.species)}
                    opacity={isHidden(d.species)}
                />
            ))}
        </g>
    );
}