import SideBar from "./components/sideBar";
import RightBar from "./components/rightBar";
import Feed from "./components/Feed";
import { Box, Stack } from "@mui/material";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack justifyContent={"space-between"} spacing={0.5} direction={"row"}>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
