import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { Copyright } from "../ui/Copyright";
import { MenuItem } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import ListSubheader from "@material-ui/core/ListSubheader";

import Swal from "sweetalert2";
import { useForm } from "../hooks/useForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export const RegisterScreen = () => {


  const classes = useStyles();

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rName: "Pamela",
    rSecondName: "Gisel",
    rLastname: "Medina",
    rLastname2: "Castro",
    rRun: "18314291",
    rDv: "7",
    rNationality: "Chilena",
    rPlaceOrigin: "Chile",
    rPhone: "123456789",
    rEmail: "pmedina@gmail.com",
    rPassword: "123456789",
    rPassword2: "123456789",
  });

  const {
    rName,
    rSecondName,
    rLastname,
    rLastname2,
    rRun,
    rDv,
    rNationality,
    rPlaceOrigin,
    rPhone,
    rEmail,
    rPassword,
    rPassword2,
  } = formRegisterValues;

  const handleRegisterSubmit = (e) => {

    e.preventDefault();

    if (rPassword !== rPassword2) {
      return Swal.fire('Error', 'passwords must match', 'error')

    }
    
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registro de clientes
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleRegisterSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre"
                autoFocus
                name="rName"
                onChange={handleRegisterInputChange}
                value={rName}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                id="secondName"
                label="Segundo Nombre"
                autoFocus
                name="rSecondName"
                onChange={handleRegisterInputChange}
                value={rSecondName}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                autoComplete="off"
                name="rLastname"
                onChange={handleRegisterInputChange}
                value={rLastname}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName2"
                label="Segundo Apellido"
                autoComplete="off"
                name="rLastname2"
                onChange={handleRegisterInputChange}
                value={rLastname2}
              />
            </Grid>

            <Grid item xs={12} sm={8}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="rut"
                label="RUT/DNI"
                autoComplete="off"
                name="rRun"
                onChange={handleRegisterInputChange}
                value={rRun}
              />
            </Grid>
            <Grid item xs={12} sm={1}>
              <Typography component="h1" variant="p">
                -
              </Typography>
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="dv"
                label="DV"
                autoComplete="off"
                name="rDv"
                onChange={handleRegisterInputChange}
                value={rDv}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nationality"
                label="Nacionalidad"
                autoComplete="off"
                name="rNationality"
                onChange={handleRegisterInputChange}
                value={rNationality}
              />
            </Grid>
           
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="grouped-select">Localidad</InputLabel>
              <Select defaultValue={rPlaceOrigin} id="grouped-select">
                <MenuItem value=""></MenuItem>
                <ListSubheader>Arica</ListSubheader>
                <MenuItem value={rPlaceOrigin}>Chile</MenuItem>
                <MenuItem value={2}>Valle de Azapa</MenuItem>
                <ListSubheader>Iquique</ListSubheader>
                <MenuItem value={3}>Alto Hospicio</MenuItem>
                <MenuItem value={4}>Pozo al monte</MenuItem>
              </Select>
            </FormControl>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Telefono"
                autoComplete="off"
                name="rPhone"
                onChange={handleRegisterInputChange}
                value={rPhone}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo"
                autoComplete="email"
                name="rEmail"
                onChange={handleRegisterInputChange}
                value={rEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                name="rPassword"
                onChange={handleRegisterInputChange}
                value={rPassword}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Repita la password"
                type="password"
                id="password2"
                autoComplete="off"
                name="rPassword2"
                onChange={handleRegisterInputChange}
                value={rPassword2}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Quiero Recibir ofertas y promociones sobre el hostal"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarse
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Router>
                <Switch>
                  <Link to="/login"> ¿Ya tienes una cuenta? Ingresa aqui.</Link>
                </Switch>
              </Router>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};
