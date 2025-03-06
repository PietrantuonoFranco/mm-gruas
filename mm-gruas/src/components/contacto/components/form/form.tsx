'use client';

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import SubjectSelector from "./components/subjectSelector";

function Formulario() {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [body, setBody] = useState<string>("");
  
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [creatingMessage, setCreatingMessage] = useState<boolean>(false);
  const [messageCreated, setMessageCreated] = useState<boolean>(false);

  const sendWhatsApp = (phoneNumber: string, message: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  async function isInformation(): Promise<boolean> {
    return !(name === "" || surname === "" || selectedSubject === "" || body === "");
  }

  async function handleFormSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setCreatingMessage(true);
    setErrorMessage("");
    setMessageCreated(false);
  
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
  
      if (await isInformation()) {
        const message: string = `Hola mi nombre es ${name} ${surname}, ${
          selectedSubject === "otro" ? `.` : `necesito ${selectedSubject}.`
        } Te quería hacer la siguiente consulta: 
        ${body}`;
  
        const phoneNumber: string = "+5492244462235";
  
        sendWhatsApp(phoneNumber, message);
  
        setMessageCreated(true);
      } else {
        throw new Error("Debe completar todos los campos antes de enviar el mensaje.");
      }
  
    } catch (er) {
      setErrorMessage(`Error al enviar el mensaje. ${(er as Error).message}`);
    } finally {
      setCreatingMessage(false);
    }
  }
  

  return (
    <>

      {messageCreated && (
        <div className="mb-8 p-4 py-2 bg-green-100 text-green-700 border border-2 border-green-200 rounded-3xl text-center">
          Mensaje enviado exitosamente.
        </div>
      )}

      {errorMessage && (
        <div className="mb-8 p-4 py-2 bg-red-100 text-red-700 border border-2 border-red-200 rounded-3xl text-center">
          {errorMessage}
        </div>
      )}

      <form
        onSubmit={handleFormSubmit}
        className="space-y-8 flex flex-col items-center justify-center"
      >
        <div className="w-full grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="text-gray-600 font-semibold">
                Nombre <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Juan"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                disabled={creatingMessage}
                className="w-full bg-white mt-1 px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>

            <div className="rounded-3xl">
              <label htmlFor="surname" className="text-gray-600 font-semibold">
                Apellido <span className="text-red-400">*</span>
              </label>
              <input
                id="surname"
                type="text"
                placeholder="Perez"
                value={surname}
                onChange={(ev) => setSurname(ev.target.value)}
                disabled={creatingMessage}
                className="w-full bg-white mt-1 px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-gray-900 rounded-3xl"
              />
            </div>

            <div className="w-full">
              <label htmlFor="subject" className="text-gray-600 font-semibold">
                Asunto <span className="text-red-400">*</span>
              </label>
              <SubjectSelector
                onChange={(value) => setSelectedSubject(value)}
              />
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="body" className="text-gray-600 font-semibold">
              Consulta <span className="text-red-400">*</span>
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(ev) => setBody(ev.target.value)}
              placeholder="Escribe aquí tu consulta..."
              className="w-full h-53 bg-white mt-1 px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-gray-900 rounded-3xl"
            />
            <p className="text-sm text-gray-500 text-right">
              Caracteres: {body.length}
            </p>
          </div>
        </div>

        <button
          aria-label="Enviar formulario de consulta"
          type="submit"
          disabled={creatingMessage}
          className="flex justify-center items-center gap-x-2 px-6 py-3 bg-gray-900 text-white rounded-3xl hover:shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          <p className="inline">{creatingMessage ? "Enviando..." : "Enviar"}</p>
        </button>
      </form>
    </>
  );
}

export default Formulario;