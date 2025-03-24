import ProductGrid from "@/app/components/product/ProductGrid";
import { products } from "@/app/lib/products";

export const metadata = {
  title: "All Products - BeeshoHome",
  description: "Browse our complete collection of furniture and home decor products",
};

export default function ProductsPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our complete collection of premium furniture and home decor
          </p>
        </div>

        <ProductGrid products={products} />
      </div>
    </div>
  );
} 