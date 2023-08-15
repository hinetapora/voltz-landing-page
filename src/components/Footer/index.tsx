import { AppBar, Stack, useTheme } from "@mui/material";
import { MenuButton } from "../Navbar";

const Footer = () => {
  const theme = useTheme();

  return (
    <AppBar
      elevation={0}
      sx={{
        position: "relative",
        bgcolor: "background.default",
        top: "auto",
        bottom: 0,
        [theme.breakpoints.up("sm")]: {
          position: "fixed",
        },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: "space-evenly", sm: "space-between" }}
        sx={{ px: 3, py: 0.3 }}
      >
        {/* Left */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <a href="https://discord.com/channels/1140888098327232516/1140888099413569701">
          <MenuButton>DISCORD</MenuButton>
          </a>
          <MenuButton>TWITTER</MenuButton>

          <MenuButton>STUDIO</MenuButton>
        </Stack>

        {/* Right */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <MenuButton>LITEPAPER</MenuButton>

          <MenuButton>T&CS</MenuButton>

          <MenuButton>JOBS</MenuButton>
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Footer;
