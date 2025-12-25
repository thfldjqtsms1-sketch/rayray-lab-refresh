import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Instagram, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: Mail, label: "Email", value: "Contact@RAYRAYlab.com", href: "mailto:Contact@RAYRAYlab.com" },
    { icon: Phone, label: "Phone", value: "+82) 10 3026 3156", href: "tel:+821030263156" },
    { icon: MapPin, label: "Location", value: "Seoul, Republic of Korea", href: "#" },
    { icon: Instagram, label: "Instagram", value: "@Rayraylab", href: "https://www.instagram.com/rayraylab" },
  ];

  return (
    <section id="contact" className="py-32 lg:py-48 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-6"
            >
              (06) Get in Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-7xl leading-tight mb-8"
            >
              Let's create
              <br />
              <span className="text-accent italic">something</span>
              <br />
              amazing
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground max-w-md text-sm leading-relaxed mb-12"
            >
              Ready to transform your brand's digital presence? 
              Let's discuss how we can bring your vision to life 
              with unique interactions and innovative solutions.
            </motion.p>

            <motion.a
              href="mailto:Contact@RAYRAYlab.com"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-4 px-8 py-4 bg-foreground text-background font-mono text-sm uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors duration-300 group"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>

          {/* Right Column */}
          <div className="lg:pt-16">
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center gap-6 py-6 border-b border-border/50 hover:border-accent/50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-1">
                      {item.label}
                    </span>
                    <span className="text-lg group-hover:text-accent transition-colors duration-300">
                      {item.value}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Services List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 p-8 border-gradient bg-card rounded-lg"
            >
              <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-4">
                Our Services
              </span>
              <div className="flex flex-wrap gap-2">
                {["UXUI Design", "Web Development", "Branding", "Planning"].map((service) => (
                  <span
                    key={service}
                    className="px-4 py-2 text-sm border border-border/50 rounded-full text-muted-foreground"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Circle */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 w-[600px] h-[600px] border border-border/10 rounded-full pointer-events-none" />
    </section>
  );
};

export default Contact;
