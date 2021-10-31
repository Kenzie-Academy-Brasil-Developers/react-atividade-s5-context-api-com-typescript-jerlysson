import { useCart } from "../../Providers/Cart";
import { ProductProps } from "../../types";
import { CardProduct } from "./style";

interface Props {
  item: ProductProps;
  inCart: boolean;
}

const ProductCard = ({ item, inCart }: Props) => {
  const { addProduct, deleteProduct } = useCart();

  return (
    <CardProduct>
      <img src={item.image} />
      <h2>{item.title}</h2>
      <span>R$ {item.price}</span>
      {inCart ? (
        <button onClick={() => deleteProduct(item)}>Remover</button>
      ) : (
        <button onClick={() => addProduct(item)}>Adicionar</button>
      )}
    </CardProduct>
  );
};

export default ProductCard;
