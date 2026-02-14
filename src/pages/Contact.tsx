import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  { q: "What are your shipping times?", a: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business day delivery." },
  { q: "Do you offer returns?", a: "Yes! We offer free returns within 30 days of purchase. Items must be in their original condition." },
  { q: "Are your products hypoallergenic?", a: "Most of our products are made with hypoallergenic materials. Check individual product descriptions for specifics." },
  { q: "Do you ship internationally?", a: "Yes, we ship worldwide! International shipping typically takes 7-14 business days." },
];

const Contact = () => {
  const { toast } = useToast();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
  };

  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl md:text-5xl font-semibold mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-muted-foreground"
          >
            We'd love to hear from you
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl font-semibold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First name" required className="font-body rounded-md" />
                <Input placeholder="Last name" required className="font-body rounded-md" />
              </div>
              <Input type="email" placeholder="Email address" required className="font-body rounded-md" />
              <Input placeholder="Subject" required className="font-body rounded-md" />
              <Textarea placeholder="Your message..." required rows={5} className="font-body rounded-md resize-none" />
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-body text-sm tracking-wider px-8 py-5 rounded-full"
              >
                Send Message
              </Button>
            </form>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                <Mail size={18} /> hello@theolael.com
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full px-5 py-4 text-left font-body text-sm font-medium flex justify-between items-center hover:bg-secondary/50 transition-colors"
                  >
                    {faq.q}
                    <span className="text-muted-foreground">{expandedFaq === i ? "−" : "+"}</span>
                  </button>
                  {expandedFaq === i && (
                    <div className="px-5 pb-4">
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
