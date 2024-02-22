import { Box } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <Box
      flexGrow={4}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      gap={5}
    >
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
