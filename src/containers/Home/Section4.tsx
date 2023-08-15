import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import YieldCard from "@/src/components/cards/YieldCard";

const CARDS = [
  { title: "AAVE", coin: "USDC", fixed: 0.38, variable: 1.82 },
  { title: "AAVE", coin: "DAI", fixed: 0.14, variable: 0.87 },
  { title: "COMPOUND", coin: "DAI", fixed: 0.88, variable: 1.1 },
];

const Section4 = () => {
  return (
    <><Container maxWidth="md" sx={{ mt: 15 }}>
      <Typography variant="h4">OUR VPN SERVICE</Typography>

      <Typography
        sx={{ letterSpacing: "1.5px", maxWidth: 720 }}
        color="text.secondary"
      >
        🚀 Our VPN service, fueled by AI on-chain, is breaking ground - tailor-made to revolutionize your online journey.

        Imagine never worrying about slow tx, data leaks, or lack of privacy. That's what we're working on, and we need you on board.


      </Typography>






      {/*       <Grid container spacing={3} sx={{ mt: 3 }}>
            {CARDS.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <YieldCard {...item} />
              </Grid>
            ))}
          </Grid> */}
    </Container>
    
    <Container maxWidth="md" sx={{ mt: 15 }}>
        <Typography variant="h4"> 📈 MARKET LANDSCAPE AND OUR DAO📊</Typography>

        <Typography
          sx={{ letterSpacing: "1.5px", maxWidth: 720 }}
          color="text.secondary"
        >
          The Global VPN market cap was valued at $27 billion in 2020, with a projected CAGR of 16% over the next decade, reaching an astonishing $89 billion by 2033. With our AI-powered VPN, we're targeting a 5% market share - over $4 billion by 2028.

          🌐 $UNBLOCK isn't just an invite; it's an opportunity with a hint of FOMO. Don't miss the chance to be part of the revolution in online experiences. Together, let's shape a future where privacy, speed, and intelligence define our internet. #DeFi #Web3

          🔒 Secure your spot in the future of the internet. Join us now and ride the #Web3 waves of innovation 🚀🔥

        </Typography>

      </Container>
      
      
      
      
      
      
      </>



  );
};

export default Section4;
