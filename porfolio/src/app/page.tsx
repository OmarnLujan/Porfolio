import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="m-40 flex  flex-col justify-center relative items-center text-center">
        <h3 className="font-mono w-3/4 text-2xl justify-center items-center text-center">
          Buenas soy Omar Nazareno Lujan, me llaman Nazareno me gradue de
          Tecnico Informatico, estudie dos años Ingenieria Informatica, gracias
          a ese tiempo decidi enfocarme en estudiar programacion.
        </h3>
      </div>
      <div  className="flex gap-2 justify-center items-center absolute inset-x-0 bottom-0 h-16 ">
        <img
          src="https://img.shields.io/badge/React-blue"
          alt="react"
        />
        <img
          src="https://img.shields.io/badge/Git-8A2BE2
          "
          alt="react"
        />
        <img
          src="https://img.shields.io/badge/JavaScript-yellow
          "
          alt="react"
        />
        <img
          src="https://img.shields.io/badge/Redux-%231e1191
          "
          alt="react"
        />
        <img
          src="https://img.shields.io/badge/Node-%2324b422

          "
          alt="react"
        />
        <img
          src="https://img.shields.io/badge/Express-%2322b4dd
          "
          alt="react"
        />
        <img
          src="https://img.shields.io/badge/SQL-%23be651d
          "
          alt="react"
        />
        <img
          src="https://img.shields.io/badge/CSS-%239e1f0c
          "
          alt="react"
        />
        <img
          src="https://img.shields.io/badge/TypeScript-%230c759e
          "
          alt="react"
        />
      </div>
    </div>
  );
}
