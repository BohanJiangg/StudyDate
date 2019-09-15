import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const CourseInterests = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    gradYear: '2022',
    major: 'Computer Science',
    secondMajor: 'Molecular and Cell Biology',
    currentSchool: 'Wellesley College',
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const states = [
    {
      value: 'wellesley-college',
      label: 'Wellesley College'
    },
    {
      value: 'ucb',
      label: 'University of California Berkeley'
    },
    {
      value: 'western',
      label: 'Western'
    }
  ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          title="Course Interests Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
            >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Major"
                margin="dense"
                name="major"
                onChange={handleChange}
                required
                value={values.major}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Second Major (optional)"
                margin="dense"
                name="secondMajor"
                onChange={handleChange}
                required
                value={values.secondMajor}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                // helperText="Current University"
                label="Grad Year"
                margin="dense"
                name="gradYear"
                onChange={handleChange}
                required
                value={values.gradYear}
                variant="outlined"
              />
            </Grid>
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid> */}
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                margin="dense"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid> */}
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select School/Bootcamp"
                margin="dense"
                name="currentSchool"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.currentSchool}
                variant="outlined"
              >
                {states.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Typography>What area have you had most experience with?</Typography>
            </Grid>
              <TextField
                fullWidth
                // helperText="Current University"
                label=""
                margin="dense"
                // name="gradYear"
                onChange={handleChange}
                required
                // value={values.gradYear}
                variant="outlined"
              />
            <Button
              color="primary"
              variant="contained"
              >
              Data Science
            </Button>
            <p style={{marginRight:2}}></p>
            <Button
              color="primary"
              variant="contained"
              >
              Finance
            </Button>
            <p style={{marginRight:2}}></p>
            <Button
              color="primary"
              variant="contained"
              >
              Machine Learning
            </Button>
            <p style={{marginRight:2}}></p>
            <Button
              color="primary"
              variant="contained"
              >
              Product Design
            </Button>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

CourseInterests.propTypes = {
  className: PropTypes.string
};

export default CourseInterests;
