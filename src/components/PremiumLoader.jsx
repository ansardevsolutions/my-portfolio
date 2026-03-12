import { Box, Typography, Fade, keyframes } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ripple = keyframes`
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(2.4); opacity: 0; }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

export default function PremiumLoader({ open = true }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Fade in={open} timeout={600}>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 2000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: isDark
            ? `linear-gradient(135deg, ${
                theme.palette.background.default
              } 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`
            : `linear-gradient(135deg, ${
                theme.palette.background.paper
              } 0%, ${alpha(theme.palette.primary.main, 0.03)} 100%)`,
          overflow: "hidden",
        }}
      >
        {/* Animated background particles */}
        {[...Array(3)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: 600,
              height: 600,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${alpha(
                theme.palette.primary.main,
                0.03
              )} 0%, transparent 70%)`,
              animation: `${pulse} ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Main loader container */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: `${float} 3s ease-in-out infinite`,
          }}
        >
          {/* Outer rotating ring */}
          <Box
            sx={{
              position: "absolute",
              width: 120,
              height: 120,
              borderRadius: "50%",
              border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              borderTopColor: theme.palette.primary.main,
              borderRightColor: theme.palette.primary.main,
              animation: `${rotate} 2s linear infinite`,
            }}
          />

          {/* Middle rotating ring */}
          <Box
            sx={{
              position: "absolute",
              width: 90,
              height: 90,
              borderRadius: "50%",
              border: `2px solid ${alpha(theme.palette.primary.main, 0.15)}`,
              borderBottomColor:
                theme.palette.secondary.main || theme.palette.primary.light,
              borderLeftColor:
                theme.palette.secondary.main || theme.palette.primary.light,
              animation: `${rotate} 1.5s linear infinite reverse`,
            }}
          />

          {/* Ripple effects */}
          {[0, 1, 2].map((i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: 80,
                height: 80,
                borderRadius: "50%",
                border: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
                animation: `${ripple} 2s ease-out infinite`,
                animationDelay: `${i * 0.6}s`,
              }}
            />
          ))}

          {/* Center icon/dot with glow */}
          <Box
            sx={{
              position: "relative",
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              boxShadow: `0 0 30px ${alpha(
                theme.palette.primary.main,
                0.6
              )}, 0 0 60px ${alpha(theme.palette.primary.main, 0.3)}`,
              animation: `${pulse} 2s ease-in-out infinite`,
            }}
          />
        </Box>

        {/* Brand text with shimmer effect */}
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: `linear-gradient(90deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.text.primary} 100%)`,
              backgroundSize: "1000px 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: `${shimmer} 3s linear infinite`,
            }}
          >
            Loading Portfolio
          </Typography>

          {/* Progress dots */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {[0, 1, 2].map((i) => (
              <Box
                key={i}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: theme.palette.primary.main,
                  animation: `${pulse} 1.4s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </Box>

          <Typography
            variant="caption"
            sx={{
              mt: 1,
              color: alpha(theme.palette.text.secondary, 0.7),
              letterSpacing: "0.05em",
            }}
          >
            Crafting your experience
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
}
