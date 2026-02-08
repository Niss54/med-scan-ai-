import { motion } from "framer-motion";
import { Upload, Cpu, Search, BarChart3, Clock, CheckCircle } from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload Your Scan", desc: "Drag and drop or browse to upload MRI, CT, or X-ray images. We support DICOM, JPEG, and PNG formats.", color: "from-primary/20 to-primary/5" },
  { icon: Cpu, title: "AI Processes the Image", desc: "Our deep learning models analyze every pixel of your medical image, trained on millions of clinical datasets.", color: "from-accent/20 to-accent/5" },
  { icon: Search, title: "Patterns Are Detected", desc: "The AI identifies abnormalities, tumors, fractures, and other disease patterns with high precision.", color: "from-primary/20 to-primary/5" },
  { icon: BarChart3, title: "Visual Results Generated", desc: "Color-coded heatmaps and highlighted regions show exactly where attention is needed.", color: "from-accent/20 to-accent/5" },
  { icon: Clock, title: "Hours of Work Saved", desc: "What would take hours of manual review is completed in minutes, allowing doctors to serve more patients.", color: "from-primary/20 to-primary/5" },
  { icon: CheckCircle, title: "Doctor Makes the Call", desc: "The final diagnosis is always made by the doctor. AI assists with data — humans make the decisions.", color: "from-accent/20 to-accent/5" },
];

const HowItWorks = () => {
  return (
    <main className="min-h-screen pt-20 grid-bg hero-gradient">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 font-display text-4xl font-bold text-foreground glow-text md:text-5xl">
            How It Works
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A simple, transparent process from upload to diagnosis.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 }}
              className="card-hover flex items-start gap-6 rounded-xl border border-border bg-card p-8"
            >
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-primary glow-border`}>
                <step.icon className="h-7 w-7" />
              </div>
              <div>
                <div className="mb-1 font-display text-xs font-semibold uppercase tracking-widest text-primary">Step {i + 1}</div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HowItWorks;
