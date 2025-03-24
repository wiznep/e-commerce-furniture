import { notFound } from "next/navigation";
import ProductGrid from "@/app/components/product/ProductGrid";
import { getProductsByCategory, categories } from "@/app/lib/products";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export function generateMetadata({ params }: CategoryPageProps) {
  const category = categories.find((cat) => cat.slug === params.category);
  
  if (!category) {
    return {
      title: "Category Not Found - BeeshoHome",
      description: "The requested category could not be found",
    };
  }

  return {
    title: `${category.name} - BeeshoHome`,
    description: `Browse our collection of ${category.name.toLowerCase()} furniture and home decor`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const products = getProductsByCategory(category);
  const categoryInfo = categories.find((cat) => cat.slug === category);

  if (!categoryInfo) {
    notFound();
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">{categoryInfo.name}</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our collection of premium {categoryInfo.name.toLowerCase()} furniture and decor
          </p>
        </div>

        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium text-gray-900">No products found</h2>
            <p className="mt-2 text-gray-600">
              We couldn't find any products in this category. Please check back later or browse other categories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 