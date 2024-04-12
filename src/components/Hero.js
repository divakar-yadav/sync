import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
import { Card, CardContent, Grid } from '@mui/material';
import RecipeReviewCard from '../components/card/Card'
import fraud from '../assets/fraud.png'


export default function Hero() {
  const cardsData = [
    { title: 'Network Optimization',img: require('../assets/network-optimization.png'), content: 'Using federated learning to improve signal coverage prediction for mobile networks by aggregating data from multiple service providers base stations without exchanging sensitive network information.' },
    { title: 'Smart Cities',img: require('../assets/smart-cities-technology.jpg'), content: ' Implementing federated learning to train models for traffic prediction, energy consumption optimization, and environmental monitoring while keeping data from different city sensors private.' },
    { title: 'Personalized Medicine',img: require('../assets/personlized medicine.png'), content: 'Developing models for disease prediction or treatment recommendation, For example, training models for cancer prediction using data from hospitals without sharing patient records.' },
    { title: 'Fraud Detection',img: require('../assets/fraud.png'), content: 'Building fraud detection models by leveraging customer transaction data from multiple banks without sharing individual transaction details, preserving customer privacy.' },
    { title: 'Customer Behavior Analysis',img: require('../assets/customer-behavior-analysis-A-guide-for-entrepreneurs-customer-behavior-analysis-–-1.png'), content: 'To train models for personalized product recommendations while ensuring that individual shopping history remains private and secure across various retail chains.' },
    { title: 'Collaborative Scientific Research',img: require('../assets/research-team-idc-report-cloud-faster-greener-collaborative-1200x600-1.jpg'), content: 'Utilizing federated learning to train models for image analysis by aggregating data from multiple research institutions without sharing proprietary datasets.' },
    // Add more data as needed
  ];

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)'
            : 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          alignItems="center"
          useFlexGap
          sx={{ width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            Currently&nbsp;Ongoing&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'inherit',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
               Projects
            </Typography>
          </Typography>


        </Stack>
        <Container
          container
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            flexWrap: 'wrap',
            mt: 10 
          }}
          spacing={1}
          >
              {cardsData.map((card, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} sx={{ p: { xs: 2, sm: 3 } }}  spacing={1}>
                  <RecipeReviewCard
                  title = {card.title}
                  content = {card.content}
                  img = { card.img}/>
                </Grid>
              ))}
          </Container>
          <Typography variant="caption" textAlign="center" sx={{ mt: 15 }}>
            By clicking &quot;Start Contributing&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ width: { sm: '100%', md: '80%' },mt: 5  }}
          >
            Contribute to our cutting-edge federated learning based projects and win rewards points
            Alternatevily you can to deploy your own federated learning based models.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button variant="contained" color="primary">
              Start Contributing
            </Button>
          </Stack>

      
        {/* <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundImage:
              theme.palette.mode === 'light'
                ? 'url("../assets/hero.png")'
                : 'url("../assets/hero.png")',
            backgroundSize: 'cover',
            borderRadius: '12px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? 'hsla(220, 25%, 80%, 0.5)'
                : 'hsla(210, 100%, 80%, 0.1)',
            boxShadow:
              theme.palette.mode === 'light'
                ? '0 0 12px 8px hsla(220, 25%, 80%, 0.2)'
                : '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
          })}
        /> */}
      </Container>
    </Box>
  );
}
