import { useState } from "react";
import Points from "./Points";
import XAxis from "./XAxis";
import YAxis from "./YAxis";
// import Legend from "./Legend";

const padding = 60;

export default function ScatterPlot({ data, xScale, yScale }) {
    const width = 600;
    const height = 500;

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${padding}, ${padding})`}>
                <Points
                    data={data}
                    xScale={xScale}
                    yScale={yScale}
                    // visibleSpecies={visibleSpecies}
                />
                <XAxis 
                    scale={xScale}
                    transform={`translate(${padding}, ${height - padding * 1.5})`}
                />
                <YAxis
                    scale={yScale}
                    transform={`translate(${padding}, 0)`}
                />
                {/* <PlotLegend speciesList={species} color={color} visibleSpecies={visibleSpecies} setVisibleSpecies={setVisibleSpecies} /> */}
                {/* <Legend /> */}
            </g>
        </svg>
    );
}