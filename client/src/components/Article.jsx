import styled from "@emotion/styled";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const CardBox = styled(Card)`
  margin: 0 300px 20px;
  box-shadow: 0 2px 5px rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
`;

const Container = styled(CardContent)`
  padding: 8px;
  padding-bottom: 4px !important;
`;

const Image = styled("img")({
  height: 268,
  width: "88%",
  objectFit: "cover",
  borderRadius: "5px",
});

const Text = styled(Typography)`
  font-weight: 300;
  font-size: 22px;
  color: #444;
  line-height: 27px;
`;

const RightContainer = styled(Grid)`
  margin: 5px 0 0 -25px;
  display: flex;
  flex-direction: column;
`;

const Author = styled(Typography)`
  color: #808290;
  font-size: 12px;
  line-height: 22px;
`;

const Description = styled(Typography)`
    line-height: 22px;
    color: #44444d;
    margin-top: 10px;
`

const Publisher = styled(Typography)`
    font-size: 12px;
    margin-top: auto;
    margin-bottom: 3px;
`

const Article = ({ data }) => {
  return (
    <CardBox>
      <Container>
        <Grid container>
          <Grid lg={5} sm={5} xs={12} item>
            <Image src={data.url} alt="" />
          </Grid>
          <RightContainer lg={7} md={7} sm={7} xs={12} item>
            <Text>{data.title}</Text>
            <Author>
              <b>short </b>by {data.author}/ 
              {new Date(data.timestamp).toDateString()};
            </Author>
            <Description>{data.description}</Description>
            <Publisher>
              read more at 
              <a style={{marginLeft: 5 , textDecoration: 'none', color: '#000'}} href={data.link} target="_blank">
                {data.publisher}
              </a>
            </Publisher>
          </RightContainer>
        </Grid>
      </Container>
    </CardBox>
  );
};

export default Article;
