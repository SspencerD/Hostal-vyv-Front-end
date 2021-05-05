import React, { useState, forwardRef } from "react";
import clsx from "clsx";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";

import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Tooltip from '@material-ui/core/Tooltip';



import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { mainListItems, secondaryListItems } from "./listItems";
import { Copyright } from "../Copyright";
import { yellow, cyan } from "@material-ui/core/colors";
import { Modal } from "@material-ui/core";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { StartRegisterUser } from "../../actions/auth";

const drawerWidth = 240;

const ButtonWarning = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[200],
    "&:hover": {
      backgroundColor: yellow[700],
    },
  },
}))(Button);

const CreatedUsrButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(cyan[500]),
    backgroundColor: cyan[200],
    "&:hover": {
      backgroundColor: cyan[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const TableUsers = () => {
  const UserData = (name, email, role) => {
    return { name, email, role };
  };

  const rows = [
    UserData("Gervacio", "gervacio@gmail.com", "true"),
    UserData("Calamardo", "gervacio@gmail.com", "false"),
    UserData("Bob Esponja", "gervacio@gmail.com", "true"),
    UserData("Tulapi", "gervacio@gmail.com", "false"),
  ];

  const dispatch = useDispatch();

  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [formRegisterValues, handleInputChangeUserChange] = useForm({
    rcName: "Pamela",
    rcEmail: "pmedina@gmail.com",
    rcPassword: "123456789",
    rcPassword2: "123456789",
  });

  const { rcName, rcEmail, rcPassword, rcPassword2 } = formRegisterValues;

  const handleSubmitUser = (e) => {
    dispatch(StartRegisterUser(rcName, rcEmail, rcPassword));

    e.preventDefault();
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard Admin
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            {/* MENU USERS*/}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Typography component="h1" variant="">
                  Users Section
                </Typography>
                <Grid container spacing={1}>
                  <CreatedUsrButton
                    size="large"
                    positions="right"
                    variant="contained"
                    className={classes.margin}
                    onClick={handleOpenModal}
                  >
                    Create User
                  </CreatedUsrButton>
                </Grid>
              </Paper>
            </Grid>
            {/* CRUD USERS */}
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table className={classes.table} arial-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.role}</TableCell>
                        <TableCell>
                          <ButtonGroup
                            size="small"
                            aria-label="small outlined button group"
                          >
                           <Tooltip title="View User">
                            <IconButton aria-label="delete" className={classes.margin} color="primary" size="small" >
                            <SearchIcon fontSize="small" />
                              </IconButton>
                              </Tooltip>
                            <Tooltip title="Edit User">
                            <IconButton aria-label="delete" className={classes.margin} color="secondary" size="small" >
                            <EditIcon fontSize="small" />
                              </IconButton>
                              </Tooltip>
                            <Tooltip title="Delete User">
                            <IconButton aria-label="delete" className={classes.margin} color="secondary" size="small" >
                            <DeleteIcon fontSize="small" />
                              </IconButton>
                              </Tooltip>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
      {/* MODAL OPENED */}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal} className={classes.paperModal}>
          <form
            className={classes.root}
            autoComplete="off"
            onSubmit={handleSubmitUser}
          >
            <Typography component="h1" variant="h5" position="center">
              Register User
            </Typography>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="off"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
                  name="rcName"
                  onChange={handleInputChangeUserChange}
                  value={rcName}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="off"
                  variant="outlined"
                  required
                  fullWidth
                  id="Email"
                  label="Email"
                  autoFocus
                  name="rcEmail"
                  onChange={handleInputChangeUserChange}
                  value={rcEmail}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="off"
                  variant="outlined"
                  required
                  fullWidth
                  id="Password"
                  label="Password"
                  type="password"
                  autoFocus
                  name="rcPassword"
                  onChange={handleInputChangeUserChange}
                  value={rcPassword}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="off"
                  variant="outlined"
                  required
                  fullWidth
                  id="Password2"
                  label="Confirm Password"
                  type="password"
                  autoFocus
                  name="rcPassword2"
                  onChange={handleInputChangeUserChange}
                  value={rcPassword2}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Register User
              </Button>
            </Grid>
          </form>
        </Fade>
      </Modal>
    </div>
  );
};
