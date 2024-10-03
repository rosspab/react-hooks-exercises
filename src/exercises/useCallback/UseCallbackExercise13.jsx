
/**
 * Ejercicio 13: Usa useCallback para manejar el envío de un formulario
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es usa usecallback para manejar el envío de un formulario.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise13() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Usa useCallback para manejar el envío de un formulario</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise13;
