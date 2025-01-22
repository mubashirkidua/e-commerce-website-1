"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../products";
import { allProducts, four } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Link } from "lucide-react";

const SHOES = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
    }
    fetchproduct();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1>Our Latest Products</h1>
      <div className="grid grid-col-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4">
        {product.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            <Link href={`/product/${product.slug.current}`}>
            
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt="image"
                width={200}
                height={200}
              />
            )}
            <h2 className="test-lg font-semibold mt-4">
              {product.productName}
            </h2>
            <p className="text-gray-500 mt-2">
              {product.price ? `$${product.price}` : "Price not available"}
            </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SHOES;
