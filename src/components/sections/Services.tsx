import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code, Megaphone, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Palette,
    number: "01",
    title: "UXUI 디자인",
    description:
      "직관적이고 시각적으로 아름다운 인터페이스를 만들어 사용자 경험을 향상시키고 참여도를 높입니다.",
    tags: ["사용자 리서치", "와이어프레임", "프로토타이핑", "비주얼 디자인"],
  },
  {
    icon: Code,
    number: "02",
    title: "웹 개발",
    description:
      "Three.js와 인터랙티브 애니메이션을 포함한 최신 기술로 고성능의 확장 가능한 웹사이트를 구축합니다.",
    tags: ["React", "Three.js", "TypeScript", "Animation"],
  },
  {
    icon: Megaphone,
    number: "03",
    title: "디지털 마케팅",
    description:
      "브랜드 존재감을 높이고 타겟 고객과 연결하는 전략적 디지털 마케팅 솔루션을 제공합니다.",
    tags: ["SEO", "콘텐츠 전략", "분석", "캠페인"],
  },
  {
    icon: Lightbulb,
    number: "04",
    title: "브랜드 기획",
    description:
      "고유한 정체성과 시장 포지셔닝을 정의하는 종합적인 브랜드 전략 및 기획을 제공합니다.",
    tags: ["전략", "아이덴티티", "가이드라인", "포지셔닝"],
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
              Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              브랜드를 빛나게 하는
              <br />
              <span className="text-accent italic">서비스</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground max-w-md text-sm leading-relaxed"
          >
            다양한 관점에서 브랜드를 바라보고 
            입체적으로 표현하는 것이 우리의 강점입니다.
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