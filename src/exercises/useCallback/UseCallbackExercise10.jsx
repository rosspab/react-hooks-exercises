
/**
 * Ejercicio 10: Crea un buscador que utiliza useCallback para manejar las entradas
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es crea un buscador que utiliza usecallback para manejar las entradas.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise10() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Crea un buscador que utiliza useCallback para manejar las entradas</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise10;
