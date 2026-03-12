import { Box, Container, Typography, useTheme, alpha } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function QuoteSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="quote"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ position: "relative", mx: "auto", width: "fit-content" }}>
            
            {/* Main Quote Box */}
            <Box
              sx={{
                border: `1px solid ${theme.palette.text.secondary}`,
                p: { xs: 3, md: 4 },
                position: "relative",
                zIndex: 1,
                backgroundColor: theme.palette.background.default
              }}
            >
              {/* Top Left Quote Icon */}
              <Box 
                sx={{ 
                  position: "absolute", 
                  top: -12, 
                  left: 12, 
                  backgroundColor: theme.palette.background.default,
                  px: 0.5,
                  color: theme.palette.text.secondary,
                  lineHeight: 0
                }}
              >
                <FormatQuote sx={{ transform: "rotate(180deg)", fontSize: 24 }} />
              </Box>

              <Typography 
                variant="h4" 
                sx={{ 
                  color: "#FFFFFF", 
                  fontWeight: 500, 
                  fontSize: { xs: "1.1rem", md: "1.5rem" },
                  lineHeight: 1.5,
                  letterSpacing: '0.2px'
                }}
              >
                With great power comes great electricity bill
              </Typography>

              {/* Bottom Right Quote Icon */}
              <Box 
                sx={{ 
                  position: "absolute", 
                  bottom: -12, 
                  right: 12, 
                  backgroundColor: theme.palette.background.default,
                  px: 0.5,
                  color: theme.palette.text.secondary,
                  lineHeight: 0
                }}
              >
                <FormatQuote sx={{ fontSize: 24 }} />
              </Box>
            </Box>

            {/* Attribution Box */}
            <Box
              sx={{
                border: `1px solid ${theme.palette.text.secondary}`,
                borderTop: 'none',
                p: { xs: 1.5, md: 2 },
                ml: "auto",
                width: "fit-content",
                position: "relative"
              }}
            >
              <Typography variant="body1" sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: { xs: "0.9rem", md: "1.1rem" } }}>
                - Dr. Who
              </Typography>

              {/* Decorative square frame partially visible on the right */}
              <Box 
                sx={{ 
                  position: "absolute",
                  top: "20%",
                  left: "100%",
                  width: 60,
                  height: 60,
                  border: `1px solid ${theme.palette.text.secondary}`,
                  ml: 2,
                  zIndex: 0,
                  display: { xs: 'none', md: 'block' }
                }}
              />
            </Box>

          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
