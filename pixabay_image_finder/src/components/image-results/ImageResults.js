import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ImageResults = ({ images }) => {
  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {images.map((img) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={img.id}>
          <Card elevation={3}>
            <CardMedia
              component="img"
              height="200"
              image={img.largeImageURL}
              alt={img.tags}
              sx={{ objectFit: 'cover' }}
            />
            <CardActions sx={{ justifyContent: 'space-between', px: 2 }}>
              <Typography variant="body2" color="text.secondary">
                by {img.user}
              </Typography>
              <Button
                size="small"
                href={img.largeImageURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageResults;