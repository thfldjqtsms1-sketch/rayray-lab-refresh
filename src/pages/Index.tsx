import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Awards from "@/components/sections/Awards";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>RAYRAYlab | Creative Web Agency in Seoul</title>
        <meta
          name="description"
          content="RAYRAYlab is a creative agency specializing in interaction design, web development, branding, and planning. We craft innovative digital experiences."
        />
        <meta
          name="keywords"
          content="web development, UXUI design, branding, creative agency, Seoul, interaction design, Three.js"
        />
        <link rel="canonical" href="https://www.rayraylab.com" />
      </Helmet>

      <div className="relative">
        {/* Noise Overlay */}
        <div className="noise-overlay" />

        <Header />

        <main>
          <Hero />
          <About />
          <Services />
          <Work />
          <Awards />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
