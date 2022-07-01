import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchHost } from "../../api/api";
import CpuChart from "../../components/Charts/CpuChart";
import DiskChart from "../../components/Charts/DiskChart";
import RamChart from "../../components/Charts/RamChart";
function HostDetail() {
  const { hostid } = useParams();
  const { data, isLoading, isError } = useQuery(
    "host",
    async () => await fetchHost(hostid),
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
    <div>
      <CpuChart />
      <DiskChart />
      <RamChart />
    </div>
  );
}

export default HostDetail;
