import Link from "next/link";
import { ArrowRight, Code, CheckCircle } from "lucide-react";
import { AnimatedGradient } from "@/components/animated-gradient";
import { AnimatedText } from "@/components/animated-text";
import { FeatureCard } from "@/components/feature-card";
import { AnimatedButton } from "@/components/animated-button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SwappingWord } from "@/components/SwappingWord";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="relative z-50 bg-black border-b border-white/20">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          {/* Branding */}
          <Link
            href="/"
            className="text-xl font-bold text-white relative group"
          >
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            Invaro
          </Link>

          {/* Center Nav Items – sharp white border, black bg */}
          <div className="relative flex items-center justify-center">
            <div className="border border-white/30 bg-black px-6 py-3 flex gap-10 rounded-none">
              {[
                {
                  label: "Pricing",
                  href: "/pricing",
                  description: "Simple pricing, no surprises.",
                  Image: "/images/price.png",
                },
                {
                  label: "Docs",
                  href: "/docs",
                  description:
                    "Everything you need to get started as a developer.",
                  Image: "/images/docs.png",
                },
                {
                  label: "Developers",
                  href: "/developers",
                  description: "One API To Rule Them All.",
                  Image: "/images/api.png",
                },
                {
                  label: "Contact",
                  href: "/contact",
                  description:
                    "Services are Offered to ease out Workload and Streamline work.",
                  Image: "/images/api.png",
                },
              ].map(({ label, href, description, Image }) => (
                <div
                  key={label}
                  className="relative group flex flex-col items-center"
                >
                  {/* Label */}
                  <Link
                    href={href}
                    className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>

                  {/* Hover Card */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[320px] group-hover:opacity-100 opacity-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-50">
                    <div className="border border-white/10 bg-[#0e0e0e] shadow-2xl overflow-hidden">
                      <img
                        src={Image}
                        alt={label}
                        className="h-32 w-full object-cover"
                      />
                      <div className="p-4">
                        <p className="text-sm font-semibold text-white mb-1">
                          {label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <AnimatedButton className="rounded-full">Sign up</AnimatedButton>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
          <AnimatedGradient />
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm transform transition-transform hover:scale-105 duration-300">
                <Link
                  href="/invaro"
                  className="inline-flex items-center gap-1 text-muted-foreground"
                >
                  <AnimatedText text="Checkout Invaro" delay={100} />
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl">
                <AnimatedText
                  text="Parse your financial data,"
                  delay={200}
                  className="block"
                />
                <AnimatedText
                  text="chaos to clarity with ."
                  delay={400}
                  className="block"
                />
                <SwappingWord />
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                <AnimatedText
                  text="Transform bank statements from any bank in the world, invoices of any complexity, and receipts at scale with a simple API for developers who need clean, consistent data —fast."
                  delay={600}
                />
                <span className="text-yellow-500 inline-block animate-pulse">
                  ⚡
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 min-w-[380px] justify-center mt-4">
                <AnimatedButton size="lg" className="rounded-full">
                  Try Now
                </AnimatedButton>
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="rounded-full"
                >
                  View Docs
                </AnimatedButton>
              </div>
              <div className="mt-8 inline-flex items-center rounded-full border px-4 py-2 hover:border-primary/50 transition-colors duration-300 cursor-pointer">
                <Code className="mr-2 h-4 w-4 animate-pulse" />
                <p className="text-sm">
                  No code? No problem. Switch effortlessly to an intuitive
                  interface.
                </p>
              </div>
            </div>

            <ScrollReveal className="mt-24 space-y-12" threshold={0.2}>
              <h2 className="text-2xl font-bold text-center md:text-3xl">
                Be among the first to streamline financial data with Invaro's
                powerful API.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ScrollReveal delay={100}>
                  <FeatureCard>
                    <div className="text-sm text-muted-foreground">
                      No more manual entry - parse financial data at scale with
                      Invaro.
                    </div>
                  </FeatureCard>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <FeatureCard>
                    <div className="flex items-center">
                      <div className="mr-2 text-primary animate-pulse">+</div>
                      <div className="text-sm text-muted-foreground">
                        Integrate financial data parsing in minutes with our
                        developer-friendly API.
                      </div>
                    </div>
                  </FeatureCard>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <FeatureCard>
                    <div className="flex items-center">
                      <div className="mr-2 text-primary animate-pulse">•</div>
                      <div className="text-sm text-muted-foreground">
                        Build smarter financial applications with clean,
                        structured data.
                      </div>
                    </div>
                  </FeatureCard>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            <ScrollReveal
              className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12"
              threshold={0.3}
            >
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground uppercase">
                  Extract
                </div>
                <h2 className="text-3xl font-bold">
                  <AnimatedText
                    text="Effortlessly extract data from"
                    delay={100}
                    className="block"
                  />
                  <AnimatedText
                    text="statements and invoices"
                    delay={300}
                    className="block"
                  />
                </h2>
              </div>
              <div className="space-y-4">
                <ScrollReveal
                  delay={200}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle
                    className="h-5 w-5 text-primary animate-bounce"
                    style={{ animationDuration: "3s" }}
                  />
                  <p>Guaranteed Accuracy</p>
                </ScrollReveal>
                <ScrollReveal
                  delay={400}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle
                    className="h-5 w-5 text-primary animate-bounce"
                    style={{ animationDuration: "3.5s" }}
                  />
                  <p>PDFs, Images</p>
                </ScrollReveal>
                <ScrollReveal
                  delay={600}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle
                    className="h-5 w-5 text-primary animate-bounce"
                    style={{ animationDuration: "4s" }}
                  />
                  <p>OCR + Vision AI</p>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
}
