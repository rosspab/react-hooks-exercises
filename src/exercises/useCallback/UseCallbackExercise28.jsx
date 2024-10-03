
/**
 * Ejercicio 28: Usa useCallback para manejar el desplazamiento (scroll) en una lista
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es usa usecallback para manejar el desplazamiento (scroll) en una lista.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise28() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Usa useCallback para manejar el desplazamiento (scroll) en una lista</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise28;
