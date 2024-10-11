import React from 'react';
import { Grid, Typography, Container, Card, CardContent } from '@mui/material';

const categories = [
  { title: 'Bootstrap', courses: 35 },
  { title: 'Html', courses: 35 },
  { title: 'JQuery', courses: 35 },
  { title: 'Photoshop', courses: 35 },
  { title: 'UI/UX', courses: 35 },
  { title: 'React', courses: 35 },
];

const CategorySection = () => {
  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Explore Categories
      </Typography>
      <Grid container spacing={4}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: '#B7B7B7', textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h6" style={{fontWeight : "bold"}}>{category.title}</Typography>
                <Typography variant="body2" >{category.courses} Courses</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategorySection;
