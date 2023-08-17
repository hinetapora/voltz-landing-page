import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import YieldCard from "@/src/components/cards/YieldCard";



const Section6 = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 15 }}>
      <Typography variant="h4">
        <Typography variant="h4" component="span" color="primary.light">
          TOKEN
        </Typography>{" "}
        ECONOMICS
      </Typography>

      <Typography
        sx={{ letterSpacing: "1.5px", maxWidth: 720 }}
        color="text.secondary"
      >
        🌐 Our AI based VPN isn't just smart, it's visionary. 
        It dynamically stakes capacity, adding more nodes and links to enhance throughput across the network matching supply to demand points in real time.
        This means not only superior internet speeds for you but also AI determined economic efficiency. 
        And here's the alpha: the $UNBLOCK token rewards are burnt creating a deflationary token reducing token supply as the network grows.
      </Typography>
    </Container>
  );
};

export default Section6;
