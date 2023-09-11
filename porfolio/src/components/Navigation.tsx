import React from "react";
import Link from "next/link";
import foto from "./img/foto.png";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="flex">
      {/* Sección de la foto y nombre */}
      <div className="w-1/2 p-4 flex items-center justify-center">
        <div className="text-center">
          <Image
            src={foto}
            alt="img"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-bold">Nombre</h1>
          <h3 className="text-lg">Subnombre</h3>
        </div>
      </div>

      {/* Sección de navegación */}
      <div className="w-1/2 p-4">
        <ul className="flex justify-around rounded bg-neutral-800">
          <li >
            <Link href="/" className="rounded-l-lg text-white-500 ">
              Home
            </Link>
          </li>
          <li>
            <Link href="/proyectos" className="text-white-500  ">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="rounded-r-lg text-white-500 ">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
