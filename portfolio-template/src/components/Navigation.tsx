import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-background/80 shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold"
          >
            <span className="text-gradient">Portfolio</span>
          </motion.div>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="p-2"
                >
                  <Menu className="w-6 h-6" />
                </motion.button>
              </DrawerTrigger>
              <DrawerContent className="h-full w-64 ml-auto top-0 right-0 bottom-0 rounded-none border-l">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-xl font-bold text-gradient">Menu</span>
                    <DrawerClose className="p-2">
                      <X className="w-6 h-6" />
                    </DrawerClose>
                  </div>
                  <div className="space-y-4">
                    {navItems.map((item) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className={`block text-lg font-medium transition-colors ${
                          activeSection === item.href.substring(1)
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        whileHover={{ x: 5 }}
                        onClick={() => {
                          // Drawer will close automatically when link is clicked
                        }}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
