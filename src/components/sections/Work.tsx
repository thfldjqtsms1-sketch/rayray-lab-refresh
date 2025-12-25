import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "HILOWAVE",
    category: "UXUI, Web Development",
    date: "October 2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    color: "#E8A87C",
  },
  {
    id: 2,
    title: "Bigpicture Company",
    category: "UXUI, Web Development",
    date: "November 2023",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
    color: "#85CDCA",
  },
  {
    id: 3,
    title: "aL Studio",
    category: "UXUI, Web Development",
    date: "December 2022",
    image: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=800&q=80",
    color: "#C38D9E",
  },
  {
    id: 4,
    title: "Luminous Seoul",
    category: "UXUI, Web Development",
    date: "June 2022",
    image: "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=800&q=80",
    color: "#E27D60",
  },
  {
    id: 5,
    title: "Earth Library",
    category: "Web Development",
    date: "May 2022",
    image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&q=80",
    color: "#41B3A3",
  },
  {
    id: 6,
    title: "MATPLAZA",
    category: "UXUI, Web Development",
    date: "September 2024",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=800&q=80",
    color: "#F6AE2D",
  },
];

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 lg:py-48" ref={ref}>
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
              (04) Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              Selected
              <br />
              <span className="text-accent italic">projects</span>
            </motion.h2>
          </div>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === project.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                />
                
                {/* Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  style={{ backgroundColor: project.color }}
                />

                {/* View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-background" />
                  </div>
                </div>

                {/* Date Badge */}
                <span className="absolute top-4 right-4 px-4 py-2 glass rounded-full text-xs uppercase tracking-wider">
                  {project.date}
                </span>
              </div>

              {/* Content */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl lg:text-3xl mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {project.category}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300 flex-shrink-0 mt-2" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
