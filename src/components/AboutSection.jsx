import React from "react";
import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { motion } from "framer-motion";

const skills = {
  Languages: "TypeScript Lua Python JavaScript",
  Other: "HTML CSS EJS SCSS REST Jinja",
  Tools: "VSCode Neovim Linux Figma XFCE Arch Git Font Awesome",
  Databases: "SQLite PostgreSQL Mongo",
  Frameworks: "React Vue Disnake Discord.js Flask Express.js",
};

const funFacts = [
  { text: "I like plane in pasta", checked: true },
  { text: "I once was on French television", checked: true },
  { text: "My favorite music is The Game 8bit", checked: true },
  { text: "I don't have any siblings", checked: false },
];

const SkillBox = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box sx={{ border: `1px solid ${theme.palette.divider}` }}>
      <Box sx={{ px: 1.5, py: 1, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Typography sx={{ color: "#FFFFFF", fontSize: "0.85rem", fontWeight: 500 }}>{title}</Typography>
      </Box>
      <Box sx={{ px: 1.5, py: 1 }}>
        {items.split(" ").map((item) => (
          <Typography key={item} sx={{ color: theme.palette.text.secondary, fontSize: "0.78rem", lineHeight: 1.9 }}>
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default function AboutSection() {
  const theme = useTheme();

  return (
    <Box id="about" sx={{ py: { xs: 8, md: 10 }, bgcolor: theme.palette.background.default }}>
      <Container maxWidth="lg" sx={{ pl: { md: "64px" } }}>

        {/* ── /about-me Header ── */}
        <Box sx={{ mb: 1 }}>
          <Typography variant="h3" sx={{ color: "#FFFFFF", fontWeight: 500, fontSize: { xs: "1.8rem", md: "2.2rem" } }}>
            <Box component="span" sx={{ color: theme.palette.primary.main }}>/</Box>about-me
          </Typography>
          <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.9rem", mt: 0.5 }}>
            Who am I?
          </Typography>
        </Box>

        {/* ── Two-column layout ── */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: 6, md: 8 }, alignItems: "flex-start", mb: 8, mt: 4 }}>

          {/* Left – Text */}
          <Box sx={{ flex: 1 }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Typography sx={{ color: theme.palette.text.secondary, mb: 3, lineHeight: 1.8, fontSize: "0.95rem" }}>
                Hello, i'm Elias!
              </Typography>
              <Typography sx={{ color: theme.palette.text.secondary, mb: 3, lineHeight: 1.8, fontSize: "0.95rem" }}>
                I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
              </Typography>
              <Typography sx={{ color: theme.palette.text.secondary, mb: 5, lineHeight: 1.8, fontSize: "0.95rem" }}>
                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
              </Typography>
              <Button variant="outlined" color="primary" href="#projects" sx={{ px: 4, py: 1.25, fontSize: "0.9rem" }}>
                Read more -{">"}
              </Button>
            </motion.div>
          </Box>

          {/* Right – Image with offset border */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <Box sx={{ position: "relative", width: "fit-content" }}>
                {/* Offset purple border */}
                <Box sx={{ position: "absolute", top: -12, left: -12, right: 12, bottom: 12, border: `1px solid ${theme.palette.primary.main}`, opacity: 0.6, zIndex: 0 }} />
                {/* Dots top-right */}
                <Box sx={{ position: "absolute", top: -40, right: -40, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "7px", opacity: 0.4, zIndex: 2 }}>
                  {Array.from({ length: 25 }).map((_, i) => <Box key={i} sx={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: theme.palette.text.secondary }} />)}
                </Box>
                <Box
                  component="img"
                  src="ansar.jpeg"
                  alt="About Elias"
                  sx={{ position: "relative", zIndex: 1, width: { xs: 220, md: 260 }, height: { xs: 280, md: 340 }, objectFit: "cover", objectPosition: "top center", display: "block" }}
                />
              </Box>
            </motion.div>
          </Box>
        </Box>

        {/* ── #skills Section ── */}
        <Box sx={{ mb: 8 }}>
          <Typography sx={{ color: "#FFFFFF", mb: 3, fontSize: "1.1rem" }}>
            <Box component="span" sx={{ color: theme.palette.primary.main }}>#</Box>skills
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr", md: "repeat(5, 1fr)" }, gap: 2 }}>
            {Object.entries(skills).map(([title, items]) => (
              <SkillBox key={title} title={title} items={items} />
            ))}
          </Box>
        </Box>

        {/* ── #my-fun-facts Section ── */}
        <Box>
          <Typography sx={{ color: "#FFFFFF", mb: 3, fontSize: "1.1rem" }}>
            <Box component="span" sx={{ color: theme.palette.primary.main }}>#</Box>my-fun-facts
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 0, border: `1px solid ${theme.palette.divider}` }}>
            {funFacts.map((fact, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 2,
                  py: 1.25,
                  borderBottom: i < funFacts.length - (funFacts.length % 2 === 0 ? 2 : 1) ? `1px solid ${theme.palette.divider}` : "none",
                  borderRight: i % 2 === 0 ? `1px solid ${theme.palette.divider}` : "none",
                }}
              >
                {fact.checked
                  ? <CheckBox sx={{ color: theme.palette.primary.main, fontSize: 18, flexShrink: 0 }} />
                  : <CheckBoxOutlineBlank sx={{ color: theme.palette.text.secondary, fontSize: 18, flexShrink: 0 }} />
                }
                <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.85rem" }}>
                  {fact.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

      </Container>
    </Box>
  );
}
