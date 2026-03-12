import React from "react";
import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const completeApps = [
  {
    title: "ChertNode",
    description: "Minecraft servers hosting",
    tech: "HTML SCSS Python Flask",
    accentColor: "#E06C75",
    bgColor: "#1a0808",
    label: "Hosting",
    live: "#",
    github: "Github >=",
    hasGithub: true,
  },
  {
    title: "Kahoot Answers Viewer",
    description: "Get answers to your kahoot quiz",
    tech: "CSS Express Node.js",
    accentColor: "#98C379",
    bgColor: "#0a1508",
    label: "Tool",
    live: null,
    hasGithub: true,
  },
  {
    title: "ProtectX",
    description: "Discord anti-crash bot",
    tech: "React Express Discord.js Node.js",
    accentColor: "#5865F2",
    bgColor: "#08090e",
    label: "Bot",
    live: "#",
    hasGithub: false,
  },
  {
    title: "Bot Kotik",
    description: "Multi-functional telegram bot",
    tech: "CSS JS",
    accentColor: "#56B6C2",
    bgColor: "#081214",
    label: "Bot",
    live: "#",
    hasGithub: false,
  },
  {
    title: "Elias Portfolio",
    description: "First version of my portfolio website",
    tech: "HTML CSS",
    accentColor: "#C778DD",
    bgColor: "#120814",
    label: "Portfolio",
    live: "#",
    hasGithub: false,
  },
  {
    title: "Portfolio",
    description: "This is going to be wow",
    tech: "React",
    accentColor: "#E5C07B",
    bgColor: "#141008",
    label: "WIP",
    live: "#",
    hasGithub: false,
  },
];

const smallProjects = [
  { title: "Bot boilerplate", description: "Customizable template for discord.js bot with commonly used functionality", tech: "Python JS", github: true },
  { title: "My Blog", description: "First version of my future-blog website article on vue.js", tech: "Vue CSS", live: true },
  { title: "Chess pro", description: "Simple blogging app about newest trends for winning chess games", tech: "HTML CSS", github: true },
  { title: "Crush protect website", description: "Figma template for website crush project in css", tech: "HTML CSS", live: true },
  { title: "CSS xrequirements", description: "Learning about the newest little projects in css", tech: "HTML CSS", live: true },
  { title: "VnB Dev vmconfig", description: "One of my favorite projects for the dev web developer", tech: "Leo Nardo", github: true },
  { title: "Deku", description: "Simply link business with eight characters", tech: "Python HTML", github: true },
  { title: "School website", description: "Figma template website for my school", tech: "Figma", live: true },
  { title: "Tigre", description: "", tech: "HTML CSS", live: true },
];

const ProjectCard = ({ project, index }) => {
  const theme = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      style={{ height: "100%" }}
    >
      <Box
        sx={{
          border: `1px solid ${theme.palette.divider}`,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          transition: "border-color 0.2s",
          "&:hover": { borderColor: theme.palette.primary.main },
        }}
      >
        {/* Image / Color block */}
        <Box
          sx={{
            height: 150,
            backgroundColor: project.bgColor,
            borderBottom: `1px solid ${theme.palette.divider}`,
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, backgroundColor: project.accentColor }} />
          <Typography sx={{ color: project.accentColor, fontWeight: 700, fontSize: "2.5rem", opacity: 0.25, userSelect: "none" }}>
            {project.title.charAt(0).toUpperCase()}
          </Typography>
          <Box sx={{ position: "absolute", bottom: 8, right: 8, border: `1px solid ${project.accentColor}`, px: 0.75, py: 0.25 }}>
            <Typography sx={{ color: project.accentColor, fontSize: "0.6rem" }}>{project.label}</Typography>
          </Box>
        </Box>

        {/* Tech */}
        <Box sx={{ px: 1.5, py: 0.75, borderBottom: `1px solid ${theme.palette.divider}` }}>
          <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.7rem" }}>{project.tech}</Typography>
        </Box>

        {/* Content */}
        <Box sx={{ p: 1.5, flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Typography sx={{ color: "#FFFFFF", fontWeight: 500, mb: 0.5, fontSize: "1rem" }}>{project.title}</Typography>
          <Typography sx={{ color: theme.palette.text.secondary, mb: 2, flexGrow: 1, fontSize: "0.8rem", lineHeight: 1.6 }}>{project.description}</Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {project.live && (
              <Button variant="outlined" size="small" href={project.live} sx={{ fontSize: "0.7rem", px: 1.25, py: 0.4 }}>
                Live &lt;~&gt;
              </Button>
            )}
            {project.hasGithub && (
              <Button variant="outlined" size="small" sx={{ fontSize: "0.7rem", px: 1.25, py: 0.4, borderColor: "text.secondary", color: "text.secondary", "&:hover": { borderColor: "#fff", color: "#fff" } }}>
                Github &gt;=
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

const SmallCard = ({ project, index }) => {
  const theme = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Box
        sx={{
          border: `1px solid ${theme.palette.divider}`,
          p: 1.5,
          display: "flex",
          flexDirection: "column",
          gap: 0.75,
          "&:hover": { borderColor: theme.palette.primary.main },
          transition: "border-color 0.2s",
          height: "100%",
        }}
      >
        <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.65rem" }}>{project.tech}</Typography>
        <Typography sx={{ color: "#FFFFFF", fontWeight: 500, fontSize: "0.9rem" }}>{project.title}</Typography>
        <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.75rem", lineHeight: 1.55, flexGrow: 1 }}>{project.description}</Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 0.5 }}>
          {project.live && (
            <Button variant="outlined" size="small" sx={{ fontSize: "0.65rem", px: 1, py: 0.3, minWidth: "unset" }}>
              Live &lt;~&gt;
            </Button>
          )}
          {project.github && (
            <Button variant="outlined" size="small" sx={{ fontSize: "0.65rem", px: 1, py: 0.3, minWidth: "unset", borderColor: "text.secondary", color: "text.secondary" }}>
              Github &gt;=
            </Button>
          )}
        </Box>
      </Box>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const theme = useTheme();

  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 10 }, bgcolor: theme.palette.background.default }}>
      <Container maxWidth="lg" sx={{ pl: { md: "64px" } }}>

        {/* Main Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
          <Box>
            <Typography variant="h3" sx={{ color: "#FFFFFF", fontWeight: 500, fontSize: { xs: "1.8rem", md: "2.2rem" } }}>
              <Box component="span" sx={{ color: theme.palette.primary.main }}>/</Box>projects
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.9rem", mt: 0.5 }}>
              List of my projects:
            </Typography>
          </Box>
          <Button disableRipple sx={{ color: "#FFFFFF", fontSize: "0.85rem", "&:hover": { color: theme.palette.text.secondary, backgroundColor: "transparent" }, whiteSpace: "nowrap" }}>
            View all ~~~&gt;
          </Button>
        </Box>

        {/* #complete-apps */}
        <Box sx={{ mb: 6 }}>
          <Typography sx={{ color: "#FFFFFF", mb: 2, fontSize: "1rem" }}>
            <Box component="span" sx={{ color: theme.palette.primary.main }}>#</Box>complete-apps
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 2 }}>
            {completeApps.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </Box>
        </Box>

        {/* #small-projects */}
        <Box>
          <Typography sx={{ color: "#FFFFFF", mb: 2, fontSize: "1rem" }}>
            <Box component="span" sx={{ color: theme.palette.primary.main }}>#</Box>small-projects
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 2 }}>
            {smallProjects.map((project, index) => (
              <SmallCard key={index} project={project} index={index} />
            ))}
          </Box>
        </Box>

      </Container>
    </Box>
  );
}
