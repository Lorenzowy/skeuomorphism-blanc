import React, { Component } from "react";
import { Typography, Fab, Tooltip, Card, Button } from "@material-ui/core";
import { withStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import BlockIcon from "@material-ui/icons/Block";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import IconButton from "./components/IconButton";
import ExtendedButton from "./components/ExtendedButton";

// const styles = {
//   tooltip: {
//     background: "white"
//   }
// };

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        color: "#00000033",
        borderRadius: "50px",
        border: "2px solid #e6edf3cc",
        boxShadow: "7px 7px 11px #c8ced3, -7px -7px 11px #ffffff",
        background: "linear-gradient(145deg, #f6feff, #cfd5db)",
        "&:hover": {
          background: "linear-gradient(145deg, #cfd5db,#f6feff)"
        },
        margin: "10px"
      },
      containedPrimary: {
        color: "#000000cc",
        boxShadow: "7px 7px 11px #c8ced3, -7px -7px 11px #ffffff",
        "&:hover": {
          background: "linear-gradient(145deg, #cfd5db,#f6feff)",
          boxShadow: "7px 7px 11px #c8ced3, -7px -7px 11px #ffffff"
        }
      }
    },
    MuiButtonBase: {
      root: {
        boxShadow: "7px 7px 11px #c8ced3, -7px -7px 11px #ffffff"
      }
    },
    MuiIconButton: {
      root: {
        borderRadius: "50px",
        border: "2px solid #e6edf3cc",
        boxShadow: "7px 7px 11px #c8ced3, -7px -7px 11px #ffffff",
        background: "linear-gradient(145deg, #f6feff, #cfd5db)",
        "&:hover": {
          background: "linear-gradient(145deg, #cfd5db,#f6feff)"
        },
        margin: "10px",
        "&:visited": {
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
        "&:active": {
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
        }
      }
    },
    MuiTooltip: {
      background: "pink"
    },
    MuiCard: {
      root: {
        color: "#000000cc",
        border: "2px solid #e6edf3cc",
        boxShadow: "7px 7px 11px #c8ced3, -7px -7px 11px #ffffff",
        // background: "linear-gradient(145deg, #f6feff, #cfd5db)",
        background: "#e0e7ea",
        "&:hover": {
          // background: "linear-gradient(145deg, #cfd5db,#f6feff)",
          // background: "linear-gradient(145deg, #f6feff, #cfd5db)"
          background: "#f6feff"
        },
        margin: "10px"
      }
    }
  }
});

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
      <ThemeProvider theme={theme}>
        <Card>
          <div style={{ padding: "10px" }}>test</div>
        </Card>
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

          <Tooltip title={<div>Tooltip text goes here</div>}>
            <div style={{ display: "inline-block" }}>
              <ExtendedButton icon={<GraphicEqIcon />} label="Suggest" />
            </div>
          </Tooltip>

          <div className="vertical-divider" />

          <Button variant="contained" color="primary">
            Primary
          </Button>

          <Button variant="contained" color="secondary">
            Primary
          </Button>
        </div>
      </ThemeProvider>
    );
  }
}

export default Components;
