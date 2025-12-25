import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <span className="font-serif text-2xl tracking-tight">
              CREO<span className="text-accent">.</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} CREO. All Rights Reserved.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>맨 위로</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;