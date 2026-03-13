import { clientsData } from "@/data/data"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="min-h-[60vh] flex items-end bg-black px-6 md:px-12 pb-20 pt-32">
        <div className="container mx-auto">
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            Our Portfolio
          </h1>
          <p className="text-white/60 text-xl max-w-2xl">
            Explore our selected works and the brands we've helped transform through strategic design and creative excellence.
          </p>
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
