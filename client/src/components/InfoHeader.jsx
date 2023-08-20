import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  background: "#f44336",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 10,
  paddingBottom: 10,
  marginBottom: 30,
  [theme.breakpoints.down('md')]:{
    display: 'none'
  }
}));

function InfoHeader() {
  return (
    <Container>
      <Typography style={{ fontSize: "20px" }}>
        Newsly give you the short and genuine news
      </Typography>
    </Container>
  );
}

export default InfoHeader;
