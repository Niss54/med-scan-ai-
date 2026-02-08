import { motion } from "framer-motion";
import { Clock, FileText, Eye, Stethoscope, BrainCircuit } from "lucide-react";

const reasons = [
  { icon: Clock, title: "No More Long Lines", desc: "Patients don't need to stand in long queues for reports. AI speeds up the entire process." },
  { icon: FileText, title: "Easier Reports", desc: "Complex medical reports become easier to understand with AI-assisted analysis." },
  { icon: Eye, title: "No Manual Scanning", desc: "Doctors no longer need to manually review hundreds of image slices one by one." },
  { icon: Stethoscope, title: "Faster Diagnosis", desc: "Quicker diagnosis means better treatment planning and improved patient outcomes." },
  { icon: BrainCircuit, title: "AI Assists, Doctors Decide", desc: "The AI provides intelligent insights, but the final decision always stays with the doctor." },
];

const WhyUseSection = () => {
  return (
    <section className="relative py-24 hero-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground glow-text md:text-4xl">
            Why Use This AI?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Trustworthy, human-centered, and designed to make healthcare better for everyone.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`card-hover rounded-xl border border-border bg-card p-8 ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <r.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-display text-base font-semibold text-foreground">{r.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUseSection;
