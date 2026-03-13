import Link from "next/link"
import Footer from "@/components/Footer"

const legalPages: Record<string, {
  title: string
  content: string[]
}> = {
  "privacy-policy": {
    title: "Privacy Policy",
    content: [
      "This Privacy Policy describes how 255 Agency ('we', 'us', or 'our') collects, uses, and shares information about you when you use our website and services.",
      "We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, company name, and message content.",
      "We use the information we collect to respond to your inquiries, provide and improve our services, send you updates and marketing communications (with your consent), and comply with legal obligations.",
      "We do not sell your personal information to third parties. We may share your information with service providers who assist us in operating our website and delivering our services.",
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      "You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time by following the unsubscribe instructions in our emails.",
      "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
    ],
  },
  "terms-of-service": {
    title: "Terms of Service",
    content: [
      "Welcome to 255 Agency. By accessing or using our website and services, you agree to be bound by these Terms of Service.",
      "Our subscription-based design services provide unlimited design requests and revisions. The specific scope and deliverables of each plan are outlined on our pricing page.",
      "You retain ownership of all intellectual property rights in the content you provide to us. Upon full payment, we grant you a perpetual, non-exclusive license to use the designs we create for you.",
      "Our services are provided 'as is' without warranty of any kind. We strive to deliver high-quality designs within the stated turnaround times, but exact timing may vary based on project complexity.",
      "You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing period. No refunds are provided for partial billing periods.",
      "We reserve the right to refuse service to anyone for any reason. We also reserve the right to modify or discontinue our services at any time with reasonable notice.",
      "These Terms of Service are governed by and construed in accordance with the laws of Italy. Any disputes arising from these terms shall be resolved in the courts of Milan, Italy.",
    ],
  },
  "disclaimer": {
    title: "Disclaimer",
    content: [
      "The information provided on the 255 Agency website is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the site.",
      "The website may contain links to other websites that are not owned or controlled by 255 Agency. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.",
      "Portfolio items and case studies displayed on our website are representative of our work and capabilities. Individual results may vary based on project scope, timeline, and other factors.",
      "Any testimonials or client quotes displayed on our website reflect the personal experiences and opinions of those individuals. Results are not guaranteed and may not reflect the typical experience of all clients.",
      "255 Agency reserves the right to make additions, deletions, or modifications to the contents on this website at any time without prior notice.",
      "Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site.",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }))
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = legalPages[slug]

  if (!page) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Page not found</h1>
          <Link href="/" className="text-[var(--color-accent)]">Back to Home</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <section className="pt-40 pb-20 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-12">{page.title}</h1>
          <div className="space-y-6">
            {page.content.map((paragraph, index) => (
              <p key={index} className="text-[var(--color-gray)] text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
            <p className="text-[var(--color-gray)] text-sm">
              Last updated: March 2026
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
