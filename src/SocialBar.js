// SocialBar.js
import React from 'react';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const useStyles = makeStyles((theme) => ({
  socialBar: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  icon: {
    fontSize: 30,
    margin: theme.spacing(1),
  },
}));

const SocialBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.socialBar}>
      <IconButton color="inherit" className={classes.icon}>
        <GitHubIcon />
      </IconButton>
      <IconButton color="inherit" className={classes.icon}>
        <LinkedInIcon />
      </IconButton>
      <IconButton color="inherit" className={classes.icon}>
        <TwitterIcon />
      </IconButton>
      <IconButton color="inherit" className={classes.icon}>
        <InstagramIcon />
      </IconButton>
    </div>
  );
};

export default SocialBar;
