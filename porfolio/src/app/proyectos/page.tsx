import Image from "next/image";
import proyecto1 from "./img/proyecto1.png";
import proyecto2 from "./img/proyecto2.png";
import Link from "next/link";

export default function Proyectos() {
  return (
    <div className="flex-warp justify-center items-center h-screen">
      <header className="text-center mb-4">
        <h1 className="text-2xl font-bold">Proyectos</h1>
      </header>
      <div className="flex justify-center items-center ">
          <div className="justify-center items-center">
            <ul className="grid grid-cols-2 gap-4">
              <li className="p-1 border rounded">
                <Link
                  href="/proyectos/apiDog"
                  className="rounded-l-lg text-white-500 "
                >
                  <Image
                    src={proyecto1}
                    alt="Imagen 1"
                    className="w-full h-30"
                  />
                </Link>
              </li>
              <li className="p-1 border rounded">
                <Link
                  href="/proyectos/bookStore"
                  className="rounded-l-lg text-white-500 "
                >
                  <Image
                    src={proyecto2}
                    alt="Imagen 2"
                    className="w-full h-30"
                  />
                </Link>
              </li>
            </ul>
          
        </div>
      </div>
    </div>
  );
}
