import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
function Card({ item }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to={`/host/${item.id}`}>
        <Image
          loading="lazy"
          ml={3}
          w="100px"
          alt="host"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Finder_Icon_macOS_Big_Sur.png/800px-Finder_Icon_macOS_Big_Sur.png"
        ></Image>
        <Box p="6">
          <Box d="plex" alignItems="baseline">
            {moment.unix(item.updateDate).format("h:mm:ss")}
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {item.hostid}
          </Box>
          <Box>
            <Text
              fontWeight={"bold"}
              color={item.status ? "green.500" : "red.500"}
            >
              {item.status ? "Online" : "Offline"}
            </Text>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}

export default Card;
