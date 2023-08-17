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
          <a href="https://discord.gg/E8qRP5yq">
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
          <a href="https://discord.gg/E8qRP5yq">
          <MenuButton>LITEPAPER</MenuButton>
          </a>
          <a href="https://discord.gg/E8qRP5yq">
          <MenuButton>T&CS</MenuButton>
          </a>
          <a href="https://discord.gg/E8qRP5yq">
          <MenuButton>JOBS</MenuButton>
          </a>
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Footer;
