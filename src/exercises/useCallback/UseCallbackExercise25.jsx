
/**
 * Ejercicio 25: Usa useCallback para manejar una función de autocompletar
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es usa usecallback para manejar una función de autocompletar.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise25() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Usa useCallback para manejar una función de autocompletar</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise25;
