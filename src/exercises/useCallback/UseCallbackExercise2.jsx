
/**
 * Ejercicio 2: Implementa una función que se memorizada y solo cambia con el estado
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es implementa una función que se memorizada y solo cambia con el estado.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise2() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Implementa una función que se memorizada y solo cambia con el estado</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise2;
