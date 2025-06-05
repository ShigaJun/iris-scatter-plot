import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function YAxis({ scale, transform }) {
  const axisRef = useRef();

  useEffect(() => {
    const axis = d3.axisLeft(scale).ticks(12);;
    d3.select(axisRef.current).call(axis);
  }, [scale]);

  return (
    <g ref={axisRef} transform={transform} />
  );
};
