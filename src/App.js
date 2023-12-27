import { Container, Typography } from '@mui/material';
import './App.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';



function App() {
  return (
    <>
    <Container 
      sx={{ 
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "beige"
      }}>
    <Typography 
      sx={{
        width: "fit-content",
        py: 2,
        px: 6,
        bgcolor: "#1C1C1E",
        color: "white",
        borderRadius: "8px",
        fontSize: "2rem",
        ":hover": {bgcolor: "darkgrey"}
      }}
      >hi, kura here ..</Typography> 
      
  </Container>
 
      <SocialBar />
    
  </>
  );
  

}

function SocialBar() {
  const iconColor = "#1C1C1E";
  return (
    <div
    style={{
      position: 'fixed',
      bottom: '16px', // Adjust the distance from the bottom
      right: '16px', // Adjust the distance from the right
      display: 'flex',
    }}>
    <a href="https://github.com/kurax2" target="_blank" rel="noopener noreferrer">
    <IconButton sx={{color: iconColor}} aria-label="GitHub">
      <GitHubIcon />
      </IconButton>
    </a>
   
    <a href="https://www.linkedin.com/in/dani-wahid-033675147/" target="_blank" rel="noopener noreferrer"> 
    <IconButton sx={{color: iconColor}} aria-label="LinkedIn">
      <LinkedInIcon />
    </IconButton>
    </a>
    <a href="https://www.instagram.com/kurax2_/" target="_blank" rel="noopener noreferrer">
    <IconButton sx={{color: iconColor}} aria-label="Twitter">
      <TwitterIcon />
    </IconButton>
    </a>
    <a href="https://www.instagram.com/kurax2_/" target="_blank" rel="noopener noreferrer">
    <IconButton sx={{color: iconColor}} aria-label="Instagram">
      <InstagramIcon />
    </IconButton>
    </a>
    
  </div>
    
  );
};

export default App;
