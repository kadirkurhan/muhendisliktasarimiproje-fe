import React from "react";
import Plot from "react-plotly.js";
import { fetchHostRamLast10Record } from "../../../api/api";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

function RamChart() {
  const { hostid } = useParams();
  const { data, isLoading, isError } = useQuery(
    "hostram",
    async () => await fetchHostRamLast10Record(hostid),
    {
      fetchPolicy: "network-only",
      refetchInterval: 3000,
    }
  );
  if (isLoading) {
    return <div>Loading..</div>;
  }
  if (isError) {
    return <div>Error!</div>;
  }
  console.log(data);
  if (!data) {
    return <div>Null!</div>;
  }
  return (
    <Plot
      data={[
        {
          x: ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10"],
          y: data,
          type: "scatter",
          mode: "lines",
          marker: { color: "red" },
        },
        { type: "scatter" },
      ]}
      layout={{ width: 750, height: 300, title: "RAM" }}
    />
  );
}

export default RamChart;
