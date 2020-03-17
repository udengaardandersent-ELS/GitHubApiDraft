import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {StarBorderRounded,VisibilityRounded} from '@material-ui/icons';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize:'3rem',
    marginBottom: 3

  },
  description:{

  },
  pos: {
    marginBottom: 8
  },
});

export default function OutlinedCard({repository}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} component="h2" gutterBottom>
          {repository.name}
        </Typography>
        <Typography component="p" color="textSecondary" className={classes.description}>
          {repository.description}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" >
          Repo Link: <a target="_blank" href={repository.url}>{repository.url}</a>
        </Typography>
      </CardContent>
      <CardActions>
        <Typography className={classes.pos} color="textSecondary" >
            <IconButton component={StarBorderRounded} />{repository.stargazers.totalCount}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" >
        <IconButton component={VisibilityRounded} />{repository.watchers.totalCount}
        </Typography>
        
      </CardActions>
    </Card>
  );
}