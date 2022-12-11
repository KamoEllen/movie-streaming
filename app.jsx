import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 'auto',
    maxWidth: '600px'
  },
  movieCover: {
    width: '100%',
    height: '400px',
    objectFit: 'cover'
  }
}));

const App = () => {
  const classes = useStyles();
  const movies = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      cover: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      title: 'The Godfather',
      cover: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      title: 'The Godfather: Part II',
      cover: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {movies.map(movie => (
          <Grid item xs={4} key={movie.id}>
            <Paper className={classes.paper}>
              <img src={movie.cover} alt={movie.title} className={classes.movieCover} />
              <h2>{movie.title}</h2>
              <Button
                variant="contained"
                color="primary"
                startIcon={<PlayCircleOutlineIcon />}
              >
                Play
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default App;
