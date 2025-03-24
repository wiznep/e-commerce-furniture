import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Transform Your Home with Timeless Elegance
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Discover premium furniture and home decor crafted with quality materials and modern designs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="px-6 py-3 bg-amber-700 text-white font-medium rounded-md hover:bg-amber-800 transition-colors text-center"
              >
                Shop Collection
              </Link>
              <Link
                href="/categories/living-room"
                className="px-6 py-3 bg-white text-amber-700 font-medium rounded-md border border-amber-700 hover:bg-amber-50 transition-colors text-center"
              >
                Living Room
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-700">Premium</p>
                <p className="text-sm text-gray-600">Materials</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-700">Modern</p>
                <p className="text-sm text-gray-600">Designs</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-700">Fast</p>
                <p className="text-sm text-gray-600">Delivery</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden h-80 md:h-96 relative">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Hero Image Placeholder</span>
            </div>
            {/* Would replace with actual image */}
            {/*
            <Image
              src="/images/hero-furniture.jpg"
              alt="Modern living room setup with elegant furniture"
              fill
              className="object-cover"
            />
            */}
          </div>
        </div>
      </div>
    </div>
  );
} 