import { motion } from "framer-motion";
import { ScanEye, Target, Zap, Users, HeartPulse, ShieldCheck } from "lucide-react";

const features = [
  { icon: ScanEye, title: "Reads Complex Scans", desc: "Automatically interprets MRI and CT scan images with clinical accuracy." },
  { icon: Target, title: "Highlights Abnormal Regions", desc: "Pinpoints areas of concern so doctors can focus on what matters most." },
  { icon: Zap, title: "Faster Decisions", desc: "Helps doctors make quicker, more confident diagnostic decisions." },
  { icon: Users, title: "Reduces Hospital Queues", desc: "Speeds up the diagnostic pipeline, reducing long waiting times for patients." },
  { icon: HeartPulse, title: "Less Stress for Everyone", desc: "Saves doctors' time and reduces anxiety for patients awaiting results." },
  { icon: ShieldCheck, title: "Safe & Reliable", desc: "Built with medical-grade accuracy standards. AI assists, doctors decide." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground glow-text md:text-4xl">
            What This App Does
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Designed to be understood by everyone — patients, families, and medical professionals alike.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-hover group rounded-xl border border-border bg-card p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all group-hover:glow-border">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-base font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
