import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
}));

const Test = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          flexDirection="row"
          justify="space-between"
        >

          <Grid >
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              RESUME COURSES
            </Typography>
            <center>
            <Typography variant="h3" style={{marginBottom:3}}>Intro to Financial Accounting</Typography>
            <img height="20%" 
            width="20%" src='/images/Courses/finance.jpg'/>
            <Typography variant="h3" style={{marginBottom:3}}>Computer Systems and Hardware</Typography>
            <img height="20%" 
            width="20%" src='/images/Courses/computer_hardware.jpeg'/>
            <Typography variant="h3" style={{marginBottom:3}}>Urban Studies and Policy</Typography>
            <img height="20%" 
            width="20%" src='/images/Courses/urban_studies.jpeg'/>
            <Typography variant="h3" style={{marginBottom:3}}>Portuguese Literature</Typography>
            <img height="20%" 
            width="20%" src='/images/Courses/portuguese_lit.jpeg'/>
            </center>
            <Typography variant="h3"></Typography>

          </Grid>
          
        </Grid>
        <div className={classes.difference}>
         
          <Typography
            className={classes.differenceValue}
            variant="body2"
          
          >
            
          </Typography>
         
            
         
          
        </div>
      </CardContent>
    </Card>
  );
};

Test.propTypes = {
  className: PropTypes.string
};

export default Test;
