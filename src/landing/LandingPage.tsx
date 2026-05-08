import { Header } from "./Header";
import { Hero } from "./Hero";
import { ProblemSection } from "./ProblemSection";
import { HowItWorks } from "./HowItWorks";
import { Features } from "./Features";
import { ValueProof } from "./ValueProof";
import { FAQ } from "./FAQ";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <ValueProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
