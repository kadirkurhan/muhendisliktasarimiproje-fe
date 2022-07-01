import axios from "axios";
export const fetchHostList = () => {
  return fetch("https://localhost:7069/api/gethostsleftmenufake").then((res) =>
    res.json()
  );
};

// export const fetchHost = async (hostid) => {
//   const { data } = await axios.get(
//     `https://localhost:7069/api/gethostlastdatabyid/${hostid}`
//   );

//   return data;
// };
export const fetchHost = async (hostid) => {
  const { data } = await axios.get(
    `https://localhost:7069/api/gethostlastdatabyid?id=${hostid}`
  );
  return data;
};

export const fetchHostCpuLast10Record = async (hostid) => {
  const { data } = await axios.get(
    `https://localhost:7069/api/GetHostCpuStatsById?id=${hostid}`
  );
  return data;
};

export const fetchHostDiskLast10Record = async (hostid) => {
  const { data } = await axios.get(
    `https://localhost:7069/api/GetHostDiskStatsById?id=${hostid}`
  );
  return data;
};

export const fetchHostRamLast10Record = async (hostid) => {
  const { data } = await axios.get(
    `https://localhost:7069/api/GetHostRamStatsById?id=${hostid}`
  );
  return data;
};
