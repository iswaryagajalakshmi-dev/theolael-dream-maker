import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Minus, Plus, ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(product?.colors?.[0]);

  if (!product) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="font-body text-sm text-primary hover:underline">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square rounded-lg overflow-hidden bg-card">
              <img
                src={productImages[product.image]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center space-y-6"
          >
            {product.badge && (
              <span className="self-start bg-primary text-primary-foreground text-xs font-body tracking-wider px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}
            <h1 className="font-heading text-3xl md:text-4xl font-semibold">{product.name}</h1>

            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"} />
                ))}
              </div>
              <span className="font-body text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-heading text-2xl font-semibold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="font-body text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            <p className="font-body text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Colors */}
            {product.colors && (
              <div className="space-y-2">
                <label className="font-body text-sm font-medium">Color: {selectedColor}</label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-full text-xs font-body border transition-colors ${
                        selectedColor === color
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-muted-foreground hover:border-foreground"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-2">
              <label className="font-body text-sm font-medium">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="font-body w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={() => addItem(product, quantity, selectedColor)}
              className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-body text-sm tracking-wider px-10 py-6 rounded-full"
            >
              <ShoppingBag size={18} className="mr-2" />
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </Button>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-24 mb-10">
            <h2 className="font-heading text-2xl font-semibold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
