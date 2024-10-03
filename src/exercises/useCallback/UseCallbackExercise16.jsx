
/**
 * Ejercicio 16: Maneja un dropdown con una función memorizada
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es maneja un dropdown con una función memorizada.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise16() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Maneja un dropdown con una función memorizada</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise16;
