import SideBar from "./components/sideBar";
import RightBar from "./components/rightBar";
import Feed from "./components/Feed";
import { Box, Stack } from "@mui/material";
import Navbar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ margin: 0 }}>
        <Navbar />
        <Stack justifyContent={"space-center"} direction={"row"}>
          <SideBar />
          <Feed />
          <RightBar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
