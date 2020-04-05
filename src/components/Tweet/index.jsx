import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "600px",
    marginBottom: "10px"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const Tweet = ({ tweet }) => {
  const classes = useStyles();
  const { text, username, timeStamp, image } = tweet;
  const timeStampString = new Date(timeStamp).toLocaleString();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="avatar" className={classes.avatar} src={image} />
        }
        title={username}
        subheader={timeStampString}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Tweet;
