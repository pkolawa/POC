import React, { useState } from "react";
import {
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MoreVert as MoreIcon } from "@material-ui/icons";
import classnames from "classnames";

const useStyles = makeStyles(theme => ({
    widgetWrapper: {
      display: "flex",
      minHeight: "100%",
    },
    widgetHeader: {
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(1),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    widgetBody: {
      paddingBottom: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
    },
    noPadding: {
      padding: 0,
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      overflow: "hidden",
    },
    moreButton: {
      margin: -theme.spacing(1),
      padding: 0,
      width: 40,
      height: 40,
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: "#fff",
      },
    },
  }));

export default function Widget({
  children,
  title,
  bodyClass,
  disableWidgetMenu,
  ...props
}) {
  const classes = useStyles();

  const [moreButtonRef, setMoreButtonRef] = useState(null);
  const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);

  return (
    <div className={classes.widgetWrapper}>
      <Paper className={classes.paper}>
        <div className={classes.widgetHeader}>
          <>
            <Typography variant="h5" color="primary" size="medium" weight="medium">
              {title}
            </Typography>
            {!disableWidgetMenu && (
              <IconButton
                color="primary"
                classes={{ root: classes.moreButton }}
                onClick={() => setMoreMenuOpen(true)}
                buttonRef={setMoreButtonRef}
              >
                <MoreIcon />
              </IconButton>
            )}
          </>
        </div>
        <div
          className={classnames(classes.widgetBody, {
            [bodyClass]: bodyClass,
          })}
        >
          {children}
        </div>
      </Paper>
      <Menu
        id="widget-menu"
        open={isMoreMenuOpen}
        anchorEl={moreButtonRef}
        onClose={() => setMoreMenuOpen(false)}
        disableAutoFocusItem
      >
        <MenuItem>
          <Typography>Edit</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
