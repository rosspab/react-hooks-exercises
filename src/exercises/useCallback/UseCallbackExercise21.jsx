
/**
 * Ejercicio 21: Crea un temporizador que se puede pausar y reanudar utilizando useCallback
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es crea un temporizador que se puede pausar y reanudar utilizando usecallback.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise21() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Crea un temporizador que se puede pausar y reanudar utilizando useCallback</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise21;
