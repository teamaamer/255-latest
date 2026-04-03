import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ScrollingImages from "@/components/ScrollingImages";
import VideoBackgroundSection from "@/components/VideoBackgroundSection";
import PortfolioSection from "@/components/PortfolioSection";
import LogoTicker from "@/components/LogoTicker";
import Services from "@/components/Services";
import OurClients from "@/components/OurClients";
import Team from "@/components/Team";
import ClientStories from "@/components/ClientStories";
import AllClients from "@/components/AllClients";
import VideoShowcase from "@/components/VideoShowcase";
import FareedStory from "@/components/FareedStory";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import { clientsData } from "@/data/data";
import fs from "fs";
import path from "path";

export default async function Home() {
  // Dynamically read images from portfolio folders
  const portfolioSlides = clientsData.map((client, index) => {
    const folderPath = path.join(process.cwd(), 'public', 'portfolio', client.slug);
    let images: string[] = [];
    
    try {
      const files = fs.readdirSync(folderPath);
      images = files
        .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
        .sort()
        .slice(0, 9) // Only take first 9 images
        .map(file => `/portfolio/${client.slug}/${file}`);
    } catch (error) {
      console.error(`Error reading portfolio folder for ${client.slug}:`, error);
    }

    return {
      slug: client.slug,
      title: client.title,
      description: client.description,
      highlights: client.highlights,
      logo: `/portfolio/${String(index + 1).padStart(2, '0')}.webp`,
      images
    };
  });

  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <LogoTicker />
      {/* <VideoBackgroundSection>
        <Intro />
        <ScrollingImages />
      </VideoBackgroundSection> */}
      {/* <OurClients /> */}
      <AboutUs />
      <Partners />
      <Services />
      <PortfolioSection slides={portfolioSlides} />
      <Team />
      <FareedStory />
      <ClientStories />
      <AllClients />
      <VideoShowcase />
      <Contact />
      <Footer />
    </main>
  );
}
