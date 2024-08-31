import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
} from "@mui/material";
import { LinkedIn, Instagram, WhatsApp } from "@mui/icons-material";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const [activeLink, setActiveLink] = useState("");

  const linkStyle = {
    color: activeLink === `#${activeLink}` ? "blue" : "#aaaeaf",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

  const handleHover = (event) => {
    event.target.style.color = "blue";
  };

  const handleLeave = (event) => {
    event.target.style.color = "#aaaeaf";
  };

  const handleLinkClick = (link) => {
    setActiveLink(`#${link}`);
  };

  return (
    <section id="footer">
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          py: 6,
          px: 2,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="#fff">
                Sagar Koshti
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, color: "#aaaeaf" }}>
                <MuiLink
                  href="tel:+919409307167"
                  color="inherit"
                  underline="none"
                  sx={{
                    "&:hover": { color: "blue" },
                  }}
                >
                  +91 9409307167
                </MuiLink>
                <br />
                <MuiLink
                  href="mailto:koshtisagar7778@gmail.com"
                  color="inherit"
                  underline="none"
                  sx={{
                    "&:hover": { color: "blue" },
                  }}
                >
                  koshtisagar7778@gmail.com
                </MuiLink>
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6">Services</Typography>
              <Divider sx={{ my: 1, borderColor: "#fff" }} />
              <Typography variant="body2" sx={{ mt: 2, color: "#aaaeaf" }}>
                Web Development
                <br />
                UI/UX Design
                <br />
                App Development
                <br />
                Software Development
                <br />
                Social Media Marketing
                <br />
                Ad Promotion
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6">Quick Links</Typography>
              <Divider sx={{ my: 1, borderColor: "#fff" }} />
              <Typography variant="body2" sx={{ mt: 2 }}>
                {[
                  "home",
                  "features",
                  "portfolio",
                  "resume",
                  "blog",
                  "contact",
                ].map((link) => (
                  <ScrollLink
                    key={link}
                    to={link}
                    spy={true}
                    smooth={true}
                    duration={800}
                    style={linkStyle}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => handleLinkClick(link)}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                    <br />
                  </ScrollLink>
                ))}
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, borderColor: "#444" }} />

          <Box sx={{ textAlign: "center" }}>
            <IconButton
              color="inherit"
              href="https://wa.me/+919409307167"
              target="_blank"
            >
              <WhatsApp sx={{ color: "#3b5998" }} />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.instagram.com/http._.sagar?igsh=M3VieWRub2p1cWM="
              target="_blank"
            >
              <Instagram sx={{ color: "#E4405F" }} />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/sagar-koshti-1b6957219/"
              target="_blank"
            >
              <LinkedIn sx={{ color: "#0e76a8" }} />
            </IconButton>
          </Box>

          <Typography variant="body2" sx={{ mt: 4 }}>
            &copy; {new Date().getFullYear()} All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <MuiLink
              href="#"
              sx={linkStyle}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              mx={2}
            >
              Terms of Use
            </MuiLink>
            <MuiLink
              href="#"
              sx={linkStyle}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              mx={2}
            >
              Privacy Policy
            </MuiLink>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default Footer;
