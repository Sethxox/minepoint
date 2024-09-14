import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "./Components/Nav/navBar";
import Footer from "./Components/Footer/footer";

const popp = Poppins({ subsets: ["latin"], weight: ["200", "400", "700"] });

export const metadata: Metadata = {
  title: "Minex",
  description: "The best E-commerce site for any earthed and space elements",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${popp.className} text-slate-600`}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
