// src/components/ScrollDownButton.jsx
import SouthIcon from "@mui/icons-material/South";

const sections = ["home", "about", "services", "projects", "contact", "footer"];

export default function ScrollDownButton() {
  const scrollToNextSection = () => {
    const currentScroll = window.scrollY;

    // Check if last section is fully visible → scroll top
    const lastEl = document.getElementById(sections[sections.length - 1]);
    if (lastEl && isSectionFullyVisible(lastEl)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Scroll to next section
    for (let i = 0; i < sections.length; i++) {
      const el = document.getElementById(sections[i]);
      if (!el) continue;

      const top = el.offsetTop;

      if (top > currentScroll + 10) {
        window.scrollTo({ top: top, behavior: "smooth" });
        return;
      }
    }
  };

  // Helper: check if element fully in viewport
  const isSectionFullyVisible = (el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  return (
    <button
      onClick={scrollToNextSection}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-[#0B1120] text-white shadow-lg hover:bg-[#111827] transition z-50 animate-bounce"
      title="Scroll down"
    >
      <SouthIcon fontSize="medium" />
    </button>
  );
}