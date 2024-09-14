import Link from "next/link";
import Container from "../container";
import FooterList from "./footerList";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const footer = () => {
  return (
    <footer className="bg-slate-600 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base text-center font-bold mb-5">
              Mined Categories{" "}
            </h3>
            <Link href="#" className="text-center">
              Ore
            </Link>
            <Link href="#" className="text-center">
              Crystals
            </Link>
            <Link href="#" className="text-center">
              Refined Crystals
            </Link>
            <Link href="#" className="text-center">
              Refined Ore
            </Link>
            <Link href="#" className="text-center">
              Fossils
            </Link>
            <Link href="#" className="text-center">
              Investment
            </Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base text-center font-bold mb-5">
              Costumer Service
            </h3>
            <Link href="#" className="text-center">
              Contact us{" "}
            </Link>
            <Link href="#" className="text-center">
              Return and Exchange
            </Link>
            <Link href="#" className="text-center">
              shipping Policy
            </Link>
            <Link href="#" className="text-center">
              FAQs
            </Link>
            <Link href="#" className="text-center">
              Apply & Invest
            </Link>
          </FooterList>
          <FooterList>
            <Link className="text-base font-bold mb-5 text-center" href="#">
              About Us
            </Link>
            <p className="mb-2 text-center">
              Learn the uniqueness and effective process Minex can provide for
              you
            </p>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-5 text-center">Follow Us</h3>
            <div className="flex gap-2 items-center justify-center">
              <Link href="#">
                <MdFacebook size={22} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={22} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={22} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={22} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
      <div className="flex justify-center">
        <h2>&copy;{new Date().getFullYear()} MineX. All right reserved.</h2>
      </div>
    </footer>
  );
};

export default footer;
