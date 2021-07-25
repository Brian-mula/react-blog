import { makeStyles, Typography, Button } from "@material-ui/core";
import React from "react";
import { motion } from "framer-motion";
const useStyles = makeStyles((theme) => ({
  // wrapper: {
  //   backgroundImage: `url('https://cdn.pixabay.com/photo/2016/07/20/19/42/wallpaper-1531107_960_720.jpg')`,
  //   backgroundSize: "cover",
  //   height: "100%",
  //   width: "100%",
  // },
  home: {
    margin: "147px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.home}>
        <Typography variant="h4" align="center" style={{ color: "white" }}>
          It is time to think about <br />
          <motion.b animate={{ rotate: 360 }} transition={{ duration: 2 }}>
            SUCCESS
          </motion.b>
        </Typography>
        <Typography variant="h5">
          Welcome to Plan tracker website Let us Keep it real
        </Typography>
        <Typography style={{ margin: "30px" }} variant="h6">
          It is simple and easy to follow along
        </Typography>
        <Button variant="contained" color="secondary">
          Create a Plan
        </Button>
      </div>
    </div>
  );
}

export default Home;
