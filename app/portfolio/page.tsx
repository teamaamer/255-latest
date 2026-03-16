import { clientsData } from "@/data/data"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="min-h-[40vh] flex items-end bg-black px-6 md:px-12 pb-12 pt-24">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                Our Portfolio
              </h1>
              <p className="text-white/60 text-xl max-w-2xl">
                Explore our selected works and the brands we've helped transform through strategic design and creative excellence.
              </p>
            </div>
            
            {/* Company Profile Button */}
            <Link
              href="/portfolio-viewer"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[#ff5515] text-white px-6 py-3 rounded-full font-bold transition-colors whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Company Profile
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientsData.map((client, index) => (
              <Link
                key={index}
                href={`/portfolio/${client.slug}`}
                className="group"
              >
                <div className="aspect-[4/3] bg-[var(--color-light-gray)] rounded-lg overflow-hidden mb-4 relative">
                  <Image
                    src={`/portfolio/${String(index + 1).padStart(2, '0')}.webp`}
                    alt={client.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  {client.title}
                </h3>
                {client.description && (
                  <p className="text-[var(--color-gray)] line-clamp-2">
                    {client.description.substring(0, 120)}...
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
