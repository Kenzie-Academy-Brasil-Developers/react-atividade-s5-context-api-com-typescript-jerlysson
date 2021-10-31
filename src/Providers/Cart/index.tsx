import { createContext, ReactNode, useContext, useState } from "react";
import { ProductProps } from "../../types";

interface CartProps {
  children: ReactNode;
}

interface CartProviderDataProps {
  cart: ProductProps[];
  addProduct: (product: ProductProps) => void;
  deleteProduct: (product: ProductProps) => void;
}

const CartContext = createContext<CartProviderDataProps>(
  {} as CartProviderDataProps
);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<ProductProps[]>([]);

  const addProduct = (product: ProductProps) => {
    if (!cart.includes(product)) {
      setCart([...cart, product]);
    }
  };

  const deleteProduct = (productToBeDeleted: ProductProps) => {
    const newCart = cart.filter(
      (product) => product.id !== productToBeDeleted.id
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
