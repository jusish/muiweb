import * as React from "react";
import SideBar from "./components/sideBar";
import RightBar from "./components/rightBar";
import Feed from "./components/Feed";
import { Box, Stack } from "@mui/material";
import Navbar from "./components/NavBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ColorModeContext from "./components/ColorModeContext";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode: handleModeChange }}>
      <ThemeProvider theme={theme}>
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
    </ColorModeContext.Provider>
  );
}

export default App;
