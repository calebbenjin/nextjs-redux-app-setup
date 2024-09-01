import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define the types for the search results
interface SearchResult {
  id: number;
  name: string;
}

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const mockData: SearchResult[] = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Mango" },
    { id: 5, name: "Pineapple" },
  ];

  // Function to handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filteredResults = mockData.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative lg:w-4/12">
      <div className="relative flex items-center border border-gray-600 rounded-lg p-1">
        <CiSearch className="h-6 w-6 text-gray-600 mr-4 ml-2" />
        <input
          type="text"
          placeholder="Search..."
          className="border-none outline-none text-sm"
          value={query}
          onChange={handleInputChange}
          style={{
            width: "100%",
            padding: "6px",
          }}
        />
      </div>

      {results.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "0",
            right: "0",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            zIndex: 1000,
            maxHeight: "200px",
            overflowY: "auto",
          }}>
          {results.map((result) => (
            <div
              key={result.id}
              style={{
                padding: "8px",
                borderBottom: "1px solid #eee",
                cursor: "pointer",
              }}
              onClick={() => alert(`You selected: ${result.name}`)}>
              {result.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
