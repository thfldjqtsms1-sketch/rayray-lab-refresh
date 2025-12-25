import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const marqueeItems = [
    "Creative Dev",
    "Logical Design",
    "Website",
    "Experience Lab",
    "Planning",
    "In Seoul",
    "Digital Marketing",
    "Branding",
    "UXUI Design",
    "Web Development",
    "THREE.js",
    "Dynamic",
    "Interaction",
    "Creativity",
    "Unique",
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50" />
      
      {/* Animated Circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/10 rounded-full"
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              (01) Creative Agency
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tight"
            >
              We craft
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tight"
            >
              <span className="text-outline">innovative</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tight"
            >
              digital <span className="text-accent">experiences</span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground max-w-xl text-sm md:text-base leading-relaxed mb-16"
          >
            RayRayLab is a creative agency specializing in interaction design, 
            web development, branding, and planning. We combine creativity with 
            cutting-edge technology to deliver unique digital experiences.
          </motion.p>

          {/* CTA */}
          <motion.a
            href="#work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center gap-4 text-sm uppercase tracking-widest group"
          >
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              View Our Work
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.a>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 py-4 overflow-hidden">
        <div className="marquee-track whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={index}
              className="inline-block mx-8 text-sm uppercase tracking-widest text-muted-foreground"
            >
              {item}
              <span className="inline-block mx-8 text-accent">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
