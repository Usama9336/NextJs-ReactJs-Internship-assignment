import Image from "next/image";
import Navbar from "../../components/Navbar";
import Middlesection from "../../components/Middlesection";
import middle from '../../components/middle.module.scss';
import Footer from "../../components/Footer";


export default function Home() {
  return (
    <main className="h-[100%] bg-[#FBFCFD]">
       <Navbar/>
      <div className={middle.center}>
<Middlesection/>
      </div>
      <Footer/>
    </main>
  );
}
