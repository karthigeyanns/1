import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import './home.css'


const Home = () => {
  return (
    <div className='cont'>
      {/* App Bar */}
      <header className="header">
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
          <a href="signin">Login</a>
        </nav>
      </header>

      {/* Main Content */}
      <Container >
        <Box sx={{ height: '85vh',  display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
             <div>
            <Typography variant="h2" component="h1" gutterBottom className="co">
              Welcome to Seedling
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
                
            </Typography>
            <Button variant="contained" color="primary" size="large" sx={{ marginTop: 4 }}>
              Learn More
            </Button>

          </div>
        </Box>
      </Container>

      {/* Footer */}
      <div className='footar'>
        <h3  className="helo" style={{marginLeft:'85vw', color:'smokedwhite'}}>Copyrights</h3>
      </div>

    </div>
  );
};

export default Home;