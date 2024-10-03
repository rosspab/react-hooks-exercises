
/**
 * Ejercicio 24: Implementa un contador que se incrementa automáticamente utilizando useCallback
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es implementa un contador que se incrementa automáticamente utilizando usecallback.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise24() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Implementa un contador que se incrementa automáticamente utilizando useCallback</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise24;
