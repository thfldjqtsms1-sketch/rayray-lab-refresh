import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 lg:py-48 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-6"
            >
              (02) Who We Are
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
            >
              RAYRAYlab pursues{" "}
              <span className="text-accent italic">unique</span>{" "}
              Interactions
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                Not just a unique that no one has attempted, we delve into a brand's 
                values and philosophy to create tailored, meaningful experiences. 
                Deep brand insights create a uniquely powerful impact.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                레이레이랩은 남다른 인터랙션을 지향합니다. 단순히 남들이 시도하지 
                않은 다름이 아닌, 브랜드가 가지는 고유한 가치와 철학을 이해하고 
                이를 브랜드만의 방식으로 사용자와 상호작용하는 것을 선호합니다.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="border-gradient bg-card p-8 rounded-lg">
                <span className="text-accent text-xs uppercase tracking-widest block mb-4">
                  Philosophy
                </span>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Just as there are countless brands, interactions can be designed 
                  in a variety of creative and dynamic ways to enhance user engagement. 
                  RAYRAYlab helps bring your brand's unique interaction to life on the web.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center p-6 border border-border/50 rounded-lg"
                >
                  <span className="font-serif text-5xl text-accent block mb-2">50+</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    Projects
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center p-6 border border-border/50 rounded-lg"
                >
                  <span className="font-serif text-5xl text-accent block mb-2">5+</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    Awards
                  </span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-4 text-sm text-muted-foreground"
              >
                <div className="w-12 h-px bg-accent" />
                <span>Based in Seoul, Korea</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Brand Text */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="marquee-track-reverse whitespace-nowrap">
          {Array(10).fill("BRAND").map((text, index) => (
            <span
              key={index}
              className="inline-block mx-8 font-serif text-[20vw] uppercase"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
