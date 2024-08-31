import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
  Avatar,
} from "@mui/material";
import Profile from "../../assets/Home/sagar-image.jpg";
import { Whatsapp, Instagram, LinkedIn } from "../Home/index4";
import ContactForm from "./index2";

const Contact = () => {
  return (
    <section id="contact">
      <Box
        sx={{
          backgroundColor: "#f0f2f5",
          p: 3,
          width: { xs: "85%", md: "75%" },
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          mt: { xs: 3, md: 3 },
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          fontWeight={"bold"}
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            textAlign: "center",
          }}
        >
          Contact With Me
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {/* Left Panel */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                backgroundColor: "#f0f2f5",
                borderRadius: 2,
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                justifyContent: "center",
                width: { xs: "100%", md: "80%" },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Avatar
                variant="square"
                src={Profile}
                alt="Profile"
                sx={{
                  width: { xs: "88%", md: "90%" },
                  height: "auto",
                  padding: 2.5,
                  borderRadius: 2,
                }}
              />
              <Grid ml={2.5}>
                <Typography variant="h5">Sagar Koshti</Typography>
                <Typography variant="subtitle1">Devloper</Typography>
                <Typography variant="body2" paragraph>
                  I am available for freelance work. Connect with me via and
                  call in to my account.
                </Typography>
                <Typography variant="body2">
                  Phone:{" "}
                  <MuiLink
                    target="_blank"
                    href="tel:+919409307167"
                    color="inherit"
                    underline="none"
                    sx={{ "&:hover": { color: "blue" } }}
                  >
                    +91 9409307167
                  </MuiLink>
                </Typography>
                <Typography variant="body2">
                  Email:{" "}
                  <MuiLink
                    target="_blank"
                    href="mailto:koshtisagar7778@gmail.com"
                    color="inherit"
                    underline="none"
                    sx={{ "&:hover": { color: "blue" } }}
                  >
                    koshtisagar7778@gmail.com
                  </MuiLink>
                </Typography>
                <Box className="socials" textAlign="center" sx={{ mt: 2 }}>
                  <Typography variant="body1">FIND WITH ME</Typography>
                  <Box
                    className="icons"
                    display="flex"
                    justifyContent="center"
                    sx={{ mt: { xs: 0, md: 2 }, mb: { xs: 2, md: 2 } }}
                  >
                    <Whatsapp />
                    <Instagram />
                    <LinkedIn />
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Grid>

          {/* Right Panel */}
          <ContactForm />
        </Grid>
      </Box>
    </section>
  );
};
export default Contact;
