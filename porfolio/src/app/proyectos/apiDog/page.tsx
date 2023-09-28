"use client";
import React from "react";
import images from "../img/imageApiDog";
import Slide from "../../../components/Slide/page";

const apiDog = () => {
  return (
    <div>
      <h1 className="text-2xl mb-2 flex justify-center relative items-center text-center">
        Nombre del Proyecto: ApiDog
      </h1>
      <h3 className="mb-2 flex justify-center relative items-center text-center">
        Proyecto creado a modo de aprendizaje.
      </h3>
      <ul className="flex justify-center relative items-center text-center">
        <li>
          <button className="p-1 border bg-stone-900 border-slate-600 hover:border-slate-400 shadow-inner cursor-default">
            Node.js
          </button>
        </li>
        <li>
          <button className="p-1 border bg-stone-900 border-slate-600 hover:border-slate-400 shadow-inner cursor-default">
            CSS
          </button>
        </li>
        <li>
          <button className="p-1 border bg-stone-900 border-slate-600 hover:border-slate-400 shadow-inner cursor-default">
            PostgreSQL
          </button>
        </li>
        <li>
          <button className="p-1 border bg-stone-900 border-slate-600 hover:border-slate-400 shadow-inner cursor-default">
            Redux.js
          </button>
        </li>
        <li>
          <button className="p-1 border bg-stone-900 border-slate-600 hover:border-slate-400 shadow-inner cursor-default">
            Sequelize.js
          </button>
        </li>
        <li>
          <button className="p-1 border bg-stone-900 border-slate-600 hover:border-slate-400 shadow-inner cursor-default">
            React.js
          </button>
        </li>
      </ul>
      <Slide images={images} />
    </div>
  );
};
export default apiDog;
