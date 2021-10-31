import { ProductProps } from "../../types";
import ProductCard from "../ProductCard";
import { ListCards, Title } from "./style";

interface Props {
  list: ProductProps[];
  inCart: boolean;
}
const ProductList = ({ list, inCart }: Props) => {
  return (
    <div>
      <Title>{inCart ? `Carrinho ${list.length}` : "Produtos"}</Title>
      <ListCards>
        {list.map((item) => (
          <ProductCard item={item} inCart={inCart} />
        ))}
      </ListCards>
    </div>
  );
};

export default ProductList;
