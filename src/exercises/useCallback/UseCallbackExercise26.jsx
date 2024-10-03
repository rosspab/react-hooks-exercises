
/**
 * Ejercicio 26: Crea una barra de progreso utilizando useCallback para actualizar el estado
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es crea una barra de progreso utilizando usecallback para actualizar el estado.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise26() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Crea una barra de progreso utilizando useCallback para actualizar el estado</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise26;
