import Link from "next/link"
import Footer from "@/components/Footer"

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <section className="min-h-[80vh] flex items-center justify-center bg-black px-6 md:px-12">
        <div className="text-center">
          <h1 className="text-white text-[120px] md:text-[200px] font-bold leading-none mb-4">
            404
          </h1>
          <p className="text-[var(--color-gray)] text-xl mb-12 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white bg-[var(--color-accent)] px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
