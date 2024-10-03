
/**
 * Ejercicio 23: Crea un contexto para gestionar la paginación de una lista
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useContext.
 * - El objetivo de este ejercicio es crea un contexto para gestionar la paginación de una lista.
 */

import React, { useContext, createContext } from 'react';

// Crea un contexto inicial
const ExampleContext = createContext(null);

function UseContextExercise23() {
  // TODO: Implementa el ejercicio usando useContext
  const contextValue = useContext(ExampleContext);

  return (
    <div>
      <h1>Crea un contexto para gestionar la paginación de una lista</h1>
      {/* Implementación aquí */}
      <p>Valor del contexto: {contextValue}</p>
    </div>
  );
}

export default UseContextExercise23;
