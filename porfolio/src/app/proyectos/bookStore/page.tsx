"use client";
import React from "react";
import images from "../img/imagebookstores";
import Slide from "../../../components/Slide/page";

const bookStore = () => {
  return (
    <div>
      <h1 className="text-2xl mb-2 flex justify-center relative items-center text-center">
        Nombre del Proyecto: BookStore
      </h1>
      <h3 className="mb-2 flex justify-center relative items-center text-center">
        E-Commerce de Libros digitales, creado en colaboracion con 7
        personas.
      </h3>
      <h3 className="mb-2 flex justify-center relative items-center text-center">
        Deploy: <a href="https://book-store-client-coral.vercel.app">BookStore</a>
      </h3>
      <ul className="flex justify-center relative items-center text-center">
        <li>
          <button className="p-1 border bg-stone-900 border-slate-600 hover:border-slate-400 shadow-inner cursor-default">
            Node.js
          </button>
        </li>
        <li>
          <button className="p-1 border bg-stone-900 border-slate-600 hover:border-slate-400 shadow-inner cursor-default">
            Trabajo en equipo
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

export default bookStore;
