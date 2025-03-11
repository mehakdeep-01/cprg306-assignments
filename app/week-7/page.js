"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";


export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };
    return (

        <main className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray--800 mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}