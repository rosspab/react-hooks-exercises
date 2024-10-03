
/**
 * Ejercicio 18: Usa useCallback para crear un componente de contador que no se vuelva a renderizar innecesariamente
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es usa usecallback para crear un componente de contador que no se vuelva a renderizar innecesariamente.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise18() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Usa useCallback para crear un componente de contador que no se vuelva a renderizar innecesariamente</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise18;
