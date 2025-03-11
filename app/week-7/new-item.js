"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [quantity, setQuantity] = useState(1);

  
    const increment =() =>
        {
            if (quantity < 20) {
                setQuantity(quantity +1);
            }
        };
    
        const decrement =() => {
            if (quantity > 1) {
                setQuantity(quantity -1);
            }
        };


    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name,
            category,
            quantity
        };
       onAddItem(item);

        setName("");
        setCategory("produce");
        setQuantity(1);
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold mb-4">Add New Item</h2>
           
            < form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-left">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <button 
                        type = "button"
                        onClick={decrement}
                        disabled={quantity === 1}
                        className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300"> -
                        </button>
                        <span className="text-lg font-semibold">{quantity}</span>

                    <button 
                        type = "button"
                        onClick={increment}
                        disabled={quantity === 20}
                        className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-300"> +
                    </button>
                </div>
                <div>
                    <label htmlFor="category" className="block text-left">Category</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md">
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                    <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">Add</button>
            </form>
        </div>
    );
}