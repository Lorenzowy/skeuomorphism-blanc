import React, { Component } from "react";
import { Typography, Fab } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import BlockIcon from "@material-ui/icons/Block";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import IconButton from "./components/IconButton";
import ExtendedButton from "./components/ExtendedButton";

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
    return (
      <div>
        <Typography variant="overline" color="textPrimary">
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
        {/* <Fab variant="extended" size="small">
          <CheckIcon />
          Verify
        </Fab>
        <br /> */}
      </div>
    );
  }
}

export default Components;
