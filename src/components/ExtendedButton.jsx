import React, { useState, Component } from "react";
import { IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  icon: {
    width: 50,
    height: 50
  },
  iconButton: {
    borderRadius: "50px",
    border: "2px solid #e6edf3cc",
    boxShadow: "7px 7px 11px #c8ced3, -7px -7px 11px #ffffff",
    background: "linear-gradient(145deg, #f6feff, #cfd5db)",
    "&:hover": {
      background: "linear-gradient(145deg, #cfd5db,#f6feff)"
    },
    margin: "10px"
  },
  iconButtonClicked: {
    borderRadius: "50px",
    border: "2px solid #533092eb", //"2px solid #e6edf388",
    boxShadow: "7px 7px 11px #c8ced3, -7px -7px 11px #ffffff", // 3px 3px 11px #9c27b0aa, -3px -3px 11px #3f51b5aa",
    background: "linear-gradient(145deg, #3f51b5, #9c27b0)",
    "&:hover": {
      background: "linear-gradient(145deg, #3f51b5, #9c27b0)",
      boxShadow: "inset 7px 7px 11px #16161733, inset -7px -7px 11px #ffffff22"
    },
    margin: "10px",
    color: "#ffffffcc"
  },
  label: { padding: "0 10px 0 5px", lineHeight: "25px", fontWeight: 700 }
});

export default function SkeuoExtendedButton(props) {
  const [clicked, setClicked] = useState(false);
  const classes = useStyles();

  return (
    <IconButton size="small" variant="extended" className={clicked ? classes.iconButtonClicked : classes.iconButton} onClick={() => setClicked(!clicked)}>
      {props.icon}
      <Typography className={classes.label} variant="overline">
        {props.label}
      </Typography>
      {/* <div className={classes.icon}>{props.icon}</div> */}
    </IconButton>
  );
}

// class IconIconButton extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     const classes = useStyles();
//     const { icon } = this.props;
//     return <IconButton className={classes.IconButton}>{icon}</IconButton>;
//   }
// }

// export default IconIconButton;
