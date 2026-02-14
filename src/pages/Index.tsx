import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";
import brandStory from "@/assets/brand-story.jpg";

const featuredProducts = products.filter((p) => p.badge === "Best Seller" || p.badge === "New").slice(0, 4);

const reviews = [
  { name: "Sarah M.", text: "The pearl clips are absolutely stunning! I get compliments every time I wear them.", rating: 5 },
  { name: "Emily R.", text: "Best scrunchies I've ever owned. So gentle on my hair and the colors are gorgeous.", rating: 5 },
  { name: "Ava L.", text: "THEOLAEL has become my go-to for hair accessories. The quality is unmatched.", rating: 5 },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="THEOLAEL luxury hair accessories collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-lg"
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-cream mb-4">
              Premium Hair Accessories
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-semibold text-cream leading-tight mb-6">
              Elevate Your Everyday Look
            </h1>
            <Link to="/shop">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-body text-sm tracking-wider px-8 py-6 rounded-full">
                Shop Now
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">Curated for You</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold">Our Favorites</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="outline" className="font-body text-sm tracking-wider px-8 py-5 rounded-full border-foreground/20 hover:bg-foreground hover:text-background">
                View All Products
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={brandStory} alt="THEOLAEL collection" className="rounded-lg w-full aspect-square object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground">Our Story</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight">
                Where Elegance Meets Everyday
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                THEOLAEL was born from a simple belief: every woman deserves to feel beautiful in her everyday moments. We craft luxurious hair accessories that blend timeless elegance with modern style, using only the finest materials — from hand-selected pearls to premium silk.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Each piece is thoughtfully designed to elevate your look, whether you're heading to work, a special occasion, or simply enjoying your day.
              </p>
              <Link to="/about">
                <Button variant="link" className="font-body text-sm tracking-wider p-0 text-foreground hover:text-primary">
                  Learn More About Us <ArrowRight size={14} className="ml-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">What They Say</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold">Loved by Our Customers</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-8 text-center border border-border"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 italic">
                  "{review.text}"
                </p>
                <p className="font-heading text-sm font-medium">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-blush">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-semibold mb-4">Join the THEOLAEL Family</h2>
            <p className="font-body text-sm text-muted-foreground mb-8">
              Be the first to know about new collections, exclusive offers, and styling tips.
            </p>
            <form className="flex gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-background border border-border rounded-full text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground text-sm font-body rounded-full hover:bg-primary/90 transition-colors tracking-wider"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
