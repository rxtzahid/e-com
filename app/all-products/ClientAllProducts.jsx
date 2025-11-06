"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryNavbar from "@/components/CategoryNavbar";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";

const ClientAllProducts = () => {
  const { products } = useAppContext();
  const searchParams = useSearchParams();

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    category: "All",
    minPrice: 0,
    maxPrice: Infinity,
    rating: 0,
  });

  useEffect(() => {
    const filtered = products.filter((p) => {
      const rawPrice =
        typeof p.offerPrice === "number"
          ? p.offerPrice
          : parseFloat(String(p.offerPrice).replace(/[^0-9.]/g, "")) || 0;
      const price = Math.round(rawPrice * 100) / 100;

      const ratingValue =
        typeof p.rating === "number"
          ? p.rating
          : parseFloat(String(p.rating)) || 0;

      return (
        (filters.category === "All" || p.category === filters.category) &&
        price >= filters.minPrice &&
        price <= filters.maxPrice &&
        (filters.rating === 0 || ratingValue >= filters.rating)
      );
    });

    setFilteredProducts(filtered);
  }, [products, filters]);

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") || "All";
    if (categoryFromUrl !== filters.category) {
      setFilters((prev) => ({ ...prev, category: categoryFromUrl }));
    }
  }, [searchParams, filters.category]);

  const handleFilterChange = useCallback((newFilters) => {
    setFilters((prev) => {
      const updated = {
        ...prev,
        ...newFilters,
        category:
          newFilters.category !== undefined
            ? newFilters.category
            : prev.category,
      };
      return updated;
    });
  }, []);

  return (
    <>
      <Navbar />
      <CategoryNavbar />

      <div className="flex px-6 md:px-16 lg:px-32 gap-4">
        <aside className="hidden lg:block">
          <FilterSidebar
            onFilterChange={handleFilterChange}
            selectedCategory={filters.category}
            minPrice={filters.minPrice}
            maxPrice={filters.maxPrice === Infinity ? 50000 : filters.maxPrice}
            selectedRating={filters.rating}
          />
        </aside>
        <main className="flex-1">
          <h2 className="text-2xl font-medium capitalize mb-4">
            {filters.category} Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product._id || product.id}
                href={`/product/${product._id || product.id}`}
                className="block"
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default ClientAllProducts;
