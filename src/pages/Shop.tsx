import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products, categories, Category } from "@/data/products";

const sortOptions = ["Popular", "Price: Low to High", "Price: High to Low", "Newest"] as const;

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [sortBy, setSortBy] = useState<string>("Popular");

  const filtered = useMemo(() => {
    let result = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);
    switch (sortBy) {
      case "Price: Low to High":
        return [...result].sort((a, b) => a.price - b.price);
      case "Price: High to Low":
        return [...result].sort((a, b) => b.price - a.price);
      case "Newest":
        return [...result].sort((a, b) => (a.badge === "New" ? -1 : 1));
      default:
        return [...result].sort((a, b) => b.reviews - a.reviews);
    }
  }, [activeCategory, sortBy]);

  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl md:text-5xl font-semibold mb-3"
          >
            Shop
          </motion.h1>
          <p className="font-body text-sm text-muted-foreground">
            Discover our curated collection of luxury hair accessories
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-body tracking-wider transition-colors ${
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "bg-secondary text-muted-foreground hover:bg-foreground/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-border rounded-md text-xs font-body bg-background focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {sortOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground font-body py-20">
            No products found in this category.
          </p>
        )}
      </div>
    </main>
  );
};

export default Shop;
