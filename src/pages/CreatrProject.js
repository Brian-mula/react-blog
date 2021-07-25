import {
  Avatar,
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paperstyle: {
    height: "auto",
    width: 350,
    margin: "20px auto",
    padding: 20,
  },
  avatarstyle: {
    backgroundColor: "#9c27b0",
  },
  textstyle: {
    margin: "10px",
  },
}));
function CreatrProject() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Paper elevation={4} className={classes.paperstyle}>
          <Grid align="center">
            <Avatar className={classes.avatarstyle}>
              <CreateIcon />
            </Avatar>
            <h2>Let's Plan</h2>
          </Grid>
          <form action="">
            <TextField
              className={classes.textstyle}
              variant="outlined"
              fullWidth
              label="Project name"
              placeholder="enter project name"
            />
            <TextField
              className={classes.textstyle}
              variant="outlined"
              fullWidth
              label="Project cost"
              placeholder="enter estimated cost"
            />
            <TextField
              className={classes.textstyle}
              variant="outlined"
              fullWidth
              label="Duration"
              placeholder="accomplish timeline"
            />
            <TextField
              className={classes.textstyle}
              variant="outlined"
              fullWidth
              type="file"
            />

            <Button
              className={classes.textstyle}
              type="submit"
              fullWidth
              color="secondary"
              variant="contained"
            >
              create Plan
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}

export default CreatrProject;
