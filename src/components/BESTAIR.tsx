
"use client";

import Image from "next/image";
import { products, ProductDetail } from "./data/details";

export default function Best() {
  // Ensure `product.id` is always treated as a number
  const bestProducts: ProductDetail[] = products.filter(
    (product: ProductDetail) => [1, 2, 3].includes(Number(product.id))
  );

  return (
    <section className="p-5 sm:p-10">
      <div className="flex flex-wrap justify-between items-center py-3">
        <h2 className="font-semibold text-lg pl-[48px] sm:text-xl">
          Best of Air Max
        </h2>
      </div>
      <div className="flex flex-wrap justify-evenly items-center gap-4 sm:gap-5">
        {bestProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col text-sm sm:text-base leading-relaxed max-w-[150px] sm:max-w-[250px] lg:max-w-[300px]"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="flex flex-wrap gap-4 sm:gap-10 items-start justify-between mt-3 bg-white">
              <div className="flex flex-col text-xs sm:text-sm pr-1">
                <div className="font-medium text-neutral-900">{product.name}</div>
                <div className="text-neutral-500">{product.description}</div>
              </div>
              <div className="self-start font-medium text-right text-neutral-900">
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
