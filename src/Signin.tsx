import { Component } from "solid-js";

import Avatar from "@suid/material/Avatar";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Checkbox from "@suid/material/Checkbox";
import Container from "@suid/material/Container";
import FormControlLabel from "@suid/material/FormControlLabel";
import Grid from "@suid/material/Grid";
import TextField from "@suid/material/TextField";
import Typography from "@suid/material/Typography";
// import { LockOutlined } from '@suid/icons-material/'
import Link from "@suid/material/Link";

import { useNavigate } from "@solidjs/router";

const Signin: Component = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate("/budget");
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          {/* <LockOutlined /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
    </Container>
  );
};

export default Signin;
