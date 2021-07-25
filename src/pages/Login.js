import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles({
  root: {
    height: "auto",
    width: "380px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px",
  },

  avatar: {
    backgroundColor: "#6200ea",
  },
  textfiled: {
    margin: "10px",
  },
  btn: {
    backgroundColor: "#9c27b0",
  },
});
function Login() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Paper className={classes.root}>
          <Grid align="center" className={classes.wrapper}>
            <Avatar>
              <LockOutlinedIcon className={classes.avatar} size="60px" />
            </Avatar>
            <h2>Login now</h2>
          </Grid>
          <TextField
            className={classes.textfiled}
            variant="outlined"
            fullWidth
            required
            placeholder="e.g example@example.com"
            label="email"
            type="email"
          />
          <TextField
            className={classes.textfiled}
            variant="outlined"
            fullWidth
            required
            type="password"
            minLength="6"
            placeholder="e.g 123456"
            label="password"
          />
          <Button
            type="submit"
            fullWidth
            className={(classes.textfiled, classes.btn)}
          >
            {" "}
            Login{" "}
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;
