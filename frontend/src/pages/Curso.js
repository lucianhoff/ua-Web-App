import React, { useState } from "react";

const Curso = () => {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(true);
  const [mostrarOpiniones, setMostrarOpiniones] = useState(false);
  const [mostrarNotas, setMostrarNotas] = useState(false);
  const [mostrarRecursos, setMostrarRecursos] = useState(false);

  const colores = (x) => {
    if (x === "1") {
      setMostrarDescripcion(true);
      setMostrarOpiniones(false);
      setMostrarNotas(false);
      setMostrarRecursos(false);
    } else if (x === "2") {
      setMostrarDescripcion(false);
      setMostrarOpiniones(true);
      setMostrarNotas(false);
      setMostrarRecursos(false);
    } else if (x === "3") {
      setMostrarDescripcion(false);
      setMostrarOpiniones(false);
      setMostrarNotas(true);
      setMostrarRecursos(false);
    } else if (x === "4") {
      setMostrarDescripcion(false);
      setMostrarOpiniones(false);
      setMostrarNotas(false);
      setMostrarRecursos(true);
    } else {
      setMostrarDescripcion(false);
      setMostrarOpiniones(false);
      setMostrarNotas(false);
      setMostrarRecursos(false);
    }
  };

  return (
    <>
      <div className="w-full mt-20 vh-70 flex flex-col md:flex-row items-center">
        <iframe
          className="h-full w-full md:w-9/12"
          src="https://www.youtube.com/embed/1RHDhtbqo94"
          title="Clase"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className=" vh-70  w-full md:w-3/12">
          <h2 className="font-bold mt-2 text-center text-xl md:text-2xl lg:text-3xl font-heading text-white">
            Clases
          </h2>
          <p className="font-bold mt-5 text-center text-md md:text-xl lg:text-2xl font-heading text-white">
            {" "}
            Aprendiendo lo que es HTML
          </p>
        </div>
      </div>

      <div className="bg-purple-500 w-full h-20 flex flex-col md:flex-row ">
        <div className="flex w-full md:w-6/12 flex-col md:flex-row">
          <div
            className="bg-blue-500 flex items-center justify-center py-5 md:py-0 md:w-6/12 h-full"
            onClick={() => colores("1")}
          >
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center font-heading text-white cursor-pointer">
              Descripción general
            </h2>
          </div>

          <div
            className="bg-green-500 md:w-6/12 h-full flex items-center justify-center cursor-pointer"
            onClick={() => colores("2")}
          >
            <h2 className="font-bold text-center text-xl md:text-2xl lg:text-3xl font-heading text-white">
              Opiniones
            </h2>
          </div>
        </div>

        <div className="flex w-full md:w-6/12 flex-col md:flex-row">
          <div
            className="bg-purple-500 flex items-center justify-center  md:w-6/12 h-full cursor-pointer"
            onClick={() => colores("3")}
          >
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl font-heading text-white">
              Notas
            </h2>
          </div>

          <div
            className="bg-purple-500 md:w-6/12 h-full flex items-center justify-center cursor-pointer"
            onClick={() => colores("4")}
          >
            <h2 className="font-bold text-center text-xl md:text-2xl lg:text-3xl font-heading text-white">
              Recursos
            </h2>
          </div>
        </div>
      </div>

      {mostrarDescripcion && (
        <div className="h-full vh-70 w-full bg-blue-500">
          <span className="invisible"> a </span>
        </div>
      )}

      {mostrarOpiniones && (
        <div className="h-full vh-70 w-full bg-green-500">
          <span className="invisible"> a </span>
        </div>
      )}

      {mostrarNotas && (
        <div className="h-full vh-70 w-full bg-purple-500">
          <span className="invisible"> a </span>
        </div>
      )}

      {mostrarRecursos && (
        <div className="h-full vh-70 w-full bg-purple-500">
          <span className="invisible"> a </span>
        </div>
      )}
    </>
  );
};

export default Curso;