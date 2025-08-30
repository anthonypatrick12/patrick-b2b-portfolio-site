import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientsBar from "@/components/ClientsBar";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import ReputationSafe from "@/components/ReputationSafe";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { primaryKeywords, site } from "@/lib/seo";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientsBar />
      <section className="container mt-2 text-white/60 text-sm">
        <p className="sr-only">Keywords: {primaryKeywords.join(", ")}</p>
        <p className="sr-only">Brand: {site.name} — {site.description}</p>
      </section>
      <Services />
      <Packages />
      <ReputationSafe />
      <Process />
      <CaseStudies />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Patrick — B2B Lead Generation",
            "url": site.url,
            "image": site.ogImage,
            "description": site.description,
            "areaServed": "Global",
            "sameAs": [
              "https://www.linkedin.com/",
              "https://twitter.com/"
            ],
            "serviceType": "B2B Lead Generation",
            "knowsAbout": primaryKeywords,
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {"@type":"Question","name":"What niches do you specialize in?","acceptedAnswer":{"@type":"Answer","text":"SaaS, professional services, logistics, fintech, and developer tools."}},
              {"@type":"Question","name":"How do you define a qualified meeting?","acceptedAnswer":{"@type":"Answer","text":"A meeting with a budget owner who matches your ICP and has a current or upcoming need."}},
              {"@type":"Question","name":"Is cold email compliant?","acceptedAnswer":{"@type":"Answer","text":"We use consent-first tactics where required, include opt-outs, and follow sender best practices."}}
            ]
          })
        }}
      />
    </main>
  );
}
