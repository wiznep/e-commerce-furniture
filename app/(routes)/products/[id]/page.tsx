"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";
import { getProductById } from "@/app/lib/products";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link 
            href="/products" 
            className="inline-flex items-center text-sm text-gray-600 hover:text-amber-700"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to products
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product Image */}
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <div className="h-full w-full flex items-center justify-center">
              <span className="text-gray-400">Product Image</span>
            </div>
            {/* Would replace with actual image */}
            {/*
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
            */}
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            
            <div className="mt-3">
              <p className="text-3xl text-gray-900">${product.price.toFixed(2)}</p>
            </div>

            <div className="mt-3 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < Math.floor(product.rating)
                        ? "text-amber-500 fill-amber-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.rating.toFixed(1)} ({product.reviews} reviews)
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <div className="mt-2 text-base text-gray-700 space-y-4">
                <p>{product.description}</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">Category</span>
                <Link
                  href={`/categories/${product.category}`}
                  className="text-sm font-medium text-amber-700 hover:text-amber-800"
                >
                  {product.category.replace('-', ' ')}
                </Link>
              </div>
            </div>

            <div className="mt-8 flex sm:flex-col1">
              <button
                type="button"
                disabled={!product.inStock}
                className={`max-w-xs flex-1 bg-amber-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:w-full ${
                  !product.inStock ? "bg-gray-400 hover:bg-gray-400 cursor-not-allowed" : ""
                }`}
              >
                <ShoppingCart size={20} className="mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>

            {/* Free shipping notice */}
            <div className="mt-6 text-center sm:text-left">
              <div className="group inline-flex text-sm text-medium">
                <span className="text-gray-500">
                  Free shipping on orders over $50
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 