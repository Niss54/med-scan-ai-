import { motion } from "framer-motion";
import { Phone, Mail, Globe, MessageCircle, Send, HelpCircle, Clock, Shield } from "lucide-react";

const faqs = [
  { q: "Is my medical data safe?", a: "Yes. All uploads are encrypted and processed securely. We do not store your images after analysis is complete." },
  { q: "Do I need to be a doctor to use this?", a: "The platform is designed for medical professionals. However, patients can understand the simplified reports with ease." },
  { q: "What image formats are supported?", a: "We support DICOM, JPEG, and PNG formats for MRI, CT, and X-ray images." },
  { q: "How accurate is the AI analysis?", a: "Our models achieve over 95% accuracy on benchmark datasets and are continuously validated by certified radiologists." },
  { q: "Is there a cost to use the platform?", a: "We offer a free trial for initial scans. Contact us for pricing on institutional plans." },
];

const Support = () => {
  return (
    <main className="min-h-screen pt-20 grid-bg">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 font-display text-4xl font-bold text-foreground glow-text md:text-5xl">
            Support
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We're here to help. Reach out anytime.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="mx-auto mb-20 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Phone, label: "Phone", value: "8840301998", href: "tel:8840301998" },
            { icon: Mail, label: "Email", value: "nishantma05@gmail.com", href: "mailto:nishantma05@gmail.com" },
            { icon: Globe, label: "Any Query", value: "nissh.info", href: "https://www.nissh.info" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://api.whatsapp.com/send/?phone=918840301998" },
            { icon: Send, label: "Telegram", value: "@Nissvisuals", href: "https://t.me/Nissvisuals" },
          ].map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="card-hover flex items-center gap-4 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">{c.label}</div>
                <div className="text-sm text-foreground">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="mb-8 text-center font-display text-2xl font-bold text-foreground glow-text md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-2 flex items-center gap-2 font-display text-sm font-semibold text-foreground">
                  <HelpCircle className="h-4 w-4 text-primary" /> {faq.q}
                </h3>
                <p className="pl-6 text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Support;
