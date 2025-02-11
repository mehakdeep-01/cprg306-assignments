"use client";

import {useState} from "react";

export default function NewItem() {
    const [quantity,setQuantity] =useState(1);

    const increment =() =>
    {
        if (quantity <20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement =() => {
        if (quantity >1) {
            setQuantity(quantity -1);
        }
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h2 className = "text-xl font-bold mb-4">Select Quantity</h2>
            <div className="flex items-center justify-center space-x-4">
            <button 
             onClick={decrement}
             disabled={quantity === 1}
             className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300"> -
             </button>
             <span className="text-lg font-semibold">{quantity}</span>

             <button 
             onClick={increment}
             disabled={quantity === 20}
             className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-300"> +
             </button>
            </div>
        </div>
    );
}