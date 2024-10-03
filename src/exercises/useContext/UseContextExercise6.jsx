
/**
 * Ejercicio 6: Utiliza useContext para compartir el idioma entre componentes
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useContext.
 * - El objetivo de este ejercicio es utiliza usecontext para compartir el idioma entre componentes.
 */

import React, { useContext, createContext } from 'react';

// Crea un contexto inicial
const ExampleContext = createContext(null);

function UseContextExercise6() {
  // TODO: Implementa el ejercicio usando useContext
  const contextValue = useContext(ExampleContext);

  return (
    <div>
      <h1>Utiliza useContext para compartir el idioma entre componentes</h1>
      {/* Implementación aquí */}
      <p>Valor del contexto: {contextValue}</p>
    </div>
  );
}

export default UseContextExercise6;
