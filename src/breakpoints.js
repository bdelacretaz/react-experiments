import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
}));

const tileData = [
  {
    title: "one",
  },
  {
    title: "two",
  },
]

function Breakpoints(props) {
  const classes = useStyles();
  const { width } = props;

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">Current width: {width}</Typography>
      <div className={classes.container}>
        <Hidden xsDown>
          <Paper className={classes.paper}>
            <h1>left nav</h1>
            {props.children}
          </Paper>
          <Paper className={classes.paper}>
            <img width="200px" src="https://bdelacretaz.files.wordpress.com/2019/10/170925_adaptto_4065-bertrand-delacretaz-cropped.jpg?w=490&h=600" />
            <div>
              <h1>An image</h1>
            </div>
          </Paper>
        </Hidden>
        <Hidden smUp>
          <Paper className={classes.paper}>
              <h1>Single column</h1>
              {props.children}
          </Paper>
        </Hidden>
      </div>
    </div>
  );
}

Breakpoints.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth() (Breakpoints);