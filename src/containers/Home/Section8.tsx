import DoorImg from "@/src/assets/images/sec7_door.svg";
import HomeTitle from "@/src/components/HomeTitle";
import { MenuButton } from "@/src/components/Navbar";
import useScrollPosition from "@/src/hooks/useScrollPosition";
import {
  Box,
  Container,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useRef } from "react";

const CARDS = [
  {
    title: "FIX TAKERS",
    subtitle:
      "Trading rates for fixed returns? Convert any asset with a variable rate into a fixed rate product.",
  },
  {
    title: "LIQUIDITY PROVIDER",
    subtitle:
      "Liquidity to invest? Deposit within your tick range, collect returns.",
  },
  {
    title: "VARIABLE TAKERS",
    subtitle:
      "Trading variable rates with leverage? Take variable, take alpha.",
  },
];

const DOORS = [
  {
    left: "22%",
    top: "52%",
  },
  { left: "31%", top: "72%" },
  { left: "35%", top: "45%" },
  { left: "42%", top: "38%" },
  { left: "52%", top: "51%" },
  { left: "59%", top: "83%" },
  { left: "64%", top: "60%" },
];

const StyledDoor = styled(Image)<{ skew: number }>(({ skew }) => ({
  position: "absolute",
  zIndex: -1,
  willChange: "transform",
  transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, ${skew}deg)`,
}));

const Section8 = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollPosition = useScrollPosition(containerRef);
  const theme = useTheme();

  const _skew = (scrollPosition - 400) / 8;
  const skew = _skew < -50 ? -50 : _skew > 0 ? 0 : _skew;

  return (
    <Container ref={containerRef} maxWidth="md" sx={{ mt: 20 }}>
      <Stack
        alignItems="center"
        sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}
      >
        <HomeTitle sx={{ mb: 1.5 }} color={theme.palette.primary.contrastText}>
          THE PLAYGROUND
        </HomeTitle>

        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Build on Voltz
        </Typography>

        <Typography
          sx={{ letterSpacing: "1.5px", maxWidth: 720 }}
          color="text.secondary"
        >
          Join a growing community of hackers, innovators and developers
          building on Voltz. Join us, let's make a dent in the defi universe.
        </Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={{ xs: 1, sm: 3, md: 5, lg: 8 }}
      >
        <MenuButton sx={{ fontSize: 16 }}>DEVELOPER DOCS</MenuButton>

        <MenuButton sx={{ fontSize: 16 }}>VOLTZ DOCS</MenuButton>
      </Stack>

      {/* Doors BG */}
    </Container>
  );
};

export default Section8;
