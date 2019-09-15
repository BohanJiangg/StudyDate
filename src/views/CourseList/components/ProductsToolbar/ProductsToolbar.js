import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
<<<<<<< HEAD:src/views/CourseList/components/ProductsToolbar/ProductsToolbar.js
import { Button, Typography } from '@material-ui/core';
=======
import { Button } from '@material-ui/core';
import { IconButton, Grid, Typography } from '@material-ui/core';
>>>>>>> e8dca42af7545abfb062c88fbdf84fa4f60e7c10:src/views/ProductList/components/ProductsToolbar/ProductsToolbar.js

import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const ProductsToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <Typography variant="h4">Courses</Typography>
        <span className={classes.spacer} />
        <Button
          color="primary"
          variant="contained"
        >
          Add Course
        </Button>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search Course"
        />
      </div>
    </div>
  );
};

ProductsToolbar.propTypes = {
  className: PropTypes.string
};

export default ProductsToolbar;
