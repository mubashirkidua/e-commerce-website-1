"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from './data/details';
import { ProductCard } from '../components/ProductCard';

export function GearUpShop() {
  // Safely filter products for the Gear Up section
  const gearUpProducts = Array.isArray(products)
    ? products.filter(product => [4, 5, 6, 7].includes(Number(product.id)))
    : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gear Up.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Men's Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Shop Men&apos;s</h2>
            
            <div className="flex space-x-2">
              <ChevronLeft className="w-6 h-6 cursor-pointer" />
              <ChevronRight className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gearUpProducts
              .filter(product => product.category === 'men')
              .map(product => (
                <ProductCard key={product.id || Math.random()} product={product} />
              ))}
          </div>
        </section>

        {/* Women's Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Shop Women&apos;s</h2>
            <div className="flex space-x-2">
              <ChevronLeft className="w-6 h-6 cursor-pointer" />
              <ChevronRight className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gearUpProducts
              .filter(product => product.category === 'women')
              .map(product => (
                <ProductCard key={product.id || Math.random()} product={product} />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
