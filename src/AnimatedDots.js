// AnimatedDots.js
import React from 'react';
import { Box } from '@mui/material';
import './AnimatedDots.css';

const AnimatedDots = () => {
  return (
    <Box className="dot-container">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </Box>
  );
};

export default AnimatedDots;
