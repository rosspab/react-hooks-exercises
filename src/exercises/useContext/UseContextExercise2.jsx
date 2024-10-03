
/**
 * Ejercicio 2: Crea un contexto para el tema oscuro y claro
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useContext.
 * - El objetivo de este ejercicio es crea un contexto para el tema oscuro y claro.
 */

import React, { useContext, createContext } from 'react';

// Crea un contexto inicial
const ExampleContext = createContext(null);

function UseContextExercise2() {
  // TODO: Implementa el ejercicio usando useContext
  const contextValue = useContext(ExampleContext);

  return (
    <div>
      <h1>Crea un contexto para el tema oscuro y claro</h1>
      {/* Implementación aquí */}
      <p>Valor del contexto: {contextValue}</p>
    </div>
  );
}

export default UseContextExercise2;
