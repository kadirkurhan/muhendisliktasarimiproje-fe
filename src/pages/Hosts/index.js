import React from "react";
import Card from "../../components/Card";
import { Grid } from "@chakra-ui/react";
import { useQuery } from "react-query";
function Hosts() {
  const { isLoading, error, data } = useQuery("hosts", () =>
    fetch("https://localhost:7069/api/gethostsleftmenufake").then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data);
  return (
    <div>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {data.map((item, key) => (
          <Card key={key} item={item}></Card>
        ))}
      </Grid>
    </div>
  );
}

export default Hosts;
