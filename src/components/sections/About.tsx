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
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
            >
              <span className="text-accent italic">특별한</span>{" "}
              경험을 디자인합니다
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                단순히 남들이 시도하지 않은 것이 아닌, 브랜드가 가진 고유한 
                가치와 철학을 깊이 이해하고 이를 사용자와 상호작용하는 
                브랜드만의 방식으로 표현합니다.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                브랜드를 제대로 이해하는 인사이트는 남다른 감동을 만들어 
                냅니다. 우리는 깊은 이해를 바탕으로 차별화된 디지털 
                경험을 설계합니다.
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
                  Our Philosophy
                </span>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  수많은 브랜드가 존재하듯, 인터랙션도 다양하고 창의적인 
                  방식으로 디자인될 수 있습니다. CREO는 브랜드만의 
                  고유한 인터랙션을 웹에서 실현합니다.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center p-6 border border-border/50 rounded-lg"
                >
                  <span className="font-serif text-5xl text-accent block mb-2">120+</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    프로젝트
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center p-6 border border-border/50 rounded-lg"
                >
                  <span className="font-serif text-5xl text-accent block mb-2">8+</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    수상 경력
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
                <span>서울 기반 크리에이티브 에이전시</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Brand Text */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="marquee-track-reverse whitespace-nowrap">
          {Array(10).fill("CREO").map((text, index) => (
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