import Navbar from "@/components/_navbar/Navbar";
import Banner from "../components/_banner";
import Footer from "@/components/_navbar/Footer";
import FAQs from "@/components/_banner/FAQs";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <FAQs />
      <Footer />
    </main>
  );
}
