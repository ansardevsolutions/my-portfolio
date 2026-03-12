import React from "react";
import { Box, Container, Typography, Card, CardContent, Grid, useTheme, alpha } from "@mui/material";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const theme = useTheme();

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Leading frontend development for enterprise applications. Architecting component libraries and improving web performance metrics by 40%.",
    },
    {
      title: "Frontend Developer",
      company: "Startup Inc",
      period: "2020 - 2022",
      description: "Built responsive web applications tailored to real estate clients using React, TypeScript, and Material-UI.",
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Developed and maintained full-stack internal tooling and dynamic client-facing websites.",
    },
  ];

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="subtitle1" 
          textAlign="center"
          sx={{ 
            color: theme.palette.primary.main, 
            fontWeight: 600, 
            letterSpacing: '2px',
            mb: 2,
            textTransform: 'uppercase'
          }}
        >
          <span style={{ fontWeight: 'bold' }}>||</span> My Resume
        </Typography>

        <Typography variant="h2" gutterBottom textAlign="center" sx={{ mb: 8, color: '#FFFFFF' }}>
          Working Experience
        </Typography>

        <Box sx={{ maxWidth: 800, mx: "auto" }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  mb: 4,
                  bgcolor: theme.palette.background.default,
                  boxShadow: 'none',
                  borderTop: `1px solid ${alpha('#ffffff', 0.05)}`,
                  borderRight: `1px solid ${alpha('#ffffff', 0.05)}`,
                  borderBottom: `1px solid ${alpha('#ffffff', 0.05)}`,
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  borderRadius: 2,
                  transition: "all 0.3s",
                  "&:hover": { 
                    transform: "translateX(10px)",
                    boxShadow: `0 10px 30px ${alpha('#000', 0.5)}`
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <Typography variant="subtitle1" sx={{ color: theme.palette.primary.main, fontWeight: 600, mb: 1 }}>
                        {exp.period}
                      </Typography>
                      <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                        {exp.company}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Typography variant="h5" sx={{ color: '#FFFFFF', mb: 2 }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.8 }}>
                        {exp.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
