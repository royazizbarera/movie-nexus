import React from 'react';
import { Box, Rating, Stack, Typography } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      // border="1px solid #e0e0e0"
      sx={{    
        marginY: {
          xs: '1rem', 
          sm: '1.5rem', 
          md: '2rem', 
          lg: '2.5rem', 
          xl: '3rem' 
        },
        marginX: {
          xs: '1rem', 
          sm: '4rem', 
          md: '8rem', 
          lg: '10rem', 
          xl: '12rem' 
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        padding={2}
        // border="1px solid #e0e0e0"
        // borderRadius="8px"
      >
        {/* Placeholder untuk gambar */}
        <Box
          width="300px"
          height="400px"
          bgcolor="#A35656"
          borderRadius="8px"
          marginRight={2}
        />

        {/* Informasi Drama */}
        <Box flex="1" textAlign="left">
          <Typography variant="h6" fontWeight="bold">
            Title of the drama 1 that makes two lines
          </Typography>
          <Typography variant="body2"  gutterBottom>
            Other titles: Title 2, Title 3, Title 4
          </Typography>
          <Typography variant="body2" >
            Year: Spring 2024
          </Typography>
          <Typography variant="body2"  paragraph>
            Synopsis sometimes unhelpful. I don’t read it thoroughly. But what
            helps me is the genres. I need to see genres and actors. That is
            what I want.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Genre 1, Genre 2, Genre 3
          </Typography>
          <Typography variant="body2" gutterBottom>
            Rating: 3.5/5
          </Typography>
          <Typography variant="body2">
            Availability: Fansub: @aoisub on X
          </Typography>
        </Box>
      </Box>
      <ActorList />
      <ReviewSection />
    </Box>
  );
}

const ActorList = () => {
  const actors = [
    "Actor 1",
    "Actor 2",
    "Actor 3",
    "Actor 4",
    "Actor 5",
    "Actor 6",
    "Actor 7",
    "Actor 8",
    "Actor 9",
    "Actor 10",
    "Actor 11",
    "Actor 12",
    "Actor 1",
    "Actor 2",
    "Actor 3",
    "Actor 4",
    "Actor 5",
    "Actor 6",
    "Actor 7",
    "Actor 8",
    "Actor 9",
    "Actor 10",
    "Actor 11",
    "Actor 12",
    "Actor 1",
    "Actor 2",
    "Actor 3",
    "Actor 4",
    "Actor 5",
    "Actor 6",
    "Actor 7",
    "Actor 8",
    "Actor 9",
    "Actor 10",
    "Actor 11",
    "Actor 12",
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'scroll',
        padding: '1rem',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        scrollbarWidth: 'none', // For Firefox
      }}
    >
      <Stack direction="row" spacing={2}>
        {actors.map((actor, index) => (
          <Box key={index} textAlign="center">
            <Box
              width="80px"
              height="120px"
              bgcolor="#A35656"
              borderRadius="8px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={1}
            />
            <Typography variant="body2">{actor}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};


const ReviewSection = () => {
  const reviews = [
    {
      user: 'Nara',
      date: '4/4/2014',
      rating: 5,
      comment: 'It is a wonderful drama! I Love it so much!!!!',
    },
    {
      user: 'Nara',
      date: '4/4/2014',
      rating: 5,
      comment: 'It is a wonderful drama! I Love it so much!!!!',
    },
    {
      user: 'Nara',
      date: '4/4/2014',
      rating: 4,
      comment: 'It is a wonderful drama! I Love it so much!!!!',
    },
    {
      user: 'Nara',
      date: '4/4/2014',
      rating: 5,
      comment: 'It is a wonderful drama! I Love it so much!!!!',
    },
  ];

  return (
    <Box padding={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1">
          ({reviews.length}) People think about this drama
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" marginRight={1}>
            Filtered by:
          </Typography>
          <Rating value={4.5} precision={0.5} readOnly />
        </Box>
      </Box>

      {/* Daftar Ulasan */}
      <Box mt={2}>
        {reviews.map((review, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="flex-start"
            paddingY={1}
            borderBottom="1px solid #e0e0e0"
          >
            <Box
              width="40px"
              height="40px"
              bgcolor="#941B1B"
              borderRadius="50%"
              marginRight={2}
            />
            <Box flex="1" textAlign={"left"}>
              <Typography variant="body2" fontWeight="bold">
                {review.user} ({review.date}) said:
              </Typography>
              <Rating value={review.rating} size="small" readOnly />
              <Typography variant="body2">{review.comment}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};


export default Home;