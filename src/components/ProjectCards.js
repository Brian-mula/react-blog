import {
  Card,
  CardHeader,
  Avatar,
  makeStyles,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import React from "react";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
  },
  cardcontent: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
  },
}));
function ProjectCards({ project }) {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {project.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <DeleteOutlineIcon />
          </IconButton>
        }
        title={project.name}
        subheader={project.price}
      />
      <CardMedia component="img" image={project.image} />
      <CardContent className={classes.cardcontent}>
        <Typography variant="body2">{project.plandate}</Typography>
        <Typography variant="body2">{project.duedate}</Typography>
      </CardContent>
    </Card>
  );
}

export default ProjectCards;
