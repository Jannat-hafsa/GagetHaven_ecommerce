import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";
import "./globals.css";
import Hero from "@/app/component/Hero"; 

export const metadata = {
  title: "GadgetHeaven - Buy Gadgets Online",
  description:
    "GadgetHeaven lets you buy smartphones, laptops, cameras, and accessories easily online.",
  keywords: ["gadgets", "smartphones", "laptops", "online shopping", "electronics"],
  authors: [{ name: "Your Name" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* Navbar */}
        <Navbar />
   <Hero />
       
        {/* Page content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
