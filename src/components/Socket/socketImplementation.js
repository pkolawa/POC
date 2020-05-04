import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import RefreshIcon from "@material-ui/icons/Refresh";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

let socket;

const styles = (theme) => ({
  paperCont: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(24),
      height: theme.spacing(24),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  countColor: {
    color: "blue",
  },
});

class SocketTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webSocketData: {},
      loading: false,
      connectionErr: false,
    };
    this.setWebSocketData = this.setWebSocketData.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.bindSocketMethods = this.bindSocketMethods.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    socket = socketIOClient(ENDPOINT, {
      reconnectionAttempts: 2,
    });
    this.bindSocketMethods();
    socket.emit("start realtimedata");
    this.setWebSocketData();
    this.onRefresh();
  }
  setWebSocketData() {
    socket.on("recieve realtimedata", (response) => {
      if (response) {
        this.setState({ webSocketData: response });
      }
      this.setState({ loading: false });
      console.log(response);
    });
  }
  bindSocketMethods() {
    socket.on("error", (err) => {
      console.log("Error connecting to server", err);
    });

    socket.on("reconnect", (number) => {
      console.log("Reconnected to server", number);
    });

    socket.on("reconnect_attempt", () => {
      console.log("Reconnect Attempt");
    });

    socket.on("reconnecting", (number) => {
      console.log("Reconnecting to server", number);
    });

    socket.on("reconnect_error", (err) => {
      console.log("Reconnect Error", err);
    });

    socket.on("reconnect_failed", () => {
      console.log("Reconnect failed");
    });

    socket.on("connect_error", () => {
      console.log("connect_error");
      this.setState({ loading: false, connectionErr: true });
    });
  }
  onRefresh() {
    if (!socket.connected) {
      socket.connect();
    }
    socket.emit("onrefresh realtimedata");
    this.setState({ loading: true });
  }
  handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ connectionErr: false });
  }
  componentWillUnmount() {
    socket.close();
  }
  render() {
    const { classes = {} } = this.props;
    const { "unofficial-summary": summary = [] } = this.state.webSocketData;
    const activeCount = summary.length
      ? summary.map((item) => {
          if (item && item.active) {
            return item.active;
          }
        })
      : "No Data Found";
    return (
      <>
        <div className={classes.paperCont}>
          <Paper elevation={3}>
            <RefreshIcon
              color="primary"
              style={{ cursor: "pointer" }}
              onClick={this.onRefresh}
            />
            <Typography align="center" variant="subtitle1" color="primary">
              Covid19 Active Cases
              <Typography align="center" color="primary">
                India
              </Typography>
            </Typography>
            {this.state.loading && <CircularProgress color="secondary" />}
            <Typography align="center" className={classes.countColor}>
              {activeCount}
            </Typography>
          </Paper>
        </div>
        <Snackbar
          open={this.state.connectionErr}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message="Error in socket connection"
          color="primary"
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={this.handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </>
    );
  }
}
export { SocketTest };
export default withStyles(styles)(SocketTest);
