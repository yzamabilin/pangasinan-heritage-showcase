"use client";

import { useState } from "react";
import Button from "../atoms/Button";

type SearchFormProps = {
  onSearch?: (query: string) => void;
  placeholder?: string;
};

export default function SearchForm({
  onSearch,
  placeholder = "Search destinations...",
}: SearchFormProps) {
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch?.(query);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        aria-label="Search destinations"
        className="flex-1 px-4 py-3 rounded-full border-2 border-[#8fa88f] focus:outline-none focus:border-[#2f4a35] transition-colors"
      />
      <Button label="Search" />
    </form>
  );
}