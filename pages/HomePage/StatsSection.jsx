import React from 'react';
import { Grid, Typography, Container, Paper } from '@mui/material';

const stats = [
  { title: '13,000+ Online Courses', description: 'Enjoy & Develop your skills' },
  { title: 'Expert Instructors', description: 'Learn Anytime, Anywhere' },
  { title: 'Life Time Access', description: 'Learn Anytime, Anywhere' },
  { title: '90% Student Success', description: 'Enjoy & Develop your skills' }
];

const StatsSection = () => {
  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3} style={{ padding: '16px', textAlign: 'center', borderRadius : "10px" }}>
              <Typography variant="h6"   style={{
                  fontFamily: '"Exo 2", sans-serif', // Set the font family here
                  fontWeight: 400,
                  fontStyle: 'normal',
                }}>{stat.title}</Typography>
              <Typography variant="body2"   style={{
                  fontFamily:'"Bebas Neue", sans-serif',  // Set the font family here
                  fontWeight: 400,
                  fontStyle: 'normal',
                }}>{stat.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StatsSection;
