import { useEffect, useState } from "react";
import { fetchIris } from "../api";
import Dropdown from "./Dropdown";
// import ScatterPlot from "./ScatterPlot";

export default function Main() {
    const [irisData, setIrisData] = useState(null);
    const [xAxis, setXAxis] = useState("sepal length");
    const [yAxis, setYAxis] = useState("sepal width");

    useEffect(() => {
        fetchIris().then((irisData) => {
            setIrisData(irisData);
        });
    }, []);

    return (
        <div>
            <Dropdown setXAxis={setXAxis} setYAxis={setYAxis}/>
            {/* <ScatterPlot /> */}
        </div>
    );
}
