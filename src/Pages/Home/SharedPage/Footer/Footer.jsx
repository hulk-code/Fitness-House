
import { Container, Grid, Typography, Link } from '@mui/material';
import WebTitle from '../WebTitle/WebTitle';


const Footer = () => {
  return (
    <Container component="footer" maxWidth="xl" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#333', color: '#fff' }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          
          
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
       
          <Typography variant="subtitle1" component="div">
            <Link href="#">About Us</Link>
          </Typography>
          <Typography variant="subtitle1" component="div">
            <Link href="#">Services</Link>
          </Typography>
        
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          
          <Typography variant="subtitle1" component="div">
            <Link href="#">Contact Us</Link>
          </Typography>
          <Typography variant="subtitle1" component="div">
            <Link href="#">Membership</Link>
          </Typography>
         
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" color="inherit" style={{ marginTop: '20px' }}>
        © {new Date().getFullYear()}<WebTitle></WebTitle>. All rights reserved.
      </Typography>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
    </Container>

  );
};

export default Footer;
