"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>

      <div >
        <button className="m-5"
          onClick={() => setSortBy("name")}
          style={{
            backgroundColor: sortBy === "name" ? "pink-400" : "Pink",
          }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          style={{
            backgroundColor: sortBy === "category" ? "pink-400" : "Pink",
          }}
        >
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
