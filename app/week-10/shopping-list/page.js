"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth} from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";
import {useEffect}  from "react";



export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItemName] = useState(null);
  
    
   
    const {user} = useUserAuth();
    
    const handleAddItem = async (newItem) => {
        try{
            const itemId = await addItem(user.uid, newItem);
            newItem.id = itemId;
        
        setItems((prevItems) => [...prevItems, {id: itemId, ...newItem}]);
        }
        catch (error) {
            console.error("Error adding item:", error);
        }
    };
    const handleItemSelect = (itemName) => {
        const cleanName = itemName.split(",")[0].trim().replace(/\p{Emoji}/gu, "");
        setSelectedItemName(cleanName);
    };
    const loadItems = async () => {
        try {
          const shoppingList = await getItems(user.uid);
          setItems(shoppingList);
        } catch (error) {
          console.error("Error loading items:", error);
        }
      };
     
      useEffect(() => {
        if (user&& user.id) {
          loadItems();
        }
      }, [user]);


    return (
        <main className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray--800 mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
            {selectedItem && <MealIdeas ingredient={selectedItem} />}
        </main>
    );
};