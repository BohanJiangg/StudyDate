import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import {Launcher} from 'react-chat-window'

import {
  Budget,
  TotalUsers,
  TasksProgress,

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

const Dashboard = (props) => {
  const classes = useStyles();
  console.log(props)
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={6}
          sm={6}
          xl={6}
          xs={12}
        >
          <Budget />
        </Grid>
        <Grid
          item
          lg={6}
          sm={6}
          xl={6}
          xs={12}
        >
          <TotalUsers />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TasksProgress />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <LatestProducts />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
        </Grid>
      </Grid>
      <Launcher
        agentProfile={{
          teamName: 'Chat with Sharon',
          imageUrl: '/images/avatars/avatar_chat.png'

        }}
        //onMessageWasSent={this._onMessageWasSent.bind(this)}
        //messageList={this.state.messageList}
        showEmoji
      />
    </div>
  );
};

export default Dashboard;
