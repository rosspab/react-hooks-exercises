
/**
 * Ejercicio 3: Usa useCallback para evitar la creación de funciones innecesarias
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es usa usecallback para evitar la creación de funciones innecesarias.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise3() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Usa useCallback para evitar la creación de funciones innecesarias</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise3;
