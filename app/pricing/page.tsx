import Navigation from "@/components/Navigation"
import PlanComparison from "@/components/PlanComparison"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Pricing - 255 Agency",
  description: "Explore our social media management packages and find the perfect plan for your business needs.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-44 pb-20 px-6 md:px-12 bg-[rgb(255,68,0)]">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Simple, Transparent Pricing
            </h1>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">
              Choose the perfect plan to elevate your brand's social media presence. 
              All packages include dedicated support and measurable results.
            </p>
          </div>
        </section>

        {/* Detailed Plan Sections */}
        {/* Starter Plan Details */}
        <section id="starter-details" className="py-20 px-6 md:px-12 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-block bg-[rgb(255,68,0)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Starter Plan
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Perfect for Small Businesses
                </h2>
                <p className="text-[var(--color-gray)] text-lg mb-8">
                  Get started with professional social media management at an affordable price. 
                  Our Starter plan provides everything you need to establish your brand's online presence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgb(255,68,0)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(255,68,0)]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">6 Custom Designs</h4>
                      <p className="text-[var(--color-gray)] text-sm">Professionally crafted graphics tailored to your brand identity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgb(255,68,0)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(255,68,0)]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">2 Engaging Reels</h4>
                      <p className="text-[var(--color-gray)] text-sm">Short-form video content optimized for maximum engagement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgb(255,68,0)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(255,68,0)]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Facebook & Instagram Ads</h4>
                      <p className="text-[var(--color-gray)] text-sm">Targeted advertising campaigns to reach your ideal audience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgb(255,68,0)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(255,68,0)]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Page Management</h4>
                      <p className="text-[var(--color-gray)] text-sm">Daily monitoring, posting, and community engagement</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">What You'll Get</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-[rgb(255,68,0)]">✓</span> Content calendar planning
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-[rgb(255,68,0)]">✓</span> Brand-consistent visuals
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-[rgb(255,68,0)]">✓</span> Monthly performance reports
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-[rgb(255,68,0)]">✓</span> Email support
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-[rgb(255,68,0)]">✓</span> 2 platforms managed
                  </li>
                </ul>
                <div className="border-t border-gray-200 pt-6">
                  <a href="#contact" className="block w-full bg-[rgb(255,68,0)] text-white py-3 rounded-full font-semibold hover:bg-[#ff5515] transition-colors text-center">
                    Contact for Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Plan Details */}
        <section id="growth-details" className="py-20 px-6 md:px-12 bg-[#1a1a1a]">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="bg-[#2a2a2a] rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-white">What You'll Get</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-[rgb(255,68,0)]">✓</span> Advanced content strategy
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-[rgb(255,68,0)]">✓</span> Multi-platform optimization
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-[rgb(255,68,0)]">✓</span> Bi-weekly performance reviews
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-[rgb(255,68,0)]">✓</span> Dedicated account manager
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-[rgb(255,68,0)]">✓</span> 3 platforms managed
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-[rgb(255,68,0)]">✓</span> Priority support
                  </li>
                </ul>
                <div className="border-t border-white/10 pt-6">
                  <a href="#contact" className="block w-full bg-[rgb(255,68,0)] text-white py-3 rounded-full font-semibold hover:bg-[#ff5515] transition-colors text-center">
                    Contact for Pricing
                  </a>
                </div>
              </div>
              <div>
                <div className="inline-block bg-[rgb(255,68,0)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Growth Plan
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Scale Your Brand Presence
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Take your social media to the next level with expanded content creation, 
                  multi-platform management, and dedicated support to drive real growth.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgb(255,68,0)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(255,68,0)]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white">10 Custom Designs</h4>
                      <p className="text-gray-400 text-sm">More content to keep your audience engaged consistently</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgb(255,68,0)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(255,68,0)]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white">5 High-Quality Reels</h4>
                      <p className="text-gray-400 text-sm">Increased video content for better reach and engagement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgb(255,68,0)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(255,68,0)]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white">Extended Ad Coverage</h4>
                      <p className="text-gray-400 text-sm">Facebook, Instagram & TikTok advertising campaigns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgb(255,68,0)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(255,68,0)]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white">Account Manager</h4>
                      <p className="text-gray-400 text-sm">Your dedicated point of contact for strategy and support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Plan Details */}
        <section id="pro-details" className="py-20 px-6 md:px-12 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center gap-2 bg-[rgb(255,68,0)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <span>Pro Plan</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">Recommended</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Maximum Impact & Results
                </h2>
                <p className="text-[var(--color-gray)] text-lg mb-8">
                  Our most popular plan delivers comprehensive social media management with advanced features, 
                  motion graphics, and multi-platform advertising for serious growth.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgb(255,68,0)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(255,68,0)]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">15 Premium Designs</h4>
                      <p className="text-[var(--color-gray)] text-sm">High-volume content creation for consistent posting</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgb(255,68,0)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(255,68,0)]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">3 Reels + Motion Graphics</h4>
                      <p className="text-[var(--color-gray)] text-sm">Professional video content with advanced animations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgb(255,68,0)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(255,68,0)]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Full Platform Coverage</h4>
                      <p className="text-[var(--color-gray)] text-sm">Facebook, Instagram, TikTok & Google Ads management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgb(255,68,0)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(255,68,0)]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Advanced Analytics</h4>
                      <p className="text-[var(--color-gray)] text-sm">Detailed reports with actionable insights and guidelines</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-[rgb(255,68,0)]">
                <h3 className="text-2xl font-bold mb-6">What You'll Get</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-[rgb(255,68,0)]">✓</span> Comprehensive content strategy
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-[rgb(255,68,0)]">✓</span> Motion graphics & animations
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-[rgb(255,68,0)]">✓</span> Weekly performance analysis
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-[rgb(255,68,0)]">✓</span> Strategic planning sessions
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-[rgb(255,68,0)]">✓</span> 4+ platforms managed
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-[rgb(255,68,0)]">✓</span> Priority 24/7 support
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-[rgb(255,68,0)]">✓</span> Brand guidelines document
                  </li>
                </ul>
                <div className="border-t border-gray-200 pt-6">
                  <a href="#contact" className="block w-full bg-[rgb(255,68,0)] text-white py-3 rounded-full font-semibold hover:bg-[#ff5515] transition-colors text-center">
                    Contact for Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Plan Details */}
        <section id="enterprise-details" className="py-20 px-6 md:px-12 bg-[#1a1a1a]">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="bg-[#2a2a2a] rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-white">What You'll Get</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-[rgb(255,68,0)]">✓</span> Full-service management
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-[rgb(255,68,0)]">✓</span> Unlimited revisions
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-[rgb(255,68,0)]">✓</span> Daily performance monitoring
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-[rgb(255,68,0)]">✓</span> Dedicated team of specialists
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-[rgb(255,68,0)]">✓</span> All platforms managed
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-[rgb(255,68,0)]">✓</span> White-glove service
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-[rgb(255,68,0)]">✓</span> Monthly strategy consultations
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-[rgb(255,68,0)]">✓</span> Custom integrations
                  </li>
                </ul>
                <div className="border-t border-white/10 pt-6">
                  <a href="#contact" className="block w-full bg-[rgb(255,68,0)] text-white py-3 rounded-full font-semibold hover:bg-[#ff5515] transition-colors text-center">
                    Contact for Pricing
                  </a>
                </div>
              </div>
              <div>
                <div className="inline-block bg-[rgb(255,68,0)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Enterprise Plan
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Complete Brand Domination
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  The ultimate solution for businesses that demand excellence. Get a dedicated team, 
                  unlimited services, and enterprise-level support to dominate your market.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgb(255,68,0)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(255,68,0)]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white">All Services Included</h4>
                      <p className="text-gray-400 text-sm">Unlimited designs, videos, and content across all platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgb(255,68,0)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(255,68,0)]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white">Dedicated Team</h4>
                      <p className="text-gray-400 text-sm">Designers, strategists, and account managers working for you</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgb(255,68,0)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(255,68,0)]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white">Strategic Consultations</h4>
                      <p className="text-gray-400 text-sm">Monthly planning sessions to align with business goals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgb(255,68,0)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(255,68,0)]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white">Extra Services</h4>
                      <p className="text-gray-400 text-sm">Website updates, email marketing, influencer partnerships & more</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Comparison Section */}
        <PlanComparison />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Section */}
        <Contact />
      <Footer />
    </main>
  )
}
