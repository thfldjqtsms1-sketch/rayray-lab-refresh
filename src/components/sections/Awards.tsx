import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star } from "lucide-react";

const awards = [
  { title: "Awwwards", category: "Honorable Mention", year: "2024", count: 3 },
  { title: "CSS Design Awards", category: "Best UI Design", year: "2024", count: 2 },
  { title: "FWA", category: "Site of the Day", year: "2023", count: 1 },
  { title: "The Webby Awards", category: "Best Visual Design", year: "2023", count: 1 },
];

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 lg:py-48 bg-card relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-6"
          >
            (05) Recognition
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl leading-tight mb-8"
          >
            Awards &{" "}
            <span className="text-accent italic">Recognition</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-sm lg:text-base leading-relaxed"
          >
            RAYRAYlab has demonstrated its creativity and expertise through awards. 
            With proven know-how and innovation, we elevate your brand and deliver optimal solutions.
          </motion.p>
        </div>

        {/* Awards List */}
        <div className="max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group border-b border-border/50 py-8 flex items-center justify-between hover:border-accent/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                  <Award className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h3 className="font-serif text-xl lg:text-2xl group-hover:text-accent transition-colors duration-300">
                    {award.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {award.category}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="hidden sm:flex items-center gap-1">
                  {Array(award.count).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-mono">
                  {award.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center text-muted-foreground text-sm mt-16 max-w-xl mx-auto"
        >
          RayRaylab is a one-person web agency. The ability to understand development 
          while designing, and to appreciate design while developing, creates a unique 
          synergy that enhances creativity and leads to innovative solutions.
        </motion.p>
      </div>
    </section>
  );
};

export default Awards;
