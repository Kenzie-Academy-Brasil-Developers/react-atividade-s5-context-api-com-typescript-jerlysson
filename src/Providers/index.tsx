import { ReactNode } from "react";

import { CartProvider } from "./Cart";

interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return <CartProvider>{children}</CartProvider>;
}

export default Providers;
