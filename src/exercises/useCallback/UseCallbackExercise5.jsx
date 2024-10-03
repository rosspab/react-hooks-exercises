
/**
 * Ejercicio 5: Maneja un input controlado con una función memorizada con useCallback
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es maneja un input controlado con una función memorizada con usecallback.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise5() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Maneja un input controlado con una función memorizada con useCallback</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise5;
