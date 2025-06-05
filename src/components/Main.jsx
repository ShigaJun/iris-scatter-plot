import { useEffect, useState } from "react";
import { fetchIris } from "../api";
import convertData from "../convertData"
import createScale from "../createScale";
import Dropdown from "./Dropdown";
import ScatterPlot from "./ScatterPlot";

export default function Main() {
    const [irisData, setIrisData] = useState(null);
    const [xProperty, setXAxis] = useState("sepal length");
    const [yProperty, setYAxis] = useState("sepal width");

    useEffect(() => {
        fetchIris().then((irisData) => {
            setIrisData(irisData);
        });
    }, []);

    if (!irisData) return <div>Loading...</div>;

    const rangeMax = 400
    const xRange = [0, rangeMax]
    const yRange = [rangeMax, 0]

    const data = convertData(irisData, xProperty, yProperty);

    const xScale = createScale(data, "x", xRange)
    const yScale = createScale(data, "y", yRange)

    return (
        <div>
            <Dropdown
                setXAxis={setXAxis}
                setYAxis={setYAxis}
            />
            <ScatterPlot 
                data={data} 
                xScale={xScale} 
                yScale={yScale} 
            />
        </div>
    );
}
