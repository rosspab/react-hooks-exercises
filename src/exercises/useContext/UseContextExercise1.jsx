
/**
 * Ejercicio 1: Crea un contexto simple y utiliza su valor
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useContext.
 * - El objetivo de este ejercicio es crea un contexto simple y utiliza su valor.
 */

import React, { useContext, createContext } from 'react';

// Crea un contexto inicial
const ExampleContext = createContext(null);

function UseContextExercise1() {
  // TODO: Implementa el ejercicio usando useContext
  const contextValue = useContext(ExampleContext);

  return (
    <div>
      <h1>Crea un contexto simple y utiliza su valor</h1>
      {/* Implementación aquí */}
      <p>Valor del contexto: {contextValue}</p>
    </div>
  );
}

export default UseContextExercise1;
