import Link from "next/link";
import Container from "../container";
import { Merienda } from "next/font/google";
import { Protest_Guerrilla } from "next/font/google";

const protestguerrilla = Protest_Guerrilla({
  subsets: ["latin"],
  weight: ["400"],
});
const merienda = Merienda({ subsets: ["latin"], weight: ["400"] });

const navBar = () => {
  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md-gap-0">
            <Link href="/" className={`${protestguerrilla.className} text-4xl`}>
              Mine
              <span className={`${merienda.className} inline-block text-4xl `}>
                X
              </span>
            </Link>
            <div>Menu</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div className="hidden md:block">Search</div>
              <div>CartCount</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default navBar;
