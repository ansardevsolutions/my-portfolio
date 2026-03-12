import React from "react";
import { Box, Container, Typography, useTheme, IconButton } from "@mui/material";
import { GitHub, Email } from "@mui/icons-material";
import { SiDiscord } from "react-icons/si";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ borderTop: `1px solid ${theme.palette.divider}`, py: 4, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg" sx={{ pl: { md: "64px" } }}>

        {/* Top row */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", md: "flex-end" }, gap: 3, mb: 3 }}>

          {/* Left – Logo + tagline */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
              <Box sx={{ position: "relative", width: 20, height: 20 }}>
                <Box sx={{ position: "absolute", top: 0, left: 0, width: 12, height: 12, border: "1.5px solid #FFFFFF" }} />
                <Box sx={{ position: "absolute", bottom: 0, right: 0, width: 12, height: 12, border: `1.5px solid ${theme.palette.primary.main}` }} />
              </Box>
              <Typography sx={{ color: "#FFFFFF", fontWeight: 600 }}>Elias</Typography>
              <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.8rem" }}>elias@elias-ku.cf</Typography>
            </Box>
            <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.78rem" }}>
              Web designer and front-end developer
            </Typography>
          </Box>

          {/* Right – Media + social icons */}
          <Box>
            <Typography sx={{ color: "#FFFFFF", mb: 1, fontSize: "0.9rem", fontWeight: 500 }}>Media</Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {[
                { icon: <GitHub sx={{ fontSize: 18 }} />, href: "https://github.com" },
                { icon: <SiDiscord size={16} />, href: "#contact" },
                { icon: <Email sx={{ fontSize: 18 }} />, href: "mailto:elias@elias.me" },
              ].map((s, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  size="small"
                  sx={{
                    color: theme.palette.text.secondary,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 0,
                    p: 0.75,
                    "&:hover": { color: theme.palette.primary.main, borderColor: theme.palette.primary.main },
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Bottom row – Copyright line */}
        <Box sx={{ borderTop: `1px solid ${theme.palette.divider}`, pt: 2 }}>
          <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.78rem", textAlign: "center" }}>
            © Copyright {new Date().getFullYear()}. Made by{" "}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>Elias</Box>
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}
