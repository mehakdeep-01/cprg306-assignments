"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";


export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItem, setSelectedItemName] = useState(null);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };
    const handleItemSelect = (itemName) => {
        const cleanName = itemName.split(",")[0].trim().replace(/\p{Emoji}/gu, "");
        setSelectedItemName(cleanName);
    };
    return (
        <main className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray--800 mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
            {selectedItem && <MealIdeas ingredient={selectedItem} />}
        </main>
    );
};