import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to retrieve all items for a specific user
export const getItems = async (userId) => {
  try {
    const itemsRef = collection(db, `users/${userId}/items`);
    const itemsQuery = query(itemsRef);
    const querySnapshot = await getDocs(itemsQuery);
    
    const items = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
     
    
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

// Function to add a new item to a user's list in Firestore
export const addItem = async (userId, item) => {
  try {
    const itemsRef = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};
