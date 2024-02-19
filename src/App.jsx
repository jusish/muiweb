import SideBar from "./components/sideBar";
import RightBar from "./components/rightBar";
import Feed from "./components/Feed";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Stack justifyContent={"space-between"} spacing={2} direction={"row"}>
        <RightBar />
        <Feed />
        <SideBar />
      </Stack>
    </Box>
  );
}

export default App;
