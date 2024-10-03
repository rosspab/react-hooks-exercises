
/**
 * Ejercicio 27: Implementa un sistema de votación con useCallback para manejar los votos
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es implementa un sistema de votación con usecallback para manejar los votos.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise27() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Implementa un sistema de votación con useCallback para manejar los votos</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise27;
