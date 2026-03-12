import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { SiDiscord } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
  const theme = useTheme();

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 10 }, bgcolor: theme.palette.background.default }}>
      <Container maxWidth="lg" sx={{ pl: { md: "64px" } }}>

        {/* Section Header */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 6 }}>
          <Typography variant="h3" sx={{ color: "#FFFFFF", fontWeight: 500, fontSize: { xs: "1.8rem", md: "2.2rem" } }}>
            <Box component="span" sx={{ color: theme.palette.primary.main }}>#</Box>contacts
          </Typography>
          <Box sx={{ width: 80, height: 1, backgroundColor: theme.palette.primary.main, ml: 2, opacity: 0.5 }} />
        </Box>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: 6, md: 8 } }}>

          {/* Left – Text */}
          <Box sx={{ flex: 1 }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Typography sx={{ color: theme.palette.text.secondary, lineHeight: 1.8, fontSize: "0.95rem", maxWidth: 420 }}>
                I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me.
              </Typography>
            </motion.div>
          </Box>

          {/* Right – Contact Card */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <Box sx={{ border: `1px solid ${theme.palette.divider}`, p: 2.5, minWidth: 240 }}>
                <Typography sx={{ color: "#FFFFFF", mb: 2, fontSize: "0.9rem", fontWeight: 500 }}>
                  Message me here
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <SiDiscord size={20} color={theme.palette.text.secondary} />
                    <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.85rem" }}>!Elias#3519</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <MdEmail size={20} color={theme.palette.text.secondary} />
                    <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.85rem" }}>elias@elias.me</Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}