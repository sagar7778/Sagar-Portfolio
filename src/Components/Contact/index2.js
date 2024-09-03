import React, { useState } from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false); // State to track message sent status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_loq0cxe",
        "template_m4m55hp",
        formData,
        "w7Y_fbjv2BYBMz3K0"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessageSent(true); // Set message sent to true on success
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: "#F0F2F5",
        padding: { xs: 2, md: 4 },
        borderRadius: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        maxWidth: { xs: "100%", md: "58%" },
        height: { xs: "auto", md: "775px" },
        marginTop: "1.5rem",
        flexGrow: 1,
        ml: { xs: 2.5, md: 0 },
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ height: { xs: "auto", md: "80%" }, marginTop: "1.5rem" }}
      >
        <Grid item xs={12}>
          <TextField
            label="NAME"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            InputLabelProps={{
              style: {
                fontSize: "0.875rem",
                fontWeight: "bold",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="PHONE NUMBER"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            InputLabelProps={{
              style: {
                fontSize: "0.875rem",
                fontWeight: "bold",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="EMAIL"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            InputLabelProps={{
              style: {
                fontSize: "0.875rem",
                fontWeight: "bold",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="SUBJECT"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            InputLabelProps={{
              style: {
                fontSize: "0.875rem",
                fontWeight: "bold",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="YOUR MESSAGE"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            InputLabelProps={{
              style: {
                fontSize: "0.875rem",
                fontWeight: "bold",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 3,
        }}
      >
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "Blue",
            color: "#fff",
            padding: "10px 30px",
            width: "100%",
            borderRadius: "50px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#0077B5",
            },
          }}
        >
          SEND MESSAGE
        </Button>
      </Box>
      {messageSent && ( // Conditional rendering of the success message
        <Typography
          sx={{
            mt: 3,
            color: "green",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Your message was sent successfully!
        </Typography>
      )}
    </Box>
  );
};

export default ContactForm;
