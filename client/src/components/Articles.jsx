import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { getNews } from "../service/api";

function Articles() {
  useEffect(() => {
    dailyNews();
  }, []);

  const dailyNews = async () => {
    let response = await getNews();
  };

  return <Box>This is the box</Box>;
}

export default Articles;
