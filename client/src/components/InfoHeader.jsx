import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Container = styled(Box)`
  background: #f44336;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

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
