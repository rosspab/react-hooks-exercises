
/**
 * Ejercicio 4: Crea un contador con incremento y decremento utilizando useCallback
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es crea un contador con incremento y decremento utilizando usecallback.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise4() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Crea un contador con incremento y decremento utilizando useCallback</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise4;
