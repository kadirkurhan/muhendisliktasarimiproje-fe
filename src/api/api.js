export const fetchHostList = () => {
  return fetch("https://localhost:7069/api/gethostsleftmenufake").then((res) =>
    res.json()
  );
};
