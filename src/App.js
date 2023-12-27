import { Container, Typography } from '@mui/material';
import './App.css';


function App() {
  return (
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
      >hi there</Typography> 
  </Container>
  );
  

}

export default App;
