import { CartProvider } from "../context/CartProvider";
import { WishlistProvider } from "../context/WishListProvider";
import "./App.css";
import { AppRoutes } from "./AppRoutes";


export default function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <AppRoutes />
      </WishlistProvider>
    </CartProvider>
  );
}