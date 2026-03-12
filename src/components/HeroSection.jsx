import { Box, Container, Typography, Button, useTheme, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { GitHub } from "@mui/icons-material";
import { SiDiscord, SiFigma } from "react-icons/si";

// Dots grid decoration
const DotsPattern = ({ rows = 5, cols = 5, color }) => (
  <Box sx={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '8px', opacity: 0.45 }}>
    {Array.from({ length: rows * cols }).map((_, i) => (
      <Box key={i} sx={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: color }} />
    ))}
  </Box>
);

export default function HeroSection() {
  const theme = useTheme();

  const socialLinks = [
    { icon: <GitHub sx={{ fontSize: 22 }} />, href: "https://github.com", label: "GitHub" },
    { icon: <SiDiscord size={20} />, href: "#contact", label: "Discord" },
    { icon: <SiFigma size={20} />, href: "#", label: "Figma" },
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: "85vh",
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 8, md: 0 },
      }}
    >
      {/* ── FAR LEFT: Social Icons Vertical Strip (Absolute Desktop) ── */}
      <Box
        sx={{
          position: 'absolute',
          left: { md: 24, lg: 32 },
          top: -120, // Extended up to start from the screen top (past the sticky header)
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1.5,
          zIndex: 1100,
        }}
      >
        <Box sx={{ width: '1px', height: 300, backgroundColor: theme.palette.text.secondary, opacity: 0.5 }} />
        {socialLinks.map((s, i) => (
          <IconButton
            key={i}
            component="a"
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            aria-label={s.label}
            size="small"
            sx={{
              color: theme.palette.text.secondary,
              p: 0.5,
              '&:hover': { color: theme.palette.primary.main },
              transition: 'color 0.2s',
            }}
          >
            {s.icon}
          </IconButton>
        ))}
      </Box>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 6, md: 4 },
            pl: { md: 8 }, // Space for the social icons
          }}
        >
          {/* ── LEFT: Text Content ── */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { md: 540 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: '#FFFFFF',
                  mb: 3,
                  lineHeight: 1.1,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 600,
                  letterSpacing: '-0.5px',
                }}
              >
                Elias is a{' '}
                <Box component="span" sx={{ color: theme.palette.primary.main }}>web designer</Box>
                {' '}and{' '}
                <Box component="span" sx={{ color: theme.palette.primary.main }}>front-end developer</Box>
              </Typography>

              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 5,
                  maxWidth: 400,
                  mx: { xs: 'auto', md: 0 },
                  fontSize: '1rem',
                  lineHeight: 1.6,
                }}
              >
                He crafts responsive websites where technologies meet creativity
              </Typography>

              <Button
                variant="outlined"
                color="primary"
                href="#contact"
                disableRipple
                sx={{
                  px: 2,
                  py: 0.8,
                  fontSize: '1rem',
                  borderRadius: 0,
                  borderColor: theme.palette.primary.main,
                  color: '#FFFFFF',
                  textTransform: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    backgroundColor: 'rgba(199, 120, 221, 0.1)',
                  }
                }}
              >
                Contact me !!
              </Button>
            </motion.div>
          </Box>

          {/* ── RIGHT: Image + geometric decoration ── */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              mt: { xs: 4, md: 0 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              {/* Geometric Decoration: Overlapping Squares (Purple) */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '15%',
                  left: '-20%',
                  width: '90px',
                  height: '90px',
                  border: `1px solid ${theme.palette.primary.main}`,
                  zIndex: 0,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '10%',
                  left: '-15%',
                  width: '90px',
                  height: '90px',
                  border: `1px solid ${theme.palette.primary.main}`,
                  zIndex: 0,
                }}
              />

              {/* Geometric Decoration: Dots Grid */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: '-10%',
                  zIndex: 2,
                }}
              >
                <DotsPattern rows={5} cols={5} color={theme.palette.text.secondary} />
              </Box>

              {/* Profile Image (Using ansar.jpeg) */}
              <Box
                component="img"
                src="ansar.jpeg"
                alt="Portrait"
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  width: { xs: 240, md: 280, lg: 320 },
                  height: 'auto',
                  aspectRatio: '1/1.2',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'grayscale(100%)',
                  '&:hover': { filter: 'grayscale(0%)', transition: 'filter 0.5s' },
                }}
              />

              {/* "Currently working on Portfolio" badge */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -2,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  border: `1px solid ${theme.palette.text.secondary}`,
                  backgroundColor: theme.palette.background.default,
                  px: 2,
                  py: 0.8,
                  width: 'calc(100% - 20px)',
                  maxWidth: 'fit-content',
                }}
              >
                <Box sx={{ width: 14, height: 14, flexShrink: 0, backgroundColor: theme.palette.primary.main }} />
                <Typography sx={{ color: theme.palette.text.secondary, fontSize: '0.85rem', fontWeight: 500, whiteSpace: 'nowrap' }}>
                  Currently working on{' '}
                  <Box component="span" sx={{ color: '#FFFFFF' }}>Portfolio</Box>
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>

      {/* Mobile Social Icons Row */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center',
          gap: 3,
          width: '100%',
          py: 4,
          borderTop: `1px solid ${theme.palette.divider}`,
        }}
      >
        {socialLinks.map((s, i) => (
          <IconButton
            key={i}
            component="a"
            href={s.href}
            size="small"
            sx={{ color: theme.palette.text.secondary }}
          >
            {s.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}
