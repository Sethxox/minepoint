import Container from "@/app/Components/container";
import { product as importedProduct } from "@/Utills/product";
import ProductDetails from "./productDetails";
interface IPrams {
  productId?: string;
}

const product = ({ params }: { params: IPrams }) => {
  console.log("params", params);

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={importedProduct} />
      </Container>
    </div>
  );
};

export default product;
