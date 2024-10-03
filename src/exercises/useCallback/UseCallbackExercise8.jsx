
/**
 * Ejercicio 8: Crea un temporizador utilizando useCallback para iniciar y detener
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es crea un temporizador utilizando usecallback para iniciar y detener.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise8() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Crea un temporizador utilizando useCallback para iniciar y detener</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise8;
