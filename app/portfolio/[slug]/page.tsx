import { clientsData } from "@/data/data"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Footer from "@/components/Footer"
import PortfolioDetailContent from "@/components/PortfolioDetailContent"
import { ArrowLeft } from "lucide-react"
import fs from "fs"
import path from "path"

export async function generateStaticParams() {
  return clientsData.map((client) => ({
    slug: client.slug,
  }))
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const client = clientsData.find((c) => c.slug === slug)

  if (!client) {
    notFound()
  }

  const clientIndex = clientsData.findIndex((c) => c.slug === slug)
  const folderName = client.slug
  
  // Read all images from the portfolio subfolder
  const portfolioFolderPath = path.join(process.cwd(), 'public', 'portfolio', folderName)
  let portfolioImages: string[] = []
  
  try {
    const files = fs.readdirSync(portfolioFolderPath)
    portfolioImages = files
      .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .sort()
      .map(file => `/portfolio/${folderName}/${file}`)
  } catch (error) {
    console.error(`Error reading portfolio folder for ${folderName}:`, error)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-24 left-6 md:left-12 z-50">
        <Link
          href="/portfolio"
          className="flex items-center gap-2 text-black hover:text-[var(--color-accent)] transition-colors bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Portfolio</span>
        </Link>
      </div>

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center bg-[var(--color-accent)] px-6 md:px-12 pt-40 md:pt-48 pb-20">
        <div className="container mx-auto">
          {/* Banner Image - small, above header, left aligned */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg inline-block bg-white">
            <Image
              src={`/portfolio/${String(clientIndex + 1).padStart(2, '0')}.webp`}
              alt={client.title}
              width={320}
              height={160}
              className="object-contain max-w-[320px] max-h-[160px] w-auto h-auto block"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-left text-white">
            {client.title}
          </h1>
          {client.description && (
            <p className="text-white/90 text-lg md:text-xl w-full text-justify whitespace-pre-line">
              {client.description}
            </p>
          )}
        </div>
      </section>

      {/* Project Images Gallery with Lightbox */}
      <PortfolioDetailContent clientTitle={client.title} images={portfolioImages} />

      {/* Next Project */}
      <section className="py-32 px-6 md:px-12 bg-[var(--color-light-gray)]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Explore More Projects
          </h2>
          <Link
            href="/portfolio"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
