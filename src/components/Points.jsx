import * as d3 from 'd3';

export default function Points({ data, xScale, yScale }) {
    const color = d3.scaleOrdinal(d3.schemeAccent);

    return(
        <g>
            {data.map((d, i) => (
                <circle
                    key={i}
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