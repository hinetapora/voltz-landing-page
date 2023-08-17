import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import YieldCard from "@/src/components/cards/YieldCard";

const CARDS = [
  { title: "LIDO", coin: "ETH", fixed: 4.49, variable: 4.46 },
  { title: "ROCKET", coin: "ETH", fixed: 4.26, variable: 4.2 },
];

const Section5 = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 15 }}>
      <Typography variant="h4">$$UNBLK TOKEN</Typography>

      <Typography
        sx={{ letterSpacing: "1.5px", maxWidth: 720 }}
        color="text.secondary"
      >
        🔥 We're not just another token; we're leading the decentralized charge for a better internet. 
        Our VPN is powered by cutting-edge AI delivering lowest path cost routing, constantly optimizing the network for maximum throughput and lowest latency. 
        Your privacy remains immutable. We never log traffic, period. And we never will.

      </Typography>
    </Container>
  );
};

export default Section5;
