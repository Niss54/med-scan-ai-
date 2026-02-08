import { motion } from "framer-motion";
import { Upload, Cpu, Search, BarChart3, Clock } from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload MRI / CT Scan", desc: "Simply upload your medical imaging file to the platform securely." },
  { icon: Cpu, title: "AI Analyzes the Image", desc: "Our advanced AI scans every detail of the medical image within seconds." },
  { icon: Search, title: "Disease Patterns Detected", desc: "The system identifies abnormal regions and potential disease patterns." },
  { icon: BarChart3, title: "Clear Visual Results", desc: "Results are shown with highlighted areas and easy-to-read summaries." },
  { icon: Clock, title: "Doctor Saves Hours", desc: "What takes hours of manual review is done in minutes with AI assistance." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-24 grid-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground glow-text md:text-4xl">
            How It Works in Real Life
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From uploading a scan to getting a diagnosis — here's how AI makes the process faster and more accurate.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:left-1/2 md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative mb-12 flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-6`}
            >
              {/* Icon */}
              <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary glow-border">
                <step.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <div className={`card-hover rounded-xl border border-border bg-card p-6 md:w-5/12 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="mb-1 font-display text-xs font-semibold uppercase tracking-widest text-primary">
                  Step {i + 1}
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
