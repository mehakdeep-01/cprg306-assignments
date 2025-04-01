import { AuthContextProvider } from "./_utils/auth-context";
import ShoppingList from "./shopping-list/page";
import { useUserAuth } from "./_utils/auth-context"; 
export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
  <ShoppingList user={currentUser} />

}