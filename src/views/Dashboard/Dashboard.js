import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  Budget,
  TotalUsers,
  TasksProgress,
  Test,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={10}
          sm={10}
          xl={10}
          xs={12}
        >
          <Test /> 
        </Grid>
        <Grid
          item
          lg={10}
          sm={10}
          xl={10}
          xs={12}
        >
          <TotalUsers />
        </Grid>
        <Grid
          item
          lg={10}
          sm={10}
          xl={10}
          xs={12}
        >
          <TasksProgress />
        </Grid> 
      </Grid>
    </div>
  );
};

export default Dashboard;
