
import { Container, Grid, Typography, Link } from '@mui/material';
import WebTitle from '../WebTitle/WebTitle';


const Footer = () => {
  return (
    <Container component="footer" maxWidth="xl" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#333', color: '#fff' }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          {/* Gym Logo */}
          {/* <FitnessCenterIcon style={{ fontSize: 40, marginBottom: '10px' }} /> */}
          <Typography variant="h6" component="div">
           <WebTitle></WebTitle>
           <div className="avatar">
                        <div className="w-24 rounded-full">
                        <img src="https://i.ibb.co/7NXm26S/gym.jpg" alt="" />
                        </div>
                        </div>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {/* Additional Section 1 */}
          <Typography variant="subtitle1" component="div">
            <Link href="#">About Us</Link>
          </Typography>
          <Typography variant="subtitle1" component="div">
            <Link href="#">Services</Link>
          </Typography>
          {/* Add more sections as needed */}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {/* Additional Section 2 */}
          <Typography variant="subtitle1" component="div">
            <Link href="#">Contact Us</Link>
          </Typography>
          <Typography variant="subtitle1" component="div">
            <Link href="#">Membership</Link>
          </Typography>
          {/* Add more sections as needed */}
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" color="inherit" style={{ marginTop: '20px' }}>
        © {new Date().getFullYear()}<WebTitle></WebTitle>. All rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
