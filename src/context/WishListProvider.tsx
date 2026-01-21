// src/context/WishlistProvider.tsx
import { createContext, useContext, useState, useEffect } from "react";
import type { JSX } from "react/jsx-runtime";
import type { Product } from "../data/products";

interface WishlistContextType {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  clearWishlist: () => void;
  getWishlistCount: () => number;
  moveAllToCart?: (callback: (products: Product[]) => void) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// ✅ React 19–safe children typing
type WishlistProviderProps = {
  children?: JSX.Element | JSX.Element[];
};

export function WishlistProvider({ children }: WishlistProviderProps) {
  const [wishlistItems, setWishlistItems] = useState<Product[]>(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product: Product) => {
    setWishlistItems((prev) =>
      prev.some((item) => item.id === product.id) ? prev : [...prev, product]
    );
  };

  const removeFromWishlist = (productId: number) => {
    setWishlistItems((prev) =>
      prev.filter((item) => item.id !== productId)
    );
  };

  const isInWishlist = (productId: number) =>
    wishlistItems.some((item) => item.id === productId);

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const getWishlistCount = () => wishlistItems.length;

  const moveAllToCart = (callback: (products: Product[]) => void) => {
    const inStockItems = wishlistItems.filter((item) => item.inStock);
    if (inStockItems.length > 0) {
      callback(inStockItems);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
        getWishlistCount,
        moveAllToCart,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
