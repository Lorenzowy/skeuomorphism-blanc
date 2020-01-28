import React, { Component } from "react";
import { Typography, Fab, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import BlockIcon from "@material-ui/icons/Block";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import IconButton from "./components/IconButton";
import ExtendedButton from "./components/ExtendedButton";

const styles = {
  tooltip: {
    background: "white"
  }
};

class Components extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  handleCheck = () => {
    this.setState({ checked: !this.state.checked });
  };

  renderButtons() {}

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="overline" color="textPrimary" style={{ fontSize: "20px", opacity: 0.9 }}>
          Skeuomorphism
        </Typography>

        <div className="horizontal-divider" />

        <IconButton icon={<CheckIcon />} onClick={this.handleCheck} />

        <div className="vertical-divider" />

        <IconButton icon={<BlockIcon />} />
        <ExtendedButton icon={<BlockIcon />} label="Verify" />

        <div className="horizontal-divider" />

        <IconButton icon={<TrackChangesIcon />} />
        <IconButton icon={<FingerprintIcon />} />
        <div className="vertical-divider" />
        <Tooltip PopperProps={{ className: classes.tooltip }} title={<div>Tooltip text goes here</div>}>
          <div style={{ display: "inline-block" }}>
            <ExtendedButton icon={<GraphicEqIcon />} label="Suggest" />
          </div>
        </Tooltip>
        {/* <Tooltip title="text">
          <div style={{ display: "inline-block" }}>
            <ExtendedButton icon={<GraphicEqIcon />} label="Suggest" />
          </div>
        </Tooltip> */}
        {/* <Fab variant="extended" size="small">
          <CheckIcon />
          Verify
        </Fab>
        <br /> */}
      </div>
    );
  }
}

export default withStyles(styles)(Components);
