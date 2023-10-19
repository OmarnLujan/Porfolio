"use client";

import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { config } from "dotenv";
config();

const ApiKeyService = process.env.REACT_APP_SERVICE_ID;
const ApiKeyTemplate = process.env.REACT_APP_TEMPLATE_ID;
const ApiKey = process.env.REACT_APP_PUBLIC_KEY;

interface EmailObject {
  name: string;
  email: string;
  text: string;
}

export const FormEmail = () => {
  const [emailObject, setEmailObject] = useState<EmailObject>({
    name: "",
    email: "",
    text: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;

    // Actualizamos el objeto emailObject usando el operador spread para mantener los valores existentes
    setEmailObject({
      ...emailObject,
      [name]: value,
    });
  };
  const form = useRef<HTMLFormElement | null>(null); // Usamos el tipo HTMLFormElement

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("datos:", form.current);
    if (form.current) {
      emailjs
        .sendForm(
          "service_2tsavcq",
          "template_6p8y076",
          form.current,
          "3jriYoNQPzKuf2rDb"
        )
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.error(error.text);
        });
    }
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <ul className="">
          <li>
            <div>
              <label className="m-2 flex justify-center items-center " title="Name" data-text="Ingrese su nombre" data-value="">
                Ingrese su nombre:
              </label>
            </div>
            <input className="w-5/6 justify-center items-center " type="text" name="user_name" required />
          </li>
          <li>
            <div>
              <label className="m-2  flex justify-center items-center " title="email" data-text="su Email" data-value="">
                su Email:
              </label>
            </div>
            <input className=" w-5/6  justify-center items-center " type="email" name="user_email" required />
          </li>
          <li>
            <div>
              <label className="m-2 flex justify-center items-center " title="message" data-text="Mensaje :)" data-value="">
                y su Mensaje:
              </label>
            </div>
            <textarea className="w-5/6 h-48  justify-center items-center " name="message" required></textarea>
          </li>
        </ul>
        <div className="flex justify-center items-center ">
          <button className="p-1 m-2 border bg-stone-800 border-slate-600 hover:border-slate-400 shadow-inner cursor-default rounded-md" type="submit" value="send">Enviar Email</button>
        </div>
      </form>
    </div>
  );
};
