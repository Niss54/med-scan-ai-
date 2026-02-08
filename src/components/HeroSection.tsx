import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, LogIn } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden grid-bg hero-gradient">
      {/* Spline 3D Background (optional) */}
      {/*
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          src="https://my.spline.design/backlightbgeffect-rwTL1kZ1W64QUHLi4noNPNVp/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ transform: "scale(0.23)", transformOrigin: "center center" }}
          title="Spline 3D Background"
        />
      </div>
      */}

      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 pt-20 lg:flex-row lg:gap-12 lg:px-8">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 max-w-2xl text-center lg:text-left"
        >
          <div className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Next-Gen Medical AI
          </div>
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-foreground glow-text md:text-5xl lg:text-6xl">
            AI-Powered Medical Imaging Analysis
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            This platform helps doctors read MRI and CT scan reports faster, detect diseases accurately, and reduce waiting time for patients.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/upload"
              className="glow-button inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Try Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-8 py-3.5 font-semibold text-secondary-foreground transition-all hover:border-primary/40 hover:bg-secondary/80"
            >
              Sign In <LogIn className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="z-10 mt-12 lg:mt-0"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />
            <img
              src={heroImage}
              alt="AI-powered brain scan visualization"
              className="relative w-full max-w-lg rounded-2xl border border-border glow-border lg:max-w-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
