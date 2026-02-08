import { motion } from "framer-motion";
import { ScanEye, Target, Zap, Users, HeartPulse, ShieldCheck, Layers, FileSearch, Activity } from "lucide-react";

const allFeatures = [
  { icon: ScanEye, title: "MRI & CT Scan Reading", desc: "Upload any standard medical image format and get detailed AI analysis within seconds." },
  { icon: Target, title: "Abnormality Detection", desc: "The AI highlights areas that need attention, making it easy for doctors to spot issues." },
  { icon: Zap, title: "Instant Results", desc: "No more waiting days for reports. Get preliminary analysis as soon as the scan is uploaded." },
  { icon: Users, title: "Patient-Friendly Reports", desc: "Results are explained in simple language that patients and families can understand." },
  { icon: HeartPulse, title: "Cardiology Support", desc: "Specialized models for heart imaging help detect cardiovascular conditions early." },
  { icon: ShieldCheck, title: "Medical-Grade Accuracy", desc: "Trained on millions of medical images with validation by certified radiologists." },
  { icon: Layers, title: "Multi-Slice Analysis", desc: "Processes 3D scan data slice by slice, ensuring no detail is missed." },
  { icon: FileSearch, title: "Report History", desc: "Keep track of all past analyses with a searchable report archive." },
  { icon: Activity, title: "Real-Time Monitoring", desc: "Monitor analysis progress in real time with live status updates." },
];

const Features = () => {
  return (
    <main className="min-h-screen pt-20 grid-bg">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 font-display text-4xl font-bold text-foreground glow-text md:text-5xl">
            Features
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need for smarter, faster medical imaging analysis.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
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
    </main>
  );
};

export default Features;
