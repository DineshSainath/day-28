import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //dropdownValue, setDropDownValue
  //func qtyPrice - subtotal
  //total, setTotal

  const [dropdownValue, setDropDownValue] = useState(0);
  const [qtyPrice, setQtyPrice] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <>
      <CartContext.Provider value={dropdownValue}>
        {children}
      </CartContext.Provider>
    </>
  );
};
