import Link from "next/link";
import { categories } from "@/app/lib/products";

export default function CategoryPreviews() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-500">
            Browse our curated collection of furniture and home decor by category
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div 
              key={category.slug} 
              className="group relative bg-gray-100 rounded-lg overflow-hidden h-64 hover:shadow-lg transition-shadow"
            >
              {/* Category Image */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">{category.name} Image</span>
              </div>
              {/* We're not using actual images, but this would be the way to add them */}
              {/* 
              <Image
                src={`/images/category-${category.slug}.jpg`}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              */}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
                <Link 
                  href={`/categories/${category.slug}`}
                  className="mt-2 text-sm font-medium text-white inline-flex items-center hover:underline"
                >
                  Shop Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 