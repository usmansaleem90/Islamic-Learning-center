import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  CssBaseline,
  Avatar,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#D2B995", // Soft blue that works well on dark backgrounds
    },
    secondary: {
      main: "#f48fb1", // Soft pink for secondary actions
    },
    background: {
      default: "#1a2131", // Dark grey
      paper: "#1a2131", // Darker shade for paper components
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    allVariants: {
      color: "white", // Ensures all text is readable
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          style: { color: "#ccc" }, // Light grey for labels to stand out
        },
        InputProps: {
          style: { color: "white" }, // White text for contrast
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1a2131", // Ensures all Paper components have a consistent background
          color: "#FFFFFF", // Ensures text on Paper components is readable
        },
      },
    },
  },
});

const SignUp = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().required("Username is required"),
      email: yup.string().email("Invalid email").required("Email is required"),
      password: yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      navigate("/login"); // Assuming '/login' is where users go post-signup
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper
          elevation={6}
          sx={{
            p: 3,
            mt: 8,
            mb: 4,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="primary"
            >
              Sign Up
            </Button>
            <Typography variant="body2" align="center">
              Already have an account?{" "}
              <Link
                to="/"
                style={{ textDecoration: "none", color: "#90caf9" }}
              >
                Log in
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
