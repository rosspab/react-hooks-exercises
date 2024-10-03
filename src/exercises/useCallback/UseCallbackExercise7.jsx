
/**
 * Ejercicio 7: Implementa un botón de reinicio con useCallback
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es implementa un botón de reinicio con usecallback.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise7() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Implementa un botón de reinicio con useCallback</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise7;
