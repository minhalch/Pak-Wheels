import Link from "next/link";
import Header from "./components/header";
import Image from "next/image";



export default function Home() {
  return (
<div>
  <Header />
  <h1 className="text-4xl font-extrabold text-center text-yellow-600 mt-5">Pak Wheels</h1>

  <div className="cars flex flex-wrap justify-center gap-10 bg-gray-400">
    <div className="corolla border rounded-b-md border-b-gray-500 transition-shadow rounded-top-4" ><Image src="/corolla.webp" alt="Corolla" height={100} width={100} className="w-65 "/></div>
    <div className="alto border w-64 h-64"><Image src={"/alto.webp"} alt="alto " height={500} width={500} className="w-65"/>  </div>
    <div className="civic border w-64 h-64"><Image src={"/Civic.webp"} alt="Civic" width={500} height={500}/></div>
    <div className="swift border w-64 h-64"><Image src={"/swift.webp"} alt="swift " width={500} height={500 } className="w-65"  /> </div>
  </div>
  

</div>
  );
}