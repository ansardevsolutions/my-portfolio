import React from "react";
import { Box, Container, Typography, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const SkillBox = ({ title, skills }) => {
  const theme = useTheme();
  return (
    <Box sx={{ border: `1px solid ${theme.palette.divider}`, mb: 2 }}>
      <Box sx={{ borderBottom: `1px solid ${theme.palette.divider}`, p: 1 }}>
        <Typography variant="h6" sx={{ color: '#FFFFFF', fontSize: '1rem' }}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
          {skills}
        </Typography>
      </Box>
    </Box>
  );
};

export default function SkillsSection() {
  const theme = useTheme();

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ color: "#FFFFFF", fontWeight: 500 }}>
            <Typography component="span" variant="h3" sx={{ color: theme.palette.primary.main }}>#</Typography>skills
          </Typography>
          <Box sx={{ width: '30%', height: 1, backgroundColor: theme.palette.primary.main, ml: 2, opacity: 0.5 }} />
        </Box>

        <Grid container spacing={4}>
          {/* Left Column - Geometric Art */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ position: 'relative', width: '100%', height: 300 }}>
                {/* Dots Pattern top-left */}
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1.5, position: 'absolute', top: 20, left: 20, width: 60, opacity: 0.5 }}>
                  {Array.from({ length: 25 }).map((_, i) => <Box key={i} sx={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: theme.palette.text.secondary }} />)}
                </Box>
                {/* Square Wireframe top-right */}
                <Box sx={{ position: 'absolute', top: 0, right: 40, width: 80, height: 80, border: `1px solid ${theme.palette.primary.main}` }} />
                <Box sx={{ position: 'absolute', top: 20, right: 60, width: 80, height: 80, border: `1px solid ${theme.palette.text.secondary}` }} />
                {/* Medium Dots Pattern bottom-right */}
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1.5, position: 'absolute', bottom: 40, right: 20, width: 60, opacity: 0.7 }}>
                   {Array.from({ length: 25 }).map((_, i) => <Box key={i} sx={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: theme.palette.text.secondary }} />)}
                </Box>
                {/* Logo bottom-left */}
                <Box sx={{ position: 'absolute', bottom: 0, left: 40, width: 100, height: 100, border: `2px solid ${theme.palette.primary.main}`, opacity: 0.3 }} />
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column - Skill Boxes */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <SkillBox title="Languages" skills="TypeScript Lua Python JavaScript" />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <SkillBox title="Databases" skills="SQLite PostgreSQL Mongo" />
                  <SkillBox title="Other" skills="HTML CSS EJS SCSS REST Jinja" />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <SkillBox title="Tools" skills="VSCode Neovim Linux Figma XFCE Arch Git Font Awesome" />
                  <SkillBox title="Frameworks" skills="React Vue Disnake Discord.js Flask Express.js" />
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
