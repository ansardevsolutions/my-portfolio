import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, useTheme, alpha } from "@mui/material";
import { Code, Palette, Speed } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const theme = useTheme();

  const services = [
    {
      icon: <Code fontSize="large" />,
      title: "Web Development",
      description: "Architecting and writing maintainable, scalable, and efficient code following modern industry best practices."
    },
    {
      icon: <Palette fontSize="large" />,
      title: "UI/UX Design",
      description: "Creating visually stunning digital interfaces that provide highly engaging and functional user experiences."
    },
    {
      icon: <Speed fontSize="large" />,
      title: "Optimization",
      description: "Refactoring and optimizing complex web applications for blazing fast speed and performance."
    }
  ];

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: theme.palette.background.default,
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
          <span style={{ fontWeight: 'bold' }}>||</span> My Services
        </Typography>
        
        <Typography variant="h2" textAlign="center" gutterBottom sx={{ mb: 8, color: '#FFFFFF' }}>
          What I Can Do for You
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: "100%",
                    bgcolor: theme.palette.background.paper,
                    borderRadius: 4,
                    border: `1px solid ${alpha('#ffffff', 0.05)}`,
                    transition: "all 0.4s ease",
                    '&:hover': {
                      transform: "translateY(-10px)",
                      borderColor: theme.palette.primary.main,
                      boxShadow: `0 15px 40px ${alpha(theme.palette.primary.main, 0.15)}`
                    }
                  }}
                >
                  <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                    <Box 
                      sx={{ 
                        display: 'inline-flex',
                        p: 2.5, 
                        borderRadius: '16px', 
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        mb: 4
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography variant="h4" gutterBottom sx={{ color: '#FFFFFF', mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.8 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
