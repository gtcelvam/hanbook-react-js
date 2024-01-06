import { useEffect, useRef } from "react";
import drawChart from "../../Helpers/drawChart";

export default function D3Component() {
  const parentRef = useRef(null);

  useEffect(() => {
    drawChart(parentRef);
  }, []);

  return <div ref={parentRef}></div>;
}
