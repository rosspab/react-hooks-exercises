
/**
 * Ejercicio 30: Maneja el estado de un formulario largo utilizando useCallback
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es maneja el estado de un formulario largo utilizando usecallback.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise30() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Maneja el estado de un formulario largo utilizando useCallback</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise30;
