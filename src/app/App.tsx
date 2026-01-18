import { CartProvider } from "../context/CartProvider";
import "./App.css";
import { AppRoutes } from "./AppRoutes";


export default function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}