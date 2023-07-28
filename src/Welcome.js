import React from 'react'
import { Card, Box, Typography, styled } from "@mui/material";

const StyledCard = styled(Card)`
  width:200px;
  height:auto;
  margin:20px;
`;
const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;
const SubContainer=styled(Box)`

`;

const Welcome = () => {
  return (
    <div>
        <h1>Welcome to page</h1>
        <StyledCard>
      <Box
        textAlign="center"
        style={{ padding: "25px 15px", marginBottom: "10px" }}
      >
        {/* <Image alt="Movie Poster" src={item.posterurl} /> */}
        <SubContainer >
          <Text style={{ fontWeight: 600, color: "#212121" }}>
            HAnji kya haal chal
          </Text>
          <Text style={{ color: "green" }}>
            Release Date:apne ko kya lena dena
          </Text>
          <Text style={{ color: "#212121", opacity: ".6" }}>
            IMDB Rating 10/10
          </Text>
        </SubContainer>
      </Box>
    </StyledCard>
        
    </div>
  )
}

export default Welcome;