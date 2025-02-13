
import Contador from "@/cart/Contador";
import Image from "next/image";


export const metadata = {
 title: 'UN CONTADOR',
 description: 'SEO Title',
};
export default function CounterPage() {


  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
 
   <Image  width={400} height={400} src="/images/elmal.jpg" alt="Test Image" />
<Contador></Contador>
    </div>
  );
}