"use client";

import { useState } from "react";
import HeritageCard from "../molecules/HeritageCard";
import SearchForm from "../molecules/SearchForm";
import { destinations } from "../../data/destinations";

export default function DestinationList() {
  const [query, setQuery] = useState("");

  const filtered = destinations.filter((site) => {
    const search = query.toLowerCase();
    return (
      site.title.toLowerCase().includes(search) ||
      site.location.toLowerCase().includes(search)
    );
  });

  return (
    <section className="px-6 md:px-10 py-16 max-w-6xl mx-auto">
      <div className="flex justify-center mb-10">
        <SearchForm
          placeholder="Search by name or location..."
          onSearch={setQuery}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-600">
          No destinations found matching &quot;{query}&quot;.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {filtered.map((site, index) => (
            <HeritageCard
              key={site.slug}
              {...site}
              href={`/heritage-sites/${site.slug}`}
              variant="card"
              size={index === 1 && filtered.length === destinations.length ? "large" : "normal"}
            />
          ))}
        </div>
      )}
    </section>
  );
}