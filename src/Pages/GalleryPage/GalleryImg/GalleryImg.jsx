
import InfiniteScroll from 'react-infinite-scroll-component';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import axios from 'axios';
import { Grid, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const InfiniteImageScroll = () => {
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await axios.get('https://fitness-house-server-xi.vercel.app/image');

       
        setImages(response.data.slice(0, 12));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching image data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchMoreImages = async () => {
    try {
     
      const response = await axios.get('https://fitness-house-server-xi.vercel.app/image');

     
      if (images.length + response.data.length >= 30) {
        setHasMore(false);
      }

      
      setImages((prevImages) => [...prevImages, ...response.data]);
    } catch (error) {
      console.error('Error fetching more image data:', error);
    }
  };

  return (
    <>
   <Helmet>
        <title>Vitality Vault || Gallery</title>
      </Helmet>
    <InfiniteScroll
    dataLength={images.length}
    next={fetchMoreImages}
    hasMore={hasMore}
    loader={<CircularProgress key={0} />}
    >
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <LazyLoadImage
              alt={`Image ${index}`}
              height="200"
              src={image.url} 
              effect="opacity"
              threshold={100}
              style={{ transition: 'opacity 0.5s' }}
              onLoad={() => setLoading(false)}
            />
            {loading && (
              <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
                Loading...
              </Typography>
            )}
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
    </>
  );
};

export default InfiniteImageScroll;
