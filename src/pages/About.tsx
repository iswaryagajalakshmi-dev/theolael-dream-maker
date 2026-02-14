import { motion } from "framer-motion";
import brandStory from "@/assets/brand-story.jpg";

const About = () => {
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
            About THEOLAEL
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-muted-foreground max-w-lg mx-auto"
          >
            Crafting elegance, one accessory at a time.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              src={brandStory}
              alt="THEOLAEL accessories collection"
              className="rounded-lg w-full aspect-square object-cover"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-heading text-3xl font-semibold">Our Story</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                THEOLAEL began with a passion for creating hair accessories that are as beautiful as they are functional. Founded by a team of designers who believe that the right accessory can transform not just a hairstyle, but your entire mood.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Every piece in our collection is thoughtfully designed and crafted with premium materials — from hand-selected freshwater pearls to the softest silk. We believe luxury should be accessible, and beauty should be effortless.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-blush">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-semibold text-center mb-14"
          >
            What We Stand For
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Quality First", desc: "We use only the finest materials, ensuring each piece is built to last and feel luxurious." },
              { title: "Timeless Design", desc: "Our accessories blend classic elegance with contemporary trends that never go out of style." },
              { title: "Empowering Beauty", desc: "We believe every woman deserves to feel confident and beautiful in her everyday moments." },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="text-center space-y-3"
              >
                <h3 className="font-heading text-xl font-semibold">{value.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
