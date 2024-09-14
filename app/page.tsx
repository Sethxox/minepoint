import { products } from "@/Utills/products";
import Container from "./Components/container";
import HomeBanner from "./Components/homeBanner";
import { truncatesText } from "@/Utills/truncateText";
import ProductCard from "./Components/Products/productCard";

export default function Home() {
  return (
    <div>
      <h1>Minex</h1>
      <div className="p-6">
        <Container>
          <div>
            <HomeBanner />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {products.map((product: any, index: number) => (
              <ProductCard data={product} key={index} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
