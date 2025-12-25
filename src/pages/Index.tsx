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
        <title>CREO | 크리에이티브 디지털 에이전시</title>
        <meta
          name="description"
          content="CREO는 인터랙션 디자인, 웹 개발, 브랜딩, 기획을 전문으로 하는 서울 기반 크리에이티브 에이전시입니다."
        />
        <meta
          name="keywords"
          content="웹 개발, UXUI 디자인, 브랜딩, 크리에이티브 에이전시, 서울, 인터랙션 디자인, 디지털 마케팅"
        />
        <link rel="canonical" href="https://www.creo.studio" />
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