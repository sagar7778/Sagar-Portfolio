import React, { useState } from "react";
import { Box, Grid, TextField, Button } from "@mui/material";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_loq0cxe", // Your service ID
        "template_m4m55hp", // Your template ID
        formData,
        "w7Y_fbjv2BYBMz3K0" // Replace with your actual User ID from EmailJS
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setIsSubmitting(false);
        // Optionally reset form fields
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setIsSubmitting(false);
      });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: "#f0f2f5",
        padding: "2rem",
        borderRadius: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        maxWidth: { xs: "100%", md: "52%" },
        height: { xs: "auto", md: "685px" },
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
            fullWidth
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            fullWidth
            variant="outlined"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
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
            fullWidth
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            fullWidth
            variant="outlined"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
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
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
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
              backgroundColor: "#0077b5",
            },
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "SEND MESSAGE"}
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
