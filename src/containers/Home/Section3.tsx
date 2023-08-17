import HomeTitle from "@/src/components/HomeTitle";
import React from "react";
import { Stack, Container, Typography } from "@mui/material";

type StatProps = {
  title: string;
  subtitle: string;
};

const Stat: React.FC<StatProps> = ({ title, subtitle }) => (
  <Stack alignItems="center" >
    <Typography variant="h3">{title}</Typography>
    <Typography color="primary.light" variant="body2">
      {subtitle}
    </Typography>
  </Stack>
);

const Section3 = () => {
  return (
    <>
    
    <Container maxWidth="md" id="section-2">
              <Typography variant="h2" color='#0f0c1d' sx={{ fontWeight: "bold", mb: 5 }}>
           .
        </Typography>
    </Container>
    
    <Container maxWidth="md" >
      <Stack alignItems="center" sx={{ textAlign: "center" }}>
        <HomeTitle sx={{ mb: 1.5 }}>THE PROTOCOL</HomeTitle>

        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Decentralized. Synthetic. Efficient.
        </Typography>

        <Typography sx={{ letterSpacing: "1.5px" }} color="text.secondary">
        🌐🚀 $$UNBLK: Shape Tomorrow's Web3.0 with Us: decentralized, private, and optimized web
        
         JOIN our DAO in a venture that's rewriting the online rulebook. It's not just a dApp; it's a chance to hodl your spot in the evolution of an unblocked web.

 </Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        spacing={2}
        sx={{ mt: 3 }}
      >
        <Stat title="nx 100Gbps" subtitle="CORE INTERFACES" />
        <Stat title="157" subtitle="COUNTRIES AND CLIMBING" />
        <Stat title="NG DNS" subtitle="BYPASSING COMMERCIAL BLOCKS" />
      </Stack>
    </Container>
    </>
  );
};

export default Section3;
