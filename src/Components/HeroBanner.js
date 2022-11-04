import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/new.jpg";

const HeroBanner = () => {
  return (
    <div>
      <Box
        sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
        position="relative"
        p="20px"
      >
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
          Fitness Club
        </Typography>

        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          mb="23px"
          mt="30px"
        >
          Sweat, Smile <br />
          And Repeat
        </Typography>

        <Typography
          fontSize="22px"
          fontFamily="Alegreya"
          lineHeight="35px"
          mb={4}
        >
          Check out the most effective exercises personalized to you
        </Typography>
        <Button
          variant="contained"
          color="warning"
          href="#exercises"
          padding="10px"
        >
          Explore Excersices
        </Button>
        <Typography
          fontWeight={600}
          color="#FF2625"
          sx={{
            opacity: "0.1",
            display: { lg: "block", xs: "none" },
            fontSize: "200px",
          }}
        >
          Excersices
        </Typography>
        <img
          src={HeroBannerImage}
          alt="hero-banner"
          className="hero-banner-img"
        />
      </Box>
    </div>
  );
};

export default HeroBanner;
