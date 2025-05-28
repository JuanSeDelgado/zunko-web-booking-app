import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
    return (
      <div className="">
        <Navbar />
        <main className="container my-3">
          {children}
        </main>
        <Footer />
      </div>
    );
  }