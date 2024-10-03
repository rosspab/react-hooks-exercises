
/**
 * Ejercicio 4: Crea un contador global utilizando useContext
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useContext.
 * - El objetivo de este ejercicio es crea un contador global utilizando usecontext.
 */

import React, { useContext, createContext } from 'react';

// Crea un contexto inicial
const ExampleContext = createContext(null);

function UseContextExercise4() {
  // TODO: Implementa el ejercicio usando useContext
  const contextValue = useContext(ExampleContext);

  return (
    <div>
      <h1>Crea un contador global utilizando useContext</h1>
      {/* Implementación aquí */}
      <p>Valor del contexto: {contextValue}</p>
    </div>
  );
}

export default UseContextExercise4;
