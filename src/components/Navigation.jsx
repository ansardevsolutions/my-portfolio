import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  AppBar, Toolbar, Typography, Button, IconButton, Box,
  useTheme, useMediaQuery, alpha, Drawer, List, ListItemButton, ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { GitHub, Email } from "@mui/icons-material";
import { SiDiscord } from "react-icons/si";

const NAV_ITEMS = [
  { label: "home", section: "home" },
  { label: "works", section: "projects" },
  { label: "about-me", section: "about" },
  { label: "contacts", section: "contact" },
];

export default function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const appBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let currentSection = "home";
      NAV_ITEMS.forEach((item) => {
        const el = document.getElementById(item.section);
        if (el && el.offsetTop <= scrollPosition) currentSection = item.section;
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveSection(id);
    window.history.replaceState(null, "", `#${id}`);
    const headerH = appBarRef.current?.clientHeight || 0;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - headerH, behavior: "smooth" });
    setDrawerOpen(false);
  }, []);

  const Logo = () => (
    <Box onClick={() => scrollToSection("home")} sx={{ display: "flex", alignItems: "center", gap: 1.5, cursor: "pointer", userSelect: "none" }}>
      <Box sx={{ position: "relative", width: 22, height: 22 }}>
        <Box sx={{ position: "absolute", top: 0, left: 0, width: 13, height: 13, border: "1.5px solid #FFFFFF" }} />
        <Box sx={{ position: "absolute", bottom: 0, right: 0, width: 13, height: 13, border: `1.5px solid ${theme.palette.primary.main}` }} />
      </Box>
      <Typography variant="h6" sx={{ color: "#FFFFFF", fontWeight: 600, fontSize: "1.1rem", letterSpacing: "0.5px" }}>
        Elias
      </Typography>
    </Box>
  );

  const socialLinks = [
    { icon: <GitHub sx={{ fontSize: 20 }} />, href: "https://github.com" },
    { icon: <SiDiscord size={18} />, href: "#contact" },
    { icon: <Email sx={{ fontSize: 20 }} />, href: "mailto:elias@elias.me" },
  ];

  return (
    <>
      {/* Left sidebar with social icons — desktop only */}
      {!isMobile && (
        <Box
          sx={{
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            width: 40,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2.5,
            zIndex: 1200,
            borderRight: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
          }}
        >
          {socialLinks.map((s, i) => (
            <IconButton
              key={i}
              component="a"
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              size="small"
              sx={{
                color: theme.palette.text.secondary,
                "&:hover": { color: theme.palette.primary.main },
                p: 0.5,
              }}
            >
              {s.icon}
            </IconButton>
          ))}
        </Box>
      )}

      <AppBar
        ref={appBarRef}
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.default,
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
          pl: { md: "40px" }, // offset for left sidebar
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", minHeight: { xs: 64, md: 72 }, px: { xs: 2, md: 4 } }}>
          <Logo />

          {isMobile ? (
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: theme.palette.text.secondary }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.section;
                return (
                  <Button
                    key={item.section}
                    onClick={() => scrollToSection(item.section)}
                    disableRipple
                    sx={{
                      color: isActive ? "#FFFFFF" : theme.palette.text.secondary,
                      fontSize: "0.95rem",
                      fontWeight: isActive ? 500 : 400,
                      textTransform: "none",
                      minWidth: "auto",
                      p: 0,
                      "&:hover": { backgroundColor: "transparent", color: "#FFFFFF" },
                    }}
                  >
                    <Box component="span" sx={{ color: theme.palette.primary.main, mr: 0.3 }}>#</Box>
                    {item.label}
                  </Button>
                );
              })}
              {/* Language toggle */}
              <Button
                disableRipple
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "0.95rem",
                  textTransform: "none",
                  border: `1px solid ${theme.palette.divider}`,
                  px: 1.5,
                  py: 0.5,
                  minWidth: "auto",
                  "&:hover": { color: "#FFFFFF", borderColor: "#FFFFFF", backgroundColor: "transparent" },
                }}
              >
                EN
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Full-Screen Overlay Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: "100vw",
            backgroundColor: theme.palette.background.default,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* Mobile Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2.5, py: 2, borderBottom: `1px solid ${alpha(theme.palette.divider, 0.2)}` }}>
          <Logo />
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: theme.palette.text.secondary }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Mobile Nav Items */}
        <List sx={{ flex: 1, px: 2, pt: 3 }}>
          {NAV_ITEMS.map((item) => (
            <ListItemButton
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              disableRipple
              sx={{ mb: 1, px: 0, "&:hover": { backgroundColor: "transparent" } }}
            >
              <ListItemText
                primary={
                  <Typography variant="h5" sx={{ color: theme.palette.text.secondary }}>
                    <Box component="span" sx={{ color: theme.palette.primary.main, mr: 0.5 }}>#</Box>
                    {item.label}
                  </Typography>
                }
              />
            </ListItemButton>
          ))}
          <ListItemButton disableRipple sx={{ mb: 1, px: 0, "&:hover": { backgroundColor: "transparent" } }}>
            <ListItemText
              primary={
                <Typography variant="h5" sx={{ color: theme.palette.text.secondary }}>
                  EN~
                </Typography>
              }
            />
          </ListItemButton>
        </List>

        {/* Mobile Social Icons */}
        <Box sx={{ px: 2.5, py: 3, display: "flex", gap: 2, borderTop: `1px solid ${alpha(theme.palette.divider, 0.2)}` }}>
          {socialLinks.map((s, i) => (
            <IconButton
              key={i}
              component="a"
              href={s.href}
              size="small"
              sx={{ color: theme.palette.text.secondary, border: `1px solid ${theme.palette.divider}`, borderRadius: 0, p: 1 }}
            >
              {s.icon}
            </IconButton>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
