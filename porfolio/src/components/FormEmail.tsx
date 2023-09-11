"use client";

import React, { useState, ChangeEvent, MouseEvent } from "react";
import { POST } from "../app/api/send/route";

export const FormEmail = () => {
  const [emailName, setEmailName] = useState<string>("");
  const [emailSubject, setEmailSubject] = useState<string>("");
  const [emailText, setEmailText] = useState<string>("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;

    // Usamos el nombre del campo para determinar cuál variable actualizar
    switch (name) {
      case "name":
        setEmailName(value);
        break;
      case "email":
        setEmailSubject(value);
        break;
      case "text":
        setEmailText(value);
        break;
      default:
        break;
    }
  };

  const handleSend = (
    event: MouseEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    event.preventDefault();

    POST(emailName, emailSubject, emailText);
  };
  return (
    <div>
      <form method="post" autoComplete="off" action="/">
        <ul className="">
          <li>
            <div>
              <label title="Name" data-text="Ingrese su nombre" data-value="">
                Ingrese su nombre
              </label>
            </div>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={emailName}
              required
            />
          </li>
          <li>
            <div>
              <label title="email" data-text="su Email" data-value="">
                su Email
              </label>
            </div>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={emailSubject}
              required
            />
          </li>
          <li>
            <div>
              <label title="message" data-text="Mensaje :)" data-value="">
                Mensaje
              </label>
            </div>
            <textarea
              name="text"
              onChange={handleChange}
              value={emailText}
              required
            ></textarea>
          </li>
        </ul>
        <div>
          <button onClick={handleSend}>send</button>
        </div>
      </form>
    </div>
  );
};
