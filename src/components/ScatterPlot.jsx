import { useState } from "react";
import * as d3 from 'd3';
import Points from "./Points";
import XAxis from "./XAxis";
import YAxis from "./YAxis";
import Legend from "./Legend";

export default function ScatterPlot({ data, xScale, yScale }) {
    const width = 600;
    const height = 500;
    const padding = 60;

    const color = d3.scaleOrdinal(d3.schemeAccent);
    const speciesSet = new Set(data.map(d => d.species));
    const speciesArray = Array.from(speciesSet);
    const [hiddenSpecies, setHiddenSpecies] = useState(new Set());

    // speciesの表示切替関数
    const toggleSpecies = (sp) => {
        setHiddenSpecies((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(sp)) {
            newSet.delete(sp);
        } else {
            newSet.add(sp);
        }
        return newSet;
        });
    };

    // 非表示種を除いたデータ
    const filteredData = data.filter(d => !hiddenSpecies.has(d.species));

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${padding}, ${padding})`}>
                <Points
                    data={filteredData}
                    xScale={xScale}
                    yScale={yScale}
                    color={color}
                />
                <XAxis 
                    scale={xScale}
                    transform={`translate(${padding}, ${height - padding * 1.5})`}
                />
                <YAxis
                    scale={yScale}
                    transform={`translate(${padding}, 0)`}
                />
                <Legend 
                    species={speciesArray} 
                    color={color} 
                    hiddenSpecies={hiddenSpecies} 
                    toggleSpecies={toggleSpecies} 
                />
            </g>
        </svg>
    );
}