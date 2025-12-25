import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code, Megaphone, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Palette,
    number: "01",
    title: "UXUI Design",
    description:
      "Creating intuitive and visually stunning interfaces that enhance user experience and drive engagement.",
    tags: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
  },
  {
    icon: Code,
    number: "02",
    title: "Web Development",
    description:
      "Building performant, scalable websites with cutting-edge technologies including Three.js and interactive animations.",
    tags: ["React", "Three.js", "TypeScript", "Animation"],
  },
  {
    icon: Megaphone,
    number: "03",
    title: "Digital Marketing",
    description:
      "Strategic digital marketing solutions that amplify your brand presence and connect with your target audience.",
    tags: ["SEO", "Content Strategy", "Analytics", "Campaign"],
  },
  {
    icon: Lightbulb,
    number: "04",
    title: "Brand Planning",
    description:
      "Comprehensive brand strategy and planning that defines your unique identity and market positioning.",
    tags: ["Strategy", "Identity", "Guidelines", "Positioning"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 lg:py-48 bg-card relative" ref={ref}>
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-6"
            >
              (03) What's Unique
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              Services that make
              <br />
              <span className="text-accent italic">brands shine</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground max-w-md text-sm leading-relaxed"
          >
            We take pride in viewing brands from various perspectives and 
            expressing them in a multidimensional way.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group relative p-8 lg:p-10 bg-background border border-border/50 rounded-lg hover:border-accent/50 transition-all duration-500"
            >
              {/* Number */}
              <span className="absolute top-8 right-8 text-6xl font-serif text-border/50 group-hover:text-accent/30 transition-colors duration-500">
                {service.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center mb-8 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500">
                <service.icon className="w-6 h-6 text-foreground/70 group-hover:text-accent transition-colors duration-500" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl lg:text-3xl mb-4 group-hover:text-accent transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground border border-border/50 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-lg bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
    </section>
  );
};

export default Services;
